import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import CreateUserInput from './../createUserInput';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            nothinghy: true,
        }
    }

    render() {
        return (
            <div>
                <Logo />
                
                <div className="admin-dashboard-card">
                    <RandomizeBoxes />
                    
                    <div className="icons-div">
                        <i className="far fa-user"></i>
                        <i className="fas fa-user-plus icon-active"></i>
                        <i className="far fa-flag"></i>
                        
                    </div>
                    <div className="issues-div">
                        <button className="create-btn">Create +</button><h3>Create User</h3>
                        <CreateUserInput id="firstname" type="text" label="Firstname" width="41.5%"/>
                        <CreateUserInput id="lastname" type="text" label="Lastname" width="41.5%"/>
                        <CreateUserInput id="email" type="text" label="Email" width="140%"/>
                        <CreateUserInput id="password" type="password" label="Password" width="41.5%"/>
                        <CreateUserInput id="passwordAgain" type="password" label="Password Again" width="41.5%"/>
                        <CreateUserInput name="gender" id="male" type="radio" label="Male" width="5%"/>
                        <CreateUserInput name="gender" id="female" type="radio" label="Female" width="5%"/>
                        <CreateUserInput divId="jr-div" id="jobRole" type="text" label="Job Role" width="60%"/>
                        <CreateUserInput id="department" type="text" label="Department" width="140%"/>
                        <CreateUserInput id="address" type="text" label="Address" width="140%"/>
                        

                    </div>
                    <div className="activity-div">
                            <div className={this.state.nothinghy? 'nothing-hy': 'hidden'}>Nothing here yet</div> 
                                {/* // Display Success Anime
                                // Display New User's Details */}
                    </div>
                </div>
               </div>
        );
    }
}

export default SignIn;