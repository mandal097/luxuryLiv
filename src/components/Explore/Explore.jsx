import React from 'react'
import './explore.scss'
import { useNavigate } from 'react-router-dom'
// import { LinkOutlined } from '@ant-design/icons'
// import Aos from "aos";
import "aos/dist/aos.css";
const Explore = () => {


    const navigate = useNavigate()

    const goToPortfolio = () => {
        navigate('/luxury-living-portfolio')
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="explore" id='explore'>
            <div className='our_portfolio'>
                <div>
                    <h3 onClick={goToPortfolio} className='mob'> PORTFOLIO </h3>
                    <h6 className='click'>click to view <br /><span className='arrow_down'>&darr;</span></h6>
                </div>
                <h3 onClick={goToPortfolio} className='desk'>PORTFOLIO </h3>
            </div>
            <div className='explore_wrapper'>
                <video src='./videos/LL_INTRO.mp4' muted autoPlay controls></video>
            </div>
        </div>
    )
}

export default Explore
