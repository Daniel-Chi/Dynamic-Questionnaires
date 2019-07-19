import React from 'react';
// import TextRadio from "../TextRadio";
import AddAnswer from "../AddButton/AddAnswer";
import NewAnswerForm from "../NewAnswer";
import API from "../../utils/API";
import Answer from '../Answer';

class Question extends React.Component {

    // Setting the component's initial state
    state = {
        content: "none",
        answers: []
    };

    // populate all of the question's answers from db on mount
    componentDidMount() {
        API.getAllAnswers(this.props.questionId)
            .then(res => {
                //force this.state.answers to be an array, even if only one answer is sent
                if (Array.isArray(res)) {
                    this.setState({ answers: res });
                } else {
                    this.setState({ answers: this.state.answers.push(res) })
                }
            })
            .catch(err => console.log(err));
    }

    // repopulate all answers when the question changes
    componentDidUpdate() {
        API.getAllAnswers(this.props.questionId)
            .then(res => {
                if (Array.isArray(res)) {
                    this.setState({answers: res});
                } else {
                    const arr = []
                    this.setState({answers: arr.push(res)})
                }
            })
            .catch(err => console.log(err))
    }

    //function to handle content of the answer editing area on click
    handleContentChange = event => {
        event.preventDefault();
        this.setState({
            content: event.target.name
        });
    }

    //function to handle going to next question based on answer clicked
    handleNextQuestion = event => {
        event.preventDefault();
        API.getNextQuestion(event.target.name)
            .then(res => {
                this.props.setQuestion(res)
            })
            .catch(err => console.log(err))
    }

    renderAnswerList = () => {
        if (this.state.answers.length > 0) {
            return (
                <ul>
                    {this.state.answers.map(item => {
                        return (
                            <Answer
                                name={item.name}
                                handleNextQuestion={this.handleNextQuestion}
                                answerId={item._id}
                                key={item._id}
                            />
                        )
                    })}
                </ul>
            )
        }
    }

    renderContent = () => {
        // if user clicks on textbox option
        if (this.state.content === "input") {
            return (
                <NewAnswerForm
                    handleSubmitNewAnswer={this.props.handleSubmitNewAnswer}
                    answerValueField={this.props.answerValueField}
                    handleInputChange={this.props.handleInputChange}
                    message="Enter a placeholder here."
                />
            )
            // if user clicks on the list option
        } else if (this.state.content === "option") {
            return (
                <NewAnswerForm
                    handleSubmitNewAnswer={this.props.handleSubmitNewAnswer}
                    answerValueField={this.props.answerValueField}
                    handleInputChange={this.props.handleInputChange}
                    message="Enter a new answer here."
                />
            )
            // default display/if user clicks on return button
        } else if (this.state.content === "select") {
            return (
                <React.Fragment>
                    <div id="answer-wrapper">
                        <p id="pls-select-ans">Please select an answer type:</p>
                        <div className="answer-choices">
                            {/*clickable images to allow user to choose answer type */}
                            <span className="img-wrapper">
                                <a
                                    href={window.location.pathname}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Multiple Choice Option"
                                    onClick={this.handleContentChange}
                                >
                                    <img
                                        src={require("./images/itemlist.png")}
                                        height="50px"
                                        name="option"
                                        className="answer-type"
                                        id="list-img"
                                        alt="list"
                                    >
                                    </img>
                                </a>
                            </span>

                            <span className="img-wrapper">
                                <a
                                    href={window.location.pathname}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Textbox"
                                    onClick={this.handleContentChange}
                                >
                                    <img
                                        src={require("./images/textbox.png")}
                                        height="65px"
                                        name="input"
                                        className="answer-type"
                                        id="textbox-img"
                                        alt="textbox"
                                    ></img>
                                </a>
                            </span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </React.Fragment>
            )
        } else {
            return (
                <AddAnswer
                    handleContentChange={this.handleContentChange}
                    name="select"
                />
            )
        }
    }


    render() {
        return (
            <div className="question-container">
                <div className="question">
                    <form onSubmit={this.props.handleSubmit}>
                        <input
                            type="text"
                            id="question-title"
                            placeholder={this.props.currentQuestion || "Enter question title here..."}
                            value={this.props.questionValue}
                            onChange={this.props.handleInputChange}
                            name="questionTitleField" />
                    </form>
                </div>
                <hr />

                {this.renderContent()}

                <br />
                <hr></hr>
                {/* delete button */}
                <a
                    href={window.location.pathname}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete this question :("
                    onClick={this.handleContentChange}
                >
                    <img
                        src={require("./images/delete.png")}
                        height="30px"
                        id="delete-img"
                        name="delete"
                        alt="delete"
                    >
                    </img>
                </a>
                {/* return button */}
                <a
                    href={window.location.pathname}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Return to answer types selection"
                    onClick={this.handleContentChange}
                >
                    <img
                        src={require("./images/return.png")}
                        height="30px"
                        id="return-img"
                        alt="return"
                        name="none"
                    >
                    </img>
                </a>
                <br />
                <br />
            </div>
        )
    }
}


export default Question;