import React, { Component } from 'react';
import TransparentBGBox from './TransparentBGBox';

class SignInBtn extends Component {
    constructor(props) {
        super(props);

        this.boxes = [];
        this.randomizeBoxes = () => {

            for (let i = 0; i < 20; i++) {
                let randomNum = Math.round(Math.random() * 600) + 'px';
                let randomNum2 = Math.round(Math.random() * 800) + 'px';
                let randWidthHeight = Math.round(Math.random() * 100) + 'px';
                let transparentBGBox = <TransparentBGBox key={i} top={randomNum} left={randomNum2} widthHeight={randWidthHeight} />
                this.boxes.push(transparentBGBox);

            }

        }
        this.randomizeBoxes()
    }

    render() {
        return (

            this.boxes
        );
    }
}

export default SignInBtn;