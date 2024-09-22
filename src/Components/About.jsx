import React from 'react'
import img0 from '../Files/Easwar (Nayakar Mahal Pic).jpg'
import backgroundImage from '../Files/bg.jpg'
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
            <div className="col-md-4 mt-5 border border-secondary" style={{height : '80vh' , overflowY : 'scroll' , overflowX : 'hidden' ,marginRight: '9px' ,borderRadius : '10px'}}>
         
                <img src={img0} alt="Me" width={200} height={250} style={{borderRadius : '10px'}}/>

                <h3>Easwara Krishnan S</h3>
                <p>Pursuing In Python Full Stack Development </p>
                <hr />

                <label>E-mail</label><br />
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target="_blank" rel="noopener noreferrer">{email}</a>

                <label>Mobile Number</label><br />
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a><br />

                <label>GitHub</label><br />
                <a href="https://github.com/EaswaraKrishnanS" target="_blank" rel="noreferrer">Easwara Krishnan S</a><br />

                <label>LinkedIn</label><br />
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">Easwara Krishnan S</a><br />

                <label>Resume</label><br />
                <a href={resumeUrl} download="" target="_blank" rel="noopener noreferrer">
                <button>Download Resume</button>
                </a><br />

                <label>Current Location</label><br />
                <a href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`} target="_blank" rel="noopener noreferrer">Bangalore,IN</a>
                
            </div>
            <div className="col-md-7 mt-5 border border-secondary" style={{borderRadius : '10px'}}>
                <h3>About Me</h3>
                <p>I am a Fresher Developer with an eagerness to learn and grow. My Skills includes developing applications using HTML and CSS,Core Java, Python, participating in group projects, and helping to design user interface for a project. My greatest strengths are my problem-solving skills, my ability to work well in a team, and my aptitude for quickly adapting to new technologies. I am highly organized and detail-oriented with excellent communication skills. I have a strong passion for learning and possess the ability to understand complex concepts. I am confident that I can use my skills and knowledge to contribute effectively in the development of software products.</p>
            

            </div>
        </div>
    </div>
  )
}

export default About
