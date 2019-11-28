import React, { Component } from 'react';

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.tags = [
            'Adventure',
            'Art',
            'Baby',
            'Beauty',
            'Business',
            'Craft',
            'Decorating',
            'Design',
            'DIY',
            'Education',
            'Entertainment',
            'Fashion',
            'Film',
            'Fitness',
            'Food',
            'Gaming',
            'Health',
            'HomeDecor',
            'Humor',
            'Lifestyle',
            'Makeup',
            'Marketing',
            'MensFashion',
            'Mom',
            'MoneySaving',
            'Music',
            'Outdoor',
            'Parenting',
            'PersonalFinance',
            'Pet',
            'Photography',
            'Political',
            'Relationships',
            'SelfHelp',
            'Sewing',
            'Sports',
            'Tech',
            'Travel',
            'Wedding',
            'IMPORTANT!',
            'OFFICIAL!'
        ]
        
    }
    render() {
        return (
            <div className="post-article">
                <div className="article-title"> <input value={this.props.titleValue} onChange={(e)=>this.props.onTitleChange(e)} type="text" /><span>Title</span> </div><div className="category"> {this.tags.map((tagText, i)=><span key={i} onClick={()=>this.props.onTag(tagText)} id={this.props.pickedTag===tagText? "picked": null} className={"tag"}>{tagText}</span>)}</div>
                <div className="article-body"> <textarea value={this.props.bodyValue} onChange={(e)=>this.props.onBodyChange(e)}  name="" id="" rows="5"></textarea> </div>

            </div>
        );
    }
}

export default PostArticle;