import React from "react";
import { hotelsData } from "../data/hotelsdata"; // Import named export
import "../css/popular-hotels.css";
import HotelCard from "./hotel-card";

const PopularHotels = () => {
  const selectedHotels = [
    hotelsData.nainital.find(
      (hotel) => hotel.name === "Hotel Aroma Nainital"
    ),
    hotelsData.nainital.find((hotel) => hotel.name === "Manu Maharani Regency"),
    hotelsData.nainital.find((hotel) => hotel.name === "The Palace Belvedere"),
    hotelsData.nainital.find((hotel) => hotel.name === "The Hive Cottage Nainital"),
    hotelsData.shimla.find(
      (hotel) => hotel.name === "Mahaveer Shimla"
    ),
    hotelsData.corbett.find((hotel) => hotel.name === "Corbett Aroma Park"),
    hotelsData.corbett.find(
      (hotel) => hotel.name === "Vanasthali Jungle Resort"
    ),
    hotelsData.dhanaulti.find(
      (hotel) => hotel.name === "Apple Orchard Resort"
    ),
    hotelsData.mussoorie.find(
      (hotel) => hotel.name === "Hotel Kahkashan"
    ),
  ];

  return (
    <div className="popular-hotels-section">
      <h2>Our Popular Hotels</h2>
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
                OffSeasonPriceDetails={hotel.OffSeasonPriceDetails}
                SeasonPriceDetails={hotel.SeasonPriceDetails}
                contactDetails={hotel.contactDetails}
              />
            )
        )}
      </div>
    </div>
  );
};

export default PopularHotels;
