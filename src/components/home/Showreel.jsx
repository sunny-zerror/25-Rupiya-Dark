"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Showreel = () => {

    useGSAP(()=>{
        gsap.fromTo(".showreel_video",{
            y:-400
        },{
            y:400,
            ease:"linear",
            scrollTrigger: {
                trigger: ".showreel_video_paren",
                start: "top bottom",
                end:"bottom top",
                scrub: true,
                // markers:true,
            }
        })
    })

  return (
    <>
        <div className=" showreel_video_paren w-full h-screen overflow-hidden">
            <video loop autoPlay muted playsInline className=' showreel_video cover' src="/videos/showreel_compress.mp4"></video>
        </div>
    </>
  )
}

export default Showreel