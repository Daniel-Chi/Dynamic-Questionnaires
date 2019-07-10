import React, { Component } from "react";

class TextArea extends Component {
    // Setting the component's initial state
    state = {
        textValue: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });

        //textValue is one char behind display
        console.log(`Textbox: ${this.state.textValue}`);
    };

    render() {
        return (
            <textarea row="20" value={this.state.textValue} onChange={this.handleInputChange} name="textValue"/>
        );
    }
}

export default TextArea;