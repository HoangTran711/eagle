import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons';


function Team({name,major,text,Image,person1,person2,setPeople,people}) {
    const clickChange = (id) => {
        let present = {
            name:name,
            major:major,
            text:text,
            imageUrl:Image
        } 
        if(id === 1 ) {
            setPeople({
                ...people,
                mine:person1,
                anotherPerson: {
                    ...people.anotherPerson,
                    person1:present
                }
            })
        } else {
            setPeople({
                ...people,
                mine:person2,
                anotherPerson: {
                    ...people.anotherPerson,
                    person2:present
                }
            })
        }
    }

    return (
        <div className="infor-team">
            
            <div data-aos="fade-up" className="txt-frame">
                <ul className="txt-frame__team">
                    <li className="header">
                        <h2>
                            <a href="https://www.google.com/" className="name" >{name}</a>
                        </h2>
                        <span className="major">{major}</span>
                        <ul className="social-network">
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
                    </li>
                    <li className="container-description">
                        <p className="description">{text}</p>
                    </li>
                </ul>
                <div className="img-holder">
                    <div className="box">
                        <div className="box__img">
                            <img onClick={() => clickChange(1)} className="img" src={person1.imageUrl} alt="Box 1"/>
                        </div>
                        <div className="box__text">
                            <h3 onClick={(e) => {
                                e.preventDefault();
                                clickChange(1)
                            }}>
                                <a href="#" className="box__text-name">{person1.name}</a>
                            </h3>
                            <span className="designation">{person1.major}</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box__img">
                            <img onClick={() => clickChange(2)}  className="img" src={person2.imageUrl} alt="Box 2"/>
                        </div>
                        <div className="box__text">
                            <h3 onClick={(e) => {
                                e.preventDefault();
                                clickChange(2)
                            }}>
                                <a href="#" className="box__text-name">{person2.name}</a>
                            </h3>
                            <span className="designation">{person2.major}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="information__right">
                <div className="information__right-image">
                    <img src={Image} className="image" alt="Co-founder"/>
                </div>
                <div className="information__right-text">
                    <h2 className="tild">OUR TEAM</h2>
                    <span className="number">02</span>
                    <div className="box">
                        <div className="box-inner">
                            <h3 className="box-inner__name">View all</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Team
