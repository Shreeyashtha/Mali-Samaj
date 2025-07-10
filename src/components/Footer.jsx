import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Nepal Mali Samaj is dedicated to preserving our cultural heritage and fostering unity among our members worldwide.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@malisamaj.org</p>
          <p>Phone: +977-</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="https://www.facebook.com/share/12M1E6pdSLs/" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            {/* <a href="https://twitter.com/malisamaj" target="_blank" rel="noopener noreferrer">Twitter</a> |  */}
            <a href="https://www.instagram.com/nepal_mali_samaj?igsh=MXJ3dWVqdXk5dWE2bw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <p className="footer-copyright">© 2025 Mali Samaj</p>
    </footer>
  );
};

export default Footer;