import React from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> 5b39a929064226ce5a2f6757778d293be43e4165
                </div>
            </div>
        );
    }
}

export default MainBody;