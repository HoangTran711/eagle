import React from 'react';
import TxtFrame from './TxtFrame/TxtFrame';

function InforPrice() {
    return (
        <div className="infor-price">
            <div className="smooth-section" id="section7"></div>
            <div className="container-information">
                <div data-aos="fade-right" className="information__left">
                        <div className="information__left-text">
                            <span className="number">07</span>
                            <h2 className="tild">Pricing</h2>
                            <div className="box">
                                <div className="box-inner">
                                    <h3 className="box-inner__name">View all</h3>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <TxtFrame/>
                </div>
                
        </div>
    )
}

export default InforPrice
