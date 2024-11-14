import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import AboutUs from '../components/about-us'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';

const AboutPage = () => {

    return (
        <>
            <Helmet>
                <title>About Royal Collection Hotels - Our Story & Commitment to Excellence</title>
                <meta name="description" content="Learn about Royal Collection Hotels & Resorts, a professional hotel branding company focused on enhancing hotel sales, visibility, and profitability. We specialize in digital marketing and inventory management, ensuring 100% guest satisfaction and value for money services." />
                <meta name="keywords" content="About Royal Collection Hotels, hotel branding experts, hotel marketing company, tourism industry branding, hotel visibility improvement, sales and profitability, hotel online marketing, guest satisfaction focus, value for money, hotel inventory management, tourism branding solutions" />
                <link rel="canonical" href="https://royalcollectionhotels.com/about" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "About Us - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/about"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<AboutUs />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default AboutPage
