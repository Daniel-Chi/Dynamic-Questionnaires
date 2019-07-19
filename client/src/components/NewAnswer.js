import React from "react";

//this component is the form for creating a new answer
const NewAnswerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmitNewAnswer}>
            <input
                value={props.answerValueField}
                onChange={props.handleInputChange}
                name="answerValueField"
                placeholder={props.message}
            />
        </form>
    )
}

export default NewAnswerForm