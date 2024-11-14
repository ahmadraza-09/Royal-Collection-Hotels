import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import OurHotels from '../components/our-hotels'
import SocialMediaFixed from '../components/socialmedia-fixed'


const OurHotelsPage = () => {

    return (
        <>
            <Helmet>
                <title>Our Hotels - Explore Royal Collection Hotels Across Stunning Destinations</title>
                <meta name="description" content="Explore the exclusive collection of hotels by Royal Collection Hotels & Resorts. Discover luxury accommodations, prime locations, and premium services tailored for a memorable stay experience across various cities." />
                <meta name="keywords" content="Royal Collection Hotels, luxury hotels, premium accommodations, hotel collection, hotel locations, Royal Collection properties, top hotels in various cities, quality hotel services, hotel experiences, exclusive hotel collection" />
                <link rel="canonical" href="https://royalcollectionhotels.com/our-city" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Our Hotels - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/our-city"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<OurHotels />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default OurHotelsPage
