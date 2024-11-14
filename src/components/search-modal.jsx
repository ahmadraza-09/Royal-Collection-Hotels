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
