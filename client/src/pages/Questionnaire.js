import React, { Component } from 'react';
import FormContainer from "../components/FormContainer/FormContainer"
import AddButton from "../components/AddButton/AddButton"
import Question from '../components/Question/Question';

class Questionnaire extends Component {
    state = {
        questions: [{ id: 1, name: "question", value: "text" }],
        questionTitle: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };

    addQuestion = () => {
        console.log("This function fired");
        this.setState(prevState => {
            let questions = prevState.questions;

            if (questions.length === 0) {
                questions.push({
                    id: 1,
                    name: "question",
                    value: "test"
                });

                return {
                    questions: questions
                };
            }
            else {
                questions.push({
                    id: questions[questions.length - 1].id + 1,
                    name: "questions_" + (questions[questions.length - 1].id + 1),
                    value: questions[questions.length - 1].value
                });

                return {
                    questions: questions
                };
            };
        });
    };

    handleContentChange = event => {
        console.log("This fuction works");
        event.preventDefault()
        this.setState({
            content: event.target.name
        })
    };

    render() {
        return (
            <React.Fragment>
                <FormContainer historyPush={this.props.history.push}>
                    {this.state.questions.map(item => {
                        return (
                            <Question
                                handleClick={this.handleContentChange}
                                renderContent={this.renderContent}
                                key={item.id}
                            />
                        );
                    })}
                </FormContainer>
                <AddButton onClick={this.addQuestion} />
            </React.Fragment>
        )
    }
};

export default Questionnaire;