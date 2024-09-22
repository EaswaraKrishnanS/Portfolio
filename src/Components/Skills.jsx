import React from 'react'
import img0 from '../Files/Easwar (Nayakar Mahal Pic).jpg'
import SkillBar from './SkillBar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Skills = () => {
    const email = 'easwarakrishnan0317@gmail.com';
    const subject = '';
    const body = '';
    const phoneNumber = '+91 9790655266';
    const linkedIn = 'https://www.linkedin.com/in/easwara-krishnan-s-9613b1290'
    const resumeUrl = '/Easwara Krishnan_S CV.pdf'
    const latitude = 12.959353701102396;
    const longitude = 77.70254679651269;

    const pskills = [
        { name: 'HTML', proficiency: 95 },
        { name: 'CSS', proficiency: 90 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'Python', proficiency: 75 },
      ]

      const lskills = [
        {name : 'Bootstrap' , proficiency : 80},
        {name : 'React JS' , proficiency : 90},
        {name : 'Redux' , proficiency : 70}
      ]

      const fskills = [
        {name : 'Node JS' , proficiency : 75},
        {name : 'Express JS' , proficiency : 55}
      ]

      const db = [
        {name : 'MySQL' , proficiency : 80},
        {name : 'MongoDB' , proficiency : 50}
      ]

      const dev = [
        {name : 'VS Code' , proficiency : 90},
        {name : 'Git' , proficiency : 60},
        {name : 'GitHub' , proficiency : 80},
        {name : 'Postman' , proficiency : 70},
        {name : 'Jupyter Notebook' , proficiency : 75}
      ]

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 mt-5 border border-secondary" style={{height : '80vh' , overflowY : 'scroll',marginRight: '9px' , overflowX : 'hidden',borderRadius : '10px'}}>
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

            <div className="col-md-7 mt-5 border border-secondary" style={{height : '80vh' , overflowY : 'scroll' , overflowX : 'hidden',borderRadius : '10px'}}>
                <h3>Skills</h3>
                <h4>Programming Languages</h4>
                {pskills.map((pskill, index) => (
                <SkillBar key={index} skillName={pskill.name} proficiency={pskill.proficiency} /> 
                ))}

                <h4>Libraries</h4>
                {lskills.map((lskills,index) => (
                    <SkillBar key={index} skillName={lskills.name} proficiency={lskills.proficiency} />
                ))}

                <h4>Frameworks</h4>
                {fskills.map((fskills,index) => (
                    <SkillBar key={index} skillName={fskills.name} proficiency={fskills.proficiency} />
                ))}

                <h4>Data Bases</h4>
                {db.map((db,index) => (
                    <SkillBar key={index} skillName={db.name} proficiency={db.proficiency} />
                ))}

                <h4>Web Dev Tools</h4>
                {dev.map((dev,index) => (
                    <SkillBar key={index} skillName={dev.name} proficiency={dev.proficiency} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
