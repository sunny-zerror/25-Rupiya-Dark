"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import CountUp from '../effects/CountUp'

const Introloader = () => {

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(".introloader_paren",{
            opacity:0,
            delay:4
        })
    })

    return (
        <>
            <div className=" introloader_paren w-full flex h-screen  fixed  z-[99999] pointer-events-none bg-[#0d0d0d]">
                <div className=" padding w-full h-[40vh]  flex items-end justify-between">
                    <h1 className=' text_anim text-8xl font-semibold leading-0 uppercase '>
                        <span className='  leading-[5rem] '>25 Rupiya</span> <br />
                        <span className=' opacity-0 w-full flex justify-end text-[1.36rem] leading-5 text-[#eb5939] uppercase'>Production</span>
                    </h1>
                </div>
                <div className="absolute bottom-5 right-5 pp_neue text-8xl font-semibold text-[#eb5939]">
                    <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={1}
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