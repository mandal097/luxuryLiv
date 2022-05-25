import React, { useEffect, useState } from "react";
import './hotelSection.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { CaretDownOutlined } from '@ant-design/icons'
import Dropdown from "../../../components/PortfolioDropdown/Dropdown";
import { brands } from '../../../hotelDescModaldata/lxbrands'

function Port() {
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState('');

    useEffect(() => {
        Aos.init({ duration: 3000 });
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
        <>
            {
                isOpen &&
                <Dropdown ShowModal={ShowModal} destination={destination} filterByD={false} />
            }
            <div className="port">
                <div className="port-container">

                    {
                        brands.map((b, ind) => (
                            <div className="port-card" key={b.id} data-aos={`${animations(ind)}`}>
                                <div className="port-imgBx">
                                    <img src={`/images/${b.brands_img}`} alt="brands_img" />
                                </div>
                                <div className="port-content">

                                    <div className="upper">
                                        <div className="button" onClick={() => {
                                            ShowModal();
                                            setDestination(b.brands.toLowerCase())
                                            // console.log(b.brands.toLowerCase());
                                        }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}

export default Port;