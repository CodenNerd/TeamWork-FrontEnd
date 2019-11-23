import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);


        this.state = {
            value: "",
            hidden: this.props.hidden,
            feedback: null
        }
        this.inputField = React.createRef();

    }

    getInputState = () =>{
        return this.state;
    }
    setInputState = (data) =>{
        this.setState({feedback: data})
    }

    handleChange = (event) => {

        this.setState({ value: event.target.value });

    }

    handleInput = (event) => {
        const { target } = event;
        const invalidChars = ['`', `'`, `<`, `>`, `/`, `!`, `%`, `^`, `*`, `-`, `(`, `)`, `+`, `=`, `[`, `]`, `\\`, `"`, `:`, `;`, `?`, `¬`, `~`];

        const input2Array = target.value.split("");
        const filteredWithInvalid = input2Array.filter(letter => {
           const checkedChars =  invalidChars.find(char => char == letter);
           if (checkedChars) return true;
           return false
        })
        const lastChar = filteredWithInvalid[filteredWithInvalid.length - 1];
        if (target.type === "text" && filteredWithInvalid[0]) {
            return this.setState({ feedback: `* ${this.props.content} cannot contain special characters | delete ${lastChar}` })
        }
        if (event.target.value.length == 0) {
            return this.setState({ feedback: `* ${this.props.content} cannot be empty` })
        }

        if (event.target.value.length > this.props.maxLength - 4) {
            return this.setState({ feedback: `* ${this.props.content} cannot exceed ${this.props.maxLength} | current count: ${event.target.value.length}` })
        }

        return this.setState({ feedback: null })

    }

    handleEyeClick = () => {
        this.setState({ hidden: !this.state.hidden })
    }
    render() {
        return (
            <div className="signin-input" ref={this.inputField}>
                <input onFocus={this.handleFocus} onInput={this.handleInput} onChange={this.handleChange} value={this.state.value} type={this.state.hidden ? "password" : "text"} name={this.props.name} maxLength={this.props.maxLength} required />
                <label htmlFor={this.props.name} >
                    <span> {this.props.content} </span>
                    <i className={this.state.hidden ? this.props.icon : this.props.iconInv} onClick={this.handleEyeClick}></i>
                </label>
                <div className="si-input-feedback">{this.state.feedback}</div>
            </div>
        );
    }
}

export default Input;