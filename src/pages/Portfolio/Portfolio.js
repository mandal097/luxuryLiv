import React  from 'react'
import './portfolio.scss'
import HotelSection from './Hotelsection/HotelSection'
import Firstpage from './Firstpage/Firstpage'
import HomeBtn from '../../components/HomeBtn/HomeBtn'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <HomeBtn/>
            <Firstpage />
            <HotelSection />
        </div>
    )
}

export default Portfolio

