import React from "react";
import "../css/our-hotels.css";
import HotelDestinationCard from "./hotel-destination-card";

const OurHotels = () => {
  return (
    <div className="our-hotels-section">
      <h2>Explore Our Hotels</h2>
      <div className="hotels-filter-cards-section">
        <div className="hotel-filter-section">
          <h3>Find Your City</h3>
          <form action="">
            <select name="" id="">
              <option value="">Select City</option>
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
            <div className="date-picker">
              <label htmlFor="from-date-picker">From</label>
              <br />
              <input type="date" placeholder="From" id="from-date-picker" />
            </div>
            <div className="date-picker">
              <label htmlFor="to-date-picker">To</label>
              <br />
              <input type="date" placeholder="From" id="from-date-picker" />
            </div>
            <button>Search</button>
          </form>
        </div>
        <div className="hotel-cards-section">
          <HotelDestinationCard />
        </div>
      </div>
    </div>
  );
};

export default OurHotels;
