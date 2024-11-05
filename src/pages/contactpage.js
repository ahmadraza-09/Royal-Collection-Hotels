import React, { useEffect } from 'react';
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact Us - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<ContactUs />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default ContactPage
