import React from 'react'
import "./formcontainer.css"
import API from "../../utils/API"

class FormContainer extends React.Component {
    //Setting the component's initial state
    state = {
        formTitle: this.props.match.params.formName,
        questions: []
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
            });
    }

    //on mount, get first question
    componentDidMount() {
        //avoid cannot read property __ of undefined errors
        if (this.props.match && this.props.match.params) {
            //give form_id from url params in order to get question
            API.getFirstQuestion(this.props.match.params.id)
                .then(res => {
                    if (res) {
                        //set state with first question
                        this.setState(prev => {
                            return { questions: prev.state.questions.push(res) }
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, () => {
            console.log(`Form Title: ${this.state.formTitle}`);
            console.log(`Question Title: ${this.state.questionTitle}`);
            console.log(`Textbox: ${this.state.textValue}`);
        });
    };

    // this function retrieves all form data on submit
    handleSubmit = event => {
        event.preventDefault();
        console.log(`Form Title: ${this.state.formTitle}`)
        console.log(`Question Title: ${this.state.questionTitle}`);
        console.log(`Textbox: ${this.state.textValue}`);

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
                    {this.props.children}
                    <br />
                    {/* Submit - Set up a method to retrieve input from all questions/answers*/}
                    <button type="submit" onClick={this.handleSubmit} id="submit-btn" className="btn btn-dark btn-lg" value="Submit">Submit</button>
                    <br />
                    <br />
                </div>
            </React.Fragment>
        );
    }
}

export default FormContainer;