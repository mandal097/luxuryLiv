import React, { useState, useEffect } from 'react';
import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
import Aos from "aos";
import "aos/dist/aos.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                color: 'goldenrod', fontSize: '3rem', display: 'none', position: 'absolute',
                top: '100%', right: '40rem',
                // top: '80%', right: '20rem'
            }}
        >
            <RightOutlined onClick={onClick} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                color: 'goldenrod', fontSize: '3rem', display: 'none', position: 'absolute',
                top: '100%', left: '40rem'
                // top: '80%', left: '20rem'
            }}
        >  <LeftOutlined onClick={onClick} /></div>

    );
}

const HotelsCards = ({ d }) => {

    const mediaMatch = window.matchMedia('(max-width: 480px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    let settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className='new_hotel_card'
            data-aos={`fade-${d.aos}`}
            style={{
                flexDirection: matches ? 'column' : `${d.f}`
            }}
        >
            <div className="new_hotel_card_left">
                <Slider {...settings} className="hotel_desc_img">
                    <div className="img" >
                        <img src={d.img1} alt="" />
                    </div>
                    <div className="img" >
                        <img src={d.img2} alt="" />
                    </div>
                    <div className="img" >
                        <img src={d.img3} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="new_hotel_card_right">
                <div className="logo">
                    <img src={`images/${d.logo}`} alt="" />
                </div>
                <h3 className="name">Hotel Name Should Be {d.h_name}</h3>
                <p className="info"> {d.h_name} - {d.info} </p>
            </div>
        </div>
    )
}

export default HotelsCards