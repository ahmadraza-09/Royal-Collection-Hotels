import React, { useState } from "react";
import "../css/hotel-card.css";
import BookingModal from "./booking-modal";

const HotelCard = ({
  image,
  name,
  price,
  rating,
  description,
  rooms,
  website,
}) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookinghModal = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };
  return (
    <>
      {showBookingModal && (
        <BookingModal hotelName={name} onClose={handleCloseBookingModal} />
      )}
      <div className="hotel-card swipe">
        <div className="hotel-card-image">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="hotel-card-content">
          <div className="hotel-card-content-header">
            <h1>{name}</h1>
            <h4>
              <span>₹ {price}</span> /Night
              {/* <span>- Valid Only for Season</span> */}
            </h4>
            <p>
              <p>
                <span>
                  {Array.from({ length: rating }, (_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                  ))}
                </span>
                {` ${rating} Stars`}
              </p>
              <p>
                <a href={website} target="_blank">
                  Website <i class="fa-solid fa-up-right-from-square"></i>
                </a>
              </p>
            </p>
          </div>
          <div className="hotel-card-content-center">
            <p>{description}</p>
          </div>
          <div className="hotel-card-content-footer">
            <h4>{rooms} Rooms</h4>
            <button onClick={handleBookinghModal}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
