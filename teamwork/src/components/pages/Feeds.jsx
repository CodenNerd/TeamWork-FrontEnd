import React, { Component } from 'react';
import NavBar from './../NavBar';
import ProfileTab from './../ProfileTab';
import FeedsBox from './../FeedsBox';
import userAuth from "./../../Controllers/Auth";
import { Redirect } from "react-router-dom";
import Loader from "./../Loader";

class Feeds extends Component {
    constructor(props){
        super(props);

        this.state = {
            feedback: [],
            loaderVisibility: true
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
            .then((data) => {
                if (data.status == "success" && data.data.userType == "employee") {
                    this.showLoader(false);
                    this.showHideFeedback('success', `Employee authenticated`)
                }
                else{
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

    }

    showHideFeedback = (type, message) =>{
        
        this.setState({ feedback: [type, type, message ] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message]}), 1000);
        
    }
    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    render() { 
        return ( 
            <React.Fragment>
                 {this.state.redirect ? <Redirect to='/admin/dashboard' /> : null}

                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />


                {/* 
                    - verify user
                    - tweak sign in to redirect here first
                    - design NAvBar
                */}
                <NavBar />
                <ProfileTab />
                <FeedsBox />
            </React.Fragment>
         );
    }
}
 
export default Feeds;