import React from "react";
import FormContainer from "../components/FormContainer/FormContainer";
import AddButton from "../components/AddButton/AddButton";
import Question from '../components/Question/Question';
import API from "../utils/API";

class Questionnaire extends React.Component {
    state = {
        question: {},
        questionTitleField: ""
    }

    //populate first question from api on mount
    componentDidMount() {
        //avoid "cannot read property __ of undefined" errors
        if (this.props.match && this.props.match.params) {
            API.getFirstQuestion(this.props.match.params)
                .then(res => {
                    if (res) {
                        this.setState({ question: res })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    setQuestion = event => {

    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };

    // addQuestion = () => {
    //     console.log("This function fired");
    //     this.setState(prevState => {
    //         let questions = prevState.questions;

    //         if (questions.length === 0) {
    //             questions.push({
    //                 id: 1,
    //                 name: "question",
    //                 value: "test"
    //             });

    //             return {
    //                 questions: questions
    //             };
    //         }
    //         else {
    //             questions.push({
    //                 id: questions[questions.length - 1].id + 1,
    //                 name: "questions_" + (questions[questions.length - 1].id + 1),
    //                 value: questions[questions.length - 1].value
    //             });

    //             return {
    //                 questions: questions
    //             };
    //         };
    //     });
    // };


    render() {
        return (
            <React.Fragment>
                <FormContainer
                    historyPush={this.props.history.push}
                    formName={this.props.match.params.formName}
                >
                    <Question
                        value={this.state.questionTitleField}
                        handleInputChange={this.handleInputChange}
                        placeholder={this.state.question.name}
                        questionId={this.state.question._id}
                        key={this.state.question._id}
                    />
                </FormContainer>
                <AddButton addNewQuestion={this.addNewQuestion} />
            </React.Fragment>
        )
    }
};

export default Questionnaire;