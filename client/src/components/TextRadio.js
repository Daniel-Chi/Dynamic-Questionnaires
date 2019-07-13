import React, { Component } from "react";

class TextRadio extends Component {
  constructor() {
    super();

    this.state = {
      radioButtons: []
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
  };

  addBox = () => {
    this.setState(prevstate => {
      let radioButtons = prevstate.radioButtons;
      if (radioButtons.length === 0) {
        radioButtons.push({
          id: 1,
          name: "radiobutton",
          value: "test"
        });
        return {
          radioButtons: radioButtons
        };
      } else {
        radioButtons.push({
          id: radioButtons[radioButtons.length - 1].id + 1,
          name: "raiodButton_" + (radioButtons[radioButtons.length - 1].id + 1),
          value: radioButtons[radioButtons.length - 1].value
        });
        return {
          radioButtons: radioButtons
        };
      }
    });
  };

  removeBox = () => {
    this.setState(prevstate => {
      let radioButtons = prevstate.radioButtons;
      if (radioButtons.length !== 0) {
        radioButtons.pop(radioButtons[radioButtons.length - 1]);
        return {
          radioButtons: radioButtons
        };
      } else {
        return { radioButtons: radioButtons };
      }
    });
  };

  render() {
    return (
      <div className="option-container">
        <div className="form-check">
          {this.state.radioButtons.map(radiobutton => {
            return (
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id={radiobutton.id}
                  name={radiobutton.name}
                  value={radiobutton.value}
                />
                <label className="form-check-label" for="">
                  <input class="form-control" type="text" placeholder="" />
                </label>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-primary" onClick={this.addBox}>
          Add Option
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.removeBox}
        >
          Remove Option
        </button>
      </div>
    );
  }
}

export default TextRadio;
