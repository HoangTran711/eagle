import React from 'react';
import Logo from '../../../images/logo-footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="f1">
                    <div className="holder">
                        <div className="logo-footer">
                            <strong>
                                <a href="#" >
                                    <span>#</span>
                                    <span className="logo">
                                        <img src={Logo} alt="Logo footer" className="img"  />
                                    </span>
                                </a>
                            </strong>
                        </div>
                        <div className="footer-txt">
                            <div className="text">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.</p>
                                <div className="contact">
                                    <span className="address">
                                        <span className="stt">A:</span>
                                        <span className="txt">No 40 Baria Sreet 133/2 NewYork City, NY, United States</span>
                                    </span>
                                    <span className="email" >
                                        <span className="stt">E:</span>
                                        <span className="txt">tranhoang.finizz@gmail.com</span>
                                    </span>
                                    <span className="phone">
                                        <span className="stt">P:</span>
                                        <span className="txt">(00) 123 456 789</span>
                                    </span>
                                </div>
                            </div>
                            <ul className="testimonials">
                                <li>
                                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                                    <span className="name">@Leonard design </span>
                                    <p>I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                                    <span className="name">@Leonard design </span>
                                    <p>I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="icon" icon={faTwitter}/>
                                    <span className="name">@Leonard design </span>
                                    <p>I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing</p>
                                </li>
                            </ul>
                            <div className="sending-emails">
                                <h2 className="header">We will love to hear from you!</h2>
                                <div className="form">
                                    <input type="text" className="name" placeholder="Name" />
                                    <input type="text" className="email" placeholder="Email" />
                                    <input type="text" className="component" placeholder="Your component" />
                                    <div className="btn">
                                        <a href="#" className="link">Send Messages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
