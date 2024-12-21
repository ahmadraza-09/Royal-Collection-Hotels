import React, { useState } from "react";
import "../css/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
// import Logo from "../assets/logo.webp";
import Logo from "../assets/festive-img/cristmas-logo.png";
// import Logo from "../assets/festive-img/newyear-logo.png";
import ListPropertyForm from "./list-property-form";
import SearchModal from "./search-modal";

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

  const [showForm, setShowForm] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setShowSearchModal(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="header-section">
        {showForm && <ListPropertyForm onClose={handleCloseForm} />}
        {showSearchModal && <SearchModal onClose={handleCloseSearchModal} />}
        <div
          className={
            navbarsection ? "navbar-section activated" : "navbar-section"
          }
        >
          <input type="checkbox" id="check" />
          <div
            className="logo-section"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="" loading="lazy" fetchPriority="high" />
            <h2>Royal Collection Hotels</h2>
          </div>

          {/* Conditionally render menu based on isOpen */}
          <ul className={`menu-section ${isOpen ? "show-menu" : ""}`}>
            <li className="none">
              <button
                onClick={handleSearchModal}
                aria-label="search-magnifying-icon"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button
                onClick={handleShowForm}
                aria-label="list-property-button"
              >
                List Property
              </button>
            </li>
            <li
              className={isActive("/")}
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              Home
            </li>
            <li
              className={isActive("/about")}
              onClick={() => {
                navigate("/about");
                setIsOpen(false);
              }}
            >
              About
            </li>
            <li
              className={isActive("/our-city")}
              onClick={() => {
                navigate("/our-city");
                setIsOpen(false);
              }}
            >
              Our Hotels
            </li>
            <li
              className={isActive("/career")}
              onClick={() => {
                navigate("/career");
                setIsOpen(false);
              }}
            >
              Career
            </li>
            <li
              className={isActive("/payment")}
              onClick={() => {
                navigate("/payment");
                setIsOpen(false);
              }}
            >
              Payment
            </li>
            <li
              className={isActive("/contact")}
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
            >
              Contact
            </li>
          </ul>

          <div className="search-section">
            <button
              onClick={handleSearchModal}
              aria-label="search-magnifying-button"
              className="search-button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              onClick={handleShowForm}
              aria-label="list-property-button"
              className="list-button"
            >
              List Property
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
      </div>
    </>
  );
};

export default Navbar;
