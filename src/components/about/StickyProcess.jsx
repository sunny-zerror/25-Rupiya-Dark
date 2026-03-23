"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const process = [
    {
        title: "BRIEF",
        vid: "/videos/brief.mp4",
        desc: "You share the story, references, and deadline. We understand the vision, tone, and platform goals before moving into concept development."
    },
    {
        title: "CONCEPT",
        vid: "/videos/concept.mp4",
        desc: "We craft moodboards, visual directions, and storyboards while building the AI pipeline that will drive the production process."
    },
    {
        title: "PRODUCE",
        vid: "/videos/produce.mp4",
        desc: "Shoot, generate, and composite visuals with rapid iterations. A hybrid workflow combining real production and AI to move fast."
    },
    {
        title: "DELIVER",
        vid: "/videos/deliver.mp4",
        desc: "Final cut, platform-ready exports, and reusable assets delivered. Optimized for multiple formats so your content keeps working everywhere."
    }
];

const StickyProcess = () => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const [currentVid, setCurrentVid] = useState("/videos/process.mp4");

    useGSAP(() => {
        const slides = gsap.utils.toArray(".serv_slide");

        slides.forEach((slide, i) => {
            ScrollTrigger.create({
                trigger: slide,
                start: "top center",
                end: "bottom center",
                onEnter: () => changeImage(i),
                onEnterBack: () => changeImage(i),
            });
        });

        function changeImage(index) {
            const video = videoRef.current;
            if (!video) return;

            const tl = gsap.timeline();

            tl.to(video, {
                filter: "blur(20px)",
                opacity: 0,
                duration: 0.2,
                ease: "power2.out"
            })
                .call(() => {
                    setCurrentVid(process[index].vid);
                })
                .to(video, {
                    filter: "blur(0px)",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
        }

    });

    return (
        <div ref={wrapperRef} className="w-full h-[calc(100vh+103vw+10rem)] flex">

            {/* LEFT (Sticky) */}
            <div className="w-1/2 sticky top-0 h-screen bg-pattern bg-[#eb5939]! flex items-center justify-center">
                <div className="w-[88%] aspect-square overflow-hidden flex items-center justify-center rounded-full  bg-[#0d0d0d]">
                    <video
                        loop autoPlay muted playsInline
                        ref={videoRef}
                        className="cover"
                        src={currentVid}
                        alt=""
                    />
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 px-20  ">

                <div className="h-screen space-y-10 flex flex-col justify-center">
                    <p className="text-8xl uppercase font-semibold leading-none">
                        Why <br /> <span className="text-[#eb5939]">Choose</span> <br />Us
                    </p>
                    <p className="text-xl w-[80%] ">
                        From concept to final cut—AI-assisted storytelling that scales.
                        Fast turnarounds, cinematic finish.
                    </p>
                </div>

                {process.map((service, i) => (
                    <div
                        key={i}
                        className="serv_slide h-[25vw] flex flex-col justify-center  space-y-5 "
                    >
                        <p className="font-thin uppercase pp_neue text-sm">Step {i + 1}</p>
                        <p className="text-5xl text-[#eb5939] leading-none font-medium">
                            {service.title}
                        </p>
                        <p className="text-xl  leading-tight ">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickyProcess;