import React, { useEffect } from 'react';
import Navbar from '../components/navbar'
import TopBanner from '../components/top-banner'
import Footer from '../components/footer'
import Payment from '../components/payment';

const PaymentPage = () => {
    useEffect(() => {
        document.title = "Payment - Royal Collection Hotels";

        return (() => {
            document.title = "Royal Collection Hotels";
        })
    }, []);
    return (
        <>
            {<TopBanner />}
            {<Navbar />}
            {<Payment />}
            {<Footer />}
        </>
    )
}

export default PaymentPage
