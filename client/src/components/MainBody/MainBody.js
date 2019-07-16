import React from 'react';

class MainBody extends React.Component {

    state = {
        newFormTitle: "",
        user_id: ""
    }

    componentWillMount() {
        fetch("/auth")
            .then(res => res.json())
            .then(resJSON => {
                if (resJSON._id) {
                    this.setState({ user_id: resJSON._id })
                } else {
                    this.props.historyPush("/");
                }
            });
    };


    render() {
        return (
            <div className="new">
                <form>
                    <div className="form-group">
                        <label htmlFor="newQuestionnaire">
                            Add New Questionnaire
                        </label>
                        <input className="form-control" id="newQuestionnaire" placeholder="Enter the name of your questionnaire here" />
                        <button type="submit" className="btn btn-primary">
                            <img src={require('./images/plus-sign.png')} alt="add" />
                        </button>
                    </div>
                </form>
            </div>
        );
    };
}

export default MainBody;