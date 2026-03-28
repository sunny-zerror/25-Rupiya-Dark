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

            <div className=" mt-4 w-full">
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
                <div className="w-full relative mb-12">

                    <div className=" max-sm:hidden w-full h-full swiper_gradient absolute z-10 pointer-events-none "></div>

                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={15}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper flex items-stretch   relative  mt-20">

                        {TestimonialsData.map((item, i) => (
                            <SwiperSlide key={i} className={`w-[95vw]!  text-black md:w-[40vw]! h-full  p-5 md:p-8 pt-0 bg-[#D7CAB5] rounded-lg overflow-hidden `}>
                                <div className="">
                                    <img src={item.image} alt="" className='' />
                                </div>
                                <p className=' text-lg md:text-2xl leading-tight'>{item.desc}</p>
                                <div className=" pt-4 md:pt-8">
                                    <p className='md:text-lg font-medium text-[#eb5939]'>{item.name}</p>
                                    <p className='md:text-lg opacity-50 leading-none pt-1  font-medium'>{item.post}</p>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="md:w-full px-3 md:px-6 absolute pointer-events-none z-10 right-0 top-[-4rem] md:top-1/2 md:-translate-y-1/2 flex gap-x-1 md:justify-between items-center">
                        <button onClick={goPrev} className=' pointer-events-auto cursor-pointer border size-10 rounded-full center bg-[#eb5939] text-black hover:scale-[.8] transition-all duration-300'>
                            <p className='leading-0 -translate-y-[2px]'>
                                ←
                            </p>
                        </button>
                        <button onClick={goNext} className=' pointer-events-auto  cursor-pointer border size-10 rounded-full center bg-[#eb5939] text-black hover:scale-[.8] transition-all duration-300'>
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