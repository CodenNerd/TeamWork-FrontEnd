import React, { Component } from 'react';
import PasswordDisabled from "./SignInInput";
class Details 
extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={this.props.className}>
                <h3>New User</h3>
                <ul>
                    <li><b>Name:</b> {this.props.details.firstName} {this.props.details.firstName}</li>
                    <li><b>Email:</b> {this.props.details.email}</li>
                    <li><b>Password:</b> {this.props.eye==='far fa-eye'? '*******' : this.props.details.password} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div onClick={this.props.onClick} className={this.props.eye}></div> </li>
                    <li><b>Gender:</b> {this.props.details.gender}</li>
                    <li><b>Job Role:</b> {this.props.details.jobRole}</li>
                    <li><b>Department:</b> {this.props.details.department}</li>
                    <li><b>Address:</b> {this.props.details.address}</li>
                    <li><b>Created On:</b> {this.props.details.firstName}</li>
                </ul>
            </div>
         );
    }
}
 
export default Details;
