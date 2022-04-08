import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Feedback from './pages/FeedbackForm/FeedbackForm'
import ContactUs from './pages/Contactus/ContactUs'
import Agents from './pages/SignUpAgents/Agents'
import HotelPatners from './pages/HotelPartners/HotelPartners'
import Portfolio from './pages/Portfolio/Portfolio'
import HotelDesc from './pages/HotelsDesc/HotelDesc'
import AboutUs from './pages/AboutUs/AboutUs'
import ClientsForm from './pages/ClientsPreferForm/ClientsForm'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='sign-up-agents' element={<Agents />} />
            <Route path='hotel-partners' element={<HotelPatners />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='luxury-living-clients-preferce' element={<ClientsForm />} />
            <Route path='luxury-living-portfolio' element={<Portfolio />} />
            <Route path='luxury-living-portfolio/:id' element={<HotelDesc />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App