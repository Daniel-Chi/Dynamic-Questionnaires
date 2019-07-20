import React, { Component } from 'react'
import "./formcontainer.css"
import Question from "../Question/Question"



class FormContainer extends React.Component {
    //Setting the component's initial state
    state = {
        formTitleField: ""
    };

    //before mount, check for authentication
    //if not authenticated, redirect back to login
    componentWillMount() {
        fetch("/auth")
            .then(res => res.json())
            .then(resJSON => {
                if (!resJSON._id) {
                    this.props.historyPush("/");
                }
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // TODO: make Update routes to backend to update form title
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.formTitleField)
    }

    render() {
        return (
            <React.Fragment>
                <div id="questionnaire-container">
                    <div id="title-container">
                        <br />
                        {/* TODO: conditionally render Form Title as plain text or input field */}
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="form-name"
                                placeholder={this.props.formName}
                                value={this.state.formTitleField}
                                onChange={this.handleInputChange}
                                name="formTitleField"
                            />
                        </form>
                    </div>
                    {this.props.children}
                    <br />
                    {/* <button
                        type="submit"
                        onClick={this.handleSubmit}
                        id="submit-btn"
                        className="btn btn-dark btn-lg"
                        value="Submit"
                    >
                        Submit
                    </button> */}
                    <br />
                    <br />
                </div>
            </React.Fragment>
        );
    }
}

export default FormContainer;