import React, { useState } from 'react';
import img0 from '../Files/Easwar (Nayakar Mahal Pic).jpg'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from 'axios';

const Contact = () => {
    const email = 'easwarakrishnan0317@gmail.com';
    const subject = '';
    const body = '';
    const phoneNumber = '+91 9790655266';
    const linkedIn = 'https://www.linkedin.com/in/easwara-krishnan-s-9613b1290'
    const resumeUrl = '/Easwara Krishnan_S CV.pdf'
    const latitude = 12.959353701102396;
    const longitude = 77.70254679651269;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/send', formData); 
          alert('Message sent successfully!');
        } catch (error) {
          console.error('Error sending message:', error);
          alert('Failed to send message.');
        }
      };
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 mt-5 border border-secondary" style={{height : '80vh' , overflowY : 'scroll' , overflowX : 'hidden',marginRight: '9px',borderRadius : '10px'}}>
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
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Your Message</label><br />
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
                </div>
                    <button type="submit" >Send Message</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
