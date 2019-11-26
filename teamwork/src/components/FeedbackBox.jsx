import React, { Component } from 'react';

class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={this.props.feedback[0]}>
                <h4>{this.props.feedback[1]}</h4>
                <span>{this.props.feedback[2]}</span>
            </div>
         );
    }
}
 
export default Box;