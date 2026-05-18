import React from 'react'
import WorkClient from './WorkClient'
import { createPageMetadata } from "@/lib/seo";

const page = () => {
  return (
    <>
      <WorkClient/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/work");
}
