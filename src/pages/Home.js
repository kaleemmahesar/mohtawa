import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import HeroBanner from '../components/heroBanner/HeroBanner'
import Partners from '../components/partnerSection/Partners'
import ContentSlider from '../components/contentSlider/ContentSlider'
import ComingSoon from '../components/comingSoon/ComingSoon'
import ContactUs from '../components/contactUs/ContactUs'


const Home = () => {
    return (
        <>
            <HeroBanner />
            <Partners />
            <ContentSlider />
            <ContactUs />
        </>
    )
}

export default Home