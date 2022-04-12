import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import Social from '../../components/Social/Social'
const HotelPatners = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    useEffect(() => {
        document.title = 'Luxury Living - Hotel Partners'
    },[])
    return (
        <div className='hotel_partners'>
            <Header />
            <img src="https://cdn-icons-png.flaticon.com/128/1256/1256019.png?ga=GA1.2.257983829.1629111004" alt="" />
            <h2>coming soon</h2>
            <button onClick={back}>back</button>
            <Social />
        </div>
    )
}

export default HotelPatners