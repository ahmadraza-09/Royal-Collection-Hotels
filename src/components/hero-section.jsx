import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/hero-section.css";
import Hotel from "../assets/icons/hotel.png";
import Resort from "../assets/icons/resort.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [hotelType, setHotelType] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true); // Manage loading state

  // Function to handle image loading
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false once the image is loaded
  };

  const handleExplore = () => {
    if (location) {
      navigate(`/our-city/${location.toLowerCase()}`);
    }
  };

  const handleSearch = () => {
    if (location) {
      navigate(`/our-city/${location.toLowerCase()}`);
    }
  };

  return (
    <div className="hero-section">
      <div className="overlay">
        <h2 className="swipe">Explore Amazing India</h2>
        <div className="find-hotels swipe">
          <h4>Find Great Places To Stay</h4>
          <div className="hotel-search-comp">
            <select
              name="hotelType"
              value={hotelType}
              onChange={(e) => setHotelType(e.target.value)}
            >
              <option value="">Choose Hotels & Resorts</option>
              <option value="hotels">Hotels</option>
              <option value="resorts">Resorts</option>
            </select>
            <select
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Choose Location</option>
              <option value="amritsar">Amritsar</option>
              <option value="auli">Auli</option>
              <option value="almora">Almora</option>
              {/* More locations here */}
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        <div className="explore-hotels swipe">
          <h3>Or Explore Our Hotels & Resorts</h3>
          <div className="explore-hotels-cards">
            {loading && <div className="loader">Loading...</div>}{" "}
            {/* Show loader */}
            <div
              className="hotel-card"
              onClick={() => {
                navigate("/hotels-list");
              }}
            >
              <img
                src={Hotel}
                alt="Hotel"
                onLoad={handleImageLoad}
                loading="lazy"
              />{" "}
              {/* Trigger image load */}
              <h3>Hotels</h3>
            </div>
            <div className="hotel-card">
              <img
                src={Resort}
                alt="Resort"
                onLoad={handleImageLoad}
                loading="lazy"
              />
              <h3>Resorts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
