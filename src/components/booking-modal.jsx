import React from "react";
import "../css/booking-modal.css";

const BookingModal = ({ hotelName, onClose }) => {
  return (
    <div className="booking-modal-section">
      <div className="booking-modal swipe">
        <div className="hide-modal hide-modal-bg" onClick={onClose}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="booking-modal-banner">
          <img
            src="https://files.jotform.com/jufs/ugurg/form_files/hotel-banner.63885da4032201.67905415.png?md5=CPU4YwPmo5i09ZNIUzZzTA&expires=1729767274"
            alt=""
            loading="lazy"
          />
        </div>
        <h2 className="booking-hotel-name">{hotelName}</h2>{" "}
        {/* Updated to use hotelName */}
        <p className="booking-hotel-description">
          Book your stay at {hotelName} for an unforgettable escape!
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
