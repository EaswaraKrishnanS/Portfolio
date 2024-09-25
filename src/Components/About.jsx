import React from 'react'
import img0 from '../Files/Easwar (Nayakar Mahal Pic).jpg'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const About = () => {
    const email = 'easwarakrishnan0317@gmail.com';
    const subject = '';
    const body = '';
    const phoneNumber = '+91 9790655266';
    const linkedIn = 'https://www.linkedin.com/in/easwara-krishnan-s-9613b1290'
    const resumeUrl = '/Easwara Krishnan_S CV.pdf'
    const latitude = 12.959353701102396;
    const longitude = 77.70254679651269;

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-4 mt-5 border border-secondary" style={{height: '80vh', overflowY: 'scroll', overflowX: 'hidden', marginRight: '9px', borderRadius: '10px', background: '#001c5d', color: '#87CEEB', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    <style>
                        {`
                            .col-md-4::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>

                <br />

                <img src={img0} alt="Me" width={200} height={250} style={{borderRadius : '10px'}}/>

                <h3>Easwara Krishnan S</h3>
                <p className='border form-control' style={{background: '#001c5d', color : '#87CEEB' }}>Pursuing In Python Full Stack Development </p>
                <hr />

                <div className='form-group'>
                    <label>E-mail</label>

                    <a className='form-control nav-link' style={{background: '#001c5d',color : '#87CEEB'}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target="_blank" rel="noopener noreferrer">{email}</a>

                </div>
                
                <div className='form-group'>

                    <label>Mobile Number</label>
                    
                    <a className='form-control nav-link' style={{background: '#001c5d',color : '#87CEEB'}} href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                
                </div>
                
                <div className='form-group'>

                    <label>GitHub</label>
                    
                    <a className='form-control nav-link' style={{background: '#001c5d',color : '#87CEEB'}} href="https://github.com/EaswaraKrishnanS" target="_blank" rel="noreferrer">Easwara Krishnan S</a>
                
                </div>
                
                <div className='form-group'>

                    <label>LinkedIn</label>

                    <a className='form-control nav-link' style={{background: '#001c5d',color : '#87CEEB'}} href={linkedIn} target="_blank" rel="noopener noreferrer">Easwara Krishnan S</a>
                
                </div>
                
                <div className='form-group'>

                    <label>Resume</label>

                    <a href={resumeUrl} download="" target="_blank" rel="noopener noreferrer">

                    <button className='form-control nav-link' style={{background: '#001c5d',color : '#87CEEB'}}>Download Resume</button>
                    
                    </a>

                </div>
                
                <div className='form-group'>

                    <label>Current Location</label>

                    <a className='form-control nav-link ' style={{background: '#001c5d',color : '#87CEEB'}} href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`} target="_blank" rel="noopener noreferrer">Bangalore,IN</a>
                
                </div>

                
            </div>
            <div className="col-md-7 mt-5 border border-secondary" style={{borderRadius : '10px' , background : '#001c5d' , color : '#87CEEB'}}>
            
                <h3 className='mt-4'>About Me </h3>
                <div className='border' style={{borderRadius : '10px'}}>
                    <h4 style={{paddingLeft : '10px' , marginTop : '10px'}}> Intro </h4>
                
                    <p style={{paddingLeft : '10px' , marginTop : '10px'}}>I am a Fresher Developer with an eagerness to learn and grow. My Skills includes developing applications using HTML and CSS,Core Java, Python, participating in group projects, and helping to design user interface for a project. My greatest strengths are my problem-solving skills, my ability to work well in a team, and my aptitude for quickly adapting to new technologies. I am highly organized and detail-oriented with excellent communication skills. I have a strong passion for learning and possess the ability to understand complex concepts. I am confident that I can use my skills and knowledge to contribute effectively in the development of software products.</p>
            
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default About
