import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
// import ValuesCard from '../../components/ValuesCard/ValuesCard'
import './style.scss'
import Explore from '../../components/Explore/Explore'
import Testimonials from '../../components/HomeTestimonials/Testimonials'
import Social from '../../components/Social/Social'
import Scroll from '../../components/ScrollToTop/Scroll'
import Contactus from '../../components/ContactUs/Contactus'
import { valuesdata } from '../../data/valuesdata'
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
import Value from '../../components/ValuesComp/Value'

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Home = () => {
    const [values, setValues] = useState([])
    // const [load, setLoad] = useState(false)
    // const [count, setCount] = useState(3)
    // const [showMoreBtn, setShowMoreBtn] = useState(true)
    // const handleCount = () => {

    //     setLoad(true)
    //     setTimeout(() => {
    //         count >= 3 && setCount(count + 3);
    //         setLoad(false)
    //     }, 1200);
    // }



    useEffect(() => {
        const getValues = () => {
            setValues(valuesdata)
            // if (count === values.length) {
            //     setShowMoreBtn(false)
            // }
        }
        getValues()

        document.title = 'Luxury Living'
    }, [ values])
    return (
        <div className='home_page'>
            <Header />
            <div className="home_page_wrapper">
                {/* for first page of the home page */}
                <div className="home_landing_page">
                    <div className="home_landing_page_wrapper">
                        <h1 className="heading">luxury living</h1>
                        <p className="home_page_para">
                            Our top game is to make it easy for our Travel Partners to book 'High End Hotels Worldwide'..
                            <br /> Our medium game is to do this with finnese, subtelty & without much hangups
                            <br />
                            Our low  game is to do 30 push-ups in one go.'
                        </p>
                    </div>
                </div>
                {/* for second page of the home page  */}
                <div className="values_page">
                    {/* {
                        values.slice(0, count).map((val) => (
                            <ValuesCard key={val.id} val={val} item='true' />
                        ))
                    }
                    {
                        showMoreBtn &&
                        <div className="load_more_button">
                            <button onClick={handleCount}>{load ? <Spin indicator={antIcon} /> : 'load more'}</button>
                        </div>
                    } */}
                    <Value values={values} />
                    <div className="side_text">
                        <h3>our values</h3>
                    </div>
                </div>
                {/* for portfolio page video */}
                <Explore />
                <Testimonials />
                <Contactus />
            </div>
            <Social />
            <Scroll />
        </div>
    )
}

export default Home