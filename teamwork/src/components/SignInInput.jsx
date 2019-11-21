import React, { Component } from 'react';

class Input extends Component {
    state = {}
    render() {
        return (
            <div className="signin-input">
                <input type="text" name={this.props.name} autoComplete="off" required/>
                <label htmlFor={this.props.name} >
                    <span> {this.props.content} </span>
                </label>
            </div>
        );
    }
}

export default Input;