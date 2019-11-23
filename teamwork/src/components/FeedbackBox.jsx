import React, { Component } from 'react';

class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={this.props.feedback.type}>
                <h4>{this.props.feedback.head}</h4>
                <span>{this.props.feedback.message}</span>
            </div>
         );
    }
}
 
export default Box;