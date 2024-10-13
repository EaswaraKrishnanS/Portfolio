import React from 'react'
import './Home.css'
import Profile from './Profile'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <section id='Home'>
      <div className='home-container'>
        <h4>Home - Component</h4>
          <Profile/>
          <Footer/>
      </div>
    </section>
  )
}

export default Home
