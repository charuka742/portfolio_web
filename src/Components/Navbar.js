import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container ">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portifolio">PortiFolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/hireme">Hire Me</Link></li>
      </ul>

    </div>
  );
};

export default Navbar;