import React from "react";
import "../css/hero-section.css";
import Hotel from "../assets/icons/hotel.png";
import Resort from "../assets/icons/resort.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <h2>Explore Amazing India</h2>
        <div className="find-hotels">
          <h4>Find Great Places To Stay</h4>
          <div className="hotel-search-comp">
            <select name="" id="">
              <option value="">Choose Hotels & Resorts</option>
              <option value="">Hotels</option>
              <option value="">Resorts</option>
            </select>
            <select name="" id="">
              <option value="">Choose Location</option>
              <option value="amritsar">Amritsar</option>
              <option value="bandhavgarh">Bandhavgarh</option>
              <option value="bhimtal">Bhimtal</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="corbett">Corbett</option>
              <option value="dalhousie">Dalhousie</option>
              <option value="dharamshala">Dharamshala</option>
              <option value="haridwar">Haridwar</option>
              <option value="kausani">Kausani</option>
              <option value="manali">Manali</option>
              <option value="mussoorie">Mussoorie</option>
              <option value="nainital">Nainital</option>
              <option value="ranikhet">Ranikhet</option>
              <option value="shimla">Shimla</option>
            </select>
            <button>Search</button>
          </div>
        </div>
        <div className="explore-hotels">
          <h3>Or Explore Our Hotels & Resorts</h3>
          <div className="explore-hotels-cards">
            <div className="hotel-card">
              <img src={Hotel} alt="" />
              <h3>Hotels</h3>
            </div>
            <div className="hotel-card">
              <img src={Resort} alt="" />
              <h3>Resorts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
