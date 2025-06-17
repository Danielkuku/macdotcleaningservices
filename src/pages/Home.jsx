import React, { useState, useEffect } from "react";
import ReviewCarousel from "../component/ReviewCarousel";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../index.css";

import {
  FaLeaf,
  FaClock,
  FaUsers,
  FaPlus,
  FaMinus,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const App = () => {
  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const [activeSection, setActiveSection] = useState("");

  // ✅ ADD THIS FUNCTION to handle FAQ toggle
  const toggleFaq = (index) => {
    setFaqOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // ✅ Scroll to section if URL has a hash
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1); // remove "#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo">
            <img src="/logo.png" alt="Macdot Logo" />
          </div>
        </a>

        <div className="nav-links">
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About Us
          </a>
          <a
            href="#mission"
            className={activeSection === "mission" ? "active" : ""}
          >
            Our Mission
          </a>
          <a href="#FAQ" className={activeSection === "FAQ" ? "active" : ""}>
            FAQ
          </a>
          <a
            href="#reviews"
            className={activeSection === "reviews" ? "active" : ""}
          >
            Reviews
          </a>
          <a
            href="#footer"
            className={activeSection === "footer" ? "active" : ""}
          >
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <a href="tel:07939442320" className="call-button">
            <FaPhone
              style={{ transform: "rotate(90deg)", marginRight: "10px" }}
            />
            Book
          </a>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
            <FaBars />
          </div>
        </div>

        {/* Mobile Slide-In Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          {/* Close Icon */}
          <div className="close-icon" onClick={closeMenu}>
            <FaTimes />
          </div>

          <a
            onClick={closeMenu}
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            onClick={closeMenu}
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About Us
          </a>
          <a
            onClick={closeMenu}
            href="#mission"
            className={activeSection === "mission" ? "active" : ""}
          >
            Our Mission
          </a>
          <a
            onClick={closeMenu}
            href="#FAQ"
            className={activeSection === "FAQ" ? "active" : ""}
          >
            FAQ
          </a>
          <a
            onClick={closeMenu}
            href="#reviews"
            className={activeSection === "reviews" ? "active" : ""}
          >
            Reviews
          </a>
          <a
            onClick={closeMenu}
            href="#footer"
            className={activeSection === "footer" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Professional Cleaning Services</h1>
        <p>
          Experience the Difference of a Spotless Home or Office. At Macdot
          Cleaning Services, We Combine Reliability, Eco-Friendly Products, and{" "}
          <br />
          Expert Care to Deliver a Sparkling Clean You Can Trust. Whether It’s
          Your Home, Business, or a One-Time Deep Clean, Our Professional Team
          Is Here to Make <br />
          Life Easier, One Shine at a Time!
        </p>
        <div className="call-to-action">
          <div>
            <p className="statement">
              Ready for a fresh start? Call us now for a FREE estimate!
            </p>
          </div>
          <div>
            <a href="tel:07939442320" className="btn">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div class="services-heading">
          <h2>Our Services</h2>
        </div>

        <div className="service-cards">
          {[
            {
              title: "Residential",
              image: "/cleaning-service.jpeg",
              link: "/services/residential",
            },
            {
              title: "Commercial",
              image: "/services2.jpeg",
              link: "/services/commercial",
            },
            {
              title: "Move-In / Move-Out",
              image: "/services3.jpg",
              link: "/services/move-in",
            },
            {
              title: "Special Event",
              image: "/services5.webp",
              link: "/services/event",
            },
            {
              title: "End of Tenancy",
              image: "/services6.jpg",
              link: "/services/tenancy",
            },
          ].map((service) => (
            <Link to={service.link} className="card" key={service.title}>
              <img src={service.image} alt={`${service.title} Cleaning`} />
              <h4>{service.title} Cleaning</h4>
            </Link>
          ))}
        </div>
      </section>

      <section className="choose-us">
        <h2>BEST REASONS TO CHOOSE US</h2>
        <p>Why MACDOT CLEANING SERVICES</p>
        <div className="reasons">
          <div className="card">
            <FaClock className="icon" />
            <h4>Convenient Scheduling</h4>
            <p>
              Book cleanings that fit your schedule, whether it's a one-time
              service or regular maintenance, we work around your life for
              maximum convenience.
            </p>
          </div>
          <div className="card">
            <FaLeaf className="icon" />
            <h4>Eco-Friendly Products</h4>
            <p>
              We care about your health and the planet, our eco-friendly
              products ensure a sparkling clean without harmful chemicals,
              keeping your family and environment safe.
            </p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h4>Experienced Staff</h4>
            <p>
              Trusted professionals with years of experience, our reliable,
              background-checked team brings a personal touch and attention to
              detail every time.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="text">
          <div class="services-headingg">
            <h2>About Us</h2>
          </div>
          <p>
            <b>At Macdot Cleaning Services LTD</b>, we believe a clean space is
            the foundation of a healthy, happy life. With a passion for
            excellence and a commitment to detail, we deliver top-tier
            residential and commercial cleaning that exceeds expectations. Our
            trained, trustworthy team uses eco-friendly products to protect your
            health and the environment, leaving your home or office spotless,
            refreshed, and truly inviting. Whether you're preparing for a
            special event, moving in or out, or just need regular upkeep, we’re
            here to make your life easier, one clean at a time.
          </p>
        </div>
        <img className="about-img" src="/clean 2.webp" alt="About Us" />
      </section>

      <section id="mission" className="vision">
        <img src="/clean 4.avif" alt="Our Vision" />
        <div className="text">
          <div class="services-headingg">
            <h2>Our Mission</h2>
          </div>

          <p>
            <b>At Macdot Cleaning Services LTD</b>, our vision is to become the
            leading name in professional cleaning across the UK, recognized not
            just for spotless results, but for the care, integrity, and
            excellence we bring to every space we touch. We strive to create
            environments that promote health, happiness, and peace of mind for
            every client, whether it’s a family home, a bustling office, or a
            special event venue. We are committed to using eco-friendly
            solutions and modern techniques to deliver consistent, high-quality
            service that exceeds expectations. Our goal is to build lasting
            relationships with our clients based on trust, reliability, and
            outstanding results, one clean space at a time. With every sweep,
            scrub, and shine, we’re working toward a cleaner, greener, and more
            comfortable world for all.
          </p>
        </div>
      </section>

      <section id="FAQ" className="faq">
        <div class="services-heading">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          {[
            {
              question: "What areas do you cover?",
              answer:
                "We provide cleaning services across most areas in the UK. Contact us to confirm availability in your location.",
            },
            {
              question: "Do you bring your own equipment?",
              answer:
                "Yes, our team comes fully equipped with all the necessary cleaning tools and supplies for every job.",
            },
            {
              question: "Are your products safe?",
              answer:
                "Absolutely! We use eco-friendly and non-toxic cleaning products that are safe for children, pets, and the environment.",
            },
            {
              question: "How do I book a service?",
              answer:
                "You can book a service by calling us directly or filling out the inquiry form on our website. We’ll respond promptly to confirm your appointment.",
            },
          ].map((item, i) => (
            <div className="faq-item" key={i}>
              <div className="question" onClick={() => toggleFaq(i)}>
                {item.question}
                <span className="toggle-icon">
                  {faqOpen[i] ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {faqOpen[i] && <div className="answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div class="services-heading">
          <h2>Customer Reviews</h2>
        </div>

        <ReviewCarousel reviews={reviews} />
      </section>

      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Contact Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo.png" alt="" />
              </div>
              <h3 className="footer-heading">Contact</h3>
              <div className="footer-contact">
                <strong>Telephone:</strong>{" "}
                <a href="tel:07939442320" className="">
                  07939442320
                </a>
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

            {/* About Section */}
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
              <Link to="/services/tenancy" className="footer-link">
                End of Tenancy Cleaning
              </Link>
            </div>

            <div className="contact-form">
              <h2>Book a service or make an enquiry, just send us an email!</h2>
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

const reviews = [
  {
    img: "/pass6.jpg",
    name: "Daniel",
    time: "2 months ago",
    text: "Amazing service!",
    rating: 5,
  },
  {
    img: "/pass4.jpg",
    name: "Bob",
    time: "1 month ago",
    text: "Very professional.",
    rating: 4,
  },
  {
    img: "/pass1.jpg",
    name: "Clara",
    time: "3 weeks ago",
    text: "Highly recommend!",
    rating: 5,
  },
  {
    img: "/pass3.jpg",
    name: "David",
    time: "2 weeks ago",
    text: "Quick and clean.",
    rating: 4,
  },
  {
    img: "/pass5.webp",
    name: "Oliver ",
    time: "1 week ago",
    text: "Super service.",
    rating: 5,
  },
  {
    img: "/pass2.jpg",
    name: "Amelia ",
    time: "5 days ago",
    text: "Efficient and friendly.",
    rating: 4,
  },
];

export default App;
