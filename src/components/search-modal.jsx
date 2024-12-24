import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/search-modal.css";
import Hotel from "../assets/icons/hotel.webp";
import Resort from "../assets/icons/resort.webp";

const SearchModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [hotelType, setHotelType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location) {
      navigate(`/our-city/hotels-in-${location.toLowerCase()}`);
    }
  };
  return (
    <div className="search-modal-section">
      <div className="search-modal swipe">
        <div className="hide-modal" onClick={onClose}>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="find-hotels find-hotels-shadow">
          <h4>Find Great Places To Stay</h4>
          <div className="hotel-search-comp hotel-search-comp2">
            <select
              aria-label="Choose Hotels & Resorts"
              value={hotelType}
              onChange={(e) => setHotelType(e.target.value)}
            >
              <option value="">Choose Hotels & Resorts</option>
              <option value="hotels">Hotels</option>
              <option value="resorts">Resorts</option>
            </select>
            <select
              aria-label="Choose Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Choose Location</option>
              <option value="Almora">Almora</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Auli">Auli</option>
              <option value="Bandhavgarh">Bandhavgarh</option>
              <option value="Bhimtal">Bhimtal</option>
              <option value="Chail">Chail</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Corbett">Corbett</option>
              <option value="Dalhousie">Dalhousie</option>
              <option value="Dhanaulti">Dhanaulti</option>
              <option value="Dharamshala">Dharamshala</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Kausani">Kausani</option>
              <option value="Lohaghat">Lohaghat</option>
              <option value="Manali">Manali</option>
              <option value="Mukteshwar">Mukteshwar</option>
              <option value="Mussoorie">Mussoorie</option>
              <option value="Nainital">Nainital</option>
              <option value="NewDelhi">New Delhi</option>
              <option value="Ranikhet">Ranikhet</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Shimla">Shimla</option>
            </select>
            <button onClick={handleSearch} aria-label="search">
              Search
            </button>
          </div>
        </div>
        <div className="explore-hotels">
          <h3>Or Explore Our Hotels & Resorts</h3>
          <div className="explore-hotels-cards">
            <div
              className="hotel-card"
              onClick={() => {
                navigate("/hotels-list");
              }}
            >
              <img src={Hotel} alt="" loading="lazy" fetchPriority="high" />
              <h3>Hotels</h3>
            </div>
            <div className="hotel-card">
              <img src={Resort} alt="" loading="lazy" fetchPriority="high" />
              <h3>Resorts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
