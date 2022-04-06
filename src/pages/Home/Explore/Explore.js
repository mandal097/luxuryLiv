import React from 'react'
import './explore.scss'
import { useNavigate } from 'react-router-dom'
// import { LinkOutlined } from '@ant-design/icons'
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
                <h3 onClick={goToPortfolio} className='desk'>PORTFOLIO
                    {/* <LinkOutlined /> */}
                </h3>
                <div>
                <h3 onClick={goToPortfolio} className='mob'> VIEW PORTFOLIo
                 {/* <LinkOutlined className='icon' />  */}
                 </h3>
                </div>
            </div>
        </div>
    )
}

export default Explore
