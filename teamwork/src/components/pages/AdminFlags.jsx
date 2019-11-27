import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import userAuth from "./../../Controllers/Auth";
import { Redirect, Link } from "react-router-dom";
import Loader from './../Loader';
import FeedBackBox from "./../FeedbackBox";
import FlaggedPost from "./../FlaggedPost";
import SelectedFlag from '../SelectedFlag';
import ConfirmBox from './../ConfirmBox';

class Dashboard extends Component {
    constructor(props) {
        super(props);


        this.state = {

            redirect: false,
            loaderVisibility: false,
            feedback: [
                'no-feedback', // type
                'Success',  // head
                "feedback"  //message
            ],
            noFlags: false,
            flaggedArticles: [],
            flaggedGifs: [],
            flaggedComments: [],
            currentPost: null
        }



    }





    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    componentWillMount() {

        const user = userAuth();
        console.log(user, 'user cookie')
        if (!userAuth());
        if (!user) return this.setState({ redirect: true });
        if (!user.data) return this.setState({ redirect: true });
        if (!user.data.token) return this.setState({ redirect: true });

        this.showLoader(true);
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/user`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.data.token
            },
        }
        console.log(user)
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                if (data.status == "success" && data.data.userType == "admin") {
                    this.showLoader(false);
                    this.showHideFeedback('success', `Admin authenticated`)
                }
                else {
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });

        this.fetchFlaggedPosts();
    }

    componentDidMount() {

    }
    handleSignOut = () => {
        userAuth('destroy');
        this.setState({ redirect: true })
    }


    showHideFeedback = (type, message) => {

        this.setState({ feedback: [type, type, message] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message] }), 1000);

    }

    fetchFlaggedPosts = () => {
        const user = userAuth();
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/posts/flags`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.data.token
            },
        }
        console.log(user)
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                console.log(data, '/[data]/')
                if (data.status == "success") {
                    this.showHideFeedback('success', 'Flags fetched');

                    this.setState({ flaggedArticles: data.data.articles, flaggedGifs: data.data.gifs, flaggedComments: data.data.comments, noFlags: false })
                }
                else {
                    this.setState({ noFlags: true })

                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }
    handleArticleSelect = (i) => {
        this.setState({ currentPost: this.state.flaggedArticles[i] });
    }
    handleGifSelect = (i) => {
        this.setState({ currentPost: this.state.flaggedGifs[i] });
    }
    handleCommentSelect = (i) => {
        this.setState({ currentPost: this.state.flaggedComments[i] });
    }
    handleDelete = (flagId) => {

        const user = userAuth();

        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/posts/flags/${flagId}`;
        const reqObj = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.data.token
            },
        }
        console.log(user)
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                if (data.status === 'error') {
                    this.showHideFeedback('error', data.message)
                }
                if (data.response) {
                    if (data.response.deletePost)
                        if (data.response.deletePost.status === 'success') {
                            this.showHideFeedback('success', data.response.deletePost.message)
                        }
                }

            }).then(()=>{
                this.fetchFlaggedPosts();
            })        

            .catch((e) => {
                this.showHideFeedback('error', e)
            });


    }
    render() {



        return (
            <div>
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                <FeedBackBox feedback={this.state.feedback} />
                {this.state.redirect ? <Redirect to='/signin' /> : null}

                <ConfirmBox text="Are you sure you want to delete this post?" redBtn="Yeah, sure!" whiteBtn="No, cancel" />
                <Logo />

                <div className="admin-dashboard-card">
                    <RandomizeBoxes />

                    <div className="icons-div">
                        <Link to='/admin/dashboard'> <i className="far fa-user"></i></Link>
                        <Link to='/admin/dashboard/create-user'> <i className="fas fa-user-plus"></i> </Link>
                        <Link to='/admin/dashboard/flags'> <i className="far fa-flag icon-active"></i> </Link>
                        <i onClick={this.handleSignOut} className="fas fa-sign-out-alt"></i>

                    </div>
                    <div className="issues-div">
                        <h3>Resolve Flags</h3>
                        {this.state.noFlags && <div className="welcome-admin">No flagged posts for now</div>}
                        {/* fetch flagged post and display list */}


                        {!this.state.noFlags && <div className="flagListHead">Articles</div>}

                        {
                            !this.state.noFlags && this.state.flaggedArticles.map((flag, i) => <FlaggedPost key={i} onDelete={() => this.handleDelete(flag.flagid)} onSelect={() => this.handleArticleSelect(i)} title={flag.title} content={flag.articlebody} tag={flag.tag} />)
                        }

                        {!this.state.noFlags && <div className="flagListHead">Gifs</div>}

                        {
                            !this.state.noFlags && this.state.flaggedGifs.map((flag, i) => <FlaggedPost key={i} onDelete={() => this.handleDelete(flag.flagid)} onSelect={() => this.handleGifSelect(i)} title={flag.title} content={flag.caption} />)
                        }
                        {!this.state.noFlags && <div className="flagListHead">Comments</div>}
                        {

                            !this.state.noFlags && this.state.flaggedComments.map((flag, i) => <FlaggedPost key={i} onDelete={() => this.handleDelete(flag.flagid)} onSelect={() => this.handleCommentSelect(i)} content={flag.commentBody} />)
                        }

                        {/* <FlaggedPost />
                        <FlaggedPost />
                        <FlaggedPost /> */}



                    </div>
                    <div className="activity-div">

                        {this.state.currentPost ? <SelectedFlag image={this.state.currentPost.imageurl} title={this.state.currentPost.title} content={this.state.currentPost.articlebody || this.state.currentPost.caption || this.state.currentPost.commentBody} date={this.state.currentPost.postdatetime} tag={this.state.currentPost.tag || 'none'} /> : <div className='nothing-hy'>Nothing here yet</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;