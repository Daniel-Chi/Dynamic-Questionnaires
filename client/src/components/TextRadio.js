import React, { Component } from 'react';
import { componentWillAppendToBody } from 'react-append-to-body';

const AppendedTextBoxes = componentWillAppendToBody(addBox);

class TextRadio extends Component {
    constructor() {
        super();

        state = {
            textValue: ""
        }

    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    addBox = () => {
        return <div className="form-check"><input className="form-check-input" type="radio" value="option" /><label className="form-check-label" for="option"><input class="form-control" type="text" placeholder="" /></label></div>;
    }

    removeBox = () => {

    }

    render() {
        return(
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option" />
                    <label className="form-check-label" for="option">
                        <input class="form-control" type="text" placeholder="" />
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option" />
                    <label className="form-check-label" for="option">
                        <input class="form-control" type="text" placeholder="" />
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" value="option" />
                    <label className="form-check-label" for="option">
                        <input class="form-control" type="text" placeholder="" />
                    </label>
                </div>
                <AppendedTextBoxes>

                </AppendedTextBoxes>
                <button type="button" className="btn btn-primary" onClick={this.addBox}>
                    Add Option
                </button>
                <button type="button" className="btn btn-danger" onClick={this.removeBox}>
                    Remove Option
                </button>
            </div>
        );
    }
}

export default TextRadio;