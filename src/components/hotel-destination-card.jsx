import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/hotel-destination-card.css";

const HotelDestinationCard = ({ image, title, description, properties }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/our-city/${title.toLowerCase()}`);
  };
  return (
    <div className="hotel-destination-card swipe">
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
          <button onClick={handleExplore}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDestinationCard;
