import React from 'react';
import './enquiry.scss'

const Enquiry = () => {
    return (
        <div className='enquiry_form'>
            <div className="enquiry_form_wrapper">
                <div className="header">
                    <h2>Input details of your request here ...and we'll get right back to you!</h2>
                </div>
                <form className="form">
                    <div className="inputDiv">
                        <label htmlFor="">Hotel Name :</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="input_div">
                        <div className="inputdivs">
                            <label htmlFor="">Check In Date :</label>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="inputdivs">
                            <label htmlFor="">Nights :</label>
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                    <div className="input_div">
                        <div className="inputdivs">
                            <label htmlFor="">Adults :</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="inputdivs">
                            <label htmlFor="">Children :</label>
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">Each child's age :</label>
                        <input type="text" name="" id="" placeholder='  03 yrs / 05 yrs / 11 yrs...' />
                    </div>
                    <div className=" textarea">
                        <label htmlFor="">Any Other Request :</label>
                        <textarea type="text" name="" id="" ></textarea>
                    </div>
                    <div className=" button">
                       <input type="submit" value="submit" />
                    </div>
                </form>
                <div className="contactDiv">
                    <h2>Need It Now?</h2>
                    <h2>Call</h2>
                    <span>9810802363</span>
                    <span>9810800907</span>
                </div>
            </div>
        </div>
    )
};

export default Enquiry;
