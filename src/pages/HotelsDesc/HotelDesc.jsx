// import React,{useState,useEffect} from 'react'
// import Header from '../../components/Header/Header'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import { useLocation } from 'react-router-dom'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'
const HotelDesc = () => {
  // const location = useLocation()
  // const id = location.pathname.split('/')[2]
  // console.log(id);

  // useEffect(()=>{
  //   const idd = localStorage.getItem('')
  //   console.log(idd);
  // })


  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <RightOutlined
        style={{ color: 'goldenrod', fontSize: '3rem', right: '8rem', bottom: '10rem', }}
        onClick={onClick} />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <LeftOutlined
        style={{ color: 'goldenrod', fontSize: '3rem', }}
        onClick={onClick} />

    );
  }


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <div className='hotel_desc'>
      {/* <Header /> */}
      <div className="hotel_desc_wrapper">
        <div className="hotels_details">
          <div className="hotel_desc_left hotel_desc_">
            <div className="hotel_name">
              <h2>htoel name shoul be here left</h2>
            </div>
            <div className="hotel_desc_img">
              <div className="img">
                <img src="https://images.unsplash.com/photo-1631470769624-2c5bdf78a3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaWltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="img">
                <img src="https://images.unsplash.com/photo-1631470769624-2c5bdf78a3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaWltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="img">
                <img src="https://images.unsplash.com/photo-1631470769624-2c5bdf78a3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaWltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="img">
                <img src="https://images.unsplash.com/photo-1631470769624-2c5bdf78a3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaWltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="img">
                <img src="https://images.unsplash.com/photo-1631470769624-2c5bdf78a3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwaWltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            </div>
          </div>
          <div className="hotel_desc_right hotel_desc_">
            <div className="hotel_name">
              <h2>htoel name shoul be here</h2>
            </div>
            <div className="about_hotel">
              <p>hte du lkahdjgnadj adhgoad  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim tempora facilis aliquam nostrum suscipit itaque non saepe vero laborum aspernatur.</p>
            </div>
            <Slider {...settings} className="hotels_desc_sliders">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repudiandae!</p>
            </Slider>
          </div>
        </div>
        {/* actions btn */}
        <div className="actions_btn_div">
          <div className="actions_btn">
            <span>Enquire</span>
          </div>
          <div className="actions_btn">
            <span>share</span>
          </div>
          <div className="actions_btn">
            <span>download</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDesc