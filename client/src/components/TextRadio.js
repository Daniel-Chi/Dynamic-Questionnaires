import React, { Component } from 'react';

class TextRadio extends Component {

    state = {
        textValue: "",
        option: 3
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    addBox = () => {

    }

    removeBox = () => {

    }

    render() {
        return(
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="option1" name="option1" value="option1" />
                    <label className="form-check-label" for="option1">
                        <input class="form-control" type="text" placeholder="Default input" />
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="option2" name="option2" value="option2" />
                    <label className="form-check-label" for="option2">
                        <input class="form-control" type="text" placeholder="Default input" />
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="option3" name="option3" value="option3" />
                    <label className="form-check-label" for="option3">
                        <input class="form-control" type="text" placeholder="Default input" />
                    </label>
                </div>
                <button type="button" className="btn btn-primary">
                    Add Option
                </button>
                <button type="button" className="btn btn-danger">
                    Remove Option
                </button>
            </div>
        );
    }
}

export default TextRadio;