import React, { useEffect, useState } from "react";
import "../../Styles/Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-heading">
          <h1>Destine</h1>
        </div>

        <ul className="navbar-links">
          <li className="navbar-link-items">Home</li>
          <li className="navbar-link-items">Destinations</li>
          <li className="navbar-link-items">Plans</li>
          <li className="navbar-link-items">Blogs</li>
        </ul>

        <div className="navbar-cta-container">
          <button className="navbar-cta-buttons" id="navbarLanguage">
            Language <IoIosArrowDown />
          </button>
          <button className="navbar-cta-buttons" id="navbarGetStarted">
            Get Started
          </button>
        </div>

        <div className="navbar-menu-container">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="navbar-menu-btn"
          >
            {isNavOpen ? <BiX size={30} /> : <GiHamburgerMenu size={25} />}
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div className="mobile-navbar">
          <ul className="mobile-navbar-links">
            <li className="mobile-navbar-link-items">Home</li>
            <li className="mobile-navbar-link-items">Destinations</li>
            <li className="mobile-navbar-link-items">Plans</li>
            <li className="mobile-navbar-link-items">Blogs</li>
          </ul>
          <div className="navbar-mobile-cta-container">
            <button className="navbar-mobile-cta-buttons">
              Language <IoIosArrowDown />
            </button>
            <button className="navbar-mobile-cta-buttons">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
