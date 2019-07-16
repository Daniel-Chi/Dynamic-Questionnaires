import React, { Component } from 'react'
import "./formcontainer.css"
import Question from "../Question/Question"
import AddButton from "../AddButton/AddButton"

class FormContainer extends Component {
    //Setting the component's initial state
    state = {
        formTitle: "",
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

    handleSubmit = event => {
        event.preventDefault();
        console.log(event)
    }

    render() {
        return (
            <React.Fragment>
                <div id="questionnaire-container">
                    <div id="title-container">
                        <br />
                        <form>
                            <input type="text" id="form-name" placeholder="     Title of your form goes here..."
                                value={this.state.formTitle} onChange={this.handleInputChange} name="formTitle" />
                        </form>
                    </div>
                    <div id="question-container">
                        <Question />
                    </div>
                    <br />
                    {/* Submit - Set up a method to retrieve input from all questions/answers*/}
                    <button type="submit" onClick={this.handleSubmit} id="submit-btn" className="btn btn-dark btn-lg" value="Submit">Submit</button>
                    <br />
                    <br />
                </div>
                <AddButton />
            </React.Fragment>
        );
    }
}

export default FormContainer;