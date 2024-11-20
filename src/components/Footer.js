import React from "react";
import "./Footer.scss";
import logo from "../images/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {Link} from "react-router-dom";

// Import specific icons from react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo Section */}
        <div className="footer__section">
          <Link to="/">
            <img
              src={logo}
              alt="To Home Page of Home Fitness"
              className="footer__logo-img"
            />
          </Link>
        </div>

        <div className="footer__section">
          <h2>Our Services</h2>
          <ul>
            <li>
              <Link to="/userpage" className="footer__link">
                Yoga
              </Link>
            </li>
            <li>
              <Link to="/userpage" className="footer__link">
                Personal Training
              </Link>
            </li>
            <li>
              <Link to="/userpage" className="footer__link">
                Group Classes
              </Link>
            </li>
            <li>
              <Link to="/userpage" className="footer__link">
                Nutrition Plans
              </Link>
            </li>
            <li>
              <Link to="/userpage" className="footer__link">
                Online Coaching
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h2>Discover</h2>
          <ul>
            <li>
              <Link to="/about" className="footer__link">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h2>Contact</h2>
          <ul>
            <li>
              <a
                href="https://www.google.com/maps?q=Södergatan+24,+211+34+Malmö"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find our location on Google Maps"
              >
                <FaMapMarkerAlt className="footer-icon" />
                <span className="visually-hidden">Opens in new window</span>
                Södergatan 24, 211 34 Malmö
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/46040665550"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <FaPhoneAlt className="footer-icon" />
                <span className="visually-hidden">Opens in new window</span>
                040-665 56 50
              </a>
            </li>
            <li>
              <a
                href="mailto:malmo@lexicon.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="footer-icon" />
                <span className="visually-hidden">Opens in new window</span>
                malmo@lexicon.se
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer__section">
          <h2>Follow Us</h2>
          <div className="footer__social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF />
              <span className="visually-hidden">Opens in new window</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter />
              <span className="visually-hidden">Opens in new window</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram />
              <span className="visually-hidden">Opens in new window</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedinIn />
              <span className="visually-hidden">Opens in new window</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Home Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
