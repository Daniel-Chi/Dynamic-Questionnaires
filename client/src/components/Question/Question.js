import React, { Component } from 'react'
import "./question.css"
import List from "../List/List"

class Question extends Component {

    // Setting the component's initial state
    state = {
        content: "none"
    };

    handleContentChange = event => {
        event.preventDefault()
        this.setState({
            content: event.target.name
        })
    }

    //Method for conditional rendering
    renderContent = () => {
        // if user clicks on textbox option
        if (this.state.content === "text") {
            return (
                <form onSubmit={this.props.handleSubmit}>
                    <textarea rows="5" cols="59" value={this.state.textValue} onChange={this.props.handleInputChange} name="textValue" placeholder="Type out your answer here." />
                </form>
            )
            // if user clicks on the list option
        } else if (this.state.content === "list") {
            return (
                <List />
            )
            // default display/if user clicks on return button
        } else if (this.state.content === "none") {
            return (
                <React.Fragment>
                    <div id="answer-wrapper">
                        <p id="pls-select-ans">Please select an answer type:</p>
                        <div className="answer-choices">
                            {/*clickable images to allow user to choose answer type */}
                            <span className="img-wrapper">
                                {/* List */}
                                <a href={window.location.pathname} data-toggle="tooltip" data-placement="bottom" title="List Items">
                                    <img src={require("./images/itemlist.png")} height="50px" name="list" className="answer-type" id="list-img" alt="list" onClick={this.handleContentChange}></img>
                                </a>
                            </span>

                            <span className="img-wrapper">
                                <a href={window.location.pathname} data-toggle="tooltip" data-placement="bottom" title="Textbox">
                                    {/* Textbox */}
                                    <img src={require("./images/textbox.png")} height="65px" name="text" className="answer-type" id="textbox-img" alt="textbox" onClick={this.handleContentChange}></img>
                                </a>
                            </span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </React.Fragment>
            )
        }
    }

    render() {
        if (this.state.content === "delete") {
            return null;
        } else {
            return (
                <div className="question-container">
                    <div className="question">
                        <form onSubmit={this.props.handleSubmit}>
                            <input type="text" id="question-title" placeholder="  Type out your question here..."
                                value={this.state.questionTitle} onChange={this.props.handleInputChange} name="questionTitle" />
                        </form>
                    </div>
                    <hr />
                    {this.renderContent()}
                    <br />
                    <hr></hr>
                    <a href="/questionnaire" data-toggle="tooltip" data-placement="bottom" title="Delete this question :(">
                        <img src={require("./images/delete.png")} height="30px" id="delete-img" alt="delete" name="delete" onClick={this.handleContentChange}></img>
                    </a>

                    <a href="/questionnaire" data-toggle="tooltip" data-placement="bottom" title="Return to answer types selection">
                        <img src={require("./images/return.png")} height="30px" id="return-img" alt="return" name="none" onClick={this.handleContentChange}></img>
                    </a>
                    <br />
                    <br />
                </div>
            )
        }
    }
}

export default Question;