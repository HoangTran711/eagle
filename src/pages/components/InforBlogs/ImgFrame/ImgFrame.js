import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../../../images/blog-1.jpg';
import Image2 from '../../../../images/ blog-2.jpg';


function ImgFrame() {
    return (
        <div data-aos="fade-up" className="img-frame"> 
            <div className="section1">
                <div className="section1__image">
                    <img src={Image1} alt="Image of Section 1" className="img" />
                    <span className="sub-caption">by Leonard, 1 week ago</span>
                </div>
                <div className="txt-frame">
                    <h3>We Do The Best Design</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.</p>
                    <a href="#" className="continue" >Continue <FontAwesomeIcon className="icon" icon={faArrowRight} /></a>
                </div>
            </div>
            <div className="section2">
                <div className="txt-frame">
                    <h3>Friendly For All Devices</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.</p>
                    <a href="#" className="continue" >Continue <FontAwesomeIcon className="icon" icon={faArrowRight} /></a>
                </div>
                <div className="section2__image">
                    <span className="sub-caption">by Leonard, 1 week ago</span>
                    <img src={Image2} alt="Image of Section 2" className="img" />
                    
                </div>
                
            </div>
        </div>
    )
}

export default ImgFrame
