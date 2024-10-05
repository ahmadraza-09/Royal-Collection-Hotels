import React from "react";
import "../css/destination-slider.css";
import DestinationSlider from "./destination-slider";

const DestinationSliderSection = () => {
  return (
    <div className="destination-slider-section">
      <h2>Featured Destinations</h2>
      <DestinationSlider />
    </div>
  );
};

export default DestinationSliderSection;
