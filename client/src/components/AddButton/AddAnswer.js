import React from 'react';

const AddAnswer = (props) => {
    return (
        <div>
            <a
                href={window.location.pathname}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Click here to add a new question :)"
                onClick={props.handleContentChange}
            >
                <img
                    src={require("./add.png")}
                    height="30px"
                    alt="add"
                    name="select"
                ></img>
            </a>
        </div>
    );
};

export default AddAnswer;