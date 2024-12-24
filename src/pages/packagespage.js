import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';
import Packages from '../components/packages';

const PackagesPage = () => {
    return (
        <>
            

            {<TopBanner />}
            {<Navbar />}
            {<Packages />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PackagesPage
