import React, { useState } from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: 'auto'
    })
  }
  const [IsOpen, setIsOpen] = useState(false)
  const showNavbar = () => {
    switch (IsOpen) {
      case false:
        setIsOpen(true);
        break;
      case true:
        setIsOpen(false);
        break;
      default:
        setIsOpen(false)
    }
  }

  return (
    <nav className='header'>
      <div className="header_wrapper">

        <div className="ham_div" onClick={showNavbar}> <Ham /></div>
        <div className="navs" onClick={(e) => {
          navigate('/hotel-collabs');
          toTop()
        }}>New Hotel Collaborations</div>
        <div className="navs" onClick={(e) => {
          navigate('/offers');
          toTop()
        }} > Irresistible Offers</div>
        {
          IsOpen && <Navbar />
        }
      </div>
    </nav>
  )
}

export default Header