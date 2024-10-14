import React from 'react'
import './Home.css'
import Profile from './Profile'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <section id='Home'>
      <div className='home-container'>
          <Profile/>
          <Footer/>
      </div>
    </section>
  )
}

export default Home
