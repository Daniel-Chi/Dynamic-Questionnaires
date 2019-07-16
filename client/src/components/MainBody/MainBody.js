import React from 'react';

const MainBody = () => (
    <div>
        <h2>
            Welcome
        </h2>
        <div className="new">
            <form>
                <div className="form-group">
                    <label for="newQuestionnaire">
                        Add New Questionnaire
                    </label>
                    <input className="form-control" id="newQuestionnaire" placeholder="Enter the name of your questionnaire here" />
                    <button type="submit" className="btn btn-primary">
                        <img src={require('./images/plus-sign.png')} />
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default MainBody;