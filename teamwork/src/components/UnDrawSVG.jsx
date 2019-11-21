import React, { Component } from 'react';


class unDrawSVG extends Component {
    constructor(props){
        super(props);
        this.state={
            src: this.props.src
        }
    }

    render() {
        return (
            <div className='undraw'>
                <img src={this.state.src} alt="ddd"/>

                {console.log(this)}
            </div>
        );
    }
}

export default unDrawSVG;