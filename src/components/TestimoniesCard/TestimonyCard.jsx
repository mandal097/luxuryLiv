import React from 'react'
import './style.scss'

const Testimaonialscard = ({ testimony, border }) => {
    return (
        <div className="testimaonials_card" data-aos={testimony.ao} style={{
            border: `${border}px solid goldenrod`
            // border: `${border}px solid var(--border-golden)`
        }}>
            <div className={`testimonials_card_para_div`}>
                {
                    testimony.feedbacktxt.split('\n').map(str => <p className={`${testimony.class}`}>{str}</p>)
                }
            </div>
            <div className="info">
                <h3 className="name">{testimony.name}</h3>
                <p className="profession">{testimony.status}</p>
            </div>
        </div>
    )
}

export default Testimaonialscard;