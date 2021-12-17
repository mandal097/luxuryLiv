import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Hotels from './pages/Hotels/Hotels'
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Regitration/Register'
import Testimonies from './pages/Testimonies/Testimonies'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/*' >
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='hotels' element={<Hotels />} />
            <Route path='registration' element={<Register />} />
            <Route path='agents' element={<LoginPage />} />
              <Route path='agents/testimonies' element={<Testimonies />} />
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
