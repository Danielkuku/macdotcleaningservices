// File: src/pages/EndOfTenancy.jsx
import React from "react";
import { useState } from "react";
import "../ServicePage.css";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaCheck,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import "../ServicePage.css";
import "../index.css";

const EndOfTenancy = () => {
  const points = [
    "Deep clean for landlord and agency standards",
    "Removal of limescale, grease, and built-up grime",
    "Inside oven, fridge, cabinets, and drawers",
    "Bathroom and kitchen disinfection",
    "Carpet vacuuming and hard floor mopping",
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
            Contact
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
            Contact
          </Link>
        </div>
      </nav>

      <div className="service-page">
        <h1>End of Tenancy Cleaning</h1>
        <p className="service-description">
          Our <strong>End of Tenancy Cleaning Service</strong> is specifically
          designed to help you leave your rental property in pristine condition
          and improve your chances of getting your full deposit back. We
          understand what landlords and letting agents look for, which is why we
          follow a thorough checklist that ensures no spot is missed.
          <br />
          <br />
          From scrubbing ovens and disinfecting bathrooms to polishing floors
          and removing tough grime, our experienced team restores your space to
          a fresh, move-in-ready state. Whether you’re a tenant moving out or a
          landlord preparing for new tenants, Macdot’s trusted service gives you
          the peace of mind and cleanliness you can count on.
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
            <img src="/servicepage4.jpg" alt="End of Tenancy Cleaning" />
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
                <a href="mailto:info@macdotcleaningservices.co.uk">
                  info@macdotcleaningservices.co.uk
                </a>
              </div>
              <div className="footer-follow-title">Follow Us</div>
              <div className="footer-social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61577360585806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="footer-icon" />
                </a>

                <a
                  href="https://x.com/services53285"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="footer-icon" />
                </a>

                <a
                  href="https://www.instagram.com/macdot_cleaning_services_ltd?igsh=MTd2YjQ4dnF2NmJpYQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="footer-icon" />
                </a>
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
              <Link to="/services/event" className="footer-link">
                Special Event Cleaning
              </Link>
              {/* <Link to="/services/tenancy" className="footer-link">
                End of Tenancy Cleaning
              </Link> */}
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Book a service or make an enquiry, just send us an email!</h2>
              <form
                className="form-grid"
                action="https://formspree.io/f/xovwljby"
                method="POST"
                onSubmit={(e) => {
                  setTimeout(() => {
                    e.target.reset();
                  }, 100);
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
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

export default EndOfTenancy;
