import React, { Component } from 'react';

class PostGif extends Component {
    state = {  }
    render() { 
        return ( 
            <div  className="postgif-div">
                <div id="textarea" className="article-body"> <textarea placeholder="Image Caption Here" name="" id="" rows="5"></textarea> </div>
                <i className="fas fa-camera"></i>
                <input className="image-input" type="file" accept='image/gif'/>
                <div className="article-title"> <input type="text" /><span>Title</span> </div>
            </div>
         );
    }
}
 
export default PostGif;