import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/hotel-destination-card.css";

const HotelDestinationCard = ({ image, title, description, properties }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    // Format the title to be URL-friendly
    const formattedTitle = title.toLowerCase();
    // Navigate without a slash before cityName
    navigate(`/our-city/${formattedTitle}`);
  };

  return (
    <div className="hotel-destination-card swipe">
      <div className="hotel-destination-card-image">
        <img src={image} alt={title} loading="lazy" fetchPriority="high" />
      </div>
      <div className="hotel-destination-card-content">
        <div className="hotel-destination-card-content-header">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="hotel-destination-card-content-footer">
          <h3>{properties} Properties</h3>
          <button onClick={handleExplore} name="explore">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDestinationCard;
