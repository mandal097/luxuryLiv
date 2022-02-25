import React from 'react'
import './explore.scss'
import { useNavigate } from 'react-router-dom'
const Explore = () => {
    const navigate = useNavigate()

    const goToPortfolio = () => {
        navigate('portfolio')
    }

    return (
        <div className="explore" id='explore'>
            <div className='explore_wrapper'>
                <video src='./videos/LL_INTRO.mp4' muted autoPlay controls></video>
            </div>
            <div className='our_portfolio'>
                <h3 onClick={goToPortfolio}>PORTFOLIO</h3>
            </div>
        </div>
    )
}

export default Explore
