import React, { useState } from "react";
import "../css/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import TextLogo from "../assets/text-logo.jpg";
import Logo from "../assets/logo.webp";
// import Logo from "../assets/festive-img/newyear-logo.png";
// import Logo from "../assets/festive-img/cristmas-logo.png";
// import Logo from "../assets/festive-img/republic-day-logo.png";
import ListPropertyForm from "./list-property-form";
import SearchModal from "./search-modal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [navbarSection, setNavbarSection] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            navbarSection ? "navbar-section activated" : "navbar-section"
          }
        >
          <input type="checkbox" id="check" />
          <div
            className="logo-section"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="Logo" loading="lazy" />
            <img src={TextLogo} alt="Text Logo" loading="lazy" className="text-logo" />
          </div>

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
              className={isActive("/packages")}
              onClick={() => {
                navigate("/packages");
                setIsOpen(false);
              }}
            >
              Packages
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
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              aria-label="More options"
            >
              <span onClick={toggleDropdown}>
                More &nbsp; <i className="fa-solid fa-angle-down"></i>
              </span>
              {isDropdownOpen && (
                <ul className="more-dropdown">
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
                    className={isActive("/career")}
                    onClick={() => {
                      navigate("/career");
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Career
                  </li>

                </ul>
              )}
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
