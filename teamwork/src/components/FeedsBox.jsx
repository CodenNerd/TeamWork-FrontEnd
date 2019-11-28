import React, { Component } from 'react';

class FeedBox extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="feed-box">
            <div className="feed-head">
            <span> <i className="fas fa-circle"></i> Atanda AbdulAzeez</span>

            <i className="fas fa-trash"></i>
            <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="feed-body">
            <h5>This is my title</h5>
            This is my stooooooriiiy, this is my soooong! or caption

            <span className="tag">tag</span>
            </div>
            {/* if there's image, put image ... and tag too*/}
            <div className="feed-image">
                <img src="https://res.cloudinary.com/codennerd/image/upload/v1574966678/xjxf9hssndneyms2jz9b.png" alt=""/>
            </div>
            <div className="feed-icons">
                <i className="far fa-heart"></i> <i className="far fa-comments"></i> <i className="fas fa-share"></i> <i className="far fa-flag"></i>            
            </div>
        </div> 
    );
    }
}
 
export default FeedBox;