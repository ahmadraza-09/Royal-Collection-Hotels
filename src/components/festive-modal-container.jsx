import React, { useState, useEffect } from 'react';
import '../css/festive-modal-container.css';
import CristmasModal from './cristmas-modal';

const FestiveModalContainer = () => {
  // Check if the modal was previously shown by using localStorage
  const [showCristmasgModal, setShowCristmasModal] = useState(false);

  useEffect(() => {
    // Check if the 'showModal' flag is set in localStorage
    // const isModalShown = localStorage.getItem('showModal');
    // if (!isModalShown) {
      setShowCristmasModal(true);
      // localStorage.setItem('showModal', 'true'); // Set flag to true to prevent showing modal again
    // }
  }, []);

  const handleCloseCristmasModal = () => {
    setShowCristmasModal(false);
  };

  return (
    <>
      {showCristmasgModal && (
        <div className='festive-modal-container'>
          <CristmasModal onClose={handleCloseCristmasModal} />
        </div>
      )}
    </>
  );
};

export default FestiveModalContainer;
