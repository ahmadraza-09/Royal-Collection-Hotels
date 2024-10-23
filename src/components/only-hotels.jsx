import React, { useState, useEffect } from "react";
import "../css/only-hotels.css";
import HotelCard from "./hotel-card";
import { hotelsData } from "../data/hotelsdata"; // Import your hotel data

const OnlyHotels = () => {
  const [originalHotels, setOriginalHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // Load all hotel data from different cities
  useEffect(() => {
    const allHotels = Object.values(hotelsData).flat(); // Combine all hotels from all cities
    setOriginalHotels(allHotels);
    setFilteredHotels(allHotels);
  }, []);

  // Function to filter hotels based on selected criteria
  const filterHotels = () => {
    let filtered = [...originalHotels];

    // Filter by hotel name
    if (selectedHotel) {
      filtered = filtered.filter((hotel) =>
        hotel.name.toLowerCase().includes(selectedHotel.toLowerCase())
      );
    }

    // Filter by star rating
    if (selectedStar) {
      filtered = filtered.filter(
        (hotel) => hotel.rating === parseInt(selectedStar)
      );
    }

    // Filter by price
    if (selectedPrice) {
      filtered = filtered.filter(
        (hotel) => hotel.price <= parseInt(selectedPrice)
      );
    }

    return filtered;
  };

  // Handle search/filter logic
  const handleSearch = () => {
    const filtered = filterHotels();
    setFilteredHotels(filtered);
  };

  return (
    <div className="only-hotels-section">
      <h2>Hotels</h2>
      <div className="hotels-filter-cards-section">
        <div className="hotel-filter-section hotel-filter-section2 swipe-left">
          <h3>Filter</h3>
          <form>
            <select
              name="hotel"
              value={selectedHotel}
              onChange={(e) => {
                setSelectedHotel(e.target.value);
                handleSearch(); // Apply search whenever hotel selection changes
              }}
            >
              <option value="">Select Hotel</option>
              {originalHotels.length > 0 &&
                originalHotels.map((hotel, index) => (
                  <option key={index} value={hotel.name}>
                    {hotel.name}
                  </option>
                ))}
            </select>
            <select
              name="star"
              value={selectedStar}
              onChange={(e) => {
                setSelectedStar(e.target.value);
                handleSearch(); // Apply search whenever star selection changes
              }}
            >
              <option value="">Select Star</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star
                </option>
              ))}
            </select>
            <select
              name="price"
              value={selectedPrice}
              onChange={(e) => {
                setSelectedPrice(e.target.value);
                handleSearch(); // Apply search whenever price selection changes
              }}
            >
              <option value="">Select Price</option>
              {[1000, 2000, 3000, 5000, 7000, 9000, 12000].map((price) => (
                <option key={price} value={price}>
                  {price === 1000
                    ? "Under ₹1000"
                    : `₹${price - 1000} to ₹${price}`}
                </option>
              ))}
            </select>
            <div className="date-picker">
              <label htmlFor="from-date-picker">From</label>
              <br />
              <input type="date" id="from-date-picker" placeholder="From" />
            </div>
            <div className="date-picker">
              <label htmlFor="to-date-picker">To</label>
              <br />
              <input type="date" id="to-date-picker" placeholder="To" />
            </div>
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
        <div className="hotel-cards-section">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <HotelCard
                key={index}
                image={hotel.image}
                name={hotel.name}
                price={hotel.price}
                rating={hotel.rating}
                description={hotel.description}
                rooms={hotel.rooms}
                website={hotel.website}
              />
            ))
          ) : (
            <p>No hotels found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnlyHotels;
