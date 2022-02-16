import React from 'react'
import './explore.scss'
import {  useNavigate } from 'react-router-dom'
const Explore = () => {
    const navigate = useNavigate()

    const goToPortfolio = () => {
        navigate('portfolio')
    }

    return (
        <div className="explore" id='explore'>
            <div>
                <video src="https://player.vimeo.com/external/434854024.sd.mp4?s=41bc8486f80af1a2c888dd22b3f2e671f03cdadb&profile_id=139&oauth2_token_id=57447761" autoPlay controls></video>
                <h3 onClick={goToPortfolio}>IN THE MOUNTAINS...</h3>
            </div>
        </div>
    )
}

export default Explore
