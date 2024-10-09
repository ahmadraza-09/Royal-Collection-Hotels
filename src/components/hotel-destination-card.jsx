import React from "react";
import "../css/hotel-destination-card.css";

const HotelDestinationCard = ({ image, title, description, properties }) => {
  return (
    <div className="hotel-destination-card">
      <div className="hotel-destination-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="hotel-destination-card-content">
        <div className="hotel-destination-card-content-header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="hotel-destination-card-content-footer">
          <h3>{properties} Properties</h3>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDestinationCard;
