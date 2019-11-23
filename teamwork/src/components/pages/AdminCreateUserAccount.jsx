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
                    
                    </div>
                    <div className="issues-div">
                    
                    </div>
                    <div className="activity-div">
                    
                    </div>
                </div>
               
            </div>
        );
    }
}

export default SignIn;