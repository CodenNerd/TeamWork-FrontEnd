import React, { Component } from 'react';
import SignInInput from './SignInInput';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <SignInInput name="si-email" content="Email"/>
            <SignInInput name="si-password" content="Password"/>
            <button className="si-btn">Sign In</button>
            </React.Fragment>

         );
    }
}
 
export default Form;