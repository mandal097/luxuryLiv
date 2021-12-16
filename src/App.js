import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Explore from './pages/Home/Explore/Explore'
import Hotels from './pages/Hotels/Hotels'
import LoginPage from './pages/LoginPage/LoginPage'
import Register from './pages/Regitration/Register'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/registration' element={<Register />} />
            <Route path='/agents' element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
