import React,{useState} from 'react';
import Umair from '../../../../images/test-1.jpg';
import Leonard from '../../../../images/test-2.jpg';
import Alpha from '../../../../images/test-3.jpg';

function ImgFrame({people,setPeople}) {
    const [preId,setPreId] = useState('');
    const clickChange = (id) => {
        if(id === 1 ) {
            if(preId !== '') {
                document.querySelector(preId).style.boxShadow="none";
            }
            document.querySelector(".team-img .img1").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            setPreId(".team-img .img1");
            setPeople({
                mine:{
                    id:1,
                    name:"Umair Rafi",
                    major:"CREATIVE DEVELOPER",
                    imageUrl:Umair,
                    text:"\"I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing.\""
                }
            })
        } else if(id === 2) {
            if(preId !== '') {
                document.querySelector(preId).style.boxShadow="none";
            }
            document.querySelector(".team-img .img2").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            setPreId(".team-img .img2");
            setPeople({
                mine:{
                id:2,
                name:"Kawhi Leonard",
                major:"CREATIVE DIRECTOR",
                imageUrl:Leonard,
                text:"\"I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing.\""
                },
            })
        } else {
            if(preId !== '') {
                document.querySelector(preId).style.boxShadow="none";
            }
            document.querySelector(".team-img .img3").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            setPreId(".team-img .img3");
            setPeople({
                mine:{
                    id:3,
                    name:"Leo Alpha",
                    major:"UI/UX DIRECTOR",
                    imageUrl:Alpha,
                    text:"\"I am so happy because I found this Eagleeyes, and it just made my life easier. Thanks so much for sharing.\""
                }
            })
        }
    }

    return (
        <div  className="img-frame">
            <div data-aos="fade-up" className="img-frame__slider">
                <div className="mask">
                    <div className="slide">
                        <p className="content">{people.mine.text}</p>
                        <h3 className="name">{people.mine.name}</h3>
                        <span className="major">{people.mine.major}</span>
                        <div className="team-img">
                            <div className="img1">
                                <img onClick={() => clickChange(1)} className="img" alt="1" src={Umair}/>
                            </div>
                            <div className="img2">
                                <img onClick={() => clickChange(2)} className="img" alt="1" src={Leonard}/>
                            </div>
                            <div className="img3">
                                <img onClick={() => clickChange(3)} className="img" alt="1" src={Alpha}/>
                            </div>
                        </div>
                    </div>
                    <div className="main-img">
                        <img className="img" alt="Main Img" src={people.mine.imageUrl}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgFrame
