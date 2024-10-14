import React from "react";
import "../css/career.css";
import Team from "../assets/team.jpg";

const Career = () => {
  return (
    <div className="career-section">
      <div className="career-banner">
        <h2>Career</h2>
      </div>
      <div className="career-content">
        <h2>Join Our Team</h2>
        <div className="career-team-content">
          <img src={Team} alt="" />
          <p>
            <span>Royal Collection Hotels and Resorts</span>, we are a leading
            Hotel Branding Company dedicated to providing top-notch branding
            solutions that boost sales, profitability, and visibility for our
            hotel partners. Our commitment to excellence in the tourism industry
            ensures that we deliver 100% guest satisfaction and value for money
            services. We believe in fostering an innovative and dynamic work
            environment where every team member plays a vital role in our
            success. If you're passionate about the tourism industry and ready
            to make an impact, explore exciting career opportunities with us.
            Why Join Us? Be part of a fast-growing, professional hotel branding
            company. Work with a team of specialized experts in online
            marketing, sales, and branding. Collaborate with leading hotels
            across the country, enhancing their visibility and profitability.
            Enjoy a workplace that promotes creativity, learning, and
            professional growth. We are always looking for talented, driven, and
            innovative individuals to join our team. If you're ready to
            contribute to the future of hotel branding and make a difference in
            the tourism industry, apply now! Current Openings: Sales & Marketing
            Executive Digital Marketing Specialist Hotel Branding Coordinator
            Inventory & Channel Manager Guest Relations Officer How to Apply: If
            you are interested in any of the open positions, please send your
            resume and a brief cover letter to{" "}
            <a href="mailto:sales@royalcollectionhotels.com">
              sales@royalcollectionhotels.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
