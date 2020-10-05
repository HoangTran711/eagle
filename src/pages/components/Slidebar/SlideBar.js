import React,{useState,useEffect} from 'react'
import SlickTrack from './SlickTrack/SlickTrack';
function SlideBar() {
    const [preId,setPreId]=useState(1);
    const clickNext = (id) => {
        if(preId === id) {
            return;
        }
        let preNode = 'slick-slide-'+ preId;
        setTimeout(() => {
            document.getElementById(preNode).style.display ="none";
        },300);
        document.getElementById(preNode).style.opacity ="0";
        document.getElementById(preNode).style.visibility ='hidden';
        let temp = 'slick-slide-'+id;
        document.getElementById(temp).style.display ="block";
        setTimeout(() => {
            document.getElementById(temp).style.opacity ="1";
            document.getElementById(temp).style.visibility ='visible';
        },100);
        setPreId(id);
    }
    useEffect(() => {
        let t = setInterval(() => {
            let temp= preId;
            if(temp === 3) {
                clickNext(1);
                setPreId(1);
            } else  {
                clickNext(temp + 1);
                setPreId(temp+1)
            }
            
        },6000)
        return function () {
            clearInterval(t);
        }
    },[preId])
    return (
        <div className="slide-bar">
            <SlickTrack/>
            <ul className="slick-dots">
                <li>
                    <button onClick={() => clickNext(1)} className="slick-dots__item">
                        
                    </button>
                </li>
                <li>
                    <button onClick={() => clickNext(2)} className="slick-dots__item">
                        
                    </button>
                </li>
                <li>
                    <button onClick={() => clickNext(3)} className="slick-dots__item">
                        
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SlideBar
