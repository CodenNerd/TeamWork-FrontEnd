import React, { Component } from 'react';

class Input extends Component {
    state = {}
    render() {
        const style = {
            width: this.props.width
        }

        return (
            <div className="c-input-div" style={style} id={this.props.divId}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input name={this.props.name} id={this.props.id} type={this.props.type} autoComplete="off" />
            </div>
        );
    }
}

export default Input;