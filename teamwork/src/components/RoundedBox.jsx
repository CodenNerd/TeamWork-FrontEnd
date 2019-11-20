import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            icon: this.props.icon
        }
    }

    render() {
        return (
            <div className="rounded-box">
                <div className={this.state.icon}>
                    {this.state.text}
                </div>
            </div>
        );
    }
}

export default Index;