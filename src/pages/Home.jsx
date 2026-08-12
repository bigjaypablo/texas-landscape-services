import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyTLS from '../components/WhyTLS'
import SocialSection from '../components/SocialSection'
import TrustSection from '../components/TrustSection'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyTLS />
      <TrustSection />
      <SocialSection />
      <FinalCTA />
    </main>
  )
}

export default Home
