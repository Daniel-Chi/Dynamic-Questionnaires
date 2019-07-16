import React, { Component } from 'react';
import "./container.css"



class Header extends Component {
    componentDidMount(){
        (()=> { 
            setTimeout(function() {
                const ele = document.getElementsByClassName("fly-in-text")
                ele[0].classList.remove("hidden")
                // .classList.remove("hidden");;
            }, 500);
            
        })();
    }


    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid header">
                    <div className="container">

                        <ul className="fly-in-text hidden">
                            <li>W</li>
                            <li>E</li>
                            <li>L</li>
                            <li>C</li>
                            <li>O</li>
                            <li>M</li>
                            <li>E</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

};

export default Header;