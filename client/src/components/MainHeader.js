import React from 'react';

const MainHeader = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Help
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Account
                    </a>
                </li>
                <p>
                Dynamic Questionnaire
                </p>
            </ul>
        </div>
    );
};

export default MainHeader;