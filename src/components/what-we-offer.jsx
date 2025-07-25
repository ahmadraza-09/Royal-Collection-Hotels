import React from "react";
import "../css/what-we-offer.css";
import Guarantee from "../assets/icons/guarantee.webp";
import Trust from "../assets/icons/trust.webp";
import Agent from "../assets/icons/man-in-suit-and-tie.webp";
import Hotel from "../assets/icons/hotel2.webp";
import CustomerSupport from "../assets/icons/services.webp";

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer-section">
      <h2>Why Choose Us</h2>
      <div className="what-we-offer-section-boxes">
        <div className="what-we-offer-section-box">
          <img src={Guarantee} alt="" loading="lazy" fetchPriority="high" />
          <h3>Best Price Guarantee</h3>
        </div>
        <div className="what-we-offer-section-box">
          <img src={Trust} alt="" loading="lazy" fetchPriority="low" />
          <h3>Travellers Choose Us</h3>
        </div>
        <div className="what-we-offer-section-box">
          <img src={Agent} alt="" loading="lazy" fetchPriority="low" />
          <h3>Best Travel Agents</h3>
        </div>
        <div className="what-we-offer-section-box">
          <img src={Hotel} alt="" loading="lazy" fetchPriority="low" />
          <h3> Best Hotels & Resorts</h3>
        </div>
        <div className="what-we-offer-section-box">
          <img
            src={CustomerSupport}
            alt=""
            loading="lazy"
            fetchPriority="low"
          />
          <h3>24/7 Customer Support</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
