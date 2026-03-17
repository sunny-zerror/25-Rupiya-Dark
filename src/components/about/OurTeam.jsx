"use client";
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

const Teams = [
  {
    id: 1,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 2,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 3,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 4,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },
  {
    id: 5,
    name: "Adrino",
    post: "Founder & CEO",
    img: "/images/about/teams/1.auto"
  },

]

const OurTeam = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <div className="padding grid grid-cols-3 mt-12 w-full">
        <div className="col-span-2">
          <p className="text-8xl uppercase leading-none  font-semibold ">
            Our<br /> <span className='text-[#eb5939]'>Team</span>
          </p>
        </div>
        <div className="h-full flex items-end pr-36">
          <p className='text-2xl font-medium pt-12 pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
        </div>
      </div>

      <div className="padding">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper relative cursor-grab active:cursor-grabbing mt-10"
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onSliderFirstMove={() => setIsDragging(true)}
          onTransitionEnd={() => setIsDragging(false)}
        >
          {Teams.map((team, i) => (
            <SwiperSlide key={i} className="w-[28vw]!">
              <div
                className={`aspect-3/4  w-full relative overflow-hidden transition-transform duration-300 ${isDragging ? "scale-[0.98]" : "scale-100"
                  }`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between p-10 text-white">
                  <p className="text-3xl">{team.name}</p>
                  <p className="text-xl">{team.post}</p>
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