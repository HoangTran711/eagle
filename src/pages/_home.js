import React from 'react'
import NavBar from './components/NavBar/NavBar';
import SlideBar from './components/Slidebar/SlideBar';
import Infor from './components/Infor/Infor';
import InforTeam from './components/InforTeam/InforTeam';
import Work from './components/InforWork/Work/Work'
import InforServices from './components/InforServices/InforServices';
import InforTestimonials from './components/InforTestimonials/InforTestimonials';
import InforBlogs from './components/InforBlogs/InforBlogs';
import InforPrice from './components/InforPrice/InforPrice';
import ClientArea from './components/ClientArea/ClientArea';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
function _home() {
    return (
        <div className="home">
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            <NavBar/>
            <SlideBar/>
            <Infor/>
            <InforTeam/>
            <Work />
            <InforServices />
            <InforTestimonials/>
            <InforBlogs/>
            <InforPrice/>
            <ClientArea/>
            <Footer/>
            
        </div>
    )
}

export default _home
