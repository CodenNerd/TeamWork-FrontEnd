import React, { Component } from 'react';
import SignInInput from './SignInInput';
import Helper from "./../Controllers/Helper";
import Loader from './Loader';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: this.props,
            loaderVisibility: false
        }
        this.emailField = React.createRef();
        this.passField = React.createRef();
        this.submitSignIn = async function submitSignIn(credentials) {
            await this.showLoader(true);

            await Helper.fetchPostRequest('http://teamwork4andela.herokuapp.com/api/v1/auth/signin', credentials);

           await this.showLoader(false);
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
            return alert('Wrong credentials provided');
        }

        // check email validity
        if (!(/\S+@\S+\.\S+/.test(email.value))) {
            this.emailField.current.setInputState(`* Enter a valid email`);
            return alert('Wrong credentials provided');
        }
        // if valid - call submit method

        console.log({ "email": email.value, "password": password.value })
        this.submitSignIn({ "email": email.value, "password": password.value });

        return;
    }
    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }


    render() {
        return (
            <React.Fragment>
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