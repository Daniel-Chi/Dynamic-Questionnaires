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
                            <li>D</li>
                            <li>Y</li>
                            <li>N</li>
                            <li>A</li>
                            <li>M</li>
                            <li>I</li>
                            <li>C</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

};

export default Header;