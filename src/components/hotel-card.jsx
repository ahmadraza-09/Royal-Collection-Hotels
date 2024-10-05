import React from "react";
import "../css/hotel-card.css";
import Img from "../assets/6.jpg";

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-card-image">
        <img src={Img} alt="" />
      </div>
      <div className="hotel-card-content">
        <div className="hotel-card-content-header">
          <h2>Hotel Shilton Mussoorie</h2>
          <h4>
            <span>₹ 6999</span> /Night
          </h4>
          <p>
            <span>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            4 Stars
          </p>
        </div>
        <div className="hotel-card-content-center">
          <p>
            The hotel at the heart of the town (Library Chowk, Mussoorie) will
            spell bound you with the picturesque view of the Doon valley. The
            hotel reflects true value of warmth, luxury and comfort with
            hospitable staff and flawless service.
          </p>
        </div>
        <div className="hotel-card-content-footer">
          <h4>49 Rooms</h4>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
