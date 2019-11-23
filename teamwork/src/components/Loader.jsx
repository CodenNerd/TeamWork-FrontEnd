import React, { Component } from 'react';

class Loader extends Component {
    state = {}
    render() {
        return (
            <div className={this.props.show}>
                <span>
                    <span>
                        <span>

                        </span>
                    </span>
                </span>

            </div>
        );
    }
}

export default Loader;