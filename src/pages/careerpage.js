import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Career from '../components/career'

const CareerPage = () => {
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
