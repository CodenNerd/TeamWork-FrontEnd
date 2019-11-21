import React, { Component } from 'react';

class Toggle extends Component {

    render() {
        return (
            <div className="hero-icons">
                <ul>
                    <li> <i className="fas fa-newspaper"></i></li>
                    <li> <i className="fas fa-camera"></i></li>
                    <li> <i className="far fa-comments"></i></li>

                </ul>
            </div>
        );
    }
}

export default Toggle;