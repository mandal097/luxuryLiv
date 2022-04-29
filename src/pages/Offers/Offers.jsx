import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './style.scss'

const Offers = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Offers'
    })
    return (
        <div className='offers'>
            <Header />
            <div className="offers_wrapper">
                <h3>Offers page !! <br />arrives soon.. stay with us 🤟</h3>
            </div>
        </div>
    )
}

export default Offers