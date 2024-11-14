import React from 'react';
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import OnlyHotels from '../components/only-hotels'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';

const OnlyHotelsPage = () => {

    return (
        <>
            <Helmet>
                <title>Hotels List - Discover All Royal Collection Hotels</title>
                <meta name="description" content="Explore our curated list of luxury hotels at Royal Collection Hotels & Resorts. Find the perfect accommodation tailored to your needs with exclusive services and prime locations across multiple cities." />
                <meta name="keywords" content="Royal Collection Hotels list, luxury hotels, hotel listings, best hotels in various cities, hotel accommodations, top hotels collection, hotel options Royal Collection, premium hotels, exclusive hotel selection, Royal Collection Hotels services" />
                <link rel="canonical" href="https://royalcollectionhotels.com/hotels-list" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotels List - Discover All Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/hotels-list"
                    })}
                </script>
            </Helmet>
            {<TopBanner />}
            {<Navbar />}
            {<OnlyHotels />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default OnlyHotelsPage
