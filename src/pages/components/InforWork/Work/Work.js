import React,{useState} from 'react'
import ImageFrame from './ImageFrame/ImageFrame';

function Work() {
    const [preId,setPreId] = useState(null);
    const changeImage = (id) => {
        if(window.innerWidth < 1024) {
            switch(id){
                case 1: {
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(-47rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = " scale(1) translateX(47rem) ";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1)";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity ="1";
                    break;
                }
                case 2: {
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(-94rem,25.35rem) ";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(1) translate(47rem,-25.35rem)";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "0";
                    break;
                }
                case 3:{
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translateY(25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translateX(47rem) ";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity = "0";
                    break;
                }
                case 4: {
                    document.querySelector(".img-frame__item"+(id-3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-3)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translate(-47rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(1) translateY(-25.35rem)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity ="1";
                    
                    break;
                }
                case 5: {
                    document.querySelector(".img-frame__item"+(id-4)).style.transform = "scale(1) translateY(25.35rem)";
                    document.querySelector(".img-frame__item"+(id-4)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-3)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translate(-47rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(1) translate(94rem,-25.35rem)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "0";
                    break;
                }
                default: {
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+6)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+6)).style.opacity = "1";
                }
            }
        } else {
            switch(id){
                case 1: {
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(-32rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = " scale(1) translateX(32rem) ";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1)";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity ="1";
                    break;
                }
                case 2: {
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(-64rem,25.35rem) ";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(1) translate(32rem,-25.35rem)";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "0";
                    break;
                }
                case 3:{
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translateY(25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translateX(32rem) ";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity = "0";
                    break;
                }
                case 4: {
                    document.querySelector(".img-frame__item"+(id-3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-3)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translate(-32rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(1) translateY(-25.35rem)";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity ="1";
                    
                    break;
                }
                case 5: {
                    document.querySelector(".img-frame__item"+(id-4)).style.transform = "scale(1) translateY(25.35rem)";
                    document.querySelector(".img-frame__item"+(id-4)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-3)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-3)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id-2)).style.transform = "scale(1) translate(-32rem,25.35rem)";
                    document.querySelector(".img-frame__item"+(id-2)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id-1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id-1)).style.opacity = "0";
                    document.querySelector(".img-frame__item"+(id)).style.transform = "scale(1) translate(64rem,-25.35rem)";
                    document.querySelector(".img-frame__item"+(id)).style.opacity ="1";
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(0)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "0";
                    break;
                }
                default: {
                    document.querySelector(".img-frame__item"+(id+1)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+2)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+3)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+4)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+5)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+6)).style.transform = "scale(1) translate(0rem,0rem)";
                    document.querySelector(".img-frame__item"+(id+1)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+2)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+3)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+4)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+5)).style.opacity = "1";
                    document.querySelector(".img-frame__item"+(id+6)).style.opacity = "1";
                }
            }
        }
    }
    const clickChange = (id) => {
        if(preId !== id) {
            let node = document.querySelectorAll(".list__item");
            if(!preId) {
                node[0].parentElement.classList.remove("active");
                node[id].parentElement.classList.add("active");
            } else {
                node[preId].parentElement.classList.remove("active");
                node[id].parentElement.classList.add("active");
            }
            setPreId(id);
        }
        
    }
    return (
        <div className="infor-work">
            <div className="smooth-section" id="section3"></div>
            <div className="container-information">
                <div data-aos="fade-right" className="information__left">
                    <div className="information__left-text">
                        <span className="number">03</span>
                        <h2 className="tild">OUR WORKS</h2>
                        <ul className="list">
                            <li className="active" >
                                <a onClick={() => {
                                    clickChange(0);
                                    changeImage(0);
                                }} className="list__item">All</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    clickChange(1);
                                    changeImage(1);
                                }} className="list__item">Photography</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    clickChange(2);
                                    changeImage(2);
                                }} className="list__item">Branding</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    clickChange(3);
                                    changeImage(3);
                                }} className="list__item">Web Design</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    clickChange(4);
                                    changeImage(4);
                                }} className="list__item">Motion Graphic</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    clickChange(5);
                                    changeImage(5);
                                }} className="list__item">Illustration</a>
                            </li>
                        </ul>
                        <div className="box">
                            <div className="box-inner">
                                <h3 className="box-inner__name">View all</h3>
                            </div>
                        </div>
                    </div>
                </div>  
                <ImageFrame/>
            </div>
        
        </div>
    )
}

export default Work
