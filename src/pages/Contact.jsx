import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import nepalMaliSamajImage from '../assets/malisamaj.jpg';
import backgroundImage from '../assets/groupPic.jpg'; // Your background image
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';

const Contact = () => {
  // Actual social media links
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/share/12M1E6pdSLs/',
    instagram: 'https://www.instagram.com/nepal_mali_samaj?igsh=MXJ3dWVqdXk5dWE2bw==',
    youtube: 'https://youtube.com/@nepalmalisamaj?si=XzuCZp3bwS23U4Zu',
    linkedin: 'https://www.linkedin.com/company/nepal-mali-samaj/',
    email: 'mailto:info.nepalmalisamaj@gmail.com'
  };

  const handleSocialClick = (platform) => {
    window.open(socialMediaLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-container">
      <Navbar />
      <section className="contact-section">
        <div className="container">
          {/* Highlighting Statement
          <div className="hero-statement">
            <h1 className="hero-title">Building Stronger Communities Together</h1>
            <p className="hero-subtitle">
              Connecting Mali, Malakar, and related communities across Nepal through unity, progress, and shared values. 
              Join our growing network of support and empowerment.
            </p>
          </div> */}

          {/* Get in Touch Section */}
      <div className="get-in-touch" style={{ backgroundImage: `linear-gradient(rgba(26, 60, 52, 0.9), rgba(26, 60, 52, 0.9)),url(${backgroundImage})`, }}>
            <h2 className="get-in-touch-title">GET IN TOUCH</h2>
            <div className="touch-cards">
              <div className="touch-card">
                <FaMapMarkerAlt className="touch-icon" />
                <h3>ADDRESS</h3>
                <p>
                  Nepal Mali Samaj<br />
                  Tripureshwor, Kathmandu
                  Nepal
                </p>
              </div>
              <div className="touch-card">
                <FaPhoneAlt className="touch-icon" />
                <h3>PHONE</h3>
                <p>
                  {/* Not provided<br /> */}
                  (Please call during office hours)
                </p>
              </div>
              <div className="touch-card social-media-card">
                <div className="social-icons-row">
                  <div className="social-icon-wrapper" onClick={() => handleSocialClick('facebook')}>
                    <FaFacebookF className="social-icon facebook" />
                  </div>
                  <div className="social-icon-wrapper" onClick={() => handleSocialClick('instagram')}>
                    <FaInstagram className="social-icon instagram" />
                  </div>
                  <div className="social-icon-wrapper" onClick={() => handleSocialClick('youtube')}>
                    <FaYoutube className="social-icon youtube" />
                  </div>
                  <div className="social-icon-wrapper" onClick={() => handleSocialClick('linkedin')}>
                    <FaLinkedinIn className="social-icon linkedin" />
                  </div>
                  <div className="social-icon-wrapper" onClick={() => handleSocialClick('email')}>
                    <FaEnvelope className="social-icon email" />
                  </div>
                </div>
                <h3>FOLLOW US</h3>
                <p>Connect with us on social media</p>
              </div>
            </div>
          </div>

          {/* Existing Contact Content */}
          <h1 className="contact-title">NEPAL MALI SAMAJ</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h2>How can we help you?</h2>
              <p>
                See how your Mali community can benefit with Nepal Mali Samaj on your team!
              </p>
              
              {/* <a href="mailto:info.nepalmalisamaj@gmail.com" className="send-rfp">Send RFP via email</a> */}
              <h3>Questions?</h3>
              <p>Email us at <a href="mailto:info.nepalmalisamaj@gmail.com">info@nepalmalisamaj.org</a></p>
              <p>We are open Monday to Friday from 9:00 am to 5:00 pm</p>
              {/* <h3>Contact Us:</h3>
              <p><strong>Email:</strong> <a href="mailto:info.nepalmalisamaj@gmail.com">info.nepalmalisamaj@gmail.com</a></p>
              <p><strong>Phone:</strong> Not provided</p>
              <p><strong>Location:</strong> Tripureshwor, Kathmandu, Nepal</p> */}
              <img src={nepalMaliSamajImage} alt="Nepal Mali Samaj" className="samaj-logo" />
            </div>
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <input type="text" placeholder="Address" />
                <select>
                  <option value="">How did you learn about Nepal Mali Samaj?</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend/Community Member</option>
                  <option value="other">Other</option>
                </select>
                <select>
                  <option value="">I want to:</option>
                  <option value="join">Join the Mali Community</option>
                  <option value="donate">Donate to Nepal Mali Samaj</option>
                  <option value="inquire">Inquire About Events</option>
                </select>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;