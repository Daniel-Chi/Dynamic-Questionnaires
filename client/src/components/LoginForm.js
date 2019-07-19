import React from 'react';

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    };

    //before mount, check for authentication
    //redirect to index if already authenticated
    componentWillMount() {
        fetch("/auth")
            .then(res => res.json())
            .then(resJSON => {
                if (resJSON._id) {
                    this.props.historyPush("/index");
                }
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        //post route to login/signup handled in express server
        fetch(this.props.authenticationRoute, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => res.json())
            .then(resJSON => {
                //on successful login/signup, redirect to index
                if (resJSON._id) {
                    this.props.historyPush("/index")
                }
            })
            .catch(err => console.log(err));
    }

    //function for button onClick to switch pages between login and signup
    redirectOtherAuth = () => {
        this.props.historyPush(this.props.otherAuth)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="form-group">
                        <label htmlFor="inputUserName">
                            Username:
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="inputUserName"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="inputPassword"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <div className="button-pos">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.redirectOtherAuth}
                        >
                            {this.props.otherAuth}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;