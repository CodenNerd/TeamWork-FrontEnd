import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import CreateUserInput from './../createUserInput';
import CreateSuccessAnime from './../CreateSuccessAnime';
import NewUserDetails from './../NewUserDetails';
import userAuth from "./../../Controllers/Auth";
import { Redirect } from "react-router-dom";
import Loader from './../Loader';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nothinghy: false,
            successCanvas: false,
            newUserDetails: true,
            details: {

            },
            passwordHidden: true,
            redirect: false,
            loaderVisibility: false,

        }
    }

    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    componentWillMount() {
        //
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
                    this.showLoader(false)
                }
                else {
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                console.log(e);
            });
    }
    handleSignOut = () =>{
        userAuth('destroy');
        this.setState({ redirect: true })
    }

    handleEyeClick = () => {
        return this.setState({ passwordHidden: !this.state.passwordHidden });
    }

    render() {
        return (
            <div>
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />

                {this.state.redirect ? <Redirect to='/signin' /> : null}
                <Logo />

                <div className="admin-dashboard-card">
                    <RandomizeBoxes />

                    <div className="icons-div">
                        <i className="far fa-user"></i>
                        <i className="fas fa-user-plus icon-active"></i>
                        <i className="far fa-flag"></i>
                        <i onClick={this.handleSignOut} className="fas fa-sign-out-alt"></i>

                    </div>
                    <div className="issues-div">
                        <button className="create-btn">Create +</button><h3>Create User</h3>
                        <CreateUserInput id="firstname" type="text" label="Firstname" width="41.5%" />
                        <CreateUserInput id="lastname" type="text" label="Lastname" width="41.5%" />
                        <CreateUserInput id="email" type="text" label="Email" width="140%" />
                        <CreateUserInput id="password" type="password" label="Password" width="41.5%" />
                        <CreateUserInput id="passwordAgain" type="password" label="Password Again" width="41.5%" />
                        <CreateUserInput name="gender" id="male" type="radio" label="Male" width="5%" />
                        <CreateUserInput name="gender" id="female" type="radio" label="Female" width="5%" />
                        <CreateUserInput divId="jr-div" id="jobRole" type="text" label="Job Role" width="60%" />
                        <CreateUserInput id="department" type="text" label="Department" width="140%" />
                        <CreateUserInput id="address" type="text" label="Address" width="140%" />


                    </div>
                    <div className="activity-div">
                        <div className={this.state.nothinghy ? 'nothing-hy' : 'hidden'}>Nothing here yet</div>

                        <CreateSuccessAnime className={this.state.successCanvas ? 'success-canvas' : 'hidden'} />

                        <NewUserDetails className={this.state.newUserDetails ? 'nu-details' : 'hidden'} details={this.state.details} onClick={this.handleEyeClick} eye={this.state.passwordHidden ? 'far fa-eye' : 'far fa-eye-slash'} />
                        {/* // Display Success Anime
                                // Display New User's Details */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;