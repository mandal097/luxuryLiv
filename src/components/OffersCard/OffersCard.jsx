import React, { useState } from 'react';
import './styles.scss';
import { AiOutlineArrowRight } from 'react-icons/ai'
const OffersCard = (props) => {
    const { hotelName, offerName, room_cate, offerDetail, startDates, endDates, setDetails } = props;

    const [animate, setAnimate] = useState(false)

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => {
            setDetails(true);
        }, 500);
    }
    return (
        <div className='offers_card' style={{
            animation: animate && 'shrink 500ms ease-in forwards 1'
        }}>
            <div className="hotel_name">
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1516531558361-f6c4c956ad85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlnaHQlMjBob3RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="hotel_">
                    <h3>{hotelName}</h3>
                    <p>1 week ago</p>
                </div>
            </div>
            <div className="offer_details">
                <h4 className="offer_name">{offerName}</h4>
                <h6 className="room_category">{room_cate}</h6>
                <p className="offer_detail">{offerDetail}</p>
                <p className="dates">Offer starts on {startDates}</p>
                <p className="dates">Offer ends on {endDates} </p>
                <button className="more_details" onClick={handleClick}>More details <AiOutlineArrowRight className='arrow' /></button>
            </div>
        </div>
    )
}

export default OffersCard