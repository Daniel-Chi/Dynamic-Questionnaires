import React from 'react';
import Mainheader from '../components/MainHeader';
import MainBody from '../components/MainBody/MainBody';
import Footer from '../components/Footer';

function MainMenu () {
    return(
        <div>
            <Mainheader />
            <MainBody />
            <div className="main">
                <Footer />
            </div>
        </div>
    );
};

export default MainMenu;