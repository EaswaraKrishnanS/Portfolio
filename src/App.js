import React from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import About from './Components/About'
import Educations from './Components/Educations'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/" />} />
            <Route path="/" element={<About />}/>
            <Route path="/Educations" element={<Educations />}/>
            <Route path="/Skills" element={<Skills />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App