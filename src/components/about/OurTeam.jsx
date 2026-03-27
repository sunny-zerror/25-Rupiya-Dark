"use client";
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { Teams } from '@/app/utils/OurTeamsData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const [isDragging, setIsDragging] = useState(false);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team_paren",
        start: "top center",
        toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true
      }
    });

    tl.from(".team_crd", {
      xPercent: 100,
      stagger: 0.1,
      opacity: 0
    })
  })
  return (
    <>
      <div className="padding md:grid grid-cols-3 mt-12 w-full">
        <div className="col-span-2">
          <p className="text-5xl md:text-7xl w-fit mask-trigger uppercase leading-none  font-semibold ">
            Our<br /> <span className='text-[#eb5939]'>Team</span>
          </p>
        </div>
        <div className="h-full flex items-end md:pr-36">
          <p className='text-lg mask-trigger font-medium pt-3 md:pt-12 md:pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
        </div>
      </div>

      <div className="padding team_paren">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          className="mySwiper relative cursor-grab active:cursor-grabbing md:mt-10"
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onSliderFirstMove={() => setIsDragging(true)}
          onTransitionEnd={() => setIsDragging(false)}
        >
          {Teams.map((team, i) => (
            <SwiperSlide key={i} className=" team_crd w-[70vw]! md:w-[28vw]!">
              <div
                className={`aspect-3/4  w-full relative overflow-hidden transition-transform duration-300 ${isDragging ? "scale-[0.98]" : "scale-100"
                  }`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
                  <p className="text-2xl">{team.name}</p>
                  <p className="">{team.post}</p>
                </div>

                {team.img && (
                  <img
                    src={team.img}
                    alt=""
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-300 object-cover ${isDragging ? "scale-[1.02]" : "scale-100"
                      }`}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  )
}

export default OurTeam