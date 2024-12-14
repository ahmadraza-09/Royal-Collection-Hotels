import React from "react";
import "../css/booking-modal.css";
import BookingModalBanner from "../assets/hotel-banner.webp";

const BookingModal = ({
  hotelName,
  hotelPrice,
  priceDetails,
  contactDetails,
  onClose,
}) => {
  return (
    <div className="booking-modal-section">
      <div className="booking-modal swipe">
        <div className="hide-modal hide-modal-bg" onClick={onClose}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="booking-modal-banner">
          <img
            src={BookingModalBanner}
            alt=""
            loading="lazy"
            fetchPriority="high"
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
              {hotelPrice > 0 ? (
                <>
                  {priceDetails?.roomPrices?.map((room, index) => (
                    <span key={index}>
                      <span>₹ {room.price}</span> {room.type}{" "}
                      <br />
                    </span>
                  ))}
                </>
              ) : (
                <span className="price-na">Contact Us for Price Inquery</span>
              )}
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
