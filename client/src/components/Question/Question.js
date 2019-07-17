import React, { Component } from 'react'
import TextArea from "../TextArea/TextArea"
import TextRadio from "../TextRadio"

class Question extends Component {

    // Setting the component's initial state
    state = {
        questionTitle: "",
        content: "none"
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, () => { console.log(`Textbox: ${this.state.questionTitle}`); });
    };

    handleContentChange = event => {
        event.preventDefault()
        this.setState({
            content: event.target.name
        })
    }


    renderContent = () => {
        // if user clicks on textbox option
        if (this.state.content === "text") {
            return (
                <TextArea />
            )
            // if user clicks on the list option
        } else if (this.state.content === "list") {
            return (
                <TextRadio />
            )
            // default display/if user clicks on return button
        } else if (this.state.content === "none"){
            return (
                <React.Fragment>
                    <div id="answer-wrapper">
                        <p id="pls-select-ans">Please select an answer type:</p>
                        <div className="answer-choices">
                            {/*clickable images to allow user to choose answer type */}
                            <span className="img-wrapper">
                                <a
                                    href="/questionnaire"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="List Items"
                                    onClick={this.handleContentChange}
                                >
                                    <img
                                        src={require("./images/itemlist.png")}
                                        height="50px"
                                        name="list"
                                        className="answer-type"
                                        id="list-img"
                                        alt="list"
                                    >
                                    </img>
                                </a>
                            </span>

                            <span className="img-wrapper">
                                <a
                                    href="/questionnaire"
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Textbox"
                                    onClick={this.handleContentChange}
                                >
                                    <img
                                        src={require("./images/textbox.png")}
                                        height="65px"
                                        name="text"
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
        }
    }


    render() {
        if (this.state.content === "delete"){
            return null;
        }
        else {
            return (
                <div className="question-container">
                    <div className="question">
                        <input type="text" id="question-title" placeholder="  Type out your question here..."
                            value={this.state.questionTitle} onChange={this.handleInputChange} name="questionTitle" />
                    </div>
                    <hr />
    
                    {this.renderContent()}
    
                    <br />
                    <hr></hr>
                    {/* clickable image for delete function */}
                    <a
                        href="/questionnaire"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Delete this question :("
                    >
                        <img src={require("./images/delete.png")} height="30px" id="delete-img" alt="delete"></img>
                    </a>
                    {/* return button */}
                    <a
                        href="/questionnaire"
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
                        ></img>
                    </a>
                    <br />
                    <br />
                </div>
            )
        }
    }

}

export default Question;