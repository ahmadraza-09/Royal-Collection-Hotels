import React from "react";
import "../css/hotel-card.css";

const HotelCard = ({ image, name, price, rating, description, rooms }) => {
  return (
    <div className="hotel-card swipe">
      <div className="hotel-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="hotel-card-content">
        <div className="hotel-card-content-header">
          <h2>{name}</h2>
          <h4>
            <span>₹ {price}</span> /Night
          </h4>
          <p>
            <span>
              {Array.from({ length: rating }, (_, index) => (
                <i key={index} className="fa-solid fa-star"></i>
              ))}
            </span>
            {` ${rating} Stars`}
          </p>
        </div>
        <div className="hotel-card-content-center">
          <p>{description}</p>
        </div>
        <div className="hotel-card-content-footer">
          <h4>{rooms} Rooms</h4>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
