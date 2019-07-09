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
                        </div>
                        <div className="col-sm">
                            Add a New Questionnaire
                        </div>
                        <div className="col-sm">
                            Edit a Questionnaire
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBody;