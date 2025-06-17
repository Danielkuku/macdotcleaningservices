// File: src/pages/SpecialEventCleaning.jsx
import React from "react";
import { useState } from "react";
import "../ServicePage.css";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import "../ServicePage.css";
import "../index.css";

const SpecialEventCleaning = () => {
  const points = [
    "Pre-event deep cleaning and preparation",
    "Post-event cleanup and waste removal",
    "Thorough floor and surface disinfection",
    "Kitchen and restroom detailing",
    "Flexible scheduling to fit your event timing",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div>
      <nav className="navbar">
        <Link to="/#home" className="logo" onClick={closeMenu}>
          <div className="logo">
            <img src="/logo.png" alt="Macdot Logo" />
          </div>
        </Link>

        <div className="nav-links">
          <Link to="/#services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/#about" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/#mission" onClick={closeMenu}>
            Our Mission
          </Link>
          <Link to="/#FAQ" onClick={closeMenu}>
            FAQ
          </Link>
          <Link to="/#reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link to="/#footer" onClick={closeMenu}>
            Enquiry
          </Link>
        </div>

        <div className="nav-actions">
          <a href="tel:07939442320" className="call-button">
            <FaPhone
              style={{ transform: "rotate(90deg)", marginRight: "10px" }}
            />
            Book
          </a>

          <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
            <FaBars />
          </div>
        </div>

        {/* Mobile Slide-In Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={closeMenu}>
            <FaTimes />
          </div>

          <Link to="/#services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/#about" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/#mission" onClick={closeMenu}>
            Our Mission
          </Link>
          <Link to="/#FAQ" onClick={closeMenu}>
            FAQ
          </Link>
          <Link to="/#reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link to="/#footer" onClick={closeMenu}>
            Enquiry
          </Link>
        </div>
      </nav>

      <div className="service-page">
        <h1>Special Event Cleaning</h1>
        <p className="service-description">
          Whether you’re hosting a private party, corporate event, wedding, or
          celebration, our <strong>Special Event Cleaning Service</strong>{" "}
          ensures your venue looks flawless before, during, and after the big
          day. At Macdot, we understand the importance of first impressions and
          the stress that comes with planning and cleaning up after an event.
          <br />
          <br />
          That’s why we offer flexible, discreet, and professional cleaning
          tailored to your event’s specific needs. From prepping the venue and
          sanitizing surfaces to removing trash and restoring order post-event,
          we’re here to take cleaning off your checklist. You focus on
          entertaining, we’ll handle the mess.
        </p>

        <div className="service-details">
          <ul className="bullet-points">
            {points.map((point, index) => (
              <li key={index}>
                <FaCheck color="#0a8a54" style={{ marginRight: "8px" }} />
                {point}
              </li>
            ))}
          </ul>
          <div className="service-image">
            <img src="/servicepage5.jpg" alt="Special Event Cleaning" />
          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo.png" alt="Logo" />
              </div>
              <h3 className="footer-heading">Contact</h3>
              <div className="footer-contact">
                <strong>Telephone:</strong>{" "}
                <a href="tel:07939442320">07939442320</a>
              </div>
              <div className="footer-contact">
                <strong>Address:</strong> o/c AACSL Accountants Limited, 1st
                Floor,
                <br /> North Westgate House, Harlow, Essex, CM20 1YS.
              </div>
              <div className="footer-contact">
                <strong>Email Address:</strong>{" "}
                <a href="mailto:cristobaldaniel022@gmail.com">
                  macdotservices.co.uk
                </a>
              </div>
              <div className="footer-follow-title">Follow Us</div>
              <div className="footer-social-links">
                <FaFacebookF className="footer-icon" />
                <FaTwitter className="footer-icon" />
                <FaInstagram className="footer-icon" />
              </div>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h3 className="footer-heading">Our Services</h3>
              <Link to="/services/residential" className="footer-link">
                Residential Cleaning
              </Link>
              <Link to="/services/commercial" className="footer-link">
                Commercial Cleaning
              </Link>
              <Link to="/services/move-in" className="footer-link">
                Move-In / Move-Out Cleaning
              </Link>
              {/* <Link to="/services/event" className="footer-link">
                Special Event Cleaning
              </Link> */}
              <Link to="/services/tenancy" className="footer-link">
                End of Tenancy Cleaning
              </Link>
            </div>
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Have a question? Send us a message.</h2>
              <form className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div className="footer-copyright">
            &copy; 2025, Macdot Cleaning Services LTD, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpecialEventCleaning;
