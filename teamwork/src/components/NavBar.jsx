import React, { Component } from 'react';
import Logo from './teamwork-logo-grey';
import SearchBar from './SearchBar';
import SignOutBtn from './SignOutBtn';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="nav-bar">
            <Logo />
            <SearchBar />
            <SignOutBtn />
            <i onClick={this.props.onPin} className={this.props.pinned ? "fas fa-thumbtack pinned":"fas fa-thumbtack" }></i>
        </div> );
    }
}
 
export default NavBar;