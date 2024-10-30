import React, { Suspense, lazy } from "react";
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
// import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import WhatWeOffer from '../components/what-we-offer'
import WhyChooseUs from '../components/why-choose-us'
import DestinationSliderSection from '../components/destination-slider-section'
import CustomerCounting from '../components/customer-counting'
import PopularHotels from '../components/popular-hotels'
const HeroSection = lazy(() => import("../components/hero-section"));

const HomePage = () => {

    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            <Suspense fallback={<div className="loader">Loading...</div>}>
                {<HeroSection />}
            </Suspense>
            {<WhyChooseUs />}
            {<WhatWeOffer />}
            {<DestinationSliderSection />}
            {<CustomerCounting />}
            {<PopularHotels />}
            {<Footer />}
        </>
    )
}

export default HomePage
