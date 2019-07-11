import React from 'react'

const AddButton = () => (
    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Click here to add a new question :)">
        <img src={require("./add.png")} height="80px" id="add-img" alt="add"></img>
    </a>
);

export default AddButton;