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

const HeroSection = lazy(() => import("../components/hero-section"));

const HomePage = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader">
                    <img src={Loader} alt="Loading..." />
                </div>
            ) : (
                <>
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
            )}
        </>
    );
};

export default HomePage;
