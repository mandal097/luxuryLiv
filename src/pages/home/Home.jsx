import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
// import ValuesCard from '../../components/ValuesCard/ValuesCard'
import './style.scss'
import Explore from '../../components/Explore/Explore'
import Testimonials from '../../components/HomeTestimonials/Testimonials'
import Social from '../../components/Social/Social'
import Scroll from '../../utils/ScrollToTop/Scroll'
import Contactus from '../../components/ContactUs/Contactus'
import { valuesdata } from '../../data/valuesdata'
import Value from '../../components/ValuesComp/Value'

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Home = () => {
    const [values, setValues] = useState([])


    useEffect(() => {
        const getValues = () => {
            setValues(valuesdata)
        }
        getValues()
        document.title = 'Luxury Living'
    }, [])
    return (
        <div className='home_page'>
            <Header />
            <div className="home_page_wrapper">
                {/* for first page of the home page */}
                <div className="home_landing_page">
                    <div className="home_landing_page_wrapper">
                        <h1 className="heading">luxury living</h1>
                        <div className="para_div">
                            <p className="home_page_para">
                                Our top game is to make it easy for our Travel Partners to book 'Luxury Hotels'  Worldwide</p>
                            <p className="home_page_para">Our medium game is to do this with finnese, subtelty & without much hangup</p>
                            <p className="home_page_para">Our bottom  game is to do 30 push-ups in one go.'</p>
                        </div>
                    </div>
                </div>
                {/* for second page of the home page  */}
                <div className="values_page">
                    <div className="side_text">
                        <h3>our values</h3>
                    </div>
                    <Value values={values} />
                </div>
                {/* for portfolio page video */}
                <Explore />
                <Testimonials />
                <Contactus />
            </div>
            <Social />
            <Scroll />
        </div >
    )
}

export default Home