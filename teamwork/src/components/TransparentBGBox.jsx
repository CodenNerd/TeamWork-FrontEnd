import React, { Component } from 'react';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: {
                position: `absolute`,
                top: this.props.top,
                left: this.props.left,
                width: this.props.widthHeight,
                height: this.props.widthHeight,
                
            }
        }


        
    }


    render() {
        return (

            < div className='transparent-bg-box' style={this.state.styles} >

            </div >
        );
    }
}

export default Index;