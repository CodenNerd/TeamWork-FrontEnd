import React, { Component } from 'react';
import NavBar from './../NavBar';
import ProfileTab from './../ProfileTab';
import FeedsBox from './../FeedsBox';
import userAuth from "./../../Controllers/Auth";
import { Redirect } from "react-router-dom";
import Loader from "./../Loader";
import PostComponent from './../PostComponent';

class Feeds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: [],
            loaderVisibility: true,
            pinned: true,
            userId: null,
            userToken: null,
            profile: null,
            feed: []
        }
    }

    componentWillMount() {

        const user = userAuth();
        console.log(user, 'user cookie')
        if (!userAuth());
        if (!user) return this.setState({ redirect: true });
        if (!user.data) return this.setState({ redirect: true });
        if (!user.data.token) return this.setState({ redirect: true });

        this.showLoader(true);
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/user`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.data.token
            },
        }
        console.log(user)
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then(async (data) => {
                if (data.status == "success" && data.data.userType == "employee") {
                    this.showLoader(false);
                    this.showHideFeedback('success', `Employee authenticated`)
                    await this.setState({ userId: data.data.userId, userToken: user.data.token })
                    this.fetchUserProfile();
                    this.fetchFeed();
                }
                else {
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

    }

    componentDidMount = () =>{
        
    }
    fetchUserProfile = () => {

        const userId = this.state.userId;
        const userToken = this.state.userToken;

        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/employees/${userId}`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': userToken
            },
        }
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                if (data.status === "success") {
                    this.setState({ profile: data.data })
                }

                console.log('data=>', data, 'profile =>', this.state.profile);
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

    }
    showHideFeedback = (type, message) => {

        this.setState({ feedback: [type, type, message] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message] }), 1000);

    }
    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }
    handlePin = () => {
        return this.setState({ pinned: !this.state.pinned })
    }

    fetchFeed = () =>{
        const userToken = this.state.userToken;

        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/feed`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': userToken
            },
        }
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                if (data.status === "success") {
                    this.setState({ feed: data.data })
                }

                console.log('feed data=>', data, 'profile =>', this.state.feed);
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }
    render() {
        return (
            <React.Fragment>
                <div className="body">
                {this.state.redirect ? <Redirect to='/admin/dashboard' /> : null}
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                
                <NavBar onPin={this.handlePin} pinned={this.state.pinned} />
                   
                {this.state.pinned && this.state.userId && this.state.userToken && this.state.profile && <ProfileTab userToken={this.state.userToken} userId={this.state.userId} firstname={this.state.profile.firstname} lastname={this.state.profile.lastname} email={this.state.profile.email} gender={this.state.profile.gender} address={this.state.profile.address} department={this.state.profile.department} jobRole={this.state.profile.jobrole} datetime={this.state.profile.datetime} />}
                
                <PostComponent userToken={this.state.userToken} userId={this.state.userId}  />
                <br/> <br/> <br/>


                <FeedsBox />
                <FeedsBox />
                <FeedsBox />
                <FeedsBox />
                </div>
            </React.Fragment>
        );
    }
}

export default Feeds;