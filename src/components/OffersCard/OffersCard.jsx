import React from 'react';
import './styles.scss';
import { StarFilled } from '@ant-design/icons'
const OffersCard = (props) => {
    const { h_name , coverImg , img1 , img2 , offer} = props;
    return (
        <div className='offers_card'>
            <div className="top_section">
                <div className="stars">
                    <StarFilled className='star_' />
                    <StarFilled className='star_' />
                    <StarFilled className='star_' />
                    <StarFilled className='star_' />
                    <StarFilled className='star_' />
                </div>
                <span className="hotel_name">{h_name}</span>
                <span className="lx">Luxury Living</span>
            </div>
            <div className="middle_section">
                <img src={coverImg} alt="" />
            </div>
            <div className="bottom_section">
                <div className="bottom_left"><span>{h_name}</span></div>
                <div className="bottom_right">
                    <span className='contact'> <a href="tel:8826764772">+91 9899699991</a></span>
                    <span> <a href='mailto:  a@luxuryliving.in'> a@luxuryliving.in</a></span>
                </div>
            </div>
            <div className="circle">
                <p>BOOK NOW <br /> <span>{offer}%</span> <br /> <span className="off">off!</span></p>
            </div>
            <div className="img1 img">
                <img src={img1} alt="hotel" />
            </div>
            <div className="img2 img">
                <img src={img2} alt="hotel" />
            </div>
        </div>
    )
}

export default OffersCard