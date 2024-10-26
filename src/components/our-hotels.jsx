import React, { useState } from "react";
import "../css/our-hotels.css";
import HotelDestinationCard from "./hotel-destination-card";

// Images
import Mussoorie from "../assets/mussoorie.jpg";
import Dhanaulti from "../assets/dhanaulti.jpg";
import Nainital from "../assets/nainital.jpg";
import Lohaghat from "../assets/lohaghat.jpeg";
import Auli from "../assets/auli.jpg";
import Corbett from "../assets/corbett.jpg";
import Manali from "../assets/manali.jpg";
import Shimla from "../assets/shimla.jpg";
import Dharamshala from "../assets/dharamshala.jpg";
import Dalhousie from "../assets/dalhousie.jpg";
import Amritsar from "../assets/amritsar.jpg";
import Chandigarh from "../assets/chandigarh.jpg";
import Gujarat from "../assets/sasangir.jpg";
import Bhimtal from "../assets/bhimtal.jpg";
import Kausani from "../assets/kausani.jpg";
import Haridwar from "../assets/haridwar.jpg";
import Bandhavgarh from "../assets/bandhavgarh.jpg";
import Almora from "../assets/almora.jpg";
import Ranikhet from "../assets/ranikhet.jpg";
import Mukteshwar from "../assets/mukteshwar.jpeg";
import Chail from "../assets/chail.jpeg";

