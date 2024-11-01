import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/hotel-list-section.css";
import "../css/our-hotels.css";
import HotelCard from "./hotel-card";
import { hotelsData } from "../data/hotelsdata"; // Import your data file

const HotelListSection = () => {
  const { cityName } = useParams();
  const [originalHotels, setOriginalHotels] = useState([]); // To store original hotels
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // Function to capitalize the first letter of the city name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Set the document title with the capitalized city name

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      cityName
    )} - Royal Collection Hotels`;

    return () => {
      document.title = "Royal Collection Hotels";
    };
  }, []);

  // Load original hotel data based on city name
  useEffect(() => {
    const cityHotels = hotelsData[cityName.toLowerCase()] || [];
    setOriginalHotels(cityHotels);
    setFilteredHotels(cityHotels);
  }, [cityName]);

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

  // Reset filters to show all hotels
  const resetFilters = () => {
    setSelectedHotel("");
    setSelectedStar("");
    setSelectedPrice("");
    setFilteredHotels(originalHotels); // Reset to original hotels
  };

  return (
    <div className="hotel-list-section">
      <h2>Hotels in {cityName}</h2> {/* Show city name dynamically */}
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
            <button type="button" onClick={handleSearch} name="search">
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
                priceDetails={hotel.priceDetails}
                validityDates={hotel.priceDetails.validityDates}
                contactDetails={hotel.contactDetails}
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
