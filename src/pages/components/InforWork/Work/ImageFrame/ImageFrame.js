import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt, faPaperclip} from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../../../../images/img1.jpg';
import Image2 from '../../../../../images/img2.jpg';
import Image3 from '../../../../../images/img3.jpg';
import Image4 from '../../../../../images/img4.jpg';
import Image5 from '../../../../../images/img5.jpg';
import Image6 from '../../../../../images/img6.jpg';

function ImageFrame() {
    return (
        <div data-aos="fade-up" className="img-frame">
            <div className="img-frame__item1">
                <img src={Image1} alt="Image 1" className="img1" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame__item2">
                <img src={Image2} alt="Image 2" className="img2" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame__item3">
                <img src={Image3} alt="Image 3" className="img3" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame__item4">
                <img src={Image4} alt="Image 4" className="img4" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame__item5">
                <img src={Image5} alt="Image 5" className="img5" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-frame__item6">
                <img src={Image6} alt="Image 6" className="img6" />
                <div className="txt-frame">
                    <h3 className="title">Amber Bottle</h3>
                    <p className="content">Branding Identity</p>
                    <div className="container-icon">
                        <div className="full-screen">
                            <FontAwesomeIcon className="icon" icon={faExpandArrowsAlt}/>
                        </div>
                        <div className="attach">
                            <FontAwesomeIcon className="icon" icon={faPaperclip} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageFrame
