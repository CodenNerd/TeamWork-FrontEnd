import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';

class SignIn extends Component {

    render() {
        return (
            <div>
                <Logo/>
                <aside className="hero-aside">
                    <RandomizeBoxes />
                </aside>
            </div>
        );
    }
}

export default SignIn;