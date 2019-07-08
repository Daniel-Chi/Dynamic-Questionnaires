import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid header">
                <div className="container">
                    <h1 className="display-4">
                        Welcome to Dynamic Questionnaire!
                    </h1>
                    <div className="button-pos">
                        <button type="button" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;