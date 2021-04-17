import React, {useEffect} from 'react';
import './styles.css';
import logo from "../assets/id_visual/logo.png";
import {Link} from "react-router-dom";
import $ from 'jquery';

/* link do BOOTSTRAP REACT */
/* https://react-bootstrap.netlify.app/getting-started/introduction */
export default function Landing (){

    useEffect(() =>{
        setTimeout(() => {
            const $button = $('#burger');
            const $navLinkWrapper = $('.nav__link-wrapper');
    
            $button.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $button.find('.nav__burger-inner').toggleClass('active');    
                $navLinkWrapper.toggleClass('expanded');
            });   
        });
    }, []);

    return(
        <div className="body container-fluid inicialsite initial-container">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container-fluid container">
                        <button id="burger" className="nav__burger-button">
                            <div className="nav__burger">
                                <div className="nav__burger-inner"></div>
                            </div>
                        </button>
                        <Link to="/" className="logo"><img src={logo} style={{width: 100}} alt="logo eduick"/></Link>
                        <ul className="nav__link-wrapper">
                            <li className="nav__link"><Link to="/">How it Works</Link></li>
                            <li className="nav__link"><Link to="/">About Us</Link></li>
                            <li className="nav__link-get-stated"><button type="button" className="btn__get-started" data-toggle="modal" data-target="#exampleModalCenter">Get Started</button></li>
                        </ul>
                    </div>
                </nav>
                <div className="modal fade modal__full" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content modal__card">
                            <div className="modal-header" style={{border: "none"}}>
                                <h3 className="modal-title modal__title" id="exampleModalLongTitle">
                                    Get Started <br/> <span className="modal__subtitle">JUST LOGIN</span>
                                </h3>
                                <button id="btn__close" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-details="none">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{display: 'block'}}>
                                <label className="input__login-label" htmlFor="username">Username:</label>
                                <input type="text" className="input__login"/>
                                <label className="input__login-label" htmlFor="password">Password:</label>
                                <div className="content__pass">
                                    <input type="password" className="input__login input__login-password" id="pass"/>
                                    <span class="input-icon">
                                        <button class="fa fa-eye icon__see-password"></button>
                                    </span>
                                </div>
                            </div>
                            <div className="modal-footer" style={{border: "none"}}>
                                <button type="button" className="btn__get-started">LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
