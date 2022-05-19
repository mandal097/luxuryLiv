import React, { useEffect, useState } from 'react'
import './style.scss'
import { data } from '../../hotelDescModaldata/index'
import { useNavigate } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'

const Dropdown = ({ ShowModal, destination, filterByD }) => {

    const [FilteredHotels, setFilteredHotels] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // filtered hotels by brands
        const hotelsByBrands = data.filter(i => i.resort.replace(/[^a-zA-Z ]/g, "").toLowerCase() === destination.replace(/[^a-zA-Z ]/g, "").toLowerCase());

        // filtered hotels by destinations
        const hotelsByDestinations = data.filter(i => i.destination.replace(/[^a-zA-Z ]/g, "").toLowerCase() === destination.replace(/[^a-zA-Z ]/g, "").toLowerCase());

        filterByD ? setFilteredHotels(hotelsByDestinations) : setFilteredHotels(hotelsByBrands)
    }, [destination, filterByD])

    return (
        <>
            <div className='dropdown'>
                <div className="dropdown_wrapper">
                    <div className="top">
                        <h3>choose your destination</h3>
                    </div>
                    <div className="hotels_names_div">
                        {
                            FilteredHotels.map((hotels, index) => (
                                <div div className="hotels_names_selector"
                                    key={hotels.id}
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate(`/luxury-living-portfolio/${hotels.hotelname}/${hotels.id}`)
                                        }, 100);
                                    }}>
                                    <div className="radio_btn"></div>
                                    <div className="hotels_names_">
                                        <span>{hotels.hotelname}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cancel_btn" onClick={ShowModal}><CloseOutlined className='icon' /></div>
                </div>
            </div >
        </>
    )
}

export default Dropdown