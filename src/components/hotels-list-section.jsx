import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/hotel-list-section.css";
import HotelCard from "./hotel-card";

const HotelListSection = ({ hotels = [] }) => {
  const { cityName } = useParams();

  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // Handle search/filter logic
  const handleSearch = () => {
    const filtered = hotels.filter((hotel) => {
      const matchesHotel =
        selectedHotel === "" ||
        hotel.name.toLowerCase().includes(selectedHotel.toLowerCase());
      const matchesStar =
        selectedStar === "" || hotel.rating === parseInt(selectedStar);
      const matchesPrice =
        selectedPrice === "" || hotel.price <= parseInt(selectedPrice);

      return matchesHotel && matchesStar && matchesPrice;
    });

    setFilteredHotels(filtered);
  };

  useEffect(() => {
    // Reset hotels when props change
    setFilteredHotels(hotels);
  }, [hotels]);

  return (
    <div className="hotel-list-section">
      <h2>{cityName}</h2> {/* Show city name dynamically */}
      <div className="hotels-filter-cards-section">
        <div className="hotel-filter-section">
          <h3>Filter</h3>
          <form>
            <select
              name="hotel"
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
            >
              <option value="">Select Hotel</option>
              {hotels.length > 0 &&
                hotels.map((hotel, index) => (
                  <option key={index} value={hotel.name}>
                    {hotel.name}
                  </option>
                ))}
            </select>
            <select
              name="star"
              value={selectedStar}
              onChange={(e) => setSelectedStar(e.target.value)}
            >
              <option value="">Select Star</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>
            <select
              name="price"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">Select Price</option>
              <option value="1000">Under ₹1000</option>
              <option value="2000">₹1000 to ₹2000</option>
              <option value="3000">₹2000 to ₹3000</option>
              <option value="5000">₹3000 to ₹5000</option>
              <option value="7000">₹5000 to ₹7000</option>
              <option value="9000">₹7000 to ₹9000</option>
              <option value="12000">₹9000 to ₹12000</option>
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

export default HotelListSection;
