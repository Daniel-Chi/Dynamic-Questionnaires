import React from 'react';
import FormContainer from "../components/FormContainer/FormContainer"

const Questionnaire = (props) => {
    return (
        <React.Fragment>
            <FormContainer historyPush={props.history.push} />
        </React.Fragment>
    )
};

export default Questionnaire;