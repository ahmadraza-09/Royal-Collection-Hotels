import React from "react";
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import WhatWeOffer from '../components/what-we-offer';
import WhyChooseUs from '../components/why-choose-us';
import DestinationSliderSection from '../components/destination-slider-section';
import CustomerCounting from '../components/customer-counting';
import PopularHotels from '../components/popular-hotels';
import HeroSection from "../components/hero-section";

const HomePage = () => {

    return (
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
    );
};

export default HomePage;
