import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {

    render() {
        return (
            <Link to="/">
                <h1 className="logo-grey">TeamWork</h1>
            </Link>
        );
    }
}

export default Index;