import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        const value = this.props.name ==='gender' ? false:"" 
        this.state = {
            feedback: null,
            value
        }
        this.cInputField = React.createRef();
    }
    getInputState=()=>{
        return this.state;
    }
    setInputState = (newInfo) =>{
        this.setState({feedback: newInfo});
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
       if(event.target.type === 'radio'){
            this.setState({ value: !this.state.value });       

            console.log(this.state.value, '////')
        }
    }

    handleInput = (event) => {
        


        const { target } = event;
            const invalidChars = ['`', `'`, `<`, `>`, `/`, `!`, `%`, `^`, `*`, `-`, `(`, `)`, `+`, `=`, `[`, `]`, `\\`, `"`, `:`, `;`, `?`, `¬`, `~`];

        const input2Array = target.value.split("");
        const filteredWithInvalid = input2Array.filter(letter => {
            const checkedChars = invalidChars.find(char => char == letter);
            if (checkedChars) return true;
            return false
        })
        const lastChar = filteredWithInvalid[filteredWithInvalid.length - 1];
        if (target.type === "text" && filteredWithInvalid[0]) {
            return this.setState({ feedback: `* ${this.props.label} cannot contain special characters | delete ${lastChar}` })
        }
        if (event.target.value.length == 0) {
            return this.setState({ feedback: `* ${this.props.label} cannot be empty` })
        }

        if (event.target.value.length > this.props.maxLength - 4) {
            return this.setState({ feedback: `* ${this.props.label} cannot exceed ${this.props.maxLength} | current count: ${event.target.value.length}` })
        }

        let passwordValue = this.props.initialPassword;
            console.log(passwordValue, 'pp')
        if (event.target.id == "passwordAgain"){
            if (event.target.value !== passwordValue) {
                return this.setState({ feedback: `* Passwords do not match` })
            }
        }

        return this.setState({ feedback: null })

    }


    render() {
        const style = {
            width: this.props.width
        }
        
        return (
            <div className="c-input-div" style={style} id={this.props.divId} ref={this.cInputField}>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input onFocus={this.props.pFocus} onChange={this.handleChange} value={this.state.value} onInput={this.handleInput} name={this.props.name} id={this.props.id} type={this.props.type} maxLength={this.props.maxLength} autoComplete="off" />
                <div className="c-input-feedback">{this.state.feedback}</div>
            </div>

        );
    }
}

export default Input;