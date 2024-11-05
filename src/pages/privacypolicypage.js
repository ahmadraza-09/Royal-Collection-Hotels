import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import PrivacyPolicy from '../components/privacy-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const PrivacyPolicyPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<PrivacyPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default PrivacyPolicyPage
