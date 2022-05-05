import React, { useState, useEffect } from 'react'
import './style.scss'
import { testimonialsdata } from '../../data/testimonialsdata'
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Testimaonialscard from '../TestimoniesCard/TestimonyCard';


// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


function SampleNextArrow(props) {

  const { onClick } = props;
  return (
    <div className='hide'
      style={{
        color: 'goldenrod', fontSize: '3rem', display: 'non', position: 'absolute',
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
    <div className='hide'
      style={{
        color: 'goldenrod', fontSize: '3rem', display: 'non', position: 'absolute',
        top: '100%', left: '40rem'
        // top: '80%', left: '20rem'
      }}
    >  <LeftOutlined onClick={onClick} /></div>

  );
}



const Testimonials = () => {
  const [testimonies, setTestimonies] = useState([])
  useEffect(() => {
    const getValues = () => {
      setTestimonies(testimonialsdata)
    }
    getValues()
  })
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
      <Slider {...settings} className='slider'>
        {
          testimonies.map((t, idx) => (
            <div key={t.id} className={idx === index ? 'slides activeSlides' : "slides"}  >
              <Testimaonialscard testimony={t}
                border={idx === index ? '1' : '0'}
              //  color={idx === index ? 'var(--border-golden)' : 'white'} 
              />
            </div>
          ))
        }
      </Slider>
      <div className="side_text">
        <h3>testimonials</h3>
      </div>
    </div>
  )
}

export default Testimonials