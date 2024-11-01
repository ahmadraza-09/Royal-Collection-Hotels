import React from "react";
import "../css/booking-modal.css";

const BookingModal = ({ hotelName, priceDetails, contactDetails, onClose }) => {
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
            fetchPriority="low"
          />
        </div>
        <h2 className="booking-hotel-name">{hotelName}</h2>
        <p className="booking-hotel-description">
          Book your stay at {hotelName} for an unforgettable escape!
        </p>
        <br />
        <div className="booking-price-validity-and-contact">
          <div className="room-price-validity">
            <h2 className="off-season-tariff">Off Season Tariff</h2>
            <br />
            <div className="price-validity-date">
              {priceDetails?.validityDates?.map((date, index) => (
                <span key={index}>{date}</span>
              ))}
            </div>
            <br />
            <div className="room-prices-list">
              {priceDetails?.roomPrices?.map((room, index) => (
                <span key={index}>
                  <span>₹ {room.price}</span> {room.type} <br />
                </span>
              ))}
            </div>
          </div>
          <div className="booking-contact-details">
            <h2>Booking Contact Details</h2>
            <br />
            <div className="booking-contacts">
              {contactDetails.phone?.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:+91${phone.number}`}
                  aria-label="call-us"
                >
                  <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91{" "}
                  {phone.number}
                  <br />
                </a>
              ))}

              <a href={`mailto:${contactDetails.email}`} aria-label="mail-us">
                <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
