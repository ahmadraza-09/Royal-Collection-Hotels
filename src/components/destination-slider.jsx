import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/destination-slider.css";

const DestinationSlider = () => {
  const navigate = useNavigate();

  const handleExplore = (cityName) => {
    navigate(`/our-city/hotels-in-${cityName.toLowerCase()}`);
  };

  const destinations = [
    { name: "Mussoorie", listings: "3" },
    { name: "Nainital", listings: "4" },
    { name: "Corbett", listings: "2" },
    { name: "Manali", listings: "6" },
    { name: "Bhimtal", listings: "1" },
    { name: "Dharamshala", listings: "4" },
    { name: "Amritsar", listings: "3" },
    { name: "Kausani", listings: "1" },
    { name: "Ranikhet", listings: "1" },
    { name: "Dalhousie", listings: "2" },
    { name: "Haridwar", listings: "1" },
    { name: "Chandigarh", listings: "2" },
    { name: "Bandhavgarh", listings: "1" },
    { name: "Shimla", listings: "5" },
    { name: "Almora", listings: "1" },
    { name: "Dhanaulti", listings: "1" },
    { name: "Lohaghat", listings: "1" },
    { name: "Auli", listings: "1" },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        className="mySwiper destination-slider-swiper"
        style={{ padding: "0px 40px" }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-overlay swiper-overlay${index + 1}`}
          >
            <div
              className={`swiper-overlay${index + 1} swiper-overlay`}
              onClick={() => handleExplore(destination.name)}
            >
              <div className="content">
                <h2>{destination.name}</h2>
                <h3>
                  {destination.listings} Listing
                  {destination.listings > 1 ? "s" : ""}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DestinationSlider;
