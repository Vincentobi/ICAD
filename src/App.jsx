import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs/*" element={<Programs />}/>
        <Route path="/getInvolved" element={<GetInvolved />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
