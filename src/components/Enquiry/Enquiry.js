import React, { useEffect } from 'react';
import { useState } from 'react';
import './enquiry.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
    CloseOutlined
} from '@ant-design/icons'

import styled from 'styled-components';

const Enquiry = ({ setShowForm, hotel }) => {
    const [hotelName, setHotelName] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [nights, setNights] = useState('')
    const [adults, setAdults] = useState('')
    const [childCount, setChildCount] = useState('')
    const [childsAge, setChildsAge] = useState('')
    const [enquiry, setEnquiry] = useState('')

    const [errorField, setErrorField] = useState({
        hotelNameError: '',
        checkInDateError: '',
        nightsError: '',
        adultsError: '',
        childCountError: '',
        childsAgeError: '',
        // enquiryError: ''
    })

    useEffect(() => {
        setHotelName(hotel)
    }, [hotel])


    const cancel = () => {
        setShowForm(false)
    }

    const submit = async (e) => {
        e.preventDefault()
        if (validForm()) {
            try {
                toast.success('Enquiry Submitted Successfully');
            } catch (error) {
                toast.error('Something went wrong')
            }
        } else {
            toast.error('please fill all the required fields')
        }
    }

    const validForm = () => {
        setErrorField({
            hotelNameError: '',
            checkInDateError: '',
            nightsError: '',
            adultsError: '',
            childCountError: '',
            childsAgeError: ''
        })
        let formIsValid = true;
        if (hotelName === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, hotelNameError: "Please Choose hotel first"
            }))
        }
        if (checkInDate === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, checkInDateError: "Please Choose Check in date"
            }))
        }
        if (nights === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, nightsError: "Required field"
            }))
        }
        if (adults === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, adultsError: "Required field"
            }))
        }
        if (childCount === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, childCountError: "Please enter number of childrens"
            }))
        }
        if (childsAge === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, childsAgeError: "Please give childs ages"
            }))
        }
        // if (enquiry === '') {
        //     formIsValid = false;
        //     setErrorField(pre => ({
        //         ...pre, enquiryError: "If you don't have any request please write No!"
        //     }))
        // }
        return formIsValid;
    }

    return (
        <div className="main_container">
            <div className='enquiry_form'>
                <ToastContainer style={{ fontSize: '1.6rem' }} />
                <Cancel onClick={cancel}><CloseOutlined /></Cancel>
                <div className="enquiry_form_wrapper">
                    <div className="header">
                        <h2>Input details of your request here ...and we'll get right back to you!</h2>
                    </div>
                    <form className="form" onSubmit={submit}>
                        <div className="inputDiv">
                            <label htmlFor="">Hotel Name :</label>
                            <input type="text" name="" id="" value={hotelName} />
                            {
                                errorField.hotelNameError.length > 0 && <span className="required_Field">{errorField.hotelNameError}</span>
                            }
                        </div>
                        <div className="input_div">
                            <div className="inputdivs">
                                <label htmlFor="">Check In Date :</label>
                                <input type="date" name="" id="" onChange={(e) => setCheckInDate(e.target.value)} />
                                {
                                    errorField.checkInDateError.length > 0 && <span className="required_Field">{errorField.checkInDateError}</span>
                                }
                            </div>
                            <div className="inputdivs">
                                <label htmlFor="">Nights :</label>
                                <input type="number" name="" id="" onChange={(e) => setNights(e.target.value)} />
                                {
                                    errorField.nightsError.length > 0 && <span className="required_Field">{errorField.nightsError}</span>
                                }
                            </div>
                        </div>
                        <div className="input_div">
                            <div className="inputdivs">
                                <label htmlFor="">Adults :</label>
                                <input type="number" name="" id="" onChange={(e) => setAdults(e.target.value)} />
                                {
                                    errorField.adultsError.length > 0 && <span className="required_Field">{errorField.adultsError}</span>
                                }
                            </div>
                            <div className="inputdivs">
                                <label htmlFor="">Children :</label>
                                <input type="number" name="" id="" onChange={(e) => setChildCount(e.target.value)} />
                                {
                                    errorField.childCountError.length > 0 && <span className="required_Field">{errorField.childCountError}</span>
                                }
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="">Each child's age :</label>
                            <input type="text" name="" id="" placeholder='  03 yrs / 05 yrs / 11 yrs...' onChange={(e) => setChildsAge(e.target.value)} />
                            {
                                errorField.childsAgeError.length > 0 && <span className="required_Field">{errorField.childsAgeError}</span>
                            }
                        </div>
                        <div className=" textarea">
                            <label htmlFor="">Any Other Request :</label>
                            <textarea type="text" name="" id="" onChange={(e) => setEnquiry(e.target.value)}></textarea>
                            {/* {
                            errorField.enquiryError.length > 0 && <span className="required_Field">{errorField.enquiryError}</span>
                        } */}
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
        </div>
    )
};

const Cancel = styled.div`
position:absolute;
top:-0.7rem;
right:2rem;
font-size:4rem;
color:white;
cursor:pointer;
z-index:1;
@media(max-width:900px){
    top:0.5rem;
    right:2rem;

}
`
export default Enquiry;
