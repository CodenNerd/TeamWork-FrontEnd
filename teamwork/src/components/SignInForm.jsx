import React, { Component } from 'react';
import SignInInput from './SignInInput';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: this.props
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
            <SignInInput hidden={false} name="si-email" content="Email" maxLength="35"/>
            <SignInInput hidden={true} name="si-password" content="Password" maxLength="20" icon="far fa-eye" iconInv="far fa-eye-slash"/>
            <button className="si-btn">Sign In</button>
            </React.Fragment>

         );
    }
}
 
export default Form;