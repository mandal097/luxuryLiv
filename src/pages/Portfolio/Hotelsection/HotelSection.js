import React, { useEffect, useState } from "react";
import './hotelSection.scss';
// import Navbar from "../Navbar/index";
import Aos from "aos";
import "aos/dist/aos.css";
// import Header from "./header";
// import About from "./about";
import HotelsDescModal from "../../../components/HotelDescription/HotelsDescModal";

function Port() {
    const [isOpen1, setIsOpen1] = useState(false);
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
    return (
        <div className="port">

            {/* <Navbar /> */}
            {/* <Header /> */}
            {/* <About /> */}
            {/* <HotelsDescModal open={isOpen1} onClose={() => setIsOpen1(false)}></HotelsDescModal> */}

            <div className="port-container">
             {
                isOpen1 && <HotelsDescModal ShowModal={ShowModal}/>
            }
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="/images/aman.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>AMAN Resorts</h2>
                        <div class="upper">
                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>
                                    {/* <a onClick={() => setIsOpen1(true)}> */}
                                    Bangkok
                                    {/* </a> */}
                                </option>
                                <option>Indonesia</option>
                                <option>Seychelles</option>
                                <option>Mexico</option>
                                <option>China</option>
                                <option>Maldives</option>
                                <option>United Arab Emirates</option>
                                <option>South Korea</option>
                                <option>Vietnam</option>
                                <option>l</option>
                                <option>l</option>
                            </select>


                        </div>

                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>South Korea</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Vietnam</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="/images/soneva.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>SONEVA Resorts</h2>
                        <div class="upper">
                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                {/* <option>  */}
                                {/* <a onClick={() => setIsOpen1(true)}> */}
                                {/* Bangkok */}
                                {/* </a> */}
                                {/* </option> */}
                                <option>choose</option>
                                <option>Thailand</option>
                            </select>

                            {/* <HotelDescModal  open={isOpen1} onClose={() => setIsOpen1(false)}></HotelDescModal> */}
                            {/* <div> */}
                            {/* <p>
                                    <a onClick={() => setIsOpen1(true)}>Thailand</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/cheval.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Cheval Blanc</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>
                                    {/* <a onClick={() => setIsOpen1(true)}> */}
                                    China
                                    {/* </a> */}
                                </option>
                                <option>Cambodia</option>
                                <option>Indonesia</option>
                                <option>Maldives</option>
                                <option>Mozambique</option>
                                <option>Qatar</option>
                                <option>United Arab Emirates</option>
                                <option>Bangkok</option>
                                <option>Qatar</option>
                                <option>Vietnam</option>
                            </select>

                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Cambodia</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>China</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Indonesia</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Maldives</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Mozambique</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Qatar</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>United Arab Emirates</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Bangkok</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Qatar</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Vietnam</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
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
                            <h2>Ritz Carlton Resorts</h2>
                            <div class="upper">
                                {/* <div>
                                    <p>
                                        <a onClick={() => setIsOpen1(true)}>Asia Pacific</a>
                                        <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                    </p>
                                </div> */}


                                <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                    <option>choose</option>
                                    <option> Asia Pacific</option>
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
                            <h2>Badrutts Palace</h2>
                            <div class="upper">

                                <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                    <option>choose</option>
                                    <option>Thailand</option>
                                    <option>Phuket</option>
                                </select>
                                {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Thailand</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Phuket</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/Six-Senses.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Six Senses Resorts</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Phulay Bay</option>
                                <option>Thailand</option>
                                <option>Bali & Krabi</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Phulay Bay</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Thailand</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Bali & Krabi</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="port-container">
                <div className="port-card" data-aos="fade-right">
                    <div className="port-imgBx">
                        <img src="images/ono.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>One & Only Hotels & Resorts</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Sri Lanka</option>
                                <option>Seychelles</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Sri Lanka</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Seychelles</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/st_regis.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>St. Regis Hotels</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Mauritus</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Mauritus</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/Four-Seasons-Logo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Four Seasons Hotels and Resorts</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Maldives</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Maldives</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
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
                        <h2>The Nautilus</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Natai</option>
                                <option>Phuket</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Natai</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Phuket</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/rosewood.jpeg" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Rosewood Hotels & Resorts</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Bangkok</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Bangkok</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/wa.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Waldorf Astoria</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Thailand</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Thailand</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
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
                        <h2>Kempinski Hotels Worldwide</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Worldwide</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Worldwide</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="images/BanyanTreeLogo.png" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Banyan Tree Hotels Resorts Spas</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Koh Samui</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Koh Samui</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="images/joali.jpeg" alt="img" />
                    </div>
                    <div className="port-content">
                        <div className="fifteenth">
                            <h2>Joali</h2>
                            <div class="upper">

                                <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                    <option>choose</option>
                                    <option>London</option>
                                </select>
                                {/* <div>
                                    <p>
                                        <a onClick={() => setIsOpen1(true)}>London</a>
                                        <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                    </p>
                                </div> */}
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
                        <h2>Anantara Hotels & Resorts</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>Dubai</option>
                                <option>Egypt</option>
                                <option>Saudi Arabia</option>
                                <option>Mauritus</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>India</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Indonesia</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Dubai</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                        {/* <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Egypt</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Saudi Arabia</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div>
                        <div class="upper">
                            <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Mauritus</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="port-card" data-aos="fade-up">
                    <div className="port-imgBx">
                        <img src="https://images.unsplash.com/photo-1533740877702-3aeaf8c84376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwaG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Shanti Maurice - A Nira Resort</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Mauritus</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Mauritus</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="port-card" data-aos="fade-left">
                    <div className="port-imgBx">
                        <img src="https://images.unsplash.com/photo-1533740877702-3aeaf8c84376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwaG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                    </div>
                    <div className="port-content">
                        <h2>Palazzo Versace Luxury Hotels</h2>
                        <div class="upper">

                            <select onChange={() => { setIsOpen1(true) }} className="dropdown">
                                <option>choose</option>
                                <option>Dubai</option>
                            </select>
                            {/* <div>
                                <p>
                                    <a onClick={() => setIsOpen1(true)}>Dubai</a>
                                    <Modal open={isOpen1} onClose={() => setIsOpen1(false)}></Modal>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Port;
