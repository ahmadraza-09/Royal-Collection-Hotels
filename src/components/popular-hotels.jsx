import React from "react";

import HotelImage1 from "../assets/6.jpg";
import HotelImage2 from "../assets/9.jpg";
import HotelImage3 from "../assets/15.jpg";
import HotelImage4 from "../assets/17.jpg";
import HotelImage5 from "../assets/8.jpg";

import "../css/popular-hotels.css";
import HotelCard from "./hotel-card";

const PopularHotels = () => {
  return (
    <div className="popular-hotels-section">
      <h2>Popular Hotels & Rooms</h2>
      <div className="popular-hotels-cards">
        <HotelCard
          image={HotelImage1}
          name="Hotel Shilton Mussoorie"
          price={6999}
          rating={4}
          description="The hotel at the heart of the town (Library Chowk, Mussoorie) will spell bound you with the picturesque view of the Doon valley. The hotel reflects true value of warmth, luxury and comfort with hospitable staff and flawless service."
          rooms={49}
        />
        <HotelCard
          image={HotelImage2}
          name="Hotel Manu Maharani Regenecy"
          price={6999}
          rating={3}
          description="The Manu Maharani is a premium hotel in Nainital providing top-class services comfortable rooms and picturesque visuals of the Naini Lake."
          rooms={9}
          website={"https://manumaharaniregency.com/"}
        />
        <HotelCard
          image={HotelImage3}
          name="Vanasthali Jungle Resort"
          price={4999}
          rating={3}
          description="Vanasthali Resort Jim Corbett, Ramnagar offers air-conditioned accommodation in Ramnagar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service. Free private parking is available."
          rooms={10}
          website={"https://vanasthalicorbett.com/"}
        />
        <HotelCard
          image={HotelImage4}
          name="Nature's Valley Resort"
          price={3999}
          rating={3}
          description="Natures Valley Resort features spotlessly clean and furnished rooms equipped with cable television, intercom facility, tea/coffee maker, refrigerator, ironing board, direct dial phone surcharge, sofa unit and room heater"
          rooms={18}
        />
        <HotelCard
          image={HotelImage5}
          name="Hotel Aroma Nainital"
          price={7999}
          rating={3}
          description="A complete family hotel Aroma Hotel established in 1967 is located in the tranquil woods of Ayarpata Nainital (approx. 300 mtrs from the Naini Lake)."
          rooms={25}
          website={"https://hotelaromanainital.com/"}
        />
      </div>
    </div>
  );
};

export default PopularHotels;
