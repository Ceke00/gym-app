import React from 'react';
import './Footer.scss';
import logo from '../images/logo.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo Section */}
                <div className="footer__section">
                    <img src={logo} alt="GymApp Logo" className="footer__logo-img" />
        
                <div className="footer__section">
    <h4>Our Services</h4>
    <ul>
        <li>
            <a href="/yoga" className="footer__link">Yoga</a>
        </li>
        <li>
            <a href="/personal-training" className="footer__link">Personal Training</a>
        </li>
        <li>
            <a href="/group-classes" className="footer__link">Group Classes</a>
        </li>
        <li>
            <a href="/nutrition-plans" className="footer__link">Nutrition Plans</a>
        </li>
        <li>
            <a href="/online-coaching" className="footer__link">Online Coaching</a>
        </li>
    </ul>
</div>



<div className="footer__section">
    <h4>Discover</h4>
    <ul>
        <li>
            <a href="/customer-service" className="footer__link">Customer Service</a>
        </li>
        <li>
            <a href="/faq" className="footer__link">FAQ</a>
        </li>
        <li>
            <a href="/careers" className="footer__link">Careers</a>
        </li>
        <li>
            <a href="/affiliate" className="footer__link">Become an Affiliate</a>
        </li>
        <li>
            <a href="/terms" className="footer__link">Terms and Conditions</a>
        </li>
    </ul>
</div>


<div className="footer__section">
      <h4>Contact</h4>
      <ul>
        <li>
          <a href="https://www.google.com/maps?q=Södergatan+24,+211+34+Malmö" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className="footer-icon" />
            Södergatan 24, 211 34 Malmö
          </a>
        </li>
        <li>
          <a href="https://wa.me/46040665550" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="footer-icon" />
            040-665 56 50
          </a>
        </li>
        <li>
          <a href="mailto:malmo@lexicon.se" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="footer-icon" />
            malmo@lexicon.se
          </a>
        </li>
      </ul>
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
                        <li>Telefon:	040-665 56 50</li>
                        <li>E-post:	malmo@lexicon.se</li>
                    </ul>
                </div>
               


                {/* Social Media Section */}
                <div className="footer__section">
                    <h4>Follow Us</h4>
                    <div className="footer__social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Home Fitness. All rights reserved.</p>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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