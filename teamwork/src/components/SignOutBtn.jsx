import React, { Component } from 'react';
import userAuth from './../Controllers/Auth';
import {Redirect} from 'react-router-dom';

class SignOutBtn extends Component {
   constructor(props){
       super(props);
       this.state = {
           redirect: false
       }
   }
    
    handleClick = () =>{
        userAuth('destroy');
        this.setState({redirect: true})
    }
    render() { 
        return ( 
            <React.Fragment>
        {this.state.redirect && <Redirect to='/signin' />}
        <button onClick={this.handleClick} className="so-btn">Sign Out</button>
        </React.Fragment>
     );
    }
}
 
export default SignOutBtn;