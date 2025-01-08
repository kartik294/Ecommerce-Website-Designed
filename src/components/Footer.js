import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left">
            <h3>Be The First to Know</h3>
            <p>
              Signup for updates from Metta Muse and stay informed about the
              latest trends, artisans, and exclusive offers.
            </p>
            <div className="email">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="contact-info">
              <span>+44 22 11 33 56 0</span>
              <span>customercare@mettamuse.com</span>
            </div>
            <div className="currency-info">
              <span>USD Transaction will be completed in Euros</span>
              <span className="usd-img">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.bNM6BI7X9AotYV74-pufdgHaEZ&pid=Api&P=0&h=220"
                  alt="USD Image"
                />
              </span>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <button>About Us</button>
                </li>
                <li>
                  <button>Stories</button>
                </li>
                <li>
                  <button>Artisans</button>
                </li>
                <li>
                  <button>Boutiques</button>
                </li>
                <li>
                  <button>Contact Us</button>
                </li>
                <li>
                  <button>EU Compliance</button>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <FaInstagram size={24} color="#E1306C" />
                <FaLinkedin size={24} color="#0077B5" />
                <FaFacebook size={24} color="#3b5998" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            &copy; 2025 Metta Muse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
