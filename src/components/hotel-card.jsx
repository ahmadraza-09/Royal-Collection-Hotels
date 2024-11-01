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
  priceDetails,
  validityDates,
  contactDetails,
}) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookingModal = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  return (
    <>
      {showBookingModal && (
        <BookingModal
          hotelName={name}
          priceDetails={priceDetails}
          contactDetails={contactDetails}
          validityDates={validityDates}
          onClose={handleCloseBookingModal}
        />
      )}
      <div className="hotel-card swipe">
        <div className="hotel-card-image">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="hotel-card-content">
          <div className="hotel-card-content-header">
            <h1>{name}</h1>
            <h4>
              <span>
                <span>₹ {price}</span> /Night
              </span>{" "}
              <span onClick={handleBookingModal}>Check Price Validity</span>
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
              <a
                href={website}
                target="_blank"
                aria-label="explore this hotel website"
              >
                <span>
                  Website <i class="fa-solid fa-up-right-from-square"></i>
                </span>
              </a>
            </p>
          </div>
          <div className="hotel-card-content-center">
            <p>{description}</p>
          </div>
          <div className="hotel-card-content-footer">
            <h4>{rooms} Rooms</h4>
            <button onClick={handleBookingModal} name="book-now">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
