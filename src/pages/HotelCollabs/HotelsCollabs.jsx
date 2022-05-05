import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import './style.scss'
import Social from '../../components/Social/Social'
import HotelsCards from '../../components/HotelCollabCard/HotelsCards'
import { newHotels } from '../../data/NewCollabsData'

const HotelsCollabs = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(newHotels)
    }, [])


    useEffect(() => {
        document.title = 'Luxury Living - Hotels collabs'
    })
    return (
        <div className='hotels_collabs'>
            <Header />
            <div className="hotels_collabs_wrapper">
                <h3>New Collaborations</h3>
                <div className="new_hotels_container">
                    {
                        data.map(d => (
                            <HotelsCards key={d.id} d={d} /> 
                        ))
                    }
                    {
                        data.map(d => (
                            <HotelsCards key={d.id} d={d} /> 
                        ))
                    }
                    {
                        data.map(d => (
                            <HotelsCards key={d.id} d={d} /> 
                        ))
                    }
                    {
                        data.map(d => (
                            <HotelsCards key={d.id} d={d} /> 
                        ))
                    }
                </div>
            </div>
            <Social />
        </div>
    )
}

export default HotelsCollabs