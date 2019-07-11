import React from 'react';

const WelcomeHeader = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">
                        Welcome to Dynamic Questionnaire!
                    </h1>
                    <p className="lead">
                        Enter a username and password to sign up!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHeader;