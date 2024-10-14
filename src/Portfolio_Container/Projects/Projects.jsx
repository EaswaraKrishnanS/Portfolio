import React from 'react';
import './Project.css';
import Musicplayer from '../../Assets/Home/Music Player.jpeg'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects-container'>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>My Projects</p>
        <div className="projects-divider">
            <div className="orange-block"></div>
          </div>
        <div className='testimonials'>
          <div className='testimonial-card'>
          <a href="FULL DOC - PMC - BCA - EMOTION BASED MUSIC PLAYER.pdf" className='decorationhide' download='FULL DOC - PMC - BCA - EMOTION BASED MUSIC PLAYER.pdf'>
            <p className='testimonial-text'>
              “The project aims to create a facial expression recognition system with a music recommendation feature to enhance user interaction and emotional response.”
            </p>
            
            <div className='testimonial-author' >
              <img src={Musicplayer} alt='Daisy Dominic' />
              <div>
                <h4>Emotional Based AI Music Player</h4>
                <p>Python</p>
              </div>
            </div>
            </a>
          </div>
          <div className='testimonial-card'>
            <a href="" className='decorationhide'>
            <p className='testimonial-text'>
              “It was nice hiring this guy for my e-commerce project. He delivered even more than I can imagine. I recommend him for you.”
            </p>
           
            <div className='testimonial-author'>
              <img src='https://via.placeholder.com/50' alt='Mikel' />
              <div>
                <h4>Mikel</h4>
                <p>CEO MikeTech</p>
              </div>
            </div>
            </a>
          </div>
          <div className='testimonial-card'>
            <a href="" className='decorationhide'>
            <p className='testimonial-text'>
              “When he delivered my job, my head spun, it was so nice and he implemented every functionality I requested for. Thank you.”
            </p>
            
            <div className='testimonial-author'>
              <img src='https://via.placeholder.com/50' alt='Daisy Dominic' />
              <div>
                <h4>Daisy Dominic</h4>
                <p>CEO InansGlobal</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
