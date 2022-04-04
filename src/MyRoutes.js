import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './FinalPages/Home'
// import Main from './pages/Main'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes