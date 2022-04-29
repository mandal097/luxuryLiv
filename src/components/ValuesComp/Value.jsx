import React, { useState } from 'react'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ValuesCard from '../ValuesCard/ValuesCard'
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <RightOutlined
            style={{ color: 'goldenrod', fontSize: '3rem', display: 'none' }}
            onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <LeftOutlined
            style={{ color: 'goldenrod', fontSize: '3rem', display: 'none' }}
            onClick={onClick} />

    );
}

const Value = ({ values }) => {
    const [index, setIndex] = useState(0)

    let settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        lazyload: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }

    return (
        <div className='values_container'>
            <Slider {...settings}>

                {
                    values.map((v, idx) => (
                        <div className={idx === index ? 'slides activeSlides' : "slides"}  >
                            <ValuesCard key={v.id} val={v} item='true' />
                        </div>
                    ))
                }
            </Slider >
        </div >
    )
}

export default Value