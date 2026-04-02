import Introloader from '@/components/common/Introloader'
import MaskReveal from '@/components/common/MaskReveal'
import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import FeaturedWork from '@/components/home/FeaturedWork'
import Hero from '@/components/home/Hero'
import MaskHome from '@/components/home/MaskHome'
import MobileFeaturedWork from '@/components/home/MobileFeaturedWork'
import Services from '@/components/home/Services'
import Showreel from '@/components/home/Showreel'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'
import JoinCommunity from '../../components/home/JoinCommunity'
import CustomCursor from '@/components/common/CustomCursor'

const HomePage = () => {

  return (
    <div className='relative home-page'>
      <Introloader />
      <CustomCursor />
      <div className="front-view">
        <Hero />
        <About />
        <ClientsMarquee />
        <Showreel />
        <FeaturedWork />
        <MobileFeaturedWork />
        <Services />
        <Testimonials />
        {/* <JoinCommunity /> */}
      </div>
      <MaskReveal>
        <MaskHome />
      </MaskReveal>
    </div>
  )
}

export default HomePage