import React from "react";
import "../css/destination-slider.css";
import SkeletonDestinationCard from "./skeleton-destination-card";
const DestinationSlider = React.lazy(() => import("./destination-slider"));

const DestinationSliderSection = () => {
  return (
    <div className="destination-slider-section">
      <h2>Featured Destinations</h2>
      <React.Suspense fallback={<SkeletonDestinationCard />}>
        <DestinationSlider />
      </React.Suspense>
    </div>
  );
};

export default DestinationSliderSection;
