import React from "react";
import "../css/hotel-destination-card.css";
import Image1 from "../assets/nainital.jpg";

const HotelDestinationCard = () => {
  return (
    <div className="hotel-destination-card">
      <div className="hotel-destination-card-image">
        <img src={Image1} alt="" />
      </div>
      <div className="hotel-destination-card-content">
        <div className="hotel-destination-card-content-header"></div>
        <div className="hotel-destination-card-content-footer"></div>
      </div>
    </div>
  );
};

export default HotelDestinationCard;
