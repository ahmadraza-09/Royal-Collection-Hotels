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

            <Helmet>
                <title>Packages - Royal Collection Hotels</title>
                <meta name="description" content="Explore top travel packages including Uttarakhand, Himachal Pradesh, Honeymoon, Shimla Volvo, Shimla Car, and Long Weekend options. Call 9971834101 to plan your perfect getaway!" />
                <meta name="keywords" content="Uttarakhand package, Himachal Pradesh package, honeymoon package, travel package, Shimla Volvo package, Shimla car package, long weekend package, Royal Collection Hotels packages, 9971834101 packages" />
                <link rel="canonical" href="https://royalcollectionhotels.com/packages" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        "name": "Royal Collection Hotels",
                        "url": "https://royalcollectionhotels.com/packages",
                        "telephone": "+91 9971834101",
                        "description": "Discover a wide range of travel packages from Royal Collection Hotels, tailored to make your trips memorable. Perfect for Uttarakhand, Himachal Pradesh, honeymoons, and weekend getaways.",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Uttarakhand Package",
                                "description": "A complete package to explore the beauty of Uttarakhand."
                            },
                            {
                                "@type": "Offer",
                                "name": "Himachal Pradesh Package",
                                "description": "An adventurous and scenic journey across Himachal Pradesh."
                            },
                            {
                                "@type": "Offer",
                                "name": "Honeymoon Package",
                                "description": "Romantic getaways for couples in picturesque locations."
                            },
                            {
                                "@type": "Offer",
                                "name": "Shimla Volvo Package",
                                "description": "Convenient and comfortable Volvo travel package for Shimla."
                            },
                            {
                                "@type": "Offer",
                                "name": "Shimla Car Package",
                                "description": "Explore Shimla at your own pace with our car package."
                            },
                            {
                                "@type": "Offer",
                                "name": "Long Weekend Package",
                                "description": "Perfect packages to make the most of your long weekends."
                            }
                        ],
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<Packages />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PackagesPage
