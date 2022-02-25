import React from 'react'
import './explore.scss'
import { useNavigate } from 'react-router-dom'
// import {LL_INTRO} from '../../../../public/videos/LL_INTRO.mp4'
const Explore = () => {
    const navigate = useNavigate()

    const goToPortfolio = () => {
        navigate('portfolio')
    }

    return (
        <div className="explore" id='explore'>
            <div className='explore_wrapper'>
                <video src='./videos/LL_INTRO.mp4' muted autoPlay controls></video>
                <div className="h3">
                    <h3 onClick={goToPortfolio}>IN THE MOUNTAINS...</h3>
                </div>
            </div>
            <div className='our_portfolio'>
                <h3 onClick={goToPortfolio}>OUR PORTFOLIO</h3>
            </div>
        </div>
    )
}

export default Explore
