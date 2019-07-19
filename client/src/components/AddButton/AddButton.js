import React from 'react';

const AddButton = (props) => {
    return (
        <div>
            <a
                href={window.location.pathname}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Click here to add a new question :)"
                onClick={props.addNewQuestion}
            >
                <img
                    src={require("./add.png")}
                    height="80px"
                    id="add-img"
                    alt="add"
                ></img>
            </a>
        </div>
    );
};

export default AddButton;