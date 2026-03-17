"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { TestimonialsData } from '@/app/utils/TestimonialsData';

const Testimonials = () => {
    return (
        <>
            <div className="line-break"></div>

            <div className="padding mt-4 w-full">
                <div className=" w-full grid grid-cols-3">
                    <div className="col-span-2">
                        <p className=" mask-trigger w-fit text-8xl uppercase leading-none  font-semibold ">
                             What <br />they <span className='text-[#eb5939]'> say</span>
                        </p>
                    </div>
                    <div className="h-full flex items-end pr-36">
                        <p className=' mask-trigger text-2xl font-medium pt-12 pl-3 leading-none'> Real feedback from the people brave enough to trust us with their visuals.</p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={200}
                    className="mySwiper   relative cursor-grab active:cursor-grabbing mt-20">

                    {TestimonialsData.map((item, i) => (
                        <SwiperSlide key={i} className='w-[90vw]! md:w-[40vw]!'>
                            <div className="">
                                <img src={item.image} alt="" className='invert-75' />
                            </div>
                            <p className='text-3xl'>{item.desc}</p>
                            <div className=" pt-8">
                                <p className='text-xl font-medium'>{item.name}</p>
                                <p className='text-xl opacity-50  font-medium'>{item.post}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </>
    )
}

export default Testimonials