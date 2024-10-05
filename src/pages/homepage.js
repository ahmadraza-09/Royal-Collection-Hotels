import React from 'react'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import WhatWeOffer from '../components/what-we-offer'
import WhyChooseUs from '../components/why-choose-us'
import DestinationSlider from '../components/destination-slider'
import DestinationSliderSection from '../components/destination-slider-section'
import CustomerCounting from '../components/customer-counting'
import PopularHotels from '../components/popular-hotels'

const HomePage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<HeroSection />}
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
