import React, { Component } from 'react';

class ProfileTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
           conn: 'Online'
        }
    }

    componentDidMount() {
        this.isConnected();
    }

    isConnected =() =>{
        if(navigator.onLine){
            this.setState({conn: 'Online'})
        }else{
            this.setState({conn: 'Offline'})
        }

        setTimeout(this.isConnected, 1000);
    }

    render() {
        

        return (
            <div className="profile-tab">

              
                <ul>
                    <li>{this.props.lastname+' '+this.props.firstname}</li>
                    <li>{this.props.email}</li>
                    <li>{this.props.address}</li>
                    <li>Registered On: {(new Date(this.props.datetime)).toDateString()}</li>
                </ul>
                
                <ul>
                    <li>{this.props.jobRole}</li>
                    <li>{this.props.department} Department</li>
                    <li>{this.props.gender}</li>
                    <li className={this.state.conn ==="Online" ? "online": ""}><i className="fas fa-circle"></i>{this.state.conn}</li>
                </ul>
           
            </div>
        );
    }
}

export default ProfileTab;