import React, { useEffect, useState } from "react";
import './hotelSection.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import HotelsDescModal from "../../../components/HotelDescription/HotelsDescModal";
import { data } from '../../../hotelDescModaldata/index'

function Port() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [places, setPlaces] = useState('')
    const [hotel, setHotel] = useState('')

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const ShowModal = () => {
        switch (isOpen1) {
            case false:
                setIsOpen1(true);
                break;
            case true:
                setIsOpen1(false);
                break;
            default:
                setIsOpen1(false)
        }
    }
    const Ohotel = data.filter(i => i.hotelname === places)
    // console.log(Ohotel);
    const demo = (e) => {
        setIsOpen1(true)
        places ? setPlaces(places) : setPlaces(e.target.value)
        setHotel(Ohotel)

        localStorage.setItem('hotelName', places)
        // navigate(`${places}}`)
        // console.log(e.target.value);
        // console.log(places);

    }
    return (
        <div className="port">


            <div className="port-container">
                {
                    isOpen1 && <HotelsDescModal ShowModal={ShowModal} places={places} oohotel={hotel} />
                }
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="/images/aman.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>AMAN Resorts</h2> */}
                        <div class="upper">
                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option >Amanbagh, Rajasthan, India</option>
                                <option >Aman-I-Khas, Rajasthan, India</option>
                                <option>Amanpuri, Phuket, Thailand</option>
                                <option>Amangalla, Galla, Sri Lanka</option>
                                <option>Amanwella, Tangalle, Sri Lanka</option>
                                <option>Amankora, Kingdom Of Bhutan</option>
                                <option>Aman Le Melezin, Courchevel</option>
                                <option>Aman Venice, Italy</option>
                                <option>Amanruya, Bodrum, Turkey</option>
                                <option>Amanpulo, Pamalican Island, Philippines</option>
                                <option>Amangiri, Utah, USA</option>
                                <option>Amangani, Wyoming, USA</option>
                                <option>Amandari, Bali, Indonesia</option>
                                <option>Amankila, Bali, Indonesia</option>
                                <option>Amanjiwo, Central Java, Indonesia</option>
                                <option>Amanwana, Moyo Island, Indonesia</option>
                                <option>Aman Villas At Nusa Dua, Indonesia</option>
                                <option>Amandira, Indonesia</option>
                                <option>Amansara, Siem Reap, Cambodia</option>
                                <option>Amantaka, Luang Prabang, Lao PDR</option>
                                <option>Amanoi, Vinh Hy, Vietnam</option>
                                <option>Amanyara, Providenciales, Turks & Caicos</option>
                                <option>Aman Tokyo, Japan</option>
                                <option>Aman Kyoto, Japan</option>
                                <option>Amanemu, Japan</option>
                                <option>Amanjena, Marrakech, Marocco</option>
                                <option>Amanzoe, Porto Heli, Greece</option>
                                <option>Amanera, Dominican Republic</option>
                                <option>Aman Summer Palace, Beijing, China</option>
                                <option>Amanfayun, Hangzhou, China</option>
                                <option >Amandayan, Lijiang, China</option>
                                <option>Amanyangyun, Shanghai, China</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/soneva.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>SONEVA Resorts</h2> */}
                        <div class="upper">
                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Soneva Fushi, Maldives</option>
                                <option>Soneva Jani, Maldives</option>
                                <option>Soneva In Aqua, Maldives</option>
                                <option >Soneva Kiri, Thailand</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/cheval.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Cheval Blanc</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected  >select your destination</option>
                                <option>Cheval Blanc Randheli, Maldives</option>
                                <option >Cheval Blanc, Courchevel</option>
                                <option>Cheval Blanc, Paris</option>
                            </select>
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
                            <div class="upper">
                                <select onChange={demo} className="dropdown">
                                    <option disabled selected >select your destination</option>
                                    <option>Ritz Carlton, Maldives</option>
                                    <option >Ritz Carlton Phulay Bay, Krabi</option>
                                    <option>Ritz Carlton Mandapa, Bali</option>
                                </select>
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
                            <div class="upper">

                                <select onChange={demo} className="dropdown">

                                    <option disabled selected >select your destination</option>
                                    <option>St. Moritz, Switzerland</option>
                                    <option>St. Moritz, Switzerland</option>
                                </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Six Senses Fort Barwara, Rajasthan, India</option>
                                <option>Six Senses Zighy Bay, Oman</option>
                                <option>Six Senses Laamu, Maldives</option>
                                <option>Six Senses, Koh Samui</option>
                                <option>Six Senses Yao Noi, Phuket</option>
                                <option>Six Senses, Bhutan</option>
                                <option>Six Senses Residences, Courchevel</option>
                                <option>Six Senses Krabey Island, Cambodia</option>
                                <option>Six Senses Uluwatu, Bali</option>
                                <option>Six Senses Con Dao, Vietnam</option>
                                <option>Six Senses Ninh Van Bay, Vietnam</option>
                                <option>Six Senses Douro Valley, Portugal</option>
                                <option>Six Senses Zil Pasyon, Seychelles</option>

                            </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>One & Only Reethi Rah, Maldives</option>
                                <option>One & Only Portonovi, Montenegro</option>
                                <option>One & Only, Mauritus</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/st_regis.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>St. Regis</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>St. Regis, Maldives</option>
                                <option>St. Regis, Langkawi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/Four-Seasons-Logo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Four Seasons Hotels & Resorts</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Four Seasons, Koh Samui</option>
                                <option>Four Seasons, Bangkok</option>
                                <option>Four Seasons, Seychelles</option>
                            </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Maldives</option>
                                <option>Maldives</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/rosewood.jpeg" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Rosewood Hotels & Resorts</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Rosewood, Phuket</option>
                                <option>Rosewood, London</option>
                                <option>Rosewood, Paris</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/wa.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Waldorf Astoria</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Waldorf, Maldives</option>
                                <option>Waldorf, Bangkok</option>
                            </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Siam Kempinski, Bangkok</option>
                                <option>Ciragan Palace Kempinski, Istanbul</option>
                                <option>Palais Hansen Kempinski, Vienna</option>
                                <option>The Apurva Kempinski, Nusa Dua, Bali</option>
                                <option>The Capitol Kempinski, Singapore</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/BanyanTreeLogo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Banyan Tree Hotels Resorts & Spas</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Banyan Tree, Phuket</option>
                                <option>Banyan Tree, Koh Samui</option>
                            </select>
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
                            <div class="upper">

                                <select onChange={demo} className="dropdown">
                                    <option disabled selected >select your destination</option>
                                    <option>Wild Coast Yala, Sri Lanka</option>
                                    <option>Cape Weligama, Sri Lanka</option>
                                    <option>Ceylon Tea Trails, Sri Lanka</option>
                                </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Anantara Kihavah, Maldives</option>
                                <option>Anantara Siam, Bangkok</option>
                                <option>Anantara Lawana, Koh Samui</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/shantiMaurice.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Post Card Hotels</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>The Postcard Moira, Goa</option>
                                <option>The Postcard Velha, Goa</option>
                                <option>The Postcard Cuelim, Goa</option>
                                <option>The Postcard Hideaway, Netravali, Goa</option>
                                <option>The Postcard Gir Wildlife Sanctuary</option>
                                <option>The Postcard Mandalay Hall, Kochi</option>
                                <option>The Postcard Dewa, Thimphu, Bhutan</option>
                                <option>The Postcard Galle, Sri Lanka</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="/images/pallazoVersace.jpg" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Palazzo Versace</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Palazzo Versace, Dubai</option>
                                <option>Palazzo Versace, Dubai</option>
                            </select>
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
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Anantara Kihavah, Maldives</option>
                                <option>Anantara Siam, Bangkok</option>
                                <option>Anantara Lawana, Koh Samui</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/shantiMaurice.png" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Post Card Hotels</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>The Postcard Moira, Goa</option>
                                <option>The Postcard Velha, Goa</option>
                                <option>The Postcard Cuelim, Goa</option>
                                <option>The Postcard Hideaway, Netravali, Goa</option>
                                <option>The Postcard Gir Wildlife Sanctuary</option>
                                <option>The Postcard Mandalay Hall, Kochi</option>
                                <option>The Postcard Dewa, Thimphu, Bhutan</option>
                                <option>The Postcard Galle, Sri Lanka</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="/images/pallazoVersace.jpg" alt="img" />
                    </div>
                    <div className="port-content">
                        {/* <h2>Palazzo Versace</h2> */}
                        <div class="upper">

                            <select onChange={demo} className="dropdown">
                                <option disabled selected >select your destination</option>
                                <option>Palazzo Versace, Dubai</option>
                                <option>Palazzo Versace, Dubai</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Port;