import React from "react";

//component that returns an individual answer as a list item
const Answer = (props) => {
    return (
        <li>
            <span>
                {props.name}
            </span>
            <a
                href={window.location.pathname}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Go to this answer's next question"
                onClick={props.handleNextQuestion}
                name={props.answerId}
            >
                <img
                    src={require("./Question/images/return.png")}
                    name={props.answerId}
                    height="20px"
                    alt="next"
                />
            </a>
        </li>
    )
}

export default Answer;