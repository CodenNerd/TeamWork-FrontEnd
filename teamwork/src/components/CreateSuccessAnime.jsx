import React, { Component } from 'react';
let canvas;
        let c;

        let x;
        let y;
        let i;
        let loopTwoInterval;
        let loopOneInterval;

class Anime extends Component {


    componentDidMount() {
        
        canvas = this.refs.canvas;

        canvas.height = 250;
        c = canvas.getContext("2d");

        x = 100;
        y = 130;
        i = 0;

        c.beginPath();
        c.strokeStyle = "green";
        c.lineWidth = "2";
        c.lineCap = "round";
        loopOneInterval = setInterval(this.loopOne, 1);



    }
    loopOne = () => {
        c.beginPath();
        i += 0.01;
        if (i >= 1.8) {
            loopTwoInterval = setInterval(this.loopTwo, 1);
            clearInterval(loopOneInterval);
            return;
        }
        c.clearRect(0, 0, c.canvas.width, c.canvas.height);
        c.arc(140, 140, 70, 0, i * Math.PI, false);
        c.stroke();
    };
    loopTwo = () => {
        i = 1.8;
        if (x <= 120 && y <= 160) {
            c.moveTo(100, 130);
            x++;
            y += 1.5;
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            c.lineTo(x, y);
            c.stroke();
        }
        if (x > 120 && x < 125) {
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            c.moveTo(100, 130);
            c.lineTo(120, 160);
            c.moveTo(120, 160);
            x++;

            c.lineTo(x, y);
            c.stroke();
        }
        if (x >= 125 && x < 240) {
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);
            c.moveTo(100, 130);
            c.lineTo(120, 160);
            c.moveTo(120, 160);
            c.lineTo(125, 160);
            c.moveTo(125, 160);
            x += 1.916666666666667;
            y--;
            c.lineTo(x, y);
            c.stroke();
        }
        if (x >= 240 || y <= 100) {
            c.clearRect(0, 0, c.canvas.width, c.canvas.height);

            c.moveTo(100, 130);
            c.lineTo(120, 160);
            c.moveTo(120, 160);
            c.lineTo(125, 160);
            c.moveTo(125, 160);
            c.lineTo(240, 100);
            c.stroke();

            c.beginPath();
            c.arc(140, 140, 70, 0, i * Math.PI, false);
            c.stroke();

            c.beginPath();

            c.font = "20px Century Gothic";
            c.fillStyle = "green";
            c.fillText("Created Successfully!", 50, 240);

            clearInterval(loopTwoInterval);
            return;
        }

        c.beginPath();
        c.arc(140, 140, 70, 0, i * Math.PI, false);
        c.stroke();
    };
    render() {

        return (
            <canvas ref="canvas" className={this.props.className}>


            </canvas>
        );
    }
}

export default Anime;
