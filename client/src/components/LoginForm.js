import React from 'react';

class LoginForm extends React.Component {

    state = {
        username: "",
        password: "",
        err: "",
        user: {}
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(this.props.authenticateRoute, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => {
            console.log(res.body)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="form-group">
                        <label for="inputUserName">
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
                        <label for="inputPassword">
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
                </form>
            </div>
        );
    }
}

export default LoginForm;