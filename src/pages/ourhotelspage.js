import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OurHotels from '../components/our-hotels'

const OurHotelsPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<OurHotels />}
            {<Footer />}
        </>
    )
}

export default OurHotelsPage
