import React from "react";
import "../css/about-us.css";
import WhatWeDo from "../assets/why-choose-us/why-choose-us.webp";
import Mission from "../assets/mission.webp";
import Goal from "../assets/goal.webp";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <h1 className="swipe-up">What We Do</h1>
      <div className="what-we-do-section">
        <img
          fetchPriority="high"
          src={WhatWeDo}
          alt=""
          className="swipe-left"
          loading="lazy"
        />
        <p className="swipe-right">
          <span>Royal Collection Hotels & Resorts</span> is a professional Hotel
          Branding Company. We serve both ends of the tourism industry spectrum.
          We provide Branding Solutions to hotels, helping them enhance their
          sales & profitability and improve their client base with expected
          volume of business and ARR. As you know today Internet marketing is
          paying a vital role for hotel marketing in same direction we
          coordinate with online channels and increase the visibility of Hotel
          on various leading websites. We have specialized peoples who will
          coordinate with these channels and update the presence and inventory
          of the hotel. We have a strong commitment to promote one hotel on one
          destination, So that we can focus on the Branding and Sales of that
          Hotel. We believe only in one and only aim 100% Guest Satisfaction and
          value for money services.
        </p>
      </div>
      <h1>Our Mission</h1>
      <div className="what-we-do-section">
        <p>
          Our mission is to provide best services to our guests at reasonable
          prices . We want to bring luxury and comfort in everyone's reach . We
          beleive that holidays are right of everyone in the world.
        </p>
        <img src={Mission} alt="" loading="lazy" fetchPriority="low" />
      </div>
      <h1>Our Goal</h1>
      <div className="what-we-do-section">
        <img src={Goal} alt="" loading="lazy" fetchPriority="low" />
        <p>
          <span>Royal Collection Hotels</span> is one of the largest hotel
          company of North & Central India. Our goal is to become No. 1 hotel
          company of India in next 5 years.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
