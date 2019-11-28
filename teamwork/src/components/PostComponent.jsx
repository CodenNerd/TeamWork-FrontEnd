import React, { Component } from 'react';
import PostArticle from './PostArticle';

class PostComponent extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="post-component">
            <div className="post-text">
                POST:
            </div>
            <div className="buttons-tab">
                <button className="article-btn">Article</button>
                <button className="gif-btn">Gif</button>

                <button className="publish-btn">Publish</button>
            </div>
            <div className="fields-div">
                <PostArticle />
            </div>
        </div>
     );
    }
}
 
export default PostComponent;