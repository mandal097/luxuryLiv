import React, { useState, useEffect } from 'react'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import jsPDF from 'jspdf'
import { data } from '../../hotelDescModaldata'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons'
import ShareModal from '../../components/ShareComponent/ShareModal';
const HotelDesc = () => {
  // hooks ------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  // const [showForm, setShowForm] = useState(false);
  const [showShare, SetShowShare] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true)

  // getting id from url of the site-------------------------
  const id = location.pathname.split('/')[3]
  const hotel = data[id - 1]
  console.log(hotel);

  const back = () => {
    navigate(-1)
  }

  // changing title of the site on component mounted=------------
  useEffect(() => {
    document.title = `Luxury Living - ${hotel.hotelname} `
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    setTimeout(() => {
      setAutoPlay(false)
    }, 9000);
  }, [hotel, autoPlay])

  // function for duynamic arrow or hiding the arrows of slick , looking for better way to hide buttons
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
  // ------------------------------------------------
  const [activeSlide, setActiveSlide] = useState(0)

  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  // -----------------------------------------
  let settingsImg = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: current => setActiveSlide(current)
  }
  // -----------------------------------------------!!
  // downloadin pdf --------------------------
  const download = () => {
    var doc = new jsPDF("p", "mm", "a4");
    doc.setFontSize(19);
    doc.text(20, 10, hotel.hotelname)
    doc.setFontSize(12);
    doc.addFont('helvetica', 'normal')
    doc.text(20, 20, hotel.style)
    doc.text(20, 30, hotel.location)
    doc.text(20, 40, hotel.best_part)
    doc.text(20, 50, hotel.accomodation)
    doc.text(20, 60, hotel.carouseltxt1)
    doc.text(20, 70, hotel.carouseltxt2)
    switch (activeSlide) {
      case 0:
        doc.addImage(hotel.img1, 'JPEG', 20, 80, 170, 110)
        break;
      case 1:
        doc.addImage(hotel.img2, 'JPEG', 20, 80, 170, 110)
        break;
      case 2:
        doc.addImage(hotel.img3, 'JPEG', 20, 80, 170, 110)
        break;
      case 3:
        doc.addImage(hotel.img4, 'JPEG', 20, 80, 170, 110)
        break;
      case 4:
        doc.addImage(hotel.img5, 'JPEG', 20, 80, 170, 110)
        break;
      default:
        doc.addImage(hotel.img1, 'JPEG', 20, 50, 170, 110)
    }

    doc.save("luxury_living.pdf")

  }



  return (
    <div className='hotel_desc'>
      {/* back bautton */}
      <div className="back_btn" onClick={back}><ArrowLeftOutlined className='back_icon' /></div>
      {/* showing Enquiruy form */}
      {/* {
        showForm && <Enquiry setShowForm={setShowForm} hotel={hotel.hotelname} />
      } */}
      {
        showShare && <ShareModal SetShowShare={SetShowShare} hotel={hotel} />
      }
      <div className="hotel_desc_wrapper">
        <div className="hotels_details">
          <div className="hotel_desc_left hotel_desc_">
            <div className="hotel_name">
              <h2>{hotel.hotelname}</h2>
            </div>
            <Slider {...settingsImg} className="hotel_desc_img">
              <div className="img">
                <img src={hotel.img1} alt="" />
              </div>
              <div className="img">
                <img src={hotel.img2} alt="" />
              </div>
              <div className="img">
                <img src={hotel.img3} alt="" />
              </div>
              <div className="img">
                <img src={hotel.img4} alt="" />
              </div>
              <div className="img">
                <img src={hotel.img5} alt="" />
              </div>
            </Slider>
          </div>
          <div className="hotel_desc_right hotel_desc_">
            <div className="hotel_name">
              <h2>{hotel.hotelname}</h2>
            </div>
            <div className="about_hotel">
              {/* <p>{hotel.point1}</p> */}
              <ul>
                <li>
                  <div className="bullet_points"></div>
                  Style :<div className="content"> {hotel.style}</div>
                </li>
                <li>
                  <div className="bullet_points"></div>
                  Location :<div className="content"> {hotel.location}</div>
                </li>
                <li>
                  <div className="bullet_points"></div>
                  Best Part :<div className="content">{hotel.best_part}</div>
                </li>
                <li>
                  <div className="bullet_points"></div>
                  Accomdation :<div className="content"> {hotel.accomodation}</div>
                </li>
              </ul>
            </div>
            <Slider {...settings} className="hotels_desc_sliders">
              <p>{hotel.carouseltxt1}</p>
              <p>{hotel.carouseltxt2}</p>
            </Slider>
          </div>
        </div>
        {/* actions btn */}
        <div className="actions_btn_div">
          <div className="actions_btn" onClick={() =>navigate(`/enquire/${hotel.id}`)}>
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
    </div>
  )
}

export default HotelDesc