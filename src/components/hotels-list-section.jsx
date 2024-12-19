import React, { lazy, Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/hotel-list-section.css";
import "../css/our-hotels.css";
import { hotelsData } from "../data/hotelsdata";
import SkeletonHotelCard from "./skeleton-hotel-card";
const HotelCard = React.lazy(() => import("./hotel-card"));

const HotelListSection = () => {
  const { cityName } = useParams();
  const [originalHotels, setOriginalHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // Function to remove "hotels-in-" from the cityName if it exists and capitalize the first letter
  const getCityDisplayName = (name) => {
    const processedName = name.replace("hotels-in-", "");
    return processedName.charAt(0).toUpperCase() + processedName.slice(1);
  };

  // Set the document title with the city name
  useEffect(() => {
    document.title = `${getCityDisplayName(
      cityName
    )} - Royal Collection Hotels`;
    return () => {
      document.title = "Royal Collection Hotels";
    };
  }, [cityName]);

  // Load original hotel data based on city name
  useEffect(() => {
    const cityHotels =
      hotelsData[cityName.replace("hotels-in-", "").toLowerCase()] || [];
    setOriginalHotels(cityHotels);
    setFilteredHotels(cityHotels);
  }, [cityName]);

  const filterHotels = () => {
    let filtered = [...originalHotels];
    if (selectedHotel) {
      filtered = filtered.filter((hotel) =>
        hotel.name.toLowerCase().includes(selectedHotel.toLowerCase())
      );
    }
    if (selectedStar) {
      filtered = filtered.filter(
        (hotel) => hotel.rating === parseInt(selectedStar)
      );
    }
    if (selectedPrice) {
      filtered = filtered.filter(
        (hotel) => hotel.price <= parseInt(selectedPrice)
      );
    }
    return filtered;
  };

  const handleSearch = () => {
    const filtered = filterHotels();
    setFilteredHotels(filtered);
  };

  const resetFilters = () => {
    setSelectedHotel("");
    setSelectedStar("");
    setSelectedPrice("");
    setFilteredHotels(originalHotels);
  };

  return (
    <div className="hotel-list-section">
      <h2>Hotels in {getCityDisplayName(cityName)}</h2>
      <div className="hotels-filter-cards-section">
        <div className="hotel-filter-section hotel-filter-section2 swipe-left">
          <h3>Filter</h3>
          <form>
            <select
              name="hotel"
              value={selectedHotel}
              onChange={(e) => {
                setSelectedHotel(e.target.value);
                handleSearch();
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
                handleSearch();
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
                handleSearch();
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
              <Suspense fallback={<SkeletonHotelCard />} key={index}>
                <HotelCard
                  key={index}
                  image={hotel.image}
                  name={hotel.name}
                  price={hotel.price}
                  rating={hotel.rating}
                  description={hotel.description}
                  rooms={hotel.rooms}
                  website={hotel.website}
                  OffSeasonPriceDetails={hotel.OffSeasonPriceDetails}
                  SeasonPriceDetails={hotel.SeasonPriceDetails}
                  OffSeasonPriceValidityDates={hotel.OffSeasonPriceDetails.OffSeasonPriceValidityDates}
                  SeasonPriceValidityDates={hotel.SeasonPriceDetails.SeasonPriceValidityDates}
                  contactDetails={hotel.contactDetails}
                />
              </Suspense>
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
