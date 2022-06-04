import React from 'react';
import './style.scss';
import {
    CloseOutlined
} from '@ant-design/icons'
const OffersDetails = ({setDetails}) => {
    return (
        <div className='offers_details'>
            <div className="close_" onClick={()=>setDetails(false)}><CloseOutlined /></div>
        </div>
    )
}

export default OffersDetails