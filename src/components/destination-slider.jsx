import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/destination-slider.css";

const DestinationSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: false,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        className="mySwiper destination-slider-swiper"
      >
        <SwiperSlide className="swiper-overlay">
          <div className="swiper-overlay1 swiper-overlay">
            <div className="content">
              <h2>Mussoorie</h2>
              <h3>7 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay2 swiper-overlay">
            <div className="content">
              <h2>Nainital</h2>
              <h3>2 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay3 swiper-overlay">
            <div className="content">
              <h2>Corbett</h2>
              <h3>4 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay4 swiper-overlay">
            <div className="content">
              <h2>Manali</h2>
              <h3>5 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay5 swiper-overlay">
            <div className="content">
              <h2>Bhimtal</h2>
              <h3>1 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay6 swiper-overlay">
            <div className="content">
              <h2>Dharamshala</h2>
              <h3>5 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay7 swiper-overlay">
            <div className="content">
              <h2>Amritsar</h2>
              <h3>2 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay8 swiper-overlay">
            <div className="content">
              <h2>Kausani</h2>
              <h3>1 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay9 swiper-overlay">
            <div className="content">
              <h2>Ranikhet</h2>
              <h3>1 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay10 swiper-overlay">
            <div className="content">
              <h2>Dalhousie</h2>
              <h3>2 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay11 swiper-overlay">
            <div className="content">
              <h2>Haridwar</h2>
              <h3>1 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay12 swiper-overlay">
            <div className="content">
              <h2>Chandigarh</h2>
              <h3>2 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay13 swiper-overlay">
            <div className="content">
              <h2>Bandhavgarh</h2>
              <h3>1 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-overlay14 swiper-overlay">
            <div className="content">
              <h2>Shimla</h2>
              <h3>3 Listing</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DestinationSlider;
