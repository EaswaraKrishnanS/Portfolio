import React from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import About from './Components/About'
import Educations from './Components/Educations'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './Style/Style.css'
import backgroundImage from './Files/bg.jpg'

const App = () => {
  return (
    
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/About" />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Educations" element={<Educations />}/>
            <Route path="/Skills" element={<Skills />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
