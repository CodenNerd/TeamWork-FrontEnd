import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignInBtn extends Component {
    
    render() { 
        return ( 
            <Link to="/signin">
            <button className='signin-button'>
                Sign In
            </button>
            </Link>
         );
    }
}
 
export default SignInBtn;