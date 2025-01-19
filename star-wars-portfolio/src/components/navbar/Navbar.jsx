import './Navbar.css';
import { useState } from 'react';






const Navbar = () => {


  const [activeNav, setActiveNav] = useState('#about');

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
      setActiveNav(sectionId);
    }
  }


  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Star Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#about" onClick={() => scrollToSection('#about')} className={`navbar-link ${activeNav === '#about' ? 'active' : ''}`}>About</a></li>
        <li><a href="#projects" onClick={() => scrollToSection('#projects')} className={`navbar-link ${activeNav === '#projects' ? 'active' : ''}`}>Projects</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('#contact')} className={`navbar-link ${activeNav === '#contact' ? 'active' : ''}`}>Contact</a></li>
        <li><a href="#skills" onClick={() => scrollToSection('#skills')} className={`navbar-link ${activeNav === '#skills' ? 'active' : ''}`}>skills</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;

