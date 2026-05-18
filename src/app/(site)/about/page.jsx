import React from 'react'
import AboutClient from './AboutClient'
import { createPageMetadata } from "@/lib/seo";

const page = () => {
  return (
    <>
        <AboutClient/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/about");
}
