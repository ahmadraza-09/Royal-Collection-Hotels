import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar';
import TopBanner from '../components/top-banner';
import Footer from '../components/footer';
import WhatWeOffer from '../components/what-we-offer';
import WhyChooseUs from '../components/why-choose-us';
import DestinationSliderSection from '../components/destination-slider-section';
import CustomerCounting from '../components/customer-counting';
import PopularHotels from '../components/popular-hotels';
import HeroSection from "../components/hero-section";
import SocialMediaFixed from "../components/socialmedia-fixed";
import NewsLetter from "../components/newsletter";

const HomePage = () => {

    return (
        <>
            <Helmet>
                <title>Royal Collection Hotels & Resorts - Expert Hotel Branding & Marketing Solutions</title>
                <meta name="description" content="Royal Collection Hotels & Resorts is a professional hotel branding company dedicated to enhancing hotel sales, profitability, and client reach through strategic branding and online marketing solutions. Experience our commitment to 100% guest satisfaction and value for money services." />
                <meta name="keywords" content="Royal Collection Hotels, hotel branding company, hotel marketing solutions, hotel sales enhancement, hotel profitability, hotel online marketing, hotel visibility, tourism industry branding, guest satisfaction, value for money services, online channels for hotels, hotel promotion, hotel business ARR, professional hotel branding" />
                <link rel="canonical" href="https://royalcollectionhotels.com/" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Royal Collection Hotels & Resorts - Expert Hotel Branding & Marketing Solutions",
                        "telephone": "+91 9971834101",
                        "url": "https://royalcollectionhotels.com"
                    })}
                </script>
            </Helmet>

            <TopBanner />
            <Navbar />
            <HeroSection />
            <WhyChooseUs />
            <WhatWeOffer />
            <DestinationSliderSection />
            <CustomerCounting />
            <PopularHotels />
            <NewsLetter/>
            <Footer />
            <SocialMediaFixed />
        </>
    );
};

export default HomePage;
