import React, { Component } from 'react';

class ConfirmBox extends Component {
    state = {  }
    render() { 
        return (
            <div className="confirm-overlay">
            <div>
                {this.props.text}
                <div className="btn-div"><button>{this.props.redBtn}</button> <button>{this.props.whiteBtn}</button></div>
            </div>
            </div> 
         );
    }
}
 
export default ConfirmBox;