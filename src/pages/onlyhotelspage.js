import React, { useEffect } from 'react';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import OnlyHotels from '../components/only-hotels'
import Footer from '../components/footer'

const OnlyHotelsPage = () => {
    useEffect(() => {
        document.title = "Hotels - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<OnlyHotels />}
            {<Footer />}
        </>
    )
}

export default OnlyHotelsPage
