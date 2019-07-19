import React from 'react';
import API from "../../utils/API";

class MainBody extends React.Component {

    state = {
        newFormTitle: "",
        user_id: "",
        formList: []
    }

    componentDidMount() {
        // first, check for authentication
        fetch("/auth")
            .then(res => res.json())
            .then(resJSON => {
                //store user_id in state on successful auth
                if (resJSON._id) {
                    this.setState({ user_id: resJSON._id }, this.getAllForms(resJSON._id));
                } else {
                    //redirect to login on failed auth
                    this.props.historyPush("/");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    //function to get all forms owned by a user
    getAllForms = (id) => {
        API.getAllForms(id)
            .then(res => {
                if (res.data && Array.isArray(res.data.flowchartIds)) {
                    this.setState({ formList: res.data.flowchartIds });
                } else if (res.data) {
                    this.setState(prevState => {
                        prevState.formList.push(res.data.flowchartIds)
                        return { formList: prevState.formList }
                    })
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    //function for adding a new form to db on submission, then adds the new form to state
    handleSubmitNewForm = event => {
        event.preventDefault();
        API.postNewForm(this.state.user_id, { name: this.state.newFormTitle })
            .then(res => {
                this.setState((prevState) => {
                    if (res.data) {
                        const newForm = {
                            name: this.state.newFormTitle,
                            _id: res.data
                        }
                        const arr = prevState.formList
                        arr.push(newForm)
                        return {
                            formList: arr,
                            newFormTitle: ""
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    //function to handle input changes affecting this component's state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //button click handler to redirect from index to detail page
    //gives _id as a url param
    handleRedirect = event => {
        event.preventDefault();
        const url = "/questionnaire/" + event.target.name + "/" + event.target.value
        this.props.historyPush(url)
    }

    //function that returns JSX of a list of all forms
    listAllForms = () => {
        if (this.state.formList.length > 0) {
            return (
                <ul>
                    {this.state.formList.map(
                        (item) => {
                            return (
                                <li key={item._id}>
                                    <button
                                        onClick={this.handleRedirect}
                                        value={item._id}
                                        name={item.name}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        }
                    )}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="new">
                <form onSubmit={this.handleSubmitNewForm}>
                    <div className="form-group">
                        {this.listAllForms()}
                        <input
                            name="newFormTitle"
                            value={this.state.newFormTitle}
                            onChange={this.handleInputChange}
                            className="form-control"
                            id="newQuestionnaire"
                            placeholder="Enter the name of your questionnaire here"
                        />
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