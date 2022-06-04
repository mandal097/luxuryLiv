import React, { useState, useEffect } from 'react'
import './style.scss'
// import { testimonialsdata } from '../../data/testimonialsdata'
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom'
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Testimaonialscard from '../TestimoniesCard/TestimonyCard';
import axios from 'axios';
import { appUrl } from '../../config/appUrl'

function SampleNextArrow(props) {

  const { onClick } = props;
  return (
    <div className='right_cont_'> <div className="right">  <RightOutlined onClick={onClick} /></div></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='left_cont_'><div className="left">  <LeftOutlined onClick={onClick} /></div></div>

  );
}



const Testimonials = () => {
  const navigate = useNavigate();
  const [testimonies, setTestimonies] = useState([])
  useEffect(() => {
    const getValues = async () => {
      const url = appUrl.url;
      const testimonyData = await axios.get(`${url}/testimonials`)
      // console.log(testimonyData.data);
      setTestimonies(testimonyData.data)

    }
    getValues()
  }, [])
  const [index, setIndex] = useState(0)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    lazyload: true,
    autoplay: false,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setIndex(next),
    responsive: [
      {
        breakpoint: 1024,
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
    <div className='testimonial'>
      <div className="side_text">
        <h3>testimonials</h3>
      </div>
      <Slider {...settings} className='slider'>
        {
          testimonies.map((testimony, idx) => (
            <div key={testimony.id} className={idx === index ? 'slides activeSlides' : "slides"} >
              <Testimaonialscard testimony={testimony} item='true'
                border={idx === index ? '1' : '0'}
              />
            </div>
          ))
        }
      </Slider>
      <div className="go_to_feedback" onClick={() => navigate('/feedback')}><p>Would you like to say some 'Nice - Not So Nice' things about Us? 😉</p></div>
    </div>
  )
}

export default Testimonials