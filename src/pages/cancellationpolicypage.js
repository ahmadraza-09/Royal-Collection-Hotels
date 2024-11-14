import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import CancellationPolicy from '../components/cancellation-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const CancellationPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Cancellation Policy - Royal Collection Hotels</title>
                <meta name="description" content="Review the cancellation policy for bookings at Royal Collection Hotels & Resorts. Learn about our terms and conditions for cancellations, refunds, and booking adjustments to make your travel planning easier." />
                <meta name="keywords" content="Royal Collection Hotels cancellation policy, hotel cancellation terms, hotel booking cancellation, Royal Collection Hotels refunds, hotel reservation cancellation, booking terms and conditions, cancellation policy Royal Collection, booking adjustments, hotel booking refunds" />
                <link rel="canonical" href="https://royalcollectionhotels.com/cancellation-policy" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Cancellation Policy - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/cancellation-policy"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<CancellationPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CancellationPolicyPage
