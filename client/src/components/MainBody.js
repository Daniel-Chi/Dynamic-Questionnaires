import React from 'react';

class MainBody extends React.Component {

    state = {
        username: this.state.username
    };

    render() {
        return (
            <div>
                <h2>
                    Welcome {{username}}
                </h2>
                <br />
            </div>
        );
    }
}

export default MainBody;