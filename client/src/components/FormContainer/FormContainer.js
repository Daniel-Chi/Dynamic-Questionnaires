import React from 'react'
import Question from "../Question/Question"

const FormContainer = () => (
    <div id="questionnaire-container">
        <br/>
        <input type="text" id="form-name" placeholder="     Title of your form goes here..." />
        <Question/>
        <br/>
        <br/>
    </div>
);

export default FormContainer;