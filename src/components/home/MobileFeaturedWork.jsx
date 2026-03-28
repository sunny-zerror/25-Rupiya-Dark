"use client";
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

const works = [

    { category: "Ai video", video: "/videos/vid_1.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif", colStart: 1, rowStart: 1, colSpan: 2, rowSpan: 2 },
    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif", colStart: 3, rowStart: 1 },
    { category: "video editing", video: "/videos/vid_1.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif", colStart: 3, rowStart: 2 },

    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif", colStart: 1, rowStart: 3 },
    { category: "Ai movie", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd116_knight-10.avif", colStart: 1, rowStart: 4 },
    { category: "music videos", video: "/videos/vid_1.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd112_knight-5.avif", colStart: 2, rowStart: 3, colSpan: 2, rowSpan: 2 },

    { category: "Ai video", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15c_knight-7.avif", colStart: 1, rowStart: 5, colSpan: 2, rowSpan: 2 },
    { category: "video production", video: "/videos/vid_2.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd117_knight-9.avif",colStart: 3, rowStart: 5},
    { category: "video editing", video: "/videos/vid_1.mp4", img: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd114_knight-2.avif", colStart: 3, rowStart: 6},
];

const MobileFeaturedWork = () => {

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
    return (
        <div className="md:hidden">
            <VideoPlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />

            <div className=" w-full center mt-20">
                <div className=" w-[95%] md:w-[80%]  bg-[#0d0d0d] border border-[#eb5939] rounded-lg md:rounded-2xl overflow-hidden ">
                    <div className="  p-3 md:p-5">
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
                        <div className="md:flex w-full py-6  gap-x-10">
                            <p className=" font-medium uppercase flex items-center gap-x-4 text-lg leading-none">Our Works</p>
                            {/* <div className=" border-b pb-1 border-black/30 flex items-center justify-between w-[20vw]">
                                <p className="opacity-90 text-sm leading-none">Explore More Work</p>
                                <div className="bg-[#E9E9E9]  px-3 py-1.5  rounded-full center">
                                    <p className="uppercase tracking-wide leading-none translate-y-[.5px]  text-[.5rem] font-thin pp_neue">
                                        ⌘/
                                    </p>
                                </div>
                            </div> */}
                            <div className=" mt-5 md:mt-0 flex  flex-wrap  gap-2">
                                {categories.map((item, i) => (
                                    <div onClick={() => setSelectedCategory(item)} key={i} className={`px-3 py-1  pp_neue text-xs rounded-full  ${selectedCategory === item ? "bg-[#D7CAB5] text-[#0d0d0d] border border-transparent" : "bg-[#0d0d0d] border border-[#eb5939]"} transition-all duration-300  `}>
                                        <button className="capitalize">{item}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="uppercase text-xs pp_neue leading-none">Showing {filteredWorks.length} of  {works.length} works</p>
                    </div>

                    <div className="w-full grid  grid-cols-3 ">
                        {works.map((item, i) => (
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

    )
}

export default MobileFeaturedWork