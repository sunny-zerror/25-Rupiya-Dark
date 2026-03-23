"use client";
import { works } from "@/app/utils/WorksData";
import { useGSAP } from "@gsap/react";
import { RiCloseLine, RiExpandUpDownFill } from "@remixicon/react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(Flip, ScrollTrigger);

const categories = [
    "All",
    "Ai video",
    "Ai movie",
    "video editing",
    "video production",
    "music videos"
]

const FeaturedWork = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState()
    const originalParent = useRef(null);
    const activeEl = useRef(null);
    const [activeWork, setActiveWork] = useState(null);
    const modalRef = useRef(null);
    const container = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredWorks = works.filter(el => el.category === selectedCategory || selectedCategory === "All")

    const handleWork = (work) => {
        setSelectedWork(work)
        setIsVideoOpen(true)
    }

    useEffect(() => {
        if (isVideoOpen === false) {
            setSelectedWork(null)
        }
    }, [isVideoOpen])

    useEffect(() => {
        if (window.lenis) {
            if (isVideoOpen) {
                window.lenis.stop();
            } else {
                window.lenis.start();
            }
        }
    }, [isVideoOpen])

    useGSAP(() => {
        const source = container.current.querySelector(".intro-platform-images");
        const target = container.current.querySelector(".platform-images");

        const images = Array.from(
            container.current.querySelectorAll(".intro-platform-image")
        );

        ScrollTrigger.create({
            trigger: container.current.querySelector(".platform_images_paren"),
            start: "top 70%",

            onEnter: () => {
                images.forEach(el => el.getBoundingClientRect());

                const state = Flip.getState(images);

                images.forEach(el => target.appendChild(el));

                Flip.from(state, {
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.08,
                    borderRadius: 0,
                    absolute: true,
                    simple: true,
                });
            },

            onLeaveBack: () => {
                images.forEach(el => el.getBoundingClientRect());

                const state = Flip.getState(images);

                images.forEach(el => source.appendChild(el));

                Flip.from(state, {
                    duration: 1.2,
                    ease: "power2.inOut",
                    stagger: 0.08,
                    borderRadius: "1rem",
                    absolute: true,
                    simple: true,
                });
            },
        });
    }, { scope: container });


    return (
        <div ref={container} className=" relative w-full">

            <VideoPlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />
            {/* <div className={`w-full h-full z-10 absolute top-0 left-0 gradient_bg pointer-events-none  ${isVideoOpen ? "opacity-0" : "opacity-100"} `}></div> */}

            <div className="intro-platform-images relative w-full h-[30vh] my-20">
                {works.slice(0, 4).map((item, i) => (
                    <div onClick={(e) => {
                        handleWork(item)
                    }} key={i} className={`intro-platform-image aspect-video group intro-platform-image-${i + 1} ${selectedCategory === "All" || selectedCategory === item.category ? "opacity-100 grayscale-0 blur-none pointer-events-auto" : "opacity-30 blur-[1px] grayscale-100 pointer-events-none"} hover:p-2  transition-[opacity,filter,padding] duration-300`}>
                        <img className="cover" src={item.img} />
                    </div>
                ))}
            </div>

            <div className="platform_images_paren w-full center">
                <div className="w-[80%]  bg-[#0d0d0d] border border-[#eb5939] rounded-2xl overflow-hidden ">
                    <div className="p-5">
                        <div className="w-full group flex gap-x-3">
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F85656]">
                                <RiCloseLine className=" group-hover:opacity-100 opacity-0 transition-all duration-150   " />
                            </div>
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F9BC4A]">
                                <span className=" group-hover:opacity-100 opacity-0 transition-all duration-150   -translate-y-[0.05rem] translate-x-[0.025rem]">-</span>
                            </div>
                            <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#39C951]">
                                <RiExpandUpDownFill className=" group-hover:opacity-100 opacity-0 transition-all duration-150   rotate-45" />
                            </div>

                        </div>
                        <div className="flex w-full py-6  gap-x-10">
                            <p className=" font-medium uppercase flex items-center gap-x-4 text-xl leading-none">Our Works</p>
                            {/* <div className=" border-b pb-1 border-black/30 flex items-center justify-between w-[20vw]">
                                <p className="opacity-90 text-sm leading-none">Explore More Work</p>
                                <div className="bg-[#E9E9E9]  px-3 py-1.5  rounded-full center">
                                    <p className="uppercase tracking-wide leading-none translate-y-[.5px]  text-[.5rem] font-thin pp_neue">
                                        ⌘/
                                    </p>
                                </div>
                            </div> */}
                            <div className=" flex  flex-wrap  gap-x-2">
                                {categories.map((item, i) => (
                                    <div onClick={() => setSelectedCategory(item)} key={i} className={`px-3 py-1  pp_neue text-xs rounded-full  ${selectedCategory === item ? "bg-[#b7ab98] text-[#0d0d0d] border border-transparent" : "bg-[#0d0d0d] border border-[#eb5939]"} transition-all duration-300  `}>
                                        <button className="capitalize">{item}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="uppercase text-xs pp_neue leading-none">Showing {filteredWorks.length} of  {works.length} works</p>
                    </div>

                    <div className="w-full grid  grid-cols-7 ">
                        <div className="platform-images w-full grid grid-cols-5 grid-rows-2 row-span-2 col-span-5"></div>
                        {works.slice(4).map((item, i) => (
                            <div
                                key={i}
                                onClick={(e) => {
                                    handleWork(item)
                                }}
                                className={` work w-full aspect-video group cursor-pointer overflow-hidden hover:p-2 ${selectedCategory === "All" || selectedCategory === item.category ? "opacity-100 grayscale-0 blur-none pointer-events-auto" : "opacity-30 blur-[1px] grayscale-100 pointer-events-none"}  transition-[opacity,filter,padding] duration-300  `}
                                style={{
                                    gridColumn: `${item.colStart} / span ${item.colSpan || 1}`,
                                    gridRow: `${item.rowStart} / span ${item.rowSpan || 1}`,
                                }}
                            >
                                <img src={item.img} className="w-full h-full object-cover " />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedWork