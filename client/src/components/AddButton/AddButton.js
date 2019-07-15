// import React from 'react'

// const AddButton = () => (
//     <a href="#" data-toggle="tooltip" data-placement="bottom" title="Click here to add a new question :)">
//         <img src={require("./add.png")} height="80px" id="add-img" alt="add"></img>
//     </a>
// );

// export default AddButton;
import React, { Component } from 'react';

class AddButton extends Component {
    constructor() {
        super();

        this.state = {
            questions: []
        };
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
    };

    addQuestion = () => {
        this.setState(prevState => {
            let questions = prevState.questions;

            if (questions.length === 0){
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

    render() {
        return (
            <div>
                {this.state.questions.map(questions => {
                    return (
                        <React.Fragment>
                            <div
                            id={questions.id}
                            name={questions.name}
                            value={questions.value}>
                            <div id="answer-wrapper">
                                <p id="pls-select-ans">Please select an answer type:</p>
                                <div className="answer-choices">
                                {/*clickable images to allow user to choose answer type */}
                                    <span className="img-wrapper">
                                        <a href={window.location.pathname} data-toggle="tooltip" data-placement="bottom" title="List Items">
                                            <img src={require("./images/itemlist.png")} height="50px" name="list" className="answer-type" id="list-img" alt="list" onClick={this.handleContentChange}></img>
                                        </a>
                                    </span>

                                    <span className="img-wrapper">
                                        <a href={window.location.pathname} data-toggle="tooltip" data-placement="bottom" title="Textbox">
                                            <img src={require("./images/textbox.png")} height="65px" name="text" className="answer-type" id="textbox-img" alt="textbox" onClick={this.handleContentChange}></img>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </React.Fragment>
                    );
                })}
                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Click here to add a new question :)">
                    <img src={require("./add.png")} height="80px" id="add-img" alt="add"></img>
                </a> 
            </div>
        );
    };
};

export default AddButton;