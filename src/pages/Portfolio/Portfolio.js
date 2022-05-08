import React, { useEffect } from 'react'
import './portfolio.scss'
import HotelSection from './Hotelsection/HotelSection'
import Header from '../../components/Header/Header'
import Social from '../../components/Social/Social'

const Portfolio = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Portfolio'
    }, []);
    return (
        <div className="portfolio" >
            <Header />
            <div className="portfolio_landing_page">
                <div className="portfolio_landing_page_wrapper">
                    <h1 className="heading">portfolio</h1>
                    <p className="portfolio_page_para">
                        Having a close circle of friends makes life a breeze! Wouldn't you agree? And ours has been a breeze since the day we started making friends in our business. Most of our hotel partners have been working with us since our inception & they continue to watch our back as we continue to watch theirs! And its no joke when we claim to have taken quite a few bullets for them...so what if it was while playing paintball...bullets are bullets!
                    </p>
                </div>
            </div>
            <HotelSection />
            <Social />
        </div>
    )
}

export default Portfolio

