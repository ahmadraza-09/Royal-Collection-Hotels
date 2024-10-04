import React, { useState } from "react";
import "../css/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.gif";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [navbarsection, setNavbarSection] = useState(false);

  const navbarFixed = () => {
    if (window.scrollY >= 100) {
      setNavbarSection(true);
    } else {
      setNavbarSection(false);
    }
  };

  window.addEventListener("scroll", navbarFixed);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={navbarsection ? "navbar-section activated" : "navbar-section"}
    >
      <input type="checkbox" id="check" />
      <div
        className="logo-section"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="" />
        <h2>Royal Collection Hotels</h2>
      </div>

      {/* Conditionally render menu based on isOpen */}
      <ul className={`menu-section ${isOpen ? "show-menu" : ""}`}>
        <div className="none">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            List Property <i className="fa-solid fa-handshake-simple"></i>
          </button>
        </div>
        <li
          className={isActive("/")}
          onClick={() => {
            navigate("/");
            setIsOpen(false); // Close menu on click
          }}
        >
          Home
        </li>
        <li onClick={() => setIsOpen(false)}>About</li>
        <li onClick={() => setIsOpen(false)}>Our Hotels</li>
        <li onClick={() => setIsOpen(false)}>Careers</li>
        <li onClick={() => setIsOpen(false)}>Contact</li>
      </ul>

      <div className="search-section">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button>
          List Property <i className="fa-solid fa-handshake-simple"></i>
        </button>

        {/* Hamburger Icon */}
        <div className="menu-bars" onClick={toggleMenu}>
          {isOpen ? (
            <label htmlFor="check">
              <i className="fa-solid fa-close"></i>
            </label>
          ) : (
            <label htmlFor="check">
              <i className="fa-solid fa-bars"></i>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
