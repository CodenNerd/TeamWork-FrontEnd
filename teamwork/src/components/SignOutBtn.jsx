import React, { Component } from 'react';
import userAuth from './../Controllers/Auth';

class SignOutBtn extends Component {
    
    handleClick = () =>{
        userAuth('destroy');
    }
    render() { 
        return ( <button onClick={this.handleClick} className="so-btn">Sign Out</button> );
    }
}
 
export default SignOutBtn;