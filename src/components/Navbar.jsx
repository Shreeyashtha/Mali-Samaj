import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import malisamajLogo from '../assets/malisamajLogo.png'; // Assuming logo is in assets folder

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={malisamajLogo} alt="Nepal Mali Samaj Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/executive-committee">Executive Committee</Link></li>
        <li><Link to="/youth-committee">Youth Committee</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;