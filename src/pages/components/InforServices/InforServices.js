import React,{useState} from 'react'
import TxtFrame from './TxtFrame/TxtFrame';
function InforServices() {
    const [infor,setInfor] = useState([{
        id:1,
        title:"HANDICRAFTS",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:2,
        title:"BRANDING DESIGN",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:3,
        title:"DIGITAL GRAPHICS",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:4,
        title:"MARKETING",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:5,
        title:"COFFEE & RESTAURANT",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:6,
        title:"FURNITURE DESIGN",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:7,
        title:"AWESOME SUPPORT",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:8,
        title:"EASY TO CUSTOMIZE",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }, {
        id:9,
        title:"PROTECT SOLUTIONS",
        content:"Phasellus ut condimentum diam, eget tempus lorem. Morbi bibendum est quis arcu posuere condimentum. Nullam justo eros."
    }])
    return (
        <div className="infor-services">
            <div className="smooth-section" id="section4"></div>
            <div className="container-services">
                <TxtFrame infor={infor}/>
                <div data-aos="fade-left" className="information__right">
                    <div className="information__right-text">
                        <h2 className="tild">OUR SERVICES</h2>
                        <span className="number">04</span>
                        <div className="box">
                            <div className="box-inner">
                                <h3 className="box-inner__name">Order Services</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default InforServices
