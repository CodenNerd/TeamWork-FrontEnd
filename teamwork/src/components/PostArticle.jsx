import React, { Component } from 'react';

class PostArticle extends Component {
    state = {}
    render() {
        return (
            <div className="post-article">
                <div className="article-title"> <input type="text" /><span>Title</span> </div><div className="category"> <span className="tag"></span></div>
                <div className="article-body"> <textarea name="" id="" rows="5"></textarea> </div>

            </div>
        );
    }
}

export default PostArticle;