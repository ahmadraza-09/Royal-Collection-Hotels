import React, { useState, useEffect } from 'react';
import '../css/festive-modal-container.css';
import RepublicDayModal from './republic-day-modal';
import FlyersPopup from './flyers-popup';

const FestiveModalContainer = () => {
  // Check if the modal was previously shown by using localStorage
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the 'showModal' flag is set in localStorage
    // const isModalShown = localStorage.getItem('showModal');
    // if (!isModalShown) {
      setShowModal(true);
      // localStorage.setItem('showModal', 'true'); // Set flag to true to prevent showing modal again
    // }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className='festive-modal-section'>
          <FlyersPopup onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default FestiveModalContainer;
