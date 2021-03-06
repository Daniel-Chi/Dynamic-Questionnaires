import React from "react";

class TextArea extends React.Component {

    //Setting the component's initial state
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
        }, () => {console.log(`Textbox: ${this.state.textValue}`); });
    };

    render() {
        return (
            <textarea rows="5" cols="59" value={this.state.textValue} onChange={this.handleInputChange} name="textValue" placeholder="Type out your answer here."/>
        );
    }
}

export default TextArea;