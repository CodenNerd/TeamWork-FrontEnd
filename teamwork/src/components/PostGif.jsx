import React, { Component } from 'react';

class PostGif extends Component {
    state = {  }
    render() { 
        return ( 
            <div  className="postgif-div">
                <div id="textarea" className="article-body"> <textarea value={this.props.captionValue} onChange={(e)=>this.props.onCaptionChange(e)} placeholder="Image Caption Here" name="" id="" rows="5"></textarea> </div>
                <i className="fas fa-camera"></i>
                <input value={this.props.gifImageValue} onChange={(e)=>this.props.onImageChange(e)} className="image-input" type="file" accept='image/gif'/>
                <div className="article-title"> <input value={this.props.titleValue} onChange={(e)=>this.props.onTitleChange(e)} type="text" /><span>Title</span> </div>
            </div>
         );
    }
}
 
export default PostGif;