import React from 'react'
import ImgFrame from './ImgFrame/ImgFrame';
function InforBlogs() {
    return (
        <div className="infor-blogs">
            <div className="smooth-section" id="section6"></div>
            <div className="container-information">
                <ImgFrame/>
                <div data-aos="fade-left" className="information__right">
                    <div className="information__right-text">
                        <h2 className="tild">OUR BLOGS</h2>
                        <span className="number">06</span>
                        <div className="box">
                            <div className="box-inner">
                                <h3 className="box-inner__name">View All</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default InforBlogs
