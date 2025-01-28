import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/festive-modal-container.css'
import Offer from '../assets/festive-img/offer.png'
import Logo from '../assets/festive-img/republic-day-logo.png'

const FlyersPopup = ({ onClose }) => {
    const navigate = useNavigate();
    return (
        <div className='flyers-modal-container swipe' >
            <div className="hide-festive-modal hide-festive-modal-bg" onClick={onClose}>
                <i className="fa-solid fa-circle-xmark"></i>
            </div>
        </div>
    )
}

export default FlyersPopup
