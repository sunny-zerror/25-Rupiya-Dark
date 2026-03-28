"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

const SERVICES = [
    {
        id: "01",
        title: "MUSIC VIDEOS",
        class: "col-span-3",
        vid: "/videos/music_vid.mp4",
        desc: "From concept development to shoot and final delivery, we move at internet speed. High-impact visuals crafted, edited, and posted in days — not dragged out for weeks.",
        // bgColor: "#fecc33"
    },
    {
        id: "02",
        title: "BRAND FILMS",
        class: "col-span-2",
        vid: "/videos/brand_film.mp4",
        desc: "We build cinematic campaign worlds that feel premium and culturally sharp. Big-screen energy and storytelling — without the bloated production price tag.",
        // bgColor: "#21935b"
    },
    {
        id: "03",
        title: "AI CONTENT SYSTEMS",
        class: "col-span-2",
        vid: "/videos/ai_contant.mp4",
        desc: "Scalable character pipelines, visual styles, and modular creative assets. Designed to generate consistent, high-volume content without reinventing the wheel each time.",
        // bgColor: "#30a81d"
    },
    {
        id: "04",
        title: "EDITORIAL & SOCIAL CUTDOWNS",
        class: "col-span-3",
        vid: "/videos/ai_social.mp4",
        desc: "Platform-native edits tailored for every feed, format, and algorithm. Short-form versions that keep the original vibe while maximizing reach and retention.",
        // bgColor: "#fecc33"
    }
];

const Services = () => {
    return (
        <>
            <div className=" padding pt-20! md:pt-32! md:grid grid-cols-3 ">
                <div className="col-span-2">
                    <p className="  w-fit text-5xl md:text-7xl uppercase leading-none  font-semibold ">
                        Our <br /> <span className='text-[#eb5939]'>Services</span>
                    </p>
                </div>
                <div className="md:h-full flex items-end md:pr-36">
                    <p className='  text-lg font-medium pt-2 md:pt-12 md:pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
                </div>
            </div>
            <div className="w-full space-y-6 md:space-y-0 md:grid grid-cols-5 gap-5 padding max-sm:hidden">
                {SERVICES.map((service, index) => {

                    return (
                        <div
                            key={index}
                            className={`group cursor-pointer relative overflow-hidden rounded-xl ${service.class} `}
                        >
                            <div
                                style={{ backgroundColor: service.bgColor }}
                                className="w-full aspect-video md:h-[25vw] group-hover:brightness-[.4]  overflow-hidden transition-all duration-300"
                            >
                                {service.vid && (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="cover"
                                        src={service.vid}
                                    />
                                )}
                            </div>
                            <div className=" absolute bottom-[-5rem] w-full  text-black group-hover:bottom-0 z-10  p-5 bg-[#eb5939] transition-all duration-300">
                                {/* <p className="font-thin uppercase pp_neue  mb-1  md:mb-2"></p> */}
                                <p className="uppercase font-medium text-2xl mb-1  md:mb-2">
                                  {service.title}
                                </p>
                                <p className={`leading-tight w-[35rem]`}>{service.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={15}
                className=" md:hidden! pl-3! mySwiper relative  my-10">

                {SERVICES.map((service, index) => (
                    <SwiperSlide
                        key={index}
                        className={` w-[90vw]! h-full  group relative overflow-hidden rounded-xl ${service.class} `}
                    >
                        <div
                            style={{ backgroundColor: service.bgColor }}
                            className="w-full aspect-video md:h-[25vw] md:group-hover:brightness-[.4]  overflow-hidden transition-all duration-300"
                        >
                            {service.vid && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="cover"
                                    src={service.vid}
                                />
                            )}
                        </div>
                        <div className=" md:hidden  w-full   text-black  z-10  p-3 bg-[#d7cab5] transition-all duration-300">
                            <p className="uppercase font-medium text-xl md:text-2xl mb-1  md:mb-2">
                                {service.title}
                            </p>
                            <p className=" text-sm md:text-base leading-tight">{service.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

export default Services