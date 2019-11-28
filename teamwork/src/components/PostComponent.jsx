import React, { Component } from 'react';
import PostArticle from './PostArticle';
import PostGif from './PostGif';

class PostComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: 'article'
        }
    }

    render() {
        return (
            <div className="post-component">
                <div className="post-text">
                    POST:
            </div>
                <div className="buttons-tab">
                    <button onClick={()=>this.setState({active: 'article'})} id={this.state.active === 'article' ? 'post-active' : null} className="article-btn">Article</button>
                    <button onClick={()=>this.setState({active: 'gif'})} id={this.state.active === 'gif' ? 'post-active' : null} className="gif-btn">Gif</button>

                    <button className="publish-btn">Publish</button>
                </div>
                <div className="fields-div">
                    {this.state.active==='article' && <PostArticle />}
                    {this.state.active==='gif' && <PostGif />}
                </div>
            </div>
        );
    }
}

export default PostComponent;