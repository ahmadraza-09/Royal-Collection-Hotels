import React, { useEffect, useState } from "react";
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
    <>
      <div className="hero-section">
        <div className="overlay">
          <h2 className="swipe">Explore Amazing India</h2>
          <div className="find-hotels swipe">
            <h4>Find Great Places To Stay</h4>
            <div className="hotel-search-comp">
              <select
                name="Choose Hotels & Resorts"
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
              >
                <option value="">Choose Hotels & Resorts</option>
                <option value="hotels">Hotels</option>
                <option value="resorts">Resorts</option>
              </select>
              <select
                name="choose location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Choose Location</option>
                <option value="amritsar">Amritsar</option>
                <option value="auli">Auli</option>
                <option value="almora">Almora</option>
                <option value="bandhavgarh">Bandhavgarh</option>
                <option value="bhimtal">Bhimtal</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="corbett">Corbett</option>
                <option value="dhanaulti">Dhanaulti</option>
                <option value="dalhousie">Dalhousie</option>
                <option value="dharamshala">Dharamshala</option>
                <option value="haridwar">Haridwar</option>
                <option value="kausani">Kausani</option>
                <option value="lohaghat">Lohaghat</option>
                <option value="manali">Manali</option>
                <option value="mussoorie">Mussoorie</option>
                <option value="nainital">Nainital</option>
                <option value="ranikhet">Ranikhet</option>
                <option value="shimla">Shimla</option>
                <option value="mukteshwar">Mukteshwar</option>
                <option value="chail">Chail</option>
              </select>
              <button onClick={handleSearch} name="search">
                Search
              </button>
            </div>
          </div>

          <div className="explore-hotels swipe">
            <h3>Or Explore Our Hotels & Resorts</h3>
            <div className="explore-hotels-cards">
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
    </>
  );
};

export default HeroSection;
