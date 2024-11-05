import React from "react";
import { hotelsData } from "../data/hotelsdata"; // Import named export
import "../css/popular-hotels.css";
import HotelCard from "./hotel-card";

const PopularHotels = () => {
  const selectedHotels = [
    hotelsData.mussoorie.find(
      (hotel) => hotel.name === "Shivalik Hills Mussoorie"
    ),
    hotelsData.nainital.find((hotel) => hotel.name === "Manu Maharani Regency"),
    hotelsData.corbett.find(
      (hotel) => hotel.name === "Vanasthali Jungle Resort"
    ),
    hotelsData.kausani.find((hotel) => hotel.name === "Nature's Valley Resort"),
    hotelsData.nainital.find((hotel) => hotel.name === "Hotel Aroma Nainital"),
  ];

  return (
    <div className="popular-hotels-section">
      <h2>Popular Hotels & Rooms</h2>
      <div className="popular-hotels-cards">
        {selectedHotels.map(
          (hotel) =>
            hotel && (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                name={hotel.name}
                price={hotel.price}
                rating={hotel.rating}
                description={hotel.description}
                rooms={hotel.rooms}
                website={hotel.website}
                priceDetails={hotel.priceDetails}
                contactDetails={hotel.contactDetails}
              />
            )
        )}
      </div>
    </div>
  );
};

export default PopularHotels;
