import React from 'react'
import Image from '../../../images/CEO.jpg';
import Signature from '../../../images/sign.jpg';
function Infor() {
    return (
        <div className="container-infor">
            <div  className="information">
                <div id="section1" className="smooth-section"></div>
                <div  className="container-left-right">
                    <div data-aos="fade-left" className="information__left">
                        <div className="information__left-text">
                            <span className="number">01</span>
                            <h2 className="tild">ABOUT US</h2>
                            <div className="box">
                                <div className="box-inner">
                                    <h3 className="box-inner__name">Louis Frank</h3>
                                    <p className="box-inner__description">Co-Founder at Eagleeyes</p>
                                </div>
                            </div>
                        </div>
                        <div className="information__left-image">
                            <img src={Image} className="image" alt="Co-founder"/>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="information__right">
                        <div className="txt-frame">
                            <h3 className="">About Us</h3>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                        <div className="signature">
                            <img src={Signature} className="signature__image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infor
