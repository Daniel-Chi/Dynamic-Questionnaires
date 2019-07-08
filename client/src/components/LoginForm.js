import React from 'react';

class LoginForm extends React.Component {

    state = {
        username: "",
        password: "",
        err: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res =>{
            this.setState({
                username: "",
                password: ""
            });
        });
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