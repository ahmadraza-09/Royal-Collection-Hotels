import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.gif";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
          <div class="footer-col">
            <div className="footer-col-logo">
              {/* <img src={Logo} alt="" /> */}
              <h2>Royal Collection Hotels</h2>
            </div>
            {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-location-dot"></i>
                <p>
                  110,111, UNITECH COMMERCIAL TOWER-2 Block-B Greenwood City,
                  Sector 45, Gurugram, Haryana 122003
                </p>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a href="tel:+919971834101" target="_blank">
                  +91 9971834101
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a href="tel:+919971834111" target="_blank">
                  +91 9971834111
                </a>
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:booking@rchronline.com" target="_blank">
                  booking@rchronline.com
                </a>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-regular fa-clock"></i>
                <p>Mon – Sat: 10:00 am – 06:00 pm</p>
              </p>
            </div>
          </div>
          <div class="footer-col">
            <h4>menu</h4>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </a>
            <a
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </a>
            <a
              onClick={() => {
                navigate("/rooms");
              }}
            >
              Our Hotels
            </a>
            <a
              onClick={() => {
                navigate("/gallery");
              }}
            >
              Careers
            </a>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              FAQ
            </a>
            <a
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </a>
            <a>Privacy Policy</a>
            <a
              onClick={() => {
                navigate("/payment");
              }}
            >
              {/* Payment Options */}
            </a>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a>Hotels</a>
            <a>Resorts</a>
            <a>Tour Packages</a>
            <a>Travel</a>
          </div>
          <div class="footer-col">
            <h4>Connect With Us</h4>
            <div class="social-links">
              <a
                href="https://www.instagram.com/royalcollectionhotelsindia/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/RoyalCollectionhotels"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://x.com/CollectioRoyal" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            {/* <div className="news-letter">
              <input type="text" placeholder="Enter your E-Mail" />
              <button>Subscribe</button>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright">
          <div className="footer-copyright-left">
            <p>© 2024</p> <img src="" alt="" />
          </div>

          <div className="footer-copyright-right">All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
