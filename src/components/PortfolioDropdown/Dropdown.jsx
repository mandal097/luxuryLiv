import React, { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
// import axios from 'axios';
// import { appUrl } from '../../config/appUrl'


const Dropdown = ({ ShowModal, destination, filterByD, hotels }) => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [FilteredHotels, setFilteredHotels] = useState([])


    useEffect(() => {
        setData(hotels)
        // sorting by city
        const sortedArr = data.sort((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()))

        // filtered hotels by brands
        // const hotelsByBrands = sortedArr.filter(i => i.name.replace(/[^a-zA-Z ]/g, "").toLowerCase() === destination.replace(/[^a-zA-Z ]/g, "").toLowerCase());
        const hotelsByBrands = sortedArr.filter(i => i.brand_id === destination);
        
        // filtered hotels by destinations
        const hotelsByDestinations = sortedArr.filter(i => i.destination.replace(/[^a-zA-Z ]/g, "").toLowerCase() === destination.replace(/[^a-zA-Z ]/g, "").toLowerCase());

        filterByD ? setFilteredHotels(hotelsByDestinations) : setFilteredHotels(hotelsByBrands);
    }, [destination, filterByD, hotels, data])
    
    return (
        <>
            <div className='dropdown'>
                <div className="dropdown_wrapper">
                    <div className="top">
                        <h3>choose  destination</h3>
                    </div>
                    <div className="hotels_names_div">
                        {
                            FilteredHotels.map((hotels, index) => (
                                <div div className="hotels_names_selector"
                                    key={hotels.id}
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate(`/luxury-living-portfolio/${hotels.id}`)
                                            // navigate(`/luxury-living-portfolio/${hotels.name}/${hotels.id}`)
                                        }, 100);
                                    }}>
                                    <div className="radio_btn"></div>
                                    <div className="hotels_names_">
                                        <span>{hotels.name} , {hotels.city}</span>
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