import React, { Component } from 'react';

class Post extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flagged-post" onClick={this.props.onSelect}>
                <div className="text-content">
                    <h5>{this.props.title} </h5>
                    <p>
                    {this.props.content}
                    </p>
                </div>
                <div className="icons">
                    <span className="tag">{this.props.tag}</span>
                    
                    <i onClick={this.props.onDelete} className="far fa-trash-alt"></i>
                    <i onClick={this.props.onAllow} className="fas fa-check"></i>
                </div>
            </div>
         );
    }
}
 
export default Post;