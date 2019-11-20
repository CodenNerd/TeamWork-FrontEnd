import React, { Component } from 'react';
import Logo from '../teamwork-logo-grey';
import HeroPhoneChat from './../images/hero-phone-chat.gif';
import LoginButton from '../LoginButton';
class Index extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <Logo />
                    <aside class='hero-aside'>
                        <LoginButton />

                    </aside>
                    <aside>

                        <img class='hero-phone-chat' src={HeroPhoneChat} alt="Hero Phone Chat" />
                    </aside>

                </div>
            </React.Fragment>
        );
    }
}

export default Index;