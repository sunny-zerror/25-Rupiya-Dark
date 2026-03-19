import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import Faq from '@/components/contact/Faq'
import React from 'react'

const page = () => {
  return (
    <>
      <ContactHero/>
      <ContactForm/>
      <Faq/>
    </>
  )
}

export default page