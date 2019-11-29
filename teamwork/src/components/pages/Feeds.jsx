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
            feed: [],
            isRenderReady: false,
            authors: []
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
                    await this.fetchFeed();
                    console.log('000000000')
                    this.modifyFeed()

                }
                else {
                    this.setState({ redirect: true })
                }

            }).then(()=>{
                this.modifyFeed()
                return;
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

    }
    componentDidMount =()=>{
        

        
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

    fetchFeed = () => {
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
            .then(async(data) => {
                if (data.status === "success") {
                    await this.setState({ feed: data.data });
                    this.modifyFeed();
                }

                console.log('feed data=>', data, 'profile =>', this.state.feed);
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }

    fetchAuthor = (authorId, i) => {
        const userToken = this.state.userToken;
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/employees/${authorId}`;
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
            .then(async(data) => {
                if (data.status === "success") {
                    const newData = {
                        id: i,
                        data: data.data
                    }
                    const currentAuthorsArray = this.state.authors;
                    const newAuthorsArray = currentAuthorsArray.concat(newData);

                    await this.setState({authors: newAuthorsArray});
                    if(i==this.state.feed.length-1){
                        await this.setState({isRenderReady: true})
                    }
                }
                else {
                    return this.showHideFeedback('error', data.message);
                }
                console.log('author data=>', data);
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }

    modifyFeed = () =>{
       this.state.feed.map(async (currentFeed, i)=>{
            await this.fetchAuthor(currentFeed.authorid, i);
            
       })
    }
    render() {
            // this.modifyFeed();
       
        return (
            <React.Fragment>
                <div className="body">
                    {this.state.redirect ? <Redirect to='/admin/dashboard' /> : null}
                    <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />

                    <NavBar onPin={this.handlePin} pinned={this.state.pinned} />

                    {this.state.pinned && this.state.userId && this.state.userToken && this.state.profile && <ProfileTab userToken={this.state.userToken} userId={this.state.userId} firstname={this.state.profile.firstname} lastname={this.state.profile.lastname} email={this.state.profile.email} gender={this.state.profile.gender} address={this.state.profile.address} department={this.state.profile.department} jobRole={this.state.profile.jobrole} datetime={this.state.profile.datetime} />}

                    <PostComponent userToken={this.state.userToken} userId={this.state.userId} />
                    <br /> <br /> <br />

                    {this.state.feed[0] && this.state.isRenderReady && this.state.feed.map((currentFeed, i) => {
                        const isAuthor = this.state.userId === currentFeed.authorid;
                        console.log(this.state.authors, 'render lawa', this.state.feed.length)

                        const author = this.state.authors.filter(a=>a.id === i );
                        return <FeedsBox author={author[0].data.firstname+' '+author[0].data.lastname} isAuthor={isAuthor} title={currentFeed.title !== 'null' ? currentFeed.title : 'Untitled'} content={currentFeed.article ? currentFeed.article : currentFeed.caption} tag={currentFeed.tag} imgSrc={currentFeed.url && currentFeed.url.split('--')[0]} key={i} />


                    })}

                    {/* <FeedsBox />{/*author={author.firstname+' '+author.lastname}*/}
                    {/* <FeedsBox />
                    <FeedsBox /> */} 
                </div>
            </React.Fragment>
        );
    }
}

export default Feeds;