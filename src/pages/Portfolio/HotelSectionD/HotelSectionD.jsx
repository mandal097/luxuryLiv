import React, { useEffect, useState } from "react";
import './style.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { CaretDownOutlined } from '@ant-design/icons'
import Dropdown from "../../../components/PortfolioDropdown/Dropdown";
import { data } from '../../../hotelDescModaldata/lxhotels'

function HotelSectionD() {
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState('');
    const [allDestinations, setAllDestinations] = useState([]);

    useEffect(() => {
        Aos.init({ duration: 2500 });

        const destArr = data.map(d => d.destination);
        const uniqueDestArr = [...new Set(destArr)]

        setAllDestinations(uniqueDestArr);
    }, []);

    const animations = (num) => {
        let direction;
        let rgtAnimation = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98]; // for right animations

        if (num % 3 === 0) {
            direction = 'fade-right'
        } else if (rgtAnimation.includes(num)) {
            direction = 'fade-left'
        } else if (num % 3 === 1 || (num % 2 === 0)) {
            direction = 'fade-up'
        }
        return direction;
    }


    const ShowModal = () => {
        switch (isOpen) {
            case false:
                setIsOpen(true);
                break;
            case true:
                setIsOpen(false);
                break;
            default:
                setIsOpen(false)
        }
    }
    return (
        <div className="port">
            {
                isOpen &&
                <Dropdown ShowModal={ShowModal} destination={destination} filterByD={true} />
            }
            <div className="port-container_">
                {
                    allDestinations.map((dest, ind) => (

                        <div key={ind} className="port-card" data-aos={`${animations(ind)}`}>
                            <div className="port-text">
                                <h3>{dest}</h3>
                            </div>
                            <div className="port-content">
                                <div className="upper">
                                    <div className="button" onClick={() => {
                                        ShowModal();
                                        setDestination(dest)
                                    }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HotelSectionD;