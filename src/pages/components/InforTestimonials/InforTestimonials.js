import React,{useState} from 'react'
import Umair from '../../../images/test-1.jpg';
import Leonard from '../../../images/test-2.jpg';
import Alpha from '../../../images/test-3.jpg';
import ImgFrame from './ImgFrame/ImgFrame';

function InforTestimonials() {
    const [people,setPeople] = useState({
        mine:{
            id:1,
            name:"Umair Rafi",
            major:"CREATIVE DEVELOPER",
            imageUrl:Umair,
            text:"\"I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing.\""
        }
    })
    return (
        <div className="infor-testimonials">
            <div className="smooth-section" id="section5"></div>
            <div className="container-information">
                <div data-aos="fade-right" className="information__left">
                    <div className="information__left-text">
                        <span className="number">05</span>
                        <h2 className="tild">TESTIMONIALS</h2>
                        <div className="box">
                            <div className="box-inner">
                                <h3 className="box-inner__name">View all</h3>
                            </div>
                        </div>
                    </div>
                </div>  
                <ImgFrame people={people} setPeople={setPeople}/>
            </div>
        </div>
    )
}

export default InforTestimonials
