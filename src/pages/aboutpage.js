import React from 'react'
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import AboutUs from '../components/about-us'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<AboutUs />}
            <Footer />
        </>
    )
}

export default AboutPage
