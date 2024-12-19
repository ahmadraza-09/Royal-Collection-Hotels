import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/hero-section.css";
import Hotel from "../assets/icons/hotel.webp";
import Resort from "../assets/icons/resort.webp";
import Loader from "../assets/loader/loader2.gif";

const HeroSection = () => {
  const navigate = useNavigate();
  const [hotelType, setHotelType] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const handleExplore = () => {
    if (location) {
      navigate(`/our-city/hotels-in-${location.toLowerCase()}`);
    }
  };

  const handleSearch = () => {
    if (location) {
      // navigate(`/our-city/${location.toLowerCase()}`);
      navigate(`/our-city/hotels-in-${location.toLowerCase()}`);
    }
  };

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstVisit");

    if (!isFirstVisit) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("firstVisit", "true"); // Set the flag for future visits
      }, 1000); // Adjust the loading duration as needed

      return () => clearTimeout(timer); // Cleanup the timer
    } else {
      setLoading(false); // Skip loader if it's not the first visit
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <img src={Loader} alt="Loading..." fetchPriority="high" />
        </div>
      )}
      <div className="hero-section">
        <div className="overlay">
          <h2 className="swipe">Explore Amazing India</h2>
          <div className="find-hotels swipe">
            <h4>Find Great Places To Stay</h4>
            <div className="hotel-search-comp">
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
                aria-label="choose location"
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
              <option value="Ranikhet">Ranikhet</option>
              <option value="Rishikesh">Rishikesh</option>
              <option value="Shimla">Shimla</option>
              </select>
              <button onClick={handleSearch} aria-label="search">
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
                  loading="lazy"
                  fetchPriority="low"
                />{" "}
                {/* Trigger image load */}
                <h3>Hotels</h3>
              </div>
              <div className="hotel-card">
                <img
                  src={Resort}
                  alt="Resort"
                  loading="lazy"
                  fetchPriority="low"
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
