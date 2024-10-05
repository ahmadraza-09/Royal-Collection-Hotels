import React from 'react'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import WhatWeOffer from '../components/what-we-offer'
import WhyChooseUs from '../components/why-choose-us'

const HomePage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<HeroSection />}
            {<WhyChooseUs />}
            {<WhatWeOffer />}
            {<Footer />}
        </>
    )
}

export default HomePage
