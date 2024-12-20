import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/festive-modal-container.css'
import CristmasBell from '../assets/festive-img/cristmas-bell.png'
import Santa from '../assets/festive-img/santa.png'
import Logo from '../assets/festive-img/cristmas-logo.png'
import Offer from '../assets/festive-img/offer.png'
import Offer2 from '../assets/festive-img/offer3.png'

const CristmasModal = ({onClose}) => {
    const navigate = useNavigate();
    return (
        <div className="cristmas-modal-container">
            <img src={Offer} alt="" className='offer-img'/>
            <img src={Offer2} alt="" className='offer-img2'/>
            <div className="hide-festive-modal hide-festive-modal-bg" onClick={onClose}>
                <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="festive-modal-content">
                <img src={Logo} alt="" />
                <h2>Best Cristmas Stay Deals !</h2>
                <p>
                    The Holiday Season Starts Here – Find Your Ideal Hotel Today!
                </p>
                <button type="button" onClick={() => {
                    navigate("/contact");
                }}>Book Your Stay</button>
            </div>
            <img src={CristmasBell} alt="" className='cristmas-bell-img' />
            <img src={Santa} alt="" className='santa-img' />
        </div>
    )
}

export default CristmasModal
