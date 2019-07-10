import React from 'react';
import FormContainer from "../components/FormContainer/FormContainer"
import AddButton from "../components/AddButton/AddButton"
import TextArea from "../components/TextArea/TextArea"

function Questionnaire() {
    return (
        <React.Fragment>
            <FormContainer/>
            <AddButton/>
            <TextArea/>
        </React.Fragment>
    )
};

export default Questionnaire;