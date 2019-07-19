import React from "react";
import FormContainer from "../components/FormContainer/FormContainer";
// import AddButton from "../components/AddButton/AddButton";
import Question from '../components/Question/Question';
import API from "../utils/API";

class Questionnaire extends React.Component {
    state = {
        question: {},
        questionTitleField: "",
        answerValueField: "",
        newQuestion: true,
        firstQuestion: false
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
                });
        }
    }

    // set question in view depending on which answer's btn is clicked
    setQuestion = question => {
        if (question) {
            this.setState({
                question: question,
                newQuestion: false
            });
        } else {
            this.setState({
                question: {},
                newQuestion: true
            });
        }
    }

    //function to render either existing question or input field for new question
    conditionallyRenderCurrentOrNewQuestion = () => {
        if (this.state.newQuestion) {
            return (
                <form>
                    <input></input>
                </form>
            )
        } else {
            return (
                <Question
                    questionValue={this.state.questionTitleField}
                    answerValueField={this.state.answerValueField}
                    currentQuestion={this.state.question.name}
                    setQuestion={this.setQuestion}
                    handleInputChange={this.handleInputChange}
                    handleSubmitNewAnswer={this.handleSubmitNewAnswer}
                    questionId={this.state.question._id}
                    key={this.state.question._id}
                />
            )
        }
    }

    //function to handle input change for any fields in this component's state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmitNewQuestion = event => {
        event.preventDefault();
        
    }

    //function to handle creating a new answer on submission
    handleSubmitNewAnswer = event => {
        event.preventDefault();
        API.postNewAnswer(this.state.question._id, {})
            .then()
    }

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
                    {this.conditionallyRenderCurrentOrNewQuestion}
                </FormContainer>
                {/* <AddButton addNewQuestion={this.addNewQuestion} /> */}
            </React.Fragment>
        )
    }
};

export default Questionnaire;