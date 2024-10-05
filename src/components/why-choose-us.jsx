import React from "react";
import "../css/why-choose-us.css";
import WhyChoose from "../assets/why-choose-us/why-choose-us.jpg";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h2>Why Choose Us</h2>
      <div className="why-choose-us-contents">
        <div className="why-choose-us-left">
          <img src={WhyChoose} alt="" />
        </div>
        <div className="why-choose-us-right">
          <p>
            <span>Royal Collection Hotels & Resorts</span> is a professional
            Hotel Branding Company. We serve both ends of the tourism industry
            spectrum. We provide Branding Solutions to hotels, helping them
            enhance their sales & profitability and improve their client base
            with expected volume of business and ARR. As you know today Internet
            marketing is paying a vital role for hotel marketing in same
            direction we coordinate with online channels and increase the
            visibility of Hotel on various leading websites. We have specialized
            peoples who will coordinate with these channels and update the
            presence and inventory of the hotel. We have a strong commitment to
            promote one hotel on one destination, So that we can focus on the
            Branding and Sales of that Hotel. We believe only in one and only
            aim 100% Guest Satisfaction and value for money services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
