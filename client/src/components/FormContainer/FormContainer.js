import React, { Component } from 'react'
import Question from "../Question/Question"

class FormContainer extends Component {
    //Setting the component's initial state
    state = {
        formTitle: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, () => { console.log(`Textbox: ${this.state.formTitle}`); });
    };

    render() {
        return (
            <div id="questionnaire-container">
                <br />
                <input type="text" id="form-name" placeholder="     Title of your form goes here..."
                    value={this.state.formTitle} onChange={this.handleInputChange} name="formTitle" />
                <Question />
                <br/>
                {/* Set up a method to retrieve input from all questions/answers */}
                <button type="submit" id="submit-btn" className="btn btn-dark btn-lg" value="Submit">Submit</button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default FormContainer;