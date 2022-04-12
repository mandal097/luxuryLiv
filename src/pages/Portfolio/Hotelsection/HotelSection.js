import React, { useEffect, useState } from "react";
import './hotelSection.scss';
import Aos from "aos";
import "aos/dist/aos.css";

import { CaretDownOutlined } from '@ant-design/icons'
import Dropdown from "../../../components/PortfolioDropdown/Dropdown";

function Port() {
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState('')
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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


            <div className="port-container">
                {
                    isOpen &&
                    // <HotelsDescModal ShowModal={ShowModal} places={places} oohotel={hotel} />
                    <Dropdown ShowModal={ShowModal} destination={destination} />
                }
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="/images/aman.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>AMAN Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/soneva.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>SONEVA Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('soneva resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/cheval.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Cheval Blanc</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('cheval blanc')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/RC.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <div className="fourth">
                            {/* <h2>Ritz Carlton Resorts</h2> */}
                            <div className="upper">
                                <div className="button" onClick={() => {
                                    ShowModal();
                                    setDestination('Ritz Carlton Resorts')
                                }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/badrutts.svg" alt="img" />
                    </div>
                    <div className="port-content">
                        <div className="fifth">
                            {/* <h2>Badrutts Palace</h2> */}
                            <div className="upper">
                                <div className="button" onClick={() => {
                                    ShowModal();
                                    setDestination('Badrutts Palace')
                                }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/Six-Senses.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Six Senses Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Six Senses Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/ono.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>One & Only Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('One & Only Hotels & Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/st_regis.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>St. Regis</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('St. Regis')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/Four-Seasons-Logo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Four Seasons Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Four Seasons Hotels & Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/Nautilus.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>The Nautilus</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('The Nautilus')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/rosewood.jpeg" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Rosewood Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Rosewood Hotels & Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/wa.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Waldorf Astoria</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Waldorf Astoria')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/Kempinski.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Kempinski Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Kempinski Hotels & Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/BanyanTreeLogo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Banyan Tree Hotels Resorts & Spas</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Banyan Tree Hotels Resorts & Spas')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>



                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/joali.jpeg" alt="img" />
                    </div>
                    <div className="port-content">
                        <div className="fifteenth">
                            {/* <h2>Resplendent Ceylon</h2> */}
                            <div className="upper">
                                <div className="button" onClick={() => {
                                    ShowModal();
                                    setDestination('Resplendent Ceylon')
                                }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container last">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/Anantara.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Anantara Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Anantara Hotels & Resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/shantiMaurice.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Post Card Hotels</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Post Card Hotels')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="/images/pallazoVersace.jpg" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Palazzo Versace</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('Palazzo Versace')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------------------------- */}
            <div className="port-container last">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/patina.jfif" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Anantara Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/rocco_forte.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Post Card Hotels</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="/images/intercontinental.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Palazzo Versace</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="port-container last">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/patina.jfif" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Anantara Hotels & Resorts</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/rocco_forte.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Post Card Hotels</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="/images/intercontinental.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Palazzo Versace</h2> */}
                        <div className="upper">
                            <div className="button" onClick={() => {
                                ShowModal();
                                setDestination('aman resorts')
                            }}>select Your Destination <CaretDownOutlined className='dropdwon_icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Port;