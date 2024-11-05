import React, { useEffect } from 'react';
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import AboutUs from '../components/about-us'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';

const AboutPage = () => {
    useEffect(() => {
        document.title = "About Us - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<AboutUs />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default AboutPage
