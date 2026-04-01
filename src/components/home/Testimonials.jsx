"use client";
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { TestimonialsData } from '@/app/utils/TestimonialsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {

    useGSAP(() => {
        gsap.to('.testimonials_slider', {
            transform: 'translateX(-150%)',
            ease: "linear",
            scrollTrigger: {
                trigger: '.testimonials_paren',
                start: 'top top',
                end: "bottom bottom",
                scrub: true
            }
        })
    })

    return (
        <>
            <div className="line-break"></div>
            <div className="testimonials_paren h-[300vh]">
                <div className="testimonials_child mt-4 w-full  sticky top-0 ">
                    <div className=" padding w-full md:grid grid-cols-3">
                        <div className="col-span-2">
                            <p className=" mask-trigger w-fit text-5xl md:text-7xl uppercase leading-none  font-semibold ">
                                What <br />they <span className='text-[#eb5939]'> say</span>
                            </p>
                        </div>
                        <div className="h-full flex items-end md:pr-36">
                            <p className=' mask-trigger text-lg font-medium pt-3 md:pt-12 md:pl-3 leading-none'> Real feedback from the people brave enough to trust us with their visuals.</p>
                        </div>
                    </div>
                    <div className="  w-full relative mb-12">
                        <div className=" testimonials_slider translate-x-[30vw] gap-x-10 flex items-stretch    relative  mt-20">
                            {TestimonialsData.map((item, i) => (
                                <div key={i} className={`w-[95vw]!  shrink-0 text-black md:w-[40vw]! h-full  p-5 md:p-8 pt-0 bg-[#D7CAB5] rounded-lg overflow-hidden `}>
                                    <div className="">
                                        <img src={item.image} alt="" className='' />
                                    </div>
                                    <p className=' text-lg md:text-2xl leading-tight'>{item.desc}</p>
                                    <div className=" pt-4 md:pt-8">
                                        <p className='md:text-lg font-medium text-[#eb5939]'>{item.name}</p>
                                        <p className='md:text-lg opacity-50 leading-none pt-1  font-medium'>{item.post}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials