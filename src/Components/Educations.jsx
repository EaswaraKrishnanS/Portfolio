import React from 'react'
import img0 from '../Files/Easwar (Nayakar Mahal Pic).jpg'
import '../Style/Style.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Educations = () => {
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

            <div className="col-md-7 mt-5 border border-secondary" style={{borderRadius : '10px',height : '80vh' , overflowY : 'scroll', background : '#001c5d' , color : '#87CEEB' , overflowX : 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style>
                {`
                  .col-md-4::-webkit-scrollbar {
                    display: none;
                  }
                `}
                </style>

                <h3 className='mt-4'>Education</h3>

                <div className='border' style={{borderRadius : '10px'}}>

                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>Bachelor of Computer Applications - BCA</h6>

                    <h5 style={{paddingLeft : '10px' , marginTop : '10px'}}>Periyar Maniammai Institute of Science & Technology , Thanjavur</h5>

                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>2021 - 2024</h6>

                    <p style={{paddingLeft : '10px' , marginTop : '10px'}}>I recently graduated with a Bachelor of Computer Applications (BCA) from Periyar Maniammai Institute of Science & Technology in Thanjavur, spanning the years 2021 to 2024. My time at the institute was incredibly enriching, providing me with a solid foundation in computer applications and software development. The comprehensive curriculum, coupled with hands-on projects and practical experiences, equipped me with essential skills in programming, data management, and problem-solving. The supportive faculty and collaborative environment fostered my growth, both academically and personally. I am grateful for the opportunities and knowledge I gained, which have prepared me well for a successful career in the tech industry.</p>
                
                </div>

                <br />
                
                <div className='border' style={{borderRadius : '10px'}}>
                
                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>Higher Secondary School Certificate - HSC</h6>
               
                    <h5 style={{paddingLeft : '10px' , marginTop : '10px'}}>St Joseph's Higher Secondary School,Manjakuppam,Cuddalore</h5>
               
                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>2019-2021</h6>
               
                    <p style={{paddingLeft : '10px' , marginTop : '10px'}}>I completed my schooling in the Bio-Maths group at St. Joseph's Higher Secondary School in Manjakuppam, Cuddalore, during the years 2019-2021. This period was pivotal in shaping my academic interests and future aspirations. The rigorous curriculum in biology and mathematics provided me with a strong foundation in both subjects, fostering a deep understanding and appreciation for the sciences. The dedicated teachers and supportive learning environment played a crucial role in my academic success and personal growth. My time at St. Joseph’s was marked by valuable experiences, both inside and outside the classroom, which have prepared me well for the challenges and opportunities ahead.</p>
                
                </div>

                <br />

                <div className='border' style={{borderRadius : '10px'}}>
                    
                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>Secondary School Leaving Certificate- SSLC</h6>
                    
                    <h5 style={{paddingLeft : '10px' , marginTop : '10px'}}>St Joseph's Higher Secondary School,Kammiyampettai ,Cuddalore</h5>
                    
                    <h6 style={{paddingLeft : '10px' , marginTop : '10px'}}>2018 - 2019</h6>
                    
                    <p style={{paddingLeft : '10px' , marginTop : '10px'}}>I completed my schooling at St. Joseph’s Higher Secondary School in Kammiyampettai, Cuddalore, during the academic year 2018-2019. This period was instrumental in shaping my academic foundation and personal growth. The school provided a rigorous curriculum and a supportive learning environment, which helped me excel in my studies. The dedicated teachers and diverse extracurricular activities enriched my educational experience, fostering both intellectual and personal development. My time at St. Joseph’s was marked by valuable lessons and memorable experiences that have prepared me well for future academic and professional challenges.</p>
            
                </div>

                <br />

               </div>
        </div>
    </div>
  )
}

export default Educations
