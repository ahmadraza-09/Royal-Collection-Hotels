import React from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Royal Collection Hotels - Get in Touch with Us</title>
                <meta name="description" content="Get in touch with Royal Collection Hotels & Resorts for inquiries, bookings, or support. Our team is here to assist you with all your hotel-related questions and needs." />
                <meta name="keywords" content="Royal Collection Hotels contact, hotel inquiries, hotel bookings, customer support, contact Royal Collection Hotels, hotel reservations, get in touch with Royal Collection Hotels, hotel services support, hotel contact details" />
                <link rel="canonical" href="https://royalcollectionhotels.com/contact" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Contact Us - Royal Collection Hotels",
                        "telephone": "+91-9971834101",
                        "url": "https://royalcollectionhotels.com/contact"
                    })}
                </script>
            </Helmet>

            {<TopBanner />}
            {<Navbar />}
            {<ContactUs />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default ContactPage
