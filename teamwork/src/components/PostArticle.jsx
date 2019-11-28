import React, { Component } from 'react';

class PostArticle extends Component {
    constructor(props) {
        super(props);
        this.tag = [
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
        this.state = {

        }
    }
    render() {
        return (
            <div className="post-article">
                <div className="article-title"> <input type="text" /><span>Title</span> </div><div className="category"> {this.tag.map((tagText, i)=><span key={i} onClick={(tagText)=>this.props.onTag(tagText)} className="tag">{tagText}</span>)}</div>
                <div className="article-body"> <textarea name="" id="" rows="5"></textarea> </div>

            </div>
        );
    }
}

export default PostArticle;