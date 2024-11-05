import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OurHotels from '../components/our-hotels'
import HotelListSection from '../components/hotels-list-section'
import SocialMediaFixed from '../components/socialmedia-fixed'

const CityHotelsPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<HotelListSection />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CityHotelsPage
