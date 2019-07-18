// import React from 'react'

// const AddButton = () => (
//     <a href="#" data-toggle="tooltip" data-placement="bottom" title="Click here to add a new question :)">
//         <img src={require("./add.png")} height="80px" id="add-img" alt="add"></img>
//     </a>
// );

// export default AddButton;
import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <div>
                <a
                    href={window.location.pathname}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click here to add a new question :)"
                    onClick={this.props.onClick}
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
};

export default AddButton;