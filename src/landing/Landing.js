import React, {useEffect} from 'react';
import './styles.css';
import logo from "../assets/id_visual/logo.svg";
import eye from "../assets/icons/icon-eye.svg";
import eyeSlash from "../assets/icons/icon-eye-show.svg";
import detail from "../assets/images/detail.svg";
import {Link} from "react-router-dom";
import $ from 'jquery';

export default function Landing (){
    /* SHOW PASSWORD */
    const mostrarSenha = async () => {
        let tipo = document.getElementById('pass');

        if(tipo.type === "password"){
            tipo.type = "text";
            document.getElementById('icon_eyeSlash').style.display = 'block';
            document.getElementById('icon_eye').style.display = 'none';
        }else{
            tipo.type = "password";
            document.getElementById('icon_eyeSlash').style.display = 'none';
            document.getElementById('icon_eye').style.display = 'block';
        }
    }
    
    useEffect(() =>{
       
        /* HAMBURGUER MENU ANIMATION */
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
    },[]);

    return(
        <div className="body container-fluid inicialsite initial-container">
            <div>
                {/* NAVBAR */}
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top">
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
                            <li className="nav__link-get-stated">
                                <button type="button" className="btn__get-started" data-toggle="modal" data-target="#exampleModalCenter">Get Started</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* MODAL LOGIN */}
                <div className="modal fade modal__full" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal__card-container" role="document">
                        <div className="modal-content modal__card " >
                            <div className="modal-header" style={{border: "none"}}>
                                <h3 className="modal-title modal__title" id="exampleModalLongTitle">
                                    Get Started <br/> <span className="modal__subtitle">JUST LOGIN</span>
                                </h3>
                                <button id="btn__close" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-details="none">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{display: 'block'}}>
                                <form action="" method="POST">
                                    {/* USERNAME */}
                                    <label className="input__login-label" htmlFor="username">Username:</label>
                                    <input type="text" className="input__login" required/>
                                    {/* PASSWORD */}
                                    <label className="input__login-label" htmlFor="password">Password:</label>
                                    <div className="content__pass">
                                        <input type="password" className="input__login input__login-password" id="pass" required/>
                                        <span className="input-icon">
                                            <button type="button" className="icon__see-password" onClick={() => mostrarSenha()}>
                                                <img id="icon_eye" src={eye} alt=""/>
                                                <img id="icon_eyeSlash" src={eyeSlash} alt="" style={{display: "none"}}/>
                                            </button>
                                        </span>
                                    </div>
                                    {/* SUBMIT */}
                                    <div className="modal-footer" style={{border: "none", padding: "15px 0"}}>
                                        <button type="submit" className="btn__get-started">LOGIN</button>
                                    </div>
                                </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTENT */}
            <section className="content__center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-xs-12 datail">
                            <img src={detail} alt="detail" className="detail__image"/>
                        </div>
                        <div className="col-12 col-md-7 col-xs-12" style={{height: "580px"}}>
                            <div className="form__container">
                                <form action="">
                                    <h3 className="form__title">
                                        Find your <br/> <span className="form__subtitle">BEST TEACHER</span>
                                    </h3>
                                    <br/>
                                    <p className="text__form">
                                    Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
                                    </p>
                                    <br/>
                                    <input placeholder="Type here what are you looking for" type="text" className="input__login" style={{color: "#ffffff"}}/>
                                    <div className="row" style={{margin: "20px 0"}}>
                                        <div className="col-12 col-md-7 col-xs-12" style={{ padding: "0"}}>
                                            <div className="btn__perfil-container">
                                                <label className="btn__perfil">I´M TEACHER
                                                    <input id="check" type="radio" checked="checked" name="radio"/>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="btn__perfil">I´M STUDENT
                                                    <input id="check" type="radio" name="radio" autoFocus/>
                                                    <span class="checkmark"></span>
                                                </label> 
                                            </div>                                                                                           
                                        </div>
                                        <div className="col-12 col-md-5 col-xs-12" style={{ padding: "0"}}>
                                            <button type="button" className="btn__search">SEARCH</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>        
    );
}