const OurHotels = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);

  const hotelsDestinationLists = [
    {
      id: 1,
      image: Mussoorie,
      title: "Mussoorie",
      description:
        "The hill station is in the foothills of the Garhwal Himalayan range.",
      properties: 3,
    },
    {
      id: 2,
      image: Dhanaulti,
      title: "Dhanaulti",
      description:
        "Discover Dhanaulti: serene Himalayan getaway, stunning views, adventure trails, and tranquil ambiance for perfect relaxation",
      properties: 1,
    },
    {
      id: 3,
      image: Nainital,
      title: "Nainital",
      description:
        "Nainital is famous for the Naini Lake, the amazing view and the pleasant weather.",
      properties: 3,
    },
    {
      id: 4,
      image: Lohaghat,
      title: "Lohaghat",
      description:
        "Lohaghat, a serene hill station in Uttarakhand, India, is renowned for its lush greenery, ancient temples, and scenic landscapes.",
      properties: 1,
    },
    {
      id: 5,
      image: Auli,
      title: "Auli",
      description:
        "Auli is fondly referred to as a place where nature comes alive in all its glory and splendour.",
      properties: 1,
    },
    {
      id: 6,
      image: Corbett,
      title: "Corbett",
      description:
        "Jim Corbett National Park is a premier spot for sighting of big cats",
      properties: 2,
    },
    {
      id: 7,
      image: Manali,
      title: "Manali",
      description:
        "Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district as well as the city of Leh in Ladakh.",
      properties: 6,
    },
    {
      id: 8,
      image: Shimla,
      title: "Shimla",
      description:
        "One of the most stunning hill resorts, Shimla is one of the most popular hill stations in northern India.",
      properties: 5,
    },
    {
      id: 9,
      image: Dharamshala,
      title: "Dharamshala",
      description:
        "Dharamshala is one of the most frequented tourist places in India.",
      properties: 4,
    },
    {
      id: 10,
      image: Dalhousie,
      title: "Dalhousie",
      description:
        "Surrounded by beautiful snow-capped mountains, Dalhousie is named after its founder Lord Dalhousie, the British Governor-General in India.",
      properties: 2,
    },
    {
      id: 11,
      image: Amritsar,
      title: "Amritsar",
      description:
        "Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre.",
      properties: 3,
    },
    {
      id: 12,
      image: Chandigarh,
      title: "Chandigarh",
      description:
        "Chandigarh has been called the happiest and cleanest city in India, as evidenced by the surveys conducted in recent years.",
      properties: 2,
    },
    // {
    //   id: 13,
    //   image: Gujarat,
    //   title: "Gujarat",
    //   description:
    //     "Gir National Park is the only place in the world outside Africa where a lion can be seen in its natural habitat.",
    //   properties: 1,
    // },
    {
      id: 14,
      image: Bhimtal,
      title: "Bhimtal",
      description:
        "The major attraction in Bhimtal is the Bhimtal Lake, which has an island at its centre.",
      properties: 1,
    },
    {
      id: 15,
      image: Kausani,
      title: "Kausani",
      description:
        "It is famous for its scenic splendour and its spectacular 300 km-wide panoramic view of Himalayan peaks",
      properties: 1,
    },
    {
      id: 16,
      image: Haridwar,
      title: "Haridwar",
      description:
        "Haridwar is regarded as a holy place for Hindus, hosting important religious events and serving as a gateway to several prominent places of worship.",
      properties: 1,
    },
    {
      id: 17,
      image: Bandhavgarh,
      title: "Bandhavgarh",
      description:
        "Bandhavgarh National Park is a national park of India, located in the Umaria district of Madhya Pradesh",
      properties: 1,
    },
    {
      id: 18,
      image: Almora,
      title: "Almora",
      description:
        "Almora is famous for its alluring beauty, panoramic view of the Himalayas, rich cultural heritage, unique handicrafts, and delicious cuisines.",
      properties: 2,
    },
    {
      id: 19,
      image: Ranikhet,
      title: "Ranikhet",
      description:
        "Ranikhet is a hill station in Uttarakhand State, northern India. It’s known for its views of the Himalayas. Hundreds of bells adorn Jhula Devi Temple, dedicated to the Hindu goddess Durga.",
      properties: 1,
    },
    {
      id: 20,
      image: Mukteshwar,
      title: "Mukteshwar",
      description:
        "Mukteshwar is a village and tourist destination in the Nainital district of Uttarakhand, India. It sits high in the Kumaon Hills at an altitude of 2171 meters, 51 km from Nainital, 72 km from Haldwani, and 343 km from Delhi.",
      properties: 1,
    },
    {
      id: 21,
      image: Chail,
      title: "Chail",
      description:
        "Chail is a hill station in Solan district of Himachal Pradesh, India. It is 45 kilometres from Solan city and 44 kilometres from Shimla. It is known for its salubrious beauty and forests.",
      properties: 1,
    },
  ];

  // Filter hotels based on selected city
  const handleSearch = () => {
    if (selectedCity) {
      const filtered = hotelsDestinationLists.filter((hotel) =>
        hotel.title.toLowerCase().includes(selectedCity.toLowerCase())
      );
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels(hotelsDestinationLists);
    }
  };

  return (
    <div className="our-hotels-section">
      <h2>Explore Our Hotels</h2>
      <div className="hotels-filter-cards-section">
        <div className="hotel-filter-section swipe-left">
          <h3>Find Your City</h3>
          <form>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="Amritsar">Amritsar</option>
              <option value="Auli">Auli</option>
              <option value="Almora">Almora</option>
              <option value="Bandhavgarh">Bandhavgarh</option>
              <option value="Bhimtal">Bhimtal</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Corbett">Corbett</option>
              <option value="Dalhousie">Dalhousie</option>
              <option value="Dharamshala">Dharamshala</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Kausani">Kausani</option>
              <option value="lohaghat">Lohaghat</option>
              <option value="Manali">Manali</option>
              <option value="Mussoorie">Mussoorie</option>
              <option value="Nainital">Nainital</option>
              <option value="Ranikhet">Ranikhet</option>
              <option value="Shimla">Shimla</option>
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
          {(filteredHotels.length > 0
            ? filteredHotels
            : hotelsDestinationLists
          ).map((hotel) => (
            <HotelDestinationCard
              key={hotel.id}
              image={hotel.image}
              title={hotel.title}
              description={hotel.description}
              properties={hotel.properties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurHotels;
