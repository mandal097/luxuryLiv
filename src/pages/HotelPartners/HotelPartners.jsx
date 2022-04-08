import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import Social from '../../components/Social/Social'
const HotelPatners = () => {
    const navigate = useNavigate()
    const back = () =>{
        navigate(-1)
    }
    useEffect(() => {
        document.title = 'Luxury Living - Hotel Partners'
    })
    return (
        <div className='hotel_partners'>
            <Header/>
           <h2>coming soon</h2>
           <button onClick={back}>back</button>
           <Social/>
        </div>
    )
}

export default HotelPatners