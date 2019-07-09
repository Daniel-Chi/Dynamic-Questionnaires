import React from 'react';

class MainBody extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Welcome 
                </h2>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            View All Questionnaires
                            <img src={require("./images/eye.jpg")} />
                        </div>
                        <div className="col-sm">
                            Add a New Questionnaire
                            <img src={require("./images/plus-sign.png")} />
                        </div>
                        <div className="col-sm">
                            Edit a Questionnaire
                            <img src={require("./images/tools.png")} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBody;