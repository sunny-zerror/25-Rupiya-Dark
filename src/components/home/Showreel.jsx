"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Showreel = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    useGSAP(() => {
        gsap.fromTo(".showreel_video", {
            y: -400
        }, {
            y: 400,
            ease: "linear",
            scrollTrigger: {
                trigger: ".showreel_video_paren",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers:true,
            }
        })
    })

    return (
        <>
            <div className=" showreel_video_paren w-full relative h-screen overflow-hidden">
                {!isVideoLoaded && (
                    <div className="w-full video_skeleton absolute h-screen top-0 left-0 pointer-events-none z-10 bg-black"></div>
                )}
                <video onLoadedData={() => {
                    setTimeout(() => {
                        setIsVideoLoaded(true)
                    }, 500)
                }} loop autoPlay muted playsInline
                    className={`  showreel_video  cover transition-opacity duration-300  ${isVideoLoaded ? "opacity-100" : "opacity-0"}   `} src="/videos/showreel_compress.mp4"></video>
            </div>
        </>
    )
}

export default Showreel