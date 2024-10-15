import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h4>Easwara Krishnan S</h4>
      </div>
      <button className="hamburger" onClick={toggleNavbar}>
        &#9776;
      </button>
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="AboutMe"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="Resume"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleNavbar}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default CustomNavbar;
