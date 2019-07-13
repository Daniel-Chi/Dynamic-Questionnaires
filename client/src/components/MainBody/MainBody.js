import React from 'react';

class MainBody extends React.Component {

    state = {
        newFormTitle: ""
    }



    render() {
        fetch("/index")
            .then(res => res.json())
            .then(resJSON => {
                
            })
        return (
            <div>
                <h2>
                    Welcome
                </h2>
                <div className="new">
                    <form>
                        <div className="form-group">
                            <label htmlFor="newQuestionnaire">
                                Add New Questionnaire
                            </label>
                            <input className="form-control" id="newQuestionnaire" placeholder="Enter the name of your questionnaire here" />
                            <button type="submit" className="btn btn-primary">
                                <img src={require('./images/plus-sign.png')} alt="add" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default MainBody;