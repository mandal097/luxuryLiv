import React, { useEffect } from 'react'
import './style.scss'
import Aos from "aos";
import "aos/dist/aos.css";
const ValuesCard = ({ val }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='values_card' data-aos={val.aos}>
      <div className="values_card_image_div">
        <img src={val.img} alt="values" className={val.classes} />
      </div>
      <div className="values_para_div">
        <h3 className="values_">{val.title}</h3>
        <p>{val.content}</p>
      </div>
    </div>
  )
}

export default ValuesCard