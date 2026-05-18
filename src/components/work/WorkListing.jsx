"use client";
import { useGSAP } from "@gsap/react";
import InfiniteParallax from "../effects/InfiniteParallax";
import gsap from "gsap";
import { useEffect, useState } from "react";
import YoutubePlayer from "../common/YoutubePlayer";
import { works } from "@/app/utils/WorksData";
import Image from "next/image";

export default function WorkListing() {

    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState()

    useGSAP(() => {
        gsap.to(".parallax-slide", { opacity: 1, duration: .2, delay: .2, ease: "linear" });
        gsap.to(".parallax-img", { filter: "brightness(1)", duration: 1, ease: "linear", delay: .4 });
    })

    const handleWork = (work) => {
        setSelectedWork(work)
        setIsVideoOpen(true)
    }
    useEffect(() => {
        if (isVideoOpen === false) {
            setSelectedWork(null)
        }
    }, [isVideoOpen])


    return (
        <div className=" relative w-full h-screen center bg-[#0d0d0d]">

            <YoutubePlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />

            <div className={`w-full h-full z-10 absolute top-0 left-0 gradient_bg pointer-events-none  ${isVideoOpen ? "opacity-0" : "opacity-100"} `}></div>
            <InfiniteParallax>
                <div className="w-full">
                    {works.map((item, i) => (
                        <div onClick={(e) => {
                            handleWork(item)
                        }} key={i} className="parallax-slide opacity-0  text-[#D7CAB5] relative w-[95vw] md:w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-xl md:rounded-4xl  select-none">
                            <div data-parallax="0.4" className="w-full top-0 left-0 z-10 flex justify-between absolute p-5 md:p-10 h-full">
                                <div className="h-full flex flex-col justify-between">
                                    <p className="font-medium text-2xl">{item.year}</p>
                                    <div className="">
                                        <p className="pp_neue uppercase text-xs">{item.category}</p>
                                        <h2 className="text-3xl md:text-4xl uppercase w-[25vw] font-semibold">{item.title}</h2>
                                    </div>
                                </div>
                                <div className="h-full flex flex-col justify-between">
                                    <div className="pp_neue uppercase">
                                        {item.tags.map((tag, i) => (
                                            <div key={i} className="tag overflow-hidden">
                                                <span className="block text-sm">{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={(e) => {
                                        handleWork(item)
                                    }}
                                        className="pp_neue group relative text-sm uppercase   w-32 h-10 bg-transparent border-none outline-none cursor-pointer ">

                                        <div className="w-full relative z-10 flex items-center">
                                            <div className="w-[70%]">
                                                <p>Explore</p>
                                            </div>

                                            <div className="w-[30%] center">
                                                <div className="w-4">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 11 10"
                                                        className="arrow-r"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M4.481.005a6.65 6.65 0 0 1 6.46 4.659c.078.229.08.479-.003.706C10.302 7.105 8.318 10 4.48 10V8.39c.941.127 2.922-.257 4.442-2.603H0V4.208h8.938c-.756-1.229-2.216-2.78-4.457-2.78V.006Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 142 44"
                                                width="100%"
                                                height="100%"
                                            >
                                                <path
                                                    stroke="white"
                                                    fill="transparent"
                                                    className="   group-hover:fill-black transition-all duration-300"
                                                    d="M5 1h90c0 1 .6 3 3 3s3-2 3-3h36c0 3.2 2.667 4.144 4 4.216V39c-3.2 0-4 2.667-4 4h-35c0-1.333-.8-4-4-4s-4 2.667-4 4H5c0-3.6-2.667-4.167-4-4V5c3.2 0 4-2.667 4-4Z"
                                                />
                                                <path
                                                    stroke="currentColor"
                                                    d="M98 4.5v34"
                                                    strokeDasharray="4"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div data-parallax="0.4" className="parallax-img brightness-[10] relative">
                                <Image fill className="cover" src={item.img} alt="loading img" />
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteParallax>
        </div>
    );
}