import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Keep this if you plan to add other pages
import CustomNavbar from "./Portfolio_Container/Navbar/Navbar";
import Home from "./Portfolio_Container/Home/Home";
import AboutMe from "./Portfolio_Container/AboutMe/AboutMe";
import Skills from "./Portfolio_Container/Skills/Skills";
import Projects from "./Portfolio_Container/Projects/Projects";
import Contact from "./Portfolio_Container/ContactMe/Contact";
import Resume from "./Portfolio_Container/Resume/Resume";
import Lastfooter from "./Portfolio_Container/Footers/Lastfooter";
import ScrollBtn from "./Portfolio_Container/Scroll Button/ScrollBtn";

const App = () => {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <section id="Home">
          <Home />
        </section>
        <section id="AboutMe">
          <AboutMe />
        </section>
        <section id="Resume">
          <Resume />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <ScrollBtn/>
        <Lastfooter/>
      </Router>
    </div>
  );
};

export default App;
