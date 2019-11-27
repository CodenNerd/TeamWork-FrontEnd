import React, { Component } from 'react';

class ConfirmBox extends Component {
    state = {  }
    render() { 
        return (
            <div className="confirm-overlay">
            <div>
                {this.props.text}
                <div className="btn-div"><button onClick={this.props.onRedBtn}>{this.props.redBtn}</button> <button onClick={this.props.onWhiteBtn}>{this.props.whiteBtn}</button></div>
            </div>
            </div> 
         );
    }
}
 
export default ConfirmBox;