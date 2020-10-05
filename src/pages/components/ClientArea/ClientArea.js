import React from 'react'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot,faHeart,faBriefcase,faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb} from '@fortawesome/free-regular-svg-icons'


function ClientArea() {
    return (
        <ul data-aos="fade-up" className="client-area">
            <li className="item">
                <FontAwesomeIcon className="icon" icon={faMugHot}/>
                <p>Coffee Cups</p>
                <CountUp end={Math.floor((Math.random() * 100) + 1)} duration={2} />
            </li>
            <li className="item">
                <FontAwesomeIcon className="icon" icon={faHeart}/>
                <p>Happy Clients</p>
                <CountUp end={Math.floor((Math.random() * 100) + 1)} duration={2} />
            </li>
            <li className="item">
                <FontAwesomeIcon className="icon" icon={faBriefcase}/>
                <p>Projects</p>
                <CountUp end={Math.floor((Math.random() * 100) + 1)} duration={2} />
            </li>
            <li className="item">
                <FontAwesomeIcon className="icon" icon={faLightbulb}/>
                <p>Working days</p>
                <CountUp end={Math.floor((Math.random() * 100) + 1)} duration={2} />
            </li>
            <li className="item">
                <FontAwesomeIcon className="icon" icon={faUserPlus}/>
                <p>Team Members</p>
                <CountUp end={Math.floor((Math.random() * 100) + 1)} duration={2} />
            </li>
        </ul>
    )
}

export default ClientArea
