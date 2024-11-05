import React from 'react'
import TopBanner from '../components/top-banner'
import Navbar from '../components/navbar'
import CancellationPolicy from '../components/cancellation-policy'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'

const CancellationPolicyPage = () => {
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<CancellationPolicy />}
            {<Footer />}
            {<SocialMediaFixed />}
        </>
    )
}

export default CancellationPolicyPage
