import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons'

function SlickSlide({imageUrl,id}) {
    return (
        <div className="slick-slide" id={id}>
            <div className="slick-slide__container">
                <div className="slick-slide__caption">
                    <span className="slick-slide__caption-text">We Love To</span>
                    <h1>
                        <div className="header">
                            <span className="icon">#</span>
                            <span className="light">UNIQUE</span>
                        </div>
                        <span className="add">creative</span>
                        <span className="add2">Passion</span>
                    </h1>
                </div>
                <div className="slick-slide__image">
                    <img src={imageUrl} alt="Image" className="image" />
                </div>
                <div className="slick-slide__box"></div>
            </div>
            <ul className="slick-slide__social-list">
                <li>
                    <a href="https://www.google.com/" className="item">
                        <FontAwesomeIcon className="icon-facebook" icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/" className="item">
                        <FontAwesomeIcon className="icon-twitter" icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/" className="item">
                        <FontAwesomeIcon className="icon-google" icon={faGoogle} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SlickSlide
