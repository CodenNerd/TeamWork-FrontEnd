import React, { Component } from 'react';
import PostArticle from './PostArticle';
import PostGif from './PostGif';
import Loader from './Loader';
import FeedBackBox from './FeedbackBox';

class PostComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'article',
            titleValue: null,
            bodyValue: null,
            textTag: null,
            feedback: [],
            loaderVisibility: false,
            feedback: [
                'no-feedback', // type
                'Success',  // head
                "feedback"  //message
            ],
            gifTitleValue: null,
            gifImageValue: null,
            captionValue: null
        }
    }

    handleTag = (text) => {
        console.log(text, '///')
        this.setState({ textTag: text });
        console.log(this.state);
    }
    handleBodyChange = (event) => {
        this.setState({ bodyValue: event.target.value });
        console.log(this.state);
    }
    handleTitleChange = (event) => {
        this.setState({ titleValue: event.target.value });
        console.log(this.state.titleValue, '[][][][]', this.state.bodyValue);
    }
    makePost = (reqObj, endpoint) => {


        this.showLoader(true);

        fetch(endpoint, reqObj)
            .then(response => response.json())
            .then(async (data) => {
                if (data.status === "success") {
                    this.showHideFeedback('success', 'You just made a new post')
                    console.log(data);
        
                } else {
                    this.showHideFeedback('error', data.message);
                    console.log(data);
                }
                this.showLoader(false);
            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

    }
    showHideFeedback = (type, message) => {

        this.setState({ feedback: [type, type, message] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message] }), 1000);

    }
    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    handlePublish = () => {
        const userToken = this.props.userToken;

        let credentials;
        if (this.state.active === "article") {
            credentials = {
                title: this.state.titleValue,
                content: this.state.bodyValue,
                tag: this.state.textTag
            }
            const endpoint = `https://teamwork4andela.herokuapp.com/api/v1/articles`
            const reqObj = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': userToken
                },
                body: JSON.stringify(credentials)
            }
            this.makePost(reqObj, endpoint)
        }
        else if (this.state.active === "gif") {


            if(!this.state.gifImageValue){
                this.showHideFeedback('error', 'Select an image');
                return;
            }
            let endpoint = `https://teamwork4andela.herokuapp.com/api/v1/gifs`
            let form_data = new FormData();
            form_data.append('image', this.state.gifImageValue, this.state.gifImageValue.name);
            form_data.append('title', this.state.gifTitleValue);
            form_data.append('caption', this.state.captionValue);
            let headers = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'enctype': 'multipart/form-data',
                    'x-access-token': userToken
                },
                body: form_data
            }
            console.log(form_data, '...>');
            this.makePost(headers, endpoint)


        }
        else {
            return;
        }
    }

    handleGifTitleChange = (event) => {
        this.setState({ gifTitleValue: event.target.value });
    }
    handleGifCaptionChange = (event) => {
        this.setState({ captionValue: event.target.value });
    }
    handleImageChange = (event) => {
        this.setState({ gifImageValue: event.target.files[0] });
    }

    render() {
        return (
            <React.Fragment>
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                <FeedBackBox feedback={this.state.feedback} />
                <div className="post-component">

                    <div className="post-text">
                        POST:
            </div>
                    <div className="buttons-tab">
                        <button onClick={() => this.setState({ active: 'article' })} id={this.state.active === 'article' ? 'post-active' : null} className="article-btn">Article</button>
                        <button onClick={() => this.setState({ active: 'gif' })} id={this.state.active === 'gif' ? 'post-active' : null} className="gif-btn">Gif</button>

                        <button onClick={this.handlePublish} className="publish-btn">Publish</button>
                    </div>
                    <div className="fields-div">
                        {this.state.active === 'article' && <PostArticle onBodyChange={(e) => this.handleBodyChange(e)} onTitleChange={(e) => this.handleTitleChange(e)} pickedTag={this.state.textTag} onTag={(text) => this.handleTag(text)} titleValue={this.state.titleValue} bodyValue={this.state.bodyValue} />}
                        {this.state.active === 'gif' && <PostGif onImageChange={(e) => this.handleImageChange(e)} onTitleChange={(e) => this.handleGifTitleChange(e)} onCaptionChange={(e) => this.handleGifCaptionChange(e)} captionValue={this.state.captionValue} titleValue={this.state.gifTitleValue} imageValue={this.state.gifImageValue} />}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PostComponent;