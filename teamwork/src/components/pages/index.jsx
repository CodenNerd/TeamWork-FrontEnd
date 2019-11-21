import React, { Component } from 'react';
import Logo from '../teamwork-logo-grey';
import HeroPhoneChat from './../images/hero-phone-chat.gif';
import LoginButton from '../LoginButton';
import UnDrawSVG from '../UnDrawSVG';
import RoundedBox from '../RoundedBox';
import TransparentBGBox from '../TransparentBGBox';
import articlesUndraw from './../images/articles-undraw.png';
import gifUndraw from './../images/gif-undraw.png';
import purpleChatsUndraw from './../images/purple-chats-undraw.png';
import DummyArticleLine from './../DummyArticleLine';
import TeamworkSVG from './../TeamworkSVG';
import DummyToggle from './../DummyToggles';

class Index extends Component {

    constructor(props) {
        super(props);

        this.boxes = [];
        this.randomizeBoxes = () => {

            for (let i = 0; i < 20; i++) {
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
                        <br /><br /><br /><br />
                        <TeamworkSVG />
                        <DummyToggle />
                        <div className='dummylines-container'>
                            <DummyArticleLine width={'100%'} opacity={'1'} />
                            <DummyArticleLine width={'100%'} opacity={'0.9'} />
                            <DummyArticleLine width={'15%'} opacity={'0.8'} />
                            <DummyArticleLine width={'100%'} opacity={'0'} />
                            <DummyArticleLine width={'100%'} opacity={'0.6'} />
                            <DummyArticleLine width={'100%'} opacity={'0.5'} />
                            <DummyArticleLine width={'50%'} opacity={'0.4'} />
                            <DummyArticleLine width={'100%'} opacity={'0'} />
                            <DummyArticleLine width={'100%'} opacity={'0.2'} />
                            <DummyArticleLine width={'100%'} opacity={'0.1'} />
                        </div>
                        <br /><br /><br /><br />
                        <div className="undraw-rounded">
                            <UnDrawSVG src={articlesUndraw} /><RoundedBox text='Write Articles. Share Gifs. Chat. Have Fun!' />
                        </div>
                    </aside>
                    <aside className="phone-aside">
                        <img className='hero-phone-chat' src={HeroPhoneChat} alt="Hero Phone Chat" />
                        <footer>Teamwork &copy; 2019</footer>
                    </aside>
                </div>
            </React.Fragment>
        );
    }
}

export default Index;