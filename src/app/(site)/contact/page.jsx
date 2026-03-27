import MaskReveal from '@/components/common/MaskReveal'
import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import Faq from '@/components/contact/Faq'
import MaskContact from '@/components/contact/MaskContact'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='relative'>
        <div className="front-view">
          {/* <ContactHero /> */}
          <ContactForm />
          <Faq />
        </div>
        <MaskReveal>
          <MaskContact />
        </MaskReveal>
      </div>
    </>
  )
}

export default page