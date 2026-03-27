"use client";
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { TestimonialsData } from '@/app/utils/TestimonialsData';

const Testimonials = () => {

    const swiperRef = useRef(null);

    const goNext = () => {
        swiperRef.current?.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <>
            <div className="line-break"></div>

            <div className="padding mt-4 w-full">
                <div className=" w-full md:grid grid-cols-3">
                    <div className="col-span-2">
                        <p className=" mask-trigger w-fit text-5xl md:text-7xl uppercase leading-none  font-semibold ">
                            What <br />they <span className='text-[#eb5939]'> say</span>
                        </p>
                    </div>
                    <div className="h-full flex items-end md:pr-36">
                        <p className=' mask-trigger text-lg font-medium pt-3 md:pt-12 md:pl-3 leading-none'> Real feedback from the people brave enough to trust us with their visuals.</p>
                    </div>
                </div>
                <div className="w-full relative">

                    <div className=" max-sm:hidden w-full h-full swiper_gradient absolute z-10 pointer-events-none "></div>

                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper   relative cursor-grab active:cursor-grabbing mt-20">

                        {TestimonialsData.map((item, i) => (
                            <SwiperSlide key={i} className={`w-[90vw]! md:w-[45vw]! pl-5 md:pl-20  border-r last:border-r-0 border-[#eb5939] pr-12`}>
                                <div className="">
                                    <img src={item.image} alt="" className='invert-75' />
                                </div>
                                <p className=' text-lg md:text-2xl leading-tight'>{item.desc}</p>
                                <div className=" pt-4 md:pt-8">
                                    <p className='md:text-lg font-medium text-[#eb5939]'>{item.name}</p>
                                    <p className='md:text-lg opacity-50 leading-none pt-1  font-medium'>{item.post}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="md:w-full absolute pointer-events-none z-10 right-0 top-[-4rem] md:top-1/2 md:-translate-y-1/2 flex gap-x-3 md:justify-between items-center">
                        <button onClick={goPrev} className=' pointer-events-auto cursor-pointer border size-10 rounded-full center hover:bg-[#eb5939] hover:text-black border-[#eb5939] transition-all duration-300'>
                            <p className='leading-0 -translate-y-[2px]'>
                                ←
                            </p>
                        </button>
                        <button onClick={goNext} className=' pointer-events-auto  cursor-pointer border size-10 rounded-full center hover:bg-[#eb5939] hover:text-black border-[#eb5939] transition-all duration-300'>
                            <p className='leading-0 -translate-y-[2px]'>
                                →
                            </p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials