import React, { Component } from 'react';
import PostArticle from './PostArticle';
import PostGif from './PostGif';

class PostComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: 'article',
            titleValue: null,
            bodyValue: null,
            textTag: null
        }
    }

    handleTag = (text) =>{
        console.log(text,'///')
        this.setState({textTag: text});
        console.log(this.state);
    }
    handleBodyChange = (event) =>{
        this.setState({bodyValue: event.target.value});
        console.log(this.state);
    }
    handleTitleChange =  (event) =>{
        this.setState({titleValue: event.target.value});
        console.log(this.state.titleValue,'[][][][]', this.state.bodyValue);
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
                    {this.state.active==='article' && <PostArticle onBodyChange={(e)=>this.handleBodyChange(e)} onTitleChange={(e)=>this.handleTitleChange(e)} pickedTag={this.state.textTag} onTag={(text)=>this.handleTag(text)} titleValue={this.state.titleValue} bodyValue={this.state.bodyValue} />}
                    {this.state.active==='gif' && <PostGif />}
                </div>
            </div>
        );
    }
}

export default PostComponent;