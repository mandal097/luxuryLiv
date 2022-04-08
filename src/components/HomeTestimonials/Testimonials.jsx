import React, { useState, useEffect } from 'react'
import './style.scss'
import { testimonialsdata } from '../../data/testimonialsdata'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Aos from "aos";
import "aos/dist/aos.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Testimaonialscard = ({ testimony }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="testimaonials_card" data-aos={testimony.aos}>
      <div className="testimonials_card_para_div">
        <p>{testimony.feedbacktxt}</p>
      </div>
      <div className="info">
        <h3 className="name">{testimony.name}</h3>
        <p className="profession">{testimony.status}</p>
      </div>
    </div>
  )
}
const Testimonials = () => {
  const [testimonies, setTestimonies] = useState([])
  const [testimonyCount, setTestimonyCount] = useState(2)
  const [showMoreBtn, setShowMoreBtn] = useState(true)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const getValues = () => {
      setTestimonies(testimonialsdata)
      if (testimonyCount === testimonies.length) {
        setShowMoreBtn(false)
      }
    }
    getValues()
  })
  // function for increasing count of testimonies on click event
  const handleCount = () => {
    setLoad(true)
    setTimeout(() => {
      testimonyCount >= 2 && setTestimonyCount(testimonyCount + 2);
      setLoad(false)
    }, 1200);
  }
  return (
    <div className='testimonial'>
      {
        testimonies.slice(0, testimonyCount).map((testimony) => (
          <Testimaonialscard key={testimony.id} testimony={testimony} />
        ))
      }
      {
        showMoreBtn &&
        <div className="lode_more_testiomonials">
          <button onClick={handleCount}>{load ? <Spin indicator={antIcon} /> : 'load more'}</button>
        </div>
      }
      <div className="side_text">
        <h3>testimonials</h3>
      </div>
    </div>
  )
}

export default Testimonials