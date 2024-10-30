import React, { useEffect, useState, Suspense, lazy } from "react";
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import WhatWeOffer from '../components/what-we-offer';
import WhyChooseUs from '../components/why-choose-us';
import DestinationSliderSection from '../components/destination-slider-section';
import CustomerCounting from '../components/customer-counting';
import PopularHotels from '../components/popular-hotels';
import Loader from "../assets/loader/loader2.gif";
import HeroSection from "../components/hero-section";

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('firstVisit');

        if (!isFirstVisit) {
            const timer = setTimeout(() => {
                setLoading(false);
                localStorage.setItem('firstVisit', 'true'); // Set the flag for future visits
            }, 1000); // Adjust the loading duration as needed

            return () => clearTimeout(timer); // Cleanup the timer
        } else {
            setLoading(false); // Skip loader if it's not the first visit
        }
    }, []);

    return (
        <>
            {loading && (
                <div className="loader">
                    <img src={Loader} alt="Loading..." />
                </div>
            )}
            <TopBanner />
            <Navbar />
            <HeroSection />
            <WhyChooseUs />
            <WhatWeOffer />
            <DestinationSliderSection />
            <CustomerCounting />
            <PopularHotels />
            <Footer />

        </>
    );
};

export default HomePage;
