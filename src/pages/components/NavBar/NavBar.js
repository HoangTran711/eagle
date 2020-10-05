import React,{useEffect,useState} from 'react'
import Search from './_search/_search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../images/logo.svg'
import $ from 'jquery';

function NavBar() {
    const [preId,setPreId] = useState('');
    useEffect(() => {
        if ($(window).width() > 992) {
            let node =document.querySelectorAll(".navbar-right__collapse-nav li")
            $(window).scroll(function(){  
                var sticky = document.querySelector('.container-navbar'),
                    scroll = $(window).scrollTop();
                if(scroll >=0 && scroll < 469) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 0) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[0].id="active"
                }
                if(scroll >= 469 && scroll < 1269) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 1) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[1].id="active"
                }
                if(scroll >=1269 && scroll < 2150) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 2) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[2].id="active"
                }
                if(scroll >= 2150 && scroll <  2975) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 3) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[3].id="active"
                    
                }
                
                if(scroll >= 4686 && scroll < 5507) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 4) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[4].id="active"
                }
                if(scroll >= 5507 ) {
                    for(let i = 0 ; i< node.length; i++) {
                        if(node[i] !== 5) {
                            node[i].removeAttribute("id");
                        }
                    }
                    node[5].id="active"
                }
                if (scroll >= 70) { 
                    
                    sticky.id = "fixed" }
                else { 
                    sticky.removeAttribute("id");
                }
                if ($(this).scrollTop() > 200) {
                    document.querySelector(".scroll").style.transform = "translateY(0rem)";
                    document.querySelector(".scroll").style.opacity = "1";
                } else {
                    document.querySelector(".scroll").style.transform = "translateY(25rem)";
                    document.querySelector(".scroll").style.opacity = "0";
                }
            });
        }
    },[preId]);
    
    const menuClick = () => {
        
        if(document.querySelector(".navbar-right__collapse-nav").style.height !== "220px") {
            document.querySelector(".navbar-right__collapse-nav").style.height = "220px";
            document.querySelector(".menu-bar").style.backgroundColor="#BDBDBD";
        } else {
            document.querySelector(".navbar-right__collapse-nav").style.height = 0;
            document.querySelector(".menu-bar").style.backgroundColor="white";
        }
    }
    return (
        <div className="container-navbar">
            <div className="navbar">
                <strong className="navbar__logo"><span className="icon">#</span><span className="text"><img src={Logo} alt="EAGLEEYES" /></span></strong>
                <div className="navbar-right">
                    <div className="navbar-right__collapse">
                        <ul className="navbar-right__collapse-nav">
                            <li>
                                <a href="#" className="item" id="home">Home</a>
                            </li>
                            <li>
                                <a href="#section1" className="item" id="about">About Us</a>
                            </li>
                            <li>
                                <a href="#section2" className="item" id="team">Our Team</a>
                            </li>
                            <li>
                                <a href="#section3" className="item" id="work">Our Work</a>
                            </li>
                            <li>
                                <a href="#section6" className="item" id="blogs">Our Blog</a>
                            </li>
                            <li>
                                <a href="#section7" className="item"id="price">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-right__search">
                        <Search />
                        <div className="navbar-right__search__email">
                            <FontAwesomeIcon className="navbar-right__search__email-icon" icon={faEnvelope}/>
                        </div>
                    </div>
                    <div className="menu-bar" onClick={menuClick}>
                        <FontAwesomeIcon className="icon" icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
