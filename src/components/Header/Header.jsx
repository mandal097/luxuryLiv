import React, { useState } from 'react'
import './style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
const Header = () => {
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
    <div className='header'>
      <div className="ham_div" onClick={showNavbar}> <Ham /></div>
      {
        IsOpen && <Navbar />
      }
    </div>
  )
}

export default Header