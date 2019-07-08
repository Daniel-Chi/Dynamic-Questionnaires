import React from 'react';

const WelcomeHeader = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3 className="display-4">
                        Enter a username and password to sign up!
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHeader;