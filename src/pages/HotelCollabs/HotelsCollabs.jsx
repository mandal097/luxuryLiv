import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './style.scss'
const HotelsCollabs = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Hotels collabs'
    })
    return (
        <div className='hotels_collabs'>
            <Header />
            <div className="hotels_collabs_wrapper">
                <h3>new hotels collaborations !! <br />arrives soon..</h3>
            </div>
        </div>
    )
}

export default HotelsCollabs