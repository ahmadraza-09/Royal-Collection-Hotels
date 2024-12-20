import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/festive-modal-container.css'
import Offer from '../assets/festive-img/offer.png'
import Logo from '../assets/festive-img/newyear-logo.jpg'
import Ballon1 from '../assets/festive-img/balloons.png'
import Ballon2 from '../assets/festive-img/balloons.png'

const NewyearModal = ({ onClose }) => {
    const navigate = useNavigate();
    return (
        <div className='newyear-modal-container'>
            <img src={Offer} alt="" className='offer-img' />
            <div className="hide-festive-modal hide-festive-modal-bg" onClick={onClose}>
                <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="festive-modal-content">
                <img src={Logo} alt="" />
                <br />
                <br />
                <br />
                <h2>Happy New Year Stay Deals !</h2>
                <p>
                    🎉 New Year, New Getaway! 🏨 Book your stay now and make 2025 unforgettable! ✨
                </p>
                <ul>
                    <li onClick={() => {
                    navigate("/contact");
                }}>&#x2022; OFFER AVAILABLE &#x2022;</li>
                    <li onClick={() => {
                    navigate("/contact");
                }}>&#x2022; LIMITED ROOMS AVAILABLE &#x2022;</li>
                </ul>
                <button type="button" onClick={() => {
                    navigate("/contact");
                }}>Book Your Stay</button>
            </div>
            <img src={Ballon1} alt="" className='balloon1'/>
            <img src={Ballon2} alt="" className='balloon2'/>
        </div>
    )
}

export default NewyearModal
