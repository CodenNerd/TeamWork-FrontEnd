import React, { Component } from 'react';
import Logo from '../teamwork-logo-grey';
import HeroPhoneChat from './../images/hero-phone-chat.gif';
import LoginButton from '../LoginButton';
import RoundedBox from '../RoundedBox';
import TransparentBGBox from '../TransparentBGBox';

class Index extends Component {

    constructor(props) {
        super(props);

         this.boxes = [];
        this.randomizeBoxes = () => {

            for (let i = 0; i < 10; i++) {
                let randomNum = Math.round(Math.random() * 600) + 'px';
                let randomNum2 = Math.round(Math.random() * 600) + 'px';
                let randWidthHeight = Math.round(Math.random() * 100) + 'px';
                let transparentBGBox = <TransparentBGBox top={randomNum} left={randomNum2} widthHeight={randWidthHeight} />
                this.boxes.push(transparentBGBox);
                
            }
            console.log(this.boxes)

        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Logo />

                    <aside className="hero-aside">
                    {this.randomizeBoxes()}
                        {this.boxes}
                        <LoginButton />
                        <RoundedBox text='Write articles... Share Gifs... Have Fun!' icon='fas fa-pen' />
                        
                        

                    </aside>

                    <aside>

                        <img className='hero-phone-chat' src={HeroPhoneChat} alt="Hero Phone Chat" />
                    </aside>

                </div>
            </React.Fragment>
        );
    }
}

export default Index;