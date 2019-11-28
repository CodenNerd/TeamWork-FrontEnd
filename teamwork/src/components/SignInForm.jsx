import React, { Component } from 'react';
import SignInInput from './SignInInput';
import Loader from './Loader';
import FeedBackBox from './FeedbackBox';
import userAuth from './../Controllers/Auth';
import { Redirect } from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderVisibility: false,
            feedback: [
                'no-feedback', //type
                'Success', //head
                "feedback" //message
            ],
            redirect: false,
            user: null
        }
        this.emailField = React.createRef();
        this.passField = React.createRef();

    }
    componentWillMount(){
        const user = userAuth();
    if(user){
       if (user.data) {
           if (user.data.token) this.setState({redirect: true, user: "employee"})
       }
    }
}

    handleClick = () => {
        //ref inputs for state
        const email = this.emailField.current.getInputState();
        const password = this.passField.current.getInputState();

        console.log(email, password);

        if (email.value.length < 5 && password.value.length < 5) {
            this.emailField.current.setInputState(`* Invalid input`);
            this.passField.current.setInputState(`* Invalid input`);
            return;
        } else if (email.value < 5) {
            return this.emailField.current.setInputState(`* Invalid input`);
        } else if (password.value < 5) {
            return this.passField.current.setInputState(`* Invalid input`);
        } else {

        }

        // check that feedback is null
        if (email.feedback !== null || password.feedback !== null) {
            this.setState({ feedback: ['error', 'error', 'Wrong credentials provided' ] })
        setTimeout(h => this.setState({ feedback: [`error slide-out`, 'error', 'Wrong credentials provided' ] }), 1000);
        
            return ;
        }

        // check email validity
        if (!(/\S+@\S+\.\S+/.test(email.value))) {
            this.emailField.current.setInputState(`* Enter a valid email`);
            this.setState({ feedback: ['error', 'error', 'Wrong credentials provided' ] })
            setTimeout(h => this.setState({ feedback: [`error slide-out`, 'error', 'Wrong credentials provided' ] }), 1000);
            

            return ;
        }
        // if valid - call submit method

        console.log({ "email": email.value, "password": password.value })
        this.submitSignIn({ "email": email.value, "password": password.value });

        return;
    }
    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }
    showHideFeedback = (data) => {
        const {status} = data;
        const message = data.data ? data.data.message : data.message;
        this.setState({ feedback: [status, status, message ] })
        setTimeout(h => this.setState({ feedback: [`${status} slide-out`, status, message ] }), 1000);
        

        if (status==="success"){ 
            userAuth(data);
            setTimeout(a=>this.setState({redirect: true, user: "employee"}), 2000); // or employee
        }else{
            return;
        };
    }
    submitSignIn = (credentials) => {
        this.showLoader(true);
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/auth/signin`;
        const reqObj = {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(credentials) // body data type must match "Content-Type" header
        }

        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
               setTimeout(h => this.showLoader(false), 1000);

               return data
                
            }).then((info)=>{
                console.log('info:', info)
                this.showHideFeedback(info);
                


            })
            .catch((e) => {
                setTimeout(h => this.showLoader(false), 1000);
                this.showHideFeedback(e);
              
                console.log(e);
            });

    }

    render() {
        return (
            <React.Fragment>
                {this.state.redirect && this.state.user==="employee"? <Redirect to="/feed" />: null }
                {/* null should redirect to employee page */}
                <FeedBackBox feedback={this.state.feedback} />
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                <form onSubmit={e => e.preventDefault()}>
                    <SignInInput ref={this.emailField} hidden={false} name="si-email" content="Email" maxLength="35" />
                    <SignInInput ref={this.passField} hidden={true} name="si-password" content="Password" maxLength="20" icon="far fa-eye" iconInv="far fa-eye-slash" />
                    <button onClick={this.handleClick} className="si-btn">Sign In</button>
                </form>
            </React.Fragment>

        );
    }
}

export default Form;