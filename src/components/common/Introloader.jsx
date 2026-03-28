"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import CountUp from '../effects/CountUp'

const Introloader = () => {

    useGSAP(() => {
        gsap.to(".introloader_paren", {
            opacity: 0,
            delay: 3
        })
        gsap.to(".loader_bar", {
            width: "100%",
            ease: "expo.inOut",
            duration: 3
        })
        gsap.to(".introloader_paren", {
            display: "none",
            delay: 5
        })
    })

    return (
        <>
            <div className=" introloader_paren w-full flex h-[100svh]  fixed  z-[99999] pointer-events-none bg-[#0d0d0d]">
                 <div className=" padding w-full pt-32! md:h-[40vh]  md:flex items-end justify-between">
                <h1 className=' max-sm:w-full text-center  text_anim text-[18vw] whitespace-nowrap md:text-8xl font-semibold leading-0 uppercase '>
                    <span className='leading-[14vw] md:leading-[5rem]'>25 Rupiya</span> <br />
                    <span className=' w-full flex justify-end text-[1.36rem] leading-5 text-[#eb5939] uppercase'>Production</span>
                </h1>
                <div className=" max-sm:mt-5 opacity-0 max-sm:w-full md:pr-36">
                    <p className=' text_anim mask-trigger text-xl font-medium  leading-none'> AI powered cinematic production<br /> built different.</p>
                </div>
            </div>
                <div className=" loader_bar w-0 absolute h-1 bg-[#eb5939] bottom-0 left-0"></div>
                <div className="absolute bottom-5 right-5 pp_neue text-7xl md:text-8xl font-semibold text-[#eb5939]">
                    <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={.4}
                        className="count-up-text"
                        startCounting={false}
                    />
                </div>
                <img className=' str_img absolute bottom-5 left-5 w-20' src="/icons/star.svg" alt="" />
            </div>
        </>
    )
}

export default Introloader