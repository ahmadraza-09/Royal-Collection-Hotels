import React, { useEffect } from 'react';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Career from '../components/career'

const CareerPage = () => {
    useEffect(() => {
        document.title = "Career - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<Career />}
            {<Footer />}
        </>
    )
}

export default CareerPage
