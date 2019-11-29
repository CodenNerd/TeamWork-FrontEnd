import React, { Component } from 'react';

class FeedBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="feed-box">
            <div className="feed-head">
            <span> <i className="fas fa-circle"></i> {this.props.author}</span>

           {this.props.isAuthor && ( <i className="fas fa-trash"></i>) }
        {this.props.isAuthor &&  <i className="fas fa-pencil-alt"></i> }
            </div>
            <div className="feed-body">
            <h5>{this.props.title}</h5>
            {this.props.content}

           
            </div>
            {/* if there's image, put image ... and tag too*/}
           { this.props.imgSrc && <div className="feed-image">
                <img src={this.props.imgSrc} alt="GIF"/>
            </div>}
            <div className="feed-icons">
                <i className="far fa-heart"></i> <i className="far fa-comments"></i> <i className="fas fa-share"></i> <i className="far fa-flag"></i>            
           {this.props.tag && <span className="tag">{this.props.tag}</span>} 
           </div>
        </div> 
    );
    }
}
 
export default FeedBox;