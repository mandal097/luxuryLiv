import React, { useState, useEffect } from 'react';
import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import jsPDF from 'jspdf'
import ShareModal from '../../components/ShareComponent/ShareModal';
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate();
    const [showShare, SetShowShare] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        Aos.init({ duration: 1000 });
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    }, [mediaMatch]);

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
        afterChange: current => setActiveSlide(current)
    }


    // downloadin pdf --------------------------
    const download = () => {
        var doc = new jsPDF("p", "mm", "a4");
        doc.setFontSize(19);
        doc.text(20, 10, d.hotelname)
        doc.setFontSize(12);
        doc.addFont('helvetica', 'normal')
        switch (activeSlide) {
            case 0:
                doc.addImage(d.img1, 'JPEG', 20, 50, 170, 110)
                break;
            case 1:
                doc.addImage(d.img2, 'JPEG', 20, 50, 170, 110)
                break;
            case 2:
                doc.addImage(d.img3, 'JPEG', 20, 50, 170, 110)
                break;
            default:
                doc.addImage(d.img1, 'JPEG', 20, 50, 170, 110)
        }

        doc.save("luxury_living.pdf")

    }

    return (
        <>
            {/* {
                showForm && <Enquiry setShowForm={setShowForm} hotel={d.hotelname} />
            } */}
            {
                showShare && <ShareModal SetShowShare={SetShowShare} hotel={d} />
            }
            <div className='new_hotel_card'
                data-aos={`fade-${d.aos}`}
            >
                <div className="hotel_card_top"
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
                        <h3 className="name">Hotel Name Should Be {d.hotelname}</h3>
                        <p className="info"> {d.hotelname} - {d.info} </p>
                    </div>
                </div>
                {/* actions btn */}
                <div className="actions_btn_div">
                    <div className="actions_btn" onClick={() => navigate(`/enquire/${d.id}`)}>
                        <span>Enquire</span>
                    </div>
                    <div className="actions_btn"
                        onClick={() => {
                            SetShowShare(true)
                        }}>
                        <span>share</span>
                    </div>
                    <div className="actions_btn" onClick={download}>
                        <span>download</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelsCards