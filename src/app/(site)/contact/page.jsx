import React from 'react'
import ContactClient from './ContactClient'
import { createPageMetadata } from "@/lib/seo";

const page = () => {
  return (
    <>
      <ContactClient/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
