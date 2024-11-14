import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import PrivacyPolicy from '../components/privacy-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const PrivacyPolicyPage = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - Royal Collection Hotels</title>
                <meta name="description" content="Read the Privacy Policy of Royal Collection Hotels & Resorts. Learn how we collect, use, and protect your personal information when you book with us or use our services." />
                <meta name="keywords" content="Royal Collection Hotels privacy policy, hotel privacy policy, personal data protection, hotel booking privacy, user data privacy, privacy terms, data collection and usage, privacy protection Royal Collection Hotels, online booking privacy, hotel services privacy policy" />
                <link rel="canonical" href="https://royalcollectionhotels.com/privacy-policy" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Privacy Policy - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/privacy-policy"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<PrivacyPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PrivacyPolicyPage
