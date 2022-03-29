import React from 'react'
// import { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Hotels from './pages/Hotels/Hotels'
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Regitration/Register'
import Testimonies from './pages/Testimonies/Testimonies'
import Feedback from './pages/Feedback/Feedback'
import Contact from './components/Contact/Contact'
import AboutUs from './pages/AboutUs/AboutUs'
// import HomeBtn from './components/HomeBtn/HomeBtn'
// import HotelsDescModal from './components/HotelDescription/HotelsDescModal'
// import Enquiry from './pages/Enquiry/Enquiry'
import styled from 'styled-components'
import ComingSoon from './ComingSoon'
const App = () => {
  // const [display,setDisplay] = useState(false)
  // // const navigate = useNavigate()
  // // const goToHome = () => {
  // //     navigate('/')
  // // }

  
  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //         if (window.scrollY > 100) {
  //             setDisplay(true)
  //         } else {
  //             setDisplay(false)
  //         }
  //         return () => {
  //             window.removeEventListener("scroll")
  //         }
  //     })

  // }, [])

  return (
    <Container className='app'>
      <Router>
      {/* <HomeBtn/> */}
      {/* <HomeButton d={display}></HomeButton> */}
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />}>
            </Route>
            {/* <Route path='enquiry/:hotelName' element={<Enquiry />} /> */}
            <Route path='hotels' element={<Hotels />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='registration' element={<Register />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='agents' element={<LoginPage />} />
            <Route path='agents/testimonies' element={<Testimonies />} />
            <Route path='*' element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}
const Container = styled.div`
position:relative;
`
// const HomeButton = styled.div`
// position:fixed;
// left:40rem;
// top:-5rem;
// width:10rem;
// height:10rem;
// border:1px solid white;
// display: ${props => props.d ? "none" : 'flex'};
// top: ${props => props.d ? "-5rem" : '5rem'};
// z-index: ${props => props.d ? "-1000" : '1'};
// `

export default App
