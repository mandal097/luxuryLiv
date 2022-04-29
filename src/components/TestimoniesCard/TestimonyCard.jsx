import React from 'react'
import './style.scss'
const Testimaonialscard = ({ testimony }) => {
    return (
        <div className="testimaonials_card" data-aos={testimony.ao}>
            <div className="testimonials_card_para_div">
                <p>{testimony.feedbacktxt}</p>
            </div>
            <div className="info">
                <h3 className="name">{testimony.name}</h3>
                <p className="profession">{testimony.status}</p>
            </div>
        </div>
    )
}

export default Testimaonialscard;