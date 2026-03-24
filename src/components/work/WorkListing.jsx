"use client";
import { useGSAP } from "@gsap/react";
import InfiniteParallax from "../effects/InfiniteParallax";
import gsap from "gsap";
import VideoPlayer from "../home/VideoPlayer";
import { useEffect, useState } from "react";

const worksData = [
    {
        id: 1,
        title: "savoy",
        year: "2015",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/67923c109ebd8d8a03e4960c_moon.jpg",
        video: "/videos/ai_contant.mp4",
        tags: ["Video Editing", "Script Writing", "Art Direction"]
    },
    {
        id: 2,
        title: "Outsider freud",
        year: "2016",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/675eb903f604a7a856c87467_taboo.webp",
        video: "/videos/ai_social.mp4",
        tags: ["Motion Design", "Storytelling"]
    },
    {
        id: 3,
        title: "Moon in the 12th House",
        year: "2017",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/67923c37a45465ae82ee3f8b_kafka.jpg",
        video: "/videos/brand_film.mp4",
        tags: ["Art Direction", "Video Editing", "Brand Film"]
    },
    {
        id: 4,
        title: "Taboo",
        year: "2018",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/67923c1fa550c616a38131b9_project.jpg",
        video: "/videos/brief.mp4",
        tags: ["Script Writing", "Storytelling"]
    },
    {
        id: 5,
        title: "Kafka's Revenge",
        year: "2019",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/67923c551123732db723b050_ana.jpg",
        video: "/videos/deliver.mp4",
        tags: ["Motion Design", "Art Direction"]
    },
    {
        id: 6,
        title: "Ana Maxim",
        year: "2020",
        img: "https://cdn.prod.website-files.com/673306db3b111afa559bc378/67923c44b96499e7828b3f02_freud.jpg",
        video: "/videos/music_vid.mp4",
        tags: ["Video Editing", "Storytelling", "Color Grading"]
    },
];

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

            <VideoPlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />

            <div className={`w-full h-full z-10 absolute top-0 left-0 gradient_bg pointer-events-none  ${isVideoOpen ? "opacity-0" : "opacity-100"} `}></div>
            <InfiniteParallax>
                <div className="w-full">
                    {worksData.map((item, i) => (
                        <div onClick={(e) => {
                            handleWork(item)
                        }} key={i} className="parallax-slide opacity-0  text-[#b7ab98] relative w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                            <div data-parallax="0.4" className="w-full top-0 left-0 z-10 flex justify-between absolute p-10 h-full">
                                <div className="h-full flex flex-col justify-between">
                                    <p className="font-medium text-2xl">{item.year}</p>
                                    <div className="">
                                        <p className="pp_neue uppercase text-xs">category</p>
                                        <h2 className="text-4xl uppercase w-[25vw] font-semibold">{item.title}</h2>
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
                                        className="pp_neue group relative text-sm uppercase   w-32 h-10 bg-transparent border-none outline-none">

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
                            <img data-parallax="0.4" className="parallax-img brightness-[10]" src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </InfiniteParallax>
        </div>
    );
}