import MaskReveal from '@/components/common/MaskReveal'
import About from '@/components/home/About'
import ClientsMarquee from '@/components/home/ClientsMarquee'
import FeaturedWork from '@/components/home/FeaturedWork'
import Hero from '@/components/home/Hero'
import MaskHome from '@/components/home/MaskHome'
import Services from '@/components/home/Services'
import Showreel from '@/components/home/Showreel'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div className='relative'>
      <div className="front-view">
        <Hero />
        <About />
        <ClientsMarquee />
        <Showreel />
        <FeaturedWork />
        <Services />
        <Testimonials />
      </div>
      <MaskReveal>
        <MaskHome />
      </MaskReveal>
    </div>
  )
}

export default HomePage