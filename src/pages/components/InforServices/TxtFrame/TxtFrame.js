import React from 'react'

function TxtFrame({infor}) {
    return (
        <div data-aos="fade-up" className="txt-frame">
            <ul className="services__list">
                {infor.map((a,index) => {
                    return <li key={index} className="item">
                        <h3 className="title">{a.title}</h3>
                        <p className="content">{a.content}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default TxtFrame
