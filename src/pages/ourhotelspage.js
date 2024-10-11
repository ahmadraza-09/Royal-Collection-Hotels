import React, { useEffect } from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OurHotels from '../components/our-hotels'


const OurHotelsPage = () => {
    useEffect(() => {
        document.title = "Our Hotels - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
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
