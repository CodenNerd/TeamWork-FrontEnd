import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import './../css/signin.css';

class SignIn extends Component {

    render() {
        return (
            <div>
                <Logo/>
                <aside className="hero-aside">
                    <RandomizeBoxes />

                    <h1 className="signin-text">Sign In</h1>
                </aside>
            </div>
        );
    }
}

export default SignIn;