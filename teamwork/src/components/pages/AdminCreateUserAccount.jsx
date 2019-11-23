import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import './../css/signin.css';
import SignInForm from './../SignInForm'
import SignInUndraw from './../images/signin-undraw.png'

class SignIn extends Component {

    render() {
        return (
            <div>
                <Logo />
                
                <div className="admin-dashboard-card">
                    <RandomizeBoxes />
                    
                    <div className="icons-div">
                        <i className="far fa-user"></i>
                        <i className="fas fa-user-plus icon-active"></i>
                        <i className="far fa-flag"></i>
                        
                    </div>
                    <div className="issues-div">
                        <h3>Create User</h3>
                    </div>
                    <div className="activity-div">
                    
                    </div>
                </div>
               </div>
        );
    }
}

export default SignIn;