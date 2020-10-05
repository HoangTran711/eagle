import React from 'react'
import SlickSlide from './SlickSlide/SlickSlide';
import Image1 from '../../../../images/img001.jpg';
import Image2 from '../../../../images/img002.jpg';
import Image3 from '../../../../images/img003.jpg';
function SlickTrack() {
    return (
        <div className="slick-track">
            <SlickSlide imageUrl={Image1} id="slick-slide-1" />
            <SlickSlide imageUrl={Image2} id="slick-slide-2"/>
            <SlickSlide imageUrl={Image3} id="slick-slide-3" /> 
        </div>
    )
}

export default SlickTrack
