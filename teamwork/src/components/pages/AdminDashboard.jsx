import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import userAuth from "./../../Controllers/Auth";
import { Redirect, Link } from "react-router-dom";
import Loader from './../Loader';
import FeedBackBox from "./../FeedbackBox";

class Dashboard extends Component {
    constructor(props) {
        super(props);
       

        this.state = {
            
            redirect: false,
            loaderVisibility: false,
            feedback:[
                'no-feedback', // type
                'Success',  // head
                "feedback"  //message
        ]

        }
        


    }

   
   


    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    componentWillMount() {
        
        const user = userAuth();
        console.log(user, 'user cookie')
        if (!userAuth()) ;
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
                if (data.status == "success" && data.data.userType == "admin") {
                    this.showLoader(false);
                    this.showHideFeedback('success', `Admin authenticated`)
                }
                else {
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }
    handleSignOut = () =>{
        userAuth('destroy');
        this.setState({ redirect: true })
    }


    showHideFeedback = (type, message) =>{
        
        this.setState({ feedback: [type, type, message ] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message]}), 1000);
        
    }

    render() {

        

        return (
            <div>
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                <FeedBackBox feedback={this.state.feedback}/>
                {this.state.redirect ? <Redirect to='/signin' /> : null}
                <Logo />

                <div className="admin-dashboard-card">
                    <RandomizeBoxes />

                    <div className="icons-div">
                       <Link to='/admin/dashboard'> <i className="far fa-user icon-active"></i></Link>
                       <Link to='/admin/dashboard/create-user'> <i className="fas fa-user-plus"></i> </Link>
                       <Link to='/admin/dashboard/flags'> <i className="far fa-flag"></i> </Link>
                        <i onClick={this.handleSignOut} className="fas fa-sign-out-alt"></i>

                    </div>
                    <div className="issues-div">
                       <div className="welcome-admin">Welcome Admin</div>
                    </div>
                    <div className="activity-div">
                        <div className='nothing-hy'>Nothing here yet</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;