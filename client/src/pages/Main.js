import React from 'react';
import Mainheader from '../components/MainHeader';
import MainBody from '../components/MainBody/MainBody';
import Footer from '../components/Footer';

function MainMenu (props) {
    return(
        <div>
            <Mainheader />
            <MainBody historyPush={props.history.push} />
            <div className="main">
                <Footer />
            </div>
        </div>
    );
};

export default MainMenu;