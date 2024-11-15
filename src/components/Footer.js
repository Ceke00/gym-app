import React from "react";
import "./Footer.scss";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo Section */}
        <div className="footer__section">
          <img src={logo} alt="GymApp Logo" className="footer__logo-img" />
        </div>

        {/* Services Section */}
        <div className="footer__section">
          <h4>Our Services</h4>
          <ul>
            <li>Yoga</li>
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>Nutrition Plans</li>
            <li>Online Coaching</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer__section">
          <h4>Discover</h4>
          <ul>
            <li>Customer Service</li>
            <li>FAQ</li>
            <li>Careers</li>
            <li>Become an Affiliate</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Contact</h4>
          <ul>
            <li>Södergatan 24, 211 34 Malmö</li>
            <li>Telefon: 040-665 56 50</li>
            <li>E-post: malmo@lexicon.se</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} GymApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
