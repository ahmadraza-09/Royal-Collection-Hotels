import React from "react";
import "../css/popular-hotels.css";
import HotelCard from "./hotel-card";

const PopularHotels = () => {
  return (
    <div className="popular-hotels-section">
      <h2>Popular Hotels & Rooms</h2>
      <div className="popular-hotels-cards">
        <HotelCard />
      </div>
    </div>
  );
};

export default PopularHotels;
