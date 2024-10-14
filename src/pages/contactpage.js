import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<ContactUs />}
            {<Footer />}
        </>
    )
}

export default ContactPage
