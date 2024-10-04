import React from "react";
import "../css/navbar.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a href="tel:+919971834101" target="_blank">
            +91 9971834101
          </a>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:booking@rchronline.com" target="_blank">
            booking@rchronline.com
          </a>
        </div>
      </div>

      <div className="top-banner-right">
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
    </div>
  );
};

export default TopBanner;
