import React from "react";
import FormContainer from "../components/FormContainer/FormContainer";
// import AddButton from "../components/AddButton/AddButton";
import Question from '../components/Question/Question';
import API from "../utils/API";

class Questionnaire extends React.Component {
    state = {
        form_id: "",
        parentAnswer_id: "",
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
            this.setState({ form_id: this.props.match.params.id }, () => {
                API.getFirstQuestion(this.props.match.params.id)
                    .then(res => {
                        //set the form's first question in view
                        if (res.data.questionId) {
                            this.setState({ question: res.data.questionId })
                        } else {
                            //render an input field if there is no first question yet
                            this.setState({ firstQuestion: true })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
    }

    // set question in view depending on which answer's btn is clicked
    setQuestion = (question, parentAnswer_id) => {
        if (question) {
            this.setState({
                question: question,
                questionTitleField: "",
                newQuestion: false,
                parentAnswer_id: parentAnswer_id
            });
        } else {
            this.setState({
                questionTitleField: "",
                question: {},
                newQuestion: true
            });
        }
    }

    //function to handle going to next question based on answer clicked
    handleNextQuestion = (answerId, cb) => {
        API.getNextQuestion(answerId)
            .then(res => {
                if (res.data.nextQuestion) {
                    this.setQuestion(res.data.nextQuestion, res.data._id);
                } else {
                    this.setQuestion(null, res.data._id)
                }
                if (!cb(res)) {
                    this.setState({newQuestion: true})
                } else {
                    cb(res)
                }
            })
            .catch(err => console.log(err));
    }

    //function to handle input change for any fields in this component's state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //function to conditionally create first question or a subsequent question
    handleSubmitNewQuestion = event => {
        event.preventDefault();
        if (this.state.firstQuestion) {
            //connects new question to form by _id
            API.postFirstQuestion(this.state.form_id, { name: this.state.questionTitleField })
                .then(res => {
                    API.getFirstQuestion(res.data._id)
                        .then(res => {
                            this.setState({
                                question: res.data.questionId,
                                newQuestion: false,
                                questionTitleField: ""
                            });
                        })
                })
                .catch(err => console.log(err))
        } else {
            //connects new question to previous answer by _id
            API.postNextQuestion(this.state.parentAnswer_id, { name: this.state.questionTitleField })
                .then(() => {
                    this.setState({
                        question: this.state.questionTitleField,
                        questionTitleField: ""
                    });
                })
                .catch(err => console.log(err));
        }
    }

    //function to render either existing question or input field for new question
    conditionallyRenderCurrentOrNewQuestion = () => {
        if (this.state.question._id) {
            return (
                <Question
                    questionValue={this.state.questionTitleField}
                    answerValueField={this.state.answerValueField}
                    currentQuestion={this.state.question.name}
                    handleNextQuestion={this.handleNextQuestion}
                    handleInputChange={this.handleInputChange}
                    handleSubmitAnswer={this.handleSubmitAnswer}
                    questionId={this.state.question._id}
                    key={this.state.question._id}
                />
            )
        } else {
            return (
                <form onSubmit={this.handleSubmitNewQuestion}>
                    <input
                        value={this.state.questionTitleField}
                        name="questionTitleField"
                        onChange={this.handleInputChange}
                        placeholder="Enter new question here."
                    />
                </form>
            )
        }
    }

    //function to handle creating a new answer on submission
    handleSubmitAnswer = (answerType, cb) => {
        API.postNewAnswer(this.state.question._id, {
            name: this.state.answerValueField,
            answerType: answerType
        })
            .then((res) => { 
                cb(res);
                this.setState({
                    answerValueField: ""
                })
            })
            .catch(err => console.log(err));
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
                    {this.conditionallyRenderCurrentOrNewQuestion()}
                </FormContainer>
                {/* <AddButton addNewQuestion={this.addNewQuestion} /> */}
            </React.Fragment>
        )
    }
};

export default Questionnaire;