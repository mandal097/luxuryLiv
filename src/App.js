import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Hotels from './pages/Hotels/Hotels'
import Register from './pages/Regitration/Register'
import Testimonies from './pages/Testimonies/Testimonies'
import Feedback from './pages/Feedback/Feedback'
import Contact from './components/Contact/Contact'
import AboutUs from './pages/AboutUs/AboutUs'
import styled from 'styled-components'
import ComingSoon from './pages/ComingSoon'
import Agents from './pages/Agents/Agents'

const App = () => {


  return (
    <Container className='app'>
      <Router>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />}>
            </Route>
            <Route path='hotels' element={<Hotels />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='registration' element={<Register />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='agents' element={<Agents />} />
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


export default App
