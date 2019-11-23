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
                
                <aside className="hero-aside">
                    <RandomizeBoxes />
                    
                    <h1 className="signin-text">Sign In</h1>

                    <SignInForm />
                </aside>
                <aside className="phone-aside">
                        <img className='hero-phone-chat' src={SignInUndraw} alt="Hero Phone Chat" />
                        <footer>Teamwork &copy; 2019</footer>
                    </aside>
            </div>
        );
    }
}

export default SignIn;