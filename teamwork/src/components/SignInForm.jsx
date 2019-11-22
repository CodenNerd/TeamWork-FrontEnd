import React, { Component } from 'react';
import SignInInput from './SignInInput';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: this.props
        }
        this.emailField = React.createRef();
        this.passField = React.createRef();
    }

    handleClick = () => {
        //ref inputs for state
        const email = this.emailField.current.getInputState();
        const password = this.passField.current.getInputState();

        console.log(email, password);

        if(email.value.length < 5 && password.value.length < 5){
            this.emailField.current.setInputState(`* Invalid input`);
            this.passField.current.setInputState(`* Invalid input`);
            return;
        }else if(email.value < 5){
            return this.emailField.current.setInputState(`* Invalid input`);
        }else if(password.value < 5){
            return this.passField.current.setInputState(`* Invalid input`);
        }else{

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

       // submitSignIn()

        return;
    }
    submitSignIn = (email, password) =>{
        
    }

    render() {
        return (
            <React.Fragment>
                <SignInInput ref={this.emailField} hidden={false} name="si-email" content="Email" maxLength="35" />
                <SignInInput ref={this.passField} hidden={true} name="si-password" content="Password" maxLength="20" icon="far fa-eye" iconInv="far fa-eye-slash" />
                <button onClick={this.handleClick} className="si-btn">Sign In</button>
            </React.Fragment>

        );
    }
}

export default Form;