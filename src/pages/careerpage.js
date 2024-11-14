import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Career from '../components/career'
import SocialMediaFixed from '../components/socialmedia-fixed';

const CareerPage = () => {
    return (
        <>
            <Helmet>
                <title>Careers at Royal Collection Hotels - Join Our Team of Hospitality Experts</title>
                <meta name="description" content="Join the team at Royal Collection Hotels & Resorts and build a rewarding career in the hospitality industry. Explore our job opportunities and grow with a company committed to excellence and guest satisfaction." />
                <meta name="keywords" content="Royal Collection Hotels careers, hospitality jobs, hotel industry careers, job opportunities Royal Collection Hotels, careers in hospitality, hotel management jobs, work at Royal Collection Hotels, career growth in hotel industry, guest service careers, hospitality positions" />
                <link rel="canonical" href="https://royalcollectionhotels.com/career" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Careers - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/career"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<Career />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CareerPage
