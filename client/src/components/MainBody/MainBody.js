import React from 'react';

class MainBody extends React.Component {

    state = {
        newFormTitle: "",
        user_id: "",
        formList: [{
            name: "Eye Care",
            _id: "1"
        }, {
            name: "Dental",
            _id: "2"
        }, {
            name: "Chiropractor",
            _id: "3"
        }]
    }

    //before mount, check for authentication
    componentWillMount() {
        fetch("/auth")
            .then(res => res.json())
            .then(resJSON => {
                //store user_id in state on successful auth
                if (resJSON._id) {
                    this.setState({ user_id: resJSON._id })
                } else {
                    //redirect to login on failed auth
                    this.props.historyPush("/");
                }
            });
    };

    //TODO populate formList from api on mount
    componentDidMount() {

    }

    //button click handler to redirect from index to detail page
    handleRedirect = event => {
        event.preventDefault();
        const url = "/questionnaire/" + event.target.value
        this.props.historyPush(url)
    }

    //function that returns JSX of a list of all forms
    listAllForms = () => {
        return (
            <ul>
                {this.state.formList.map(
                    item => {
                        return (
                            <li key={item._id}>
                                <button
                                    onClick={this.handleRedirect}
                                    value={item._id}
                                >
                                    {item.name}, ID: {item._id}
                                </button>
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }

    render() {
        return (
            <div className="new">
                <form>
                    <div className="form-group">
                        {this.listAllForms()}
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