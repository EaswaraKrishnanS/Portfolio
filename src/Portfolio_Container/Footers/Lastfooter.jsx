import React from 'react';
import './Lastfooter.css';

const Lastfooter = () => {
  const email = "easwarakrishnan0317@gmail.com";
  const subject = "";
  const body = "";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This provides smooth scrolling effect
    });
  };

  return (
    <footer className="lastfooter-container">
      <div className="lastfooter-content">
        <div className="lastfooter-social-icons">
        <a
                  href="https://github.com/EaswaraKrishnanS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
                <a
                  href="https://linkedin.com/in/easwara-krishnan-s-9613b1290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/_man_of_few_word_s_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://x.com/Easwar_03?t=-h2oJ5BD-HVltXrpWXQD8A&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
        </div>

        <div className="lastfooter-text">
          <p>&copy; {new Date().getFullYear()} Easwara Krishnan S. All Rights Reserved.</p>
        </div>

      
      </div>
    </footer>
  );
};

export default Lastfooter;
