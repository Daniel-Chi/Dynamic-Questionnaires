import React, { Component } from 'react'

class Question extends Component {
    // Setting the component's initial state
    state = {
        questionTitle: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });

        // onChange makes this.state.questionTitle on char behind
        // console.log(`Question title: ${this.state.questionTitle}`);
    };

    render() {
        return (
            <div className="question-container">
                <div className="question">
                    <input type="text" id="question-title" placeholder="  Type out your question here..."
                    value={this.state.questionTitle} onChange={this.handleInputChange} name="questionTitle"/>
                </div>
                <hr />
                <div id="answer-wrapper">
                    <p id="pls-select-ans">Please select an answer type:</p>
                    <div className="answer-choices">
                        {/*clickable images to allow user to choose answer type */}
                        <span className="img-wrapper">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="List Items">
                                <img src={require("./images/itemlist.png")} height="50px" className="answer-type" id="list-img" alt="list"></img>
                            </a>
                        </span>

                        <span className="img-wrapper">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Textbox">
                                <img src={require("./images/textbox.png")} height="65px" className="answer-type" id="textbox-img" alt="textbox"></img>
                            </a>
                        </span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <hr></hr>
                {/* clickable image for delete function */}
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Delete this question :(">
                    <img src={require("./images/delete.png")} height="30px" id="delete-img" alt="delete"></img>
                </a>
                <br />
                <br />
            </div>
        );
    }
}

export default Question;