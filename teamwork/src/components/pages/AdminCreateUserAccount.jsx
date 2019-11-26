import React, { Component } from 'react';
import RandomizeBoxes from './../RandomizeBoxes';
import Logo from './../teamwork-logo-grey';
import CreateUserInput from './../createUserInput';
import CreateSuccessAnime from './../CreateSuccessAnime';
import NewUserDetails from './../NewUserDetails';
import userAuth from "./../../Controllers/Auth";
import { Redirect, Link } from "react-router-dom";
import Loader from './../Loader';
import FeedBackBox from "./../FeedbackBox";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.male = React.createRef();
        this.female = React.createRef();
        this.jobRole = React.createRef();
        this.department = React.createRef();
        this.address = React.createRef();
        this.rPassword = React.createRef();

        this.state = {
            nothinghy: true,
            successCanvas: false,
            newUserDetails: false,
            details: {

            },
            passwordHidden: true,
            redirect: false,
            loaderVisibility: false,
            feedback:[
                'no-feedback', // type
                'Success',  // head
                "feedback"  //message
        ],
        initialPassword: this.password.current

        }
        


    }

    handleSubmit = () =>{

        const firstName = this.firstName.current.getInputState()
        const lastName = this.lastName.current.getInputState()
        const email = this.email.current.getInputState();
        const password = this.password.current.getInputState();
        const rPassword = this.rPassword.current.getInputState();
        const male = this.male.current.getInputState();
        const female = this.female.current.getInputState();
        const gender = female.value==true ? "female": "male";
        const jobRole = this.jobRole.current.getInputState();
        const department = this.department.current.getInputState();
        const address = this.address.current.getInputState();


        console.log(email, password);

        if(firstName.value.length < 3){
            return this.firstName.current.setInputState(`* Firstname too short`);
        }else if(lastName.value.length < 3){
            return this.lastName.current.setInputState(`* Lastname too short`);
        }else if (email.value.length < 5) {
            return this.email.current.setInputState(`* Invalid email`);
        } else if (password.value.length < 5) {
            return this.password.current.setInputState(`* Password must be more than 6 chars`);
        } else if(password.value !== rPassword.value){
            
            return this.rPassword.current.setInputState(`* Passwords do not match`);
        }else if(!female.value && !male.value){
            console.log(female.value, male.value, gender,'===')
            return this.male.current.setInputState(`* Select a gender`);
        }else if(female.value && male.value){
            console.log(female.value, male.value, gender,'===')
            return this.female.current.setInputState(`* Select a gender`);
        }else if(jobRole.value.length < 3){
             this.male.current.setInputState(null);
             this.female.current.setInputState(null);
            return this.jobRole.current.setInputState(`* Invalid job role`);
        }else if(department.value.length < 3){
            return this.department.current.setInputState(`* Wrong department`);
        }else if(address.value.length < 5){
            return this.address.current.setInputState(`* Invalid address`);
        }else {

        }

        // check that feedback is null
        if (firstName.feedback !== null || lastName.feedback !== null|| email.feedback !== null || password.feedback !== null || rPassword.feedback !== null || male.feedback !== null || female.feedback !== null || jobRole.feedback !== null || department.feedback !== null || address.feedback !== null) {
            this.setState({ feedback: ['error', 'error', 'Wrong credentials provided' ] })
        setTimeout(h => this.setState({ feedback: [`error slide-out`, 'error', 'Wrong credentials provided' ] }), 1000);
        
            return ;
        }

        // check email validity
        if (!(/\S+@\S+\.\S+/.test(email.value))) {
            this.email.current.setInputState(`* Enter a valid email`);
            this.setState({ feedback: ['error', 'error', 'Wrong credentials provided' ] })
            setTimeout(h => this.setState({ feedback: [`error slide-out`, 'error', 'Wrong credentials provided' ] }), 1000);

            return ;
        }
        // if valid -  submit method
        let today = new Date;
         today = today.toDateString()
        alert(today);
        const credentials = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim().toLowerCase(),
            password: password.value,
            gender,
            jobRole: jobRole.value,
            department: department.value,
            address: address.value,
            createdOn: today
        }
        this.setState({details:credentials})

        this.submitSignUp(credentials);

        return;
    }

    submitSignUp = (credentials) => {
        const user = userAuth();

        this.showLoader(true);
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/auth/create-user`;
        const reqObj = {
            method: 'POST',
            mode: 'cors', 
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': user.data.token
            },
            body: JSON.stringify(credentials) 
        }

        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
               setTimeout(h => this.showLoader(false), 1000);

               return data
                
            }).then((info)=>{
                console.log('info:', info)

                this.showHideFeedback(info.status, info.message || info.data.message );
                if(info.status==="success"){
                    this.setState({nothinghy: false, successCanvas: true, newUserDetails: false})
                }
                setTimeout(h => this.setState({nothinghy: false, successCanvas: false, newUserDetails: true}), 2000);

            })
            .catch((e) => {
                setTimeout(h => this.showLoader(false), 1000);
                this.showHideFeedback('error', e);
              
                console.log(e);
            });

    }


    showLoader = (value) => {
        return this.setState({ loaderVisibility: value })
    }

    componentWillMount() {
        
        const user = userAuth();
        console.log(user, 'user cookie')
        if (!userAuth()) ;
        if (!user) return this.setState({ redirect: true });
        if (!user.data) return this.setState({ redirect: true });
        if (!user.data.token) return this.setState({ redirect: true });

        this.showLoader(true);
        const apiEndpoint = `http://teamwork4andela.herokuapp.com/api/v1/user`;
        const reqObj = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.data.token
            },
        }
        console.log(user)
        fetch(apiEndpoint, reqObj)
            .then(response => response.json())
            .then((data) => {
                if (data.status == "success" && data.data.userType == "admin") {
                    this.showLoader(false);
                    this.showHideFeedback('success', `Admin authenticated`)
                }
                else {
                    this.setState({ redirect: true })
                }

            })
            .catch((e) => {
                this.showHideFeedback('error', e)
            });
    }
    handleSignOut = () =>{
        userAuth('destroy');
        this.setState({ redirect: true })
    }

    handleEyeClick = () => {
        return this.setState({ passwordHidden: !this.state.passwordHidden });
    }

    showHideFeedback = (type, message) =>{
        
        this.setState({ feedback: [type, type, message ] })
        setTimeout(h => this.setState({ feedback: [`${type} slide-out`, type, message]}), 1000);
        
    }

    getTypedPassword = () =>{
        let passValue = this.password.current.getInputState();
        passValue = passValue.value;
        console.log(passValue);
        this.setState({initialPassword: passValue});
        return passValue;
    }
    render() {

        

        return (
            <div>
                <Loader show={this.state.loaderVisibility ? 'loader-div' : 'loader-hide'} />
                <FeedBackBox feedback={this.state.feedback}/>
                {this.state.redirect ? <Redirect to='/signin' /> : null}
                <Logo />

                <div className="admin-dashboard-card">
                    <RandomizeBoxes />

                    <div className="icons-div">
                    <Link to='/admin/dashboard'> <i className="far fa-user"></i></Link>
                       <Link to='/admin/dashboard/create-user'> <i className="fas fa-user-plus icon-active"></i> </Link>
                       <Link to='/admin/dashboard/flags'> <i className="far fa-flag"></i> </Link>
                        <i onClick={this.handleSignOut} className="fas fa-sign-out-alt"></i>

                    </div>
                    <div className="issues-div">
                        <button onClick={this.handleSubmit} className="create-btn">Create +</button><h3>Create User</h3>
                        <CreateUserInput ref={this.firstName} id="firstname" type="text" label="Firstname" width="41.5%" />
                        <CreateUserInput ref={this.lastName} id="lastname" type="text" label="Lastname" width="41.5%" />
                        <CreateUserInput ref={this.email} id="email" type="text" label="Email" width="140%" />
                        <CreateUserInput ref={this.password} id="password" type="password" label="Password" width="41.5%" />
                        <CreateUserInput ref={this.rPassword} pFocus={this.getTypedPassword} initialPassword={this.state.initialPassword} id="passwordAgain" type="password" label="Password Again" width="41.5%" />
                        <CreateUserInput ref={this.male} name="gender" id="male" type="radio" label="Male" width="5%" />
                        <CreateUserInput ref={this.female} name="gender" id="female" type="radio" label="Female" width="5%" />
                        <CreateUserInput ref={this.jobRole} divId="jr-div" id="jobRole" type="text" label="Job Role" width="60%" />
                        <CreateUserInput ref={this.department} id="department" type="text" label="Department" width="140%" />
                        <CreateUserInput ref={this.address} id="address" type="text" label="Address" width="140%" />


                    </div>
                    <div className="activity-div">
                        <div className={this.state.nothinghy ? 'nothing-hy' : 'hidden'}>Nothing here yet</div>

                       {this.state.successCanvas ? <CreateSuccessAnime className={'success-canvas'} /> : null}

                        <NewUserDetails className={this.state.newUserDetails ? 'nu-details' : 'hidden'} details={this.state.details} onClick={this.handleEyeClick} eye={this.state.passwordHidden ? 'far fa-eye' : 'far fa-eye-slash'} />
                        {/* // Display Success Anime
                                // Display New User's Details */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
