import React, { Component } from 'react';

class SelectedFlag extends Component {
    state = {}
    render() {
        return (
            <div className="selected-flag">
                <div className="title">{this.props.title}</div>
               {this.props.image && <div className="image"> <img src={this.props.image.split('--')[0]} alt="Gif"/> </div>}
                <div className="content">{this.props.content}</div>
                <div className="date">{new Date(this.props.date).toDateString()}</div>
                <div className="tag">Category: {this.props.tag}</div>

            </div>
        );
    }
}

export default SelectedFlag;