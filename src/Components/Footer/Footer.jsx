import React from "react";
import "../../Styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { BsInstagram, BsTwitter, BsTwitterX } from "react-icons/bs";
function Footer() {
  // Lists for footer links
  const aboutLinks = [
    "About us",
    "Destinations",
    "News & Articles",
    "Testimonials",
  ];
  const featuresLinks = [
    "Travel Guide",
    "Package Deals",
    "Special Offers",
    "Customer Reviews",
  ];
  const companyLinks = [
    "Careers",
    "Our Team",
    "Partners",
    "Terms & Conditions",
  ];

  return (
    <>
      <div className="footer-container">
        <div className="footer-sections">
          <h1 className="footer-compay-name">Destine</h1>
          <div className="footer-social-links-list">
            <span className="footer-social-links">
              <FaFacebook size={25} className="footer-social-icons" />
            </span>
            <span className="footer-social-links">
              <BsInstagram size={25} className="footer-social-icons" />
            </span>
            <span className="footer-social-links">
              <BsTwitterX size={25} className="footer-social-icons" />
            </span>
          </div>
        </div>
        <div className="footer-sections">
          <h1 className="footer-section-heading">About</h1>
          <ul className="footer-link-list">
            {aboutLinks.map((link, index) => (
              <li key={`about-${index}`}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="footer-sections">
          <h1 className="footer-section-heading">Features</h1>
          <ul className="footer-link-list">
            {featuresLinks.map((link, index) => (
              <li key={`features-${index}`}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="footer-sections">
          <h1 className="footer-section-heading">Company</h1>
          <ul className="footer-link-list">
            {companyLinks.map((link, index) => (
              <li key={`company-${index}`}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="footer-sections">
          <h1 className="footer-section-heading">Contact us</h1>
          <p className="footer-contact-email">2005bhattabhay@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
