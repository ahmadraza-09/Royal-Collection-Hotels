import React from 'react'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'

const HomePage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<HeroSection />}
            {<Footer />}
        </>
    )
}

export default HomePage
