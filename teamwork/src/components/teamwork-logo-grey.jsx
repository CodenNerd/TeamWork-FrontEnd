import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {

    render() {
        return (
            <Link to="/">
                <h1 className="logo-grey">Team<b>Work</b></h1>
            </Link>
        );
    }
}

export default Index;