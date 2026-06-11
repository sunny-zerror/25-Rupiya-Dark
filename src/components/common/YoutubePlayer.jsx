"use client";

import { RiCloseLine } from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";

const YoutubePlayer = ({ isVideoOpen, work, setIsVideoOpen }) => {
    const playerRef = useRef(null);

    const [openDesc, setOpenDesc] = useState(false);

    useEffect(() => {
        if (window.lenis) {
            if (isVideoOpen) {
                window.lenis.stop();
            } else {
                window.lenis.start();
            }
        }
    }, [isVideoOpen]);

    useEffect(() => {
        if (!isVideoOpen) {
            setOpenDesc(false);
        }
    }, [isVideoOpen]);

    return (
        <div
            ref={playerRef}
            className={`w-full h-screen center bg-[#0d0d0d] overflow-hidden fixed top-0 left-0 z-[9999] md:z-[10000] transition-all duration-300 ${
                isVideoOpen
                    ? "opacity-100 pointer-events-auto visible"
                    : "opacity-0 pointer-events-none invisible"
            }`}
        >
            {/* <div
                onClick={() => setOpenDesc(false)}
                className={`w-full h-full absolute top-0 left-0 bg-black/40 backdrop-blur-sm z-10 transition-all duration-300 ${
                    openDesc
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            /> */}

            <div className="w-full z-20 cursor-auto! absolute top-0 space-y-5 p-5 px-2 md:px-10 ">
                <div className="w-full flex items-center max-sm:text-sm justify-end">
                    {/* <div
                        onClick={() => setOpenDesc(!openDesc)}
                        className=" pointer-events-auto cursor-pointer! h-12 md:h-14 p-5 w-44 justify-between flex items-center gap-5 bg-[#D7CAB5] text-black rounded-lg md:rounded-2xl"
                    >
                        <p className="uppercase">
                            Read {openDesc ? "Less" : "More"}
                        </p>

                        <RiCloseLine
                            size={18}
                            className={`${
                                openDesc ? "rotate-0" : "rotate-45"
                            } transition-all duration-300`}
                        />
                    </div> */}

                    <div
                        onClick={() => {
                            setOpenDesc(false);
                            setIsVideoOpen(false);
                        }}
                        className="h-12 md:h-14 cursor-pointer! p-3 md:p-5 w-fit pointer-events-auto cursor-pointer flex items-center gap-5 bg-[#D7CAB5] text-black justify-between rounded-lg md:rounded-2xl"
                    >
                        <RiCloseLine />
                    </div>
                </div>
{/* 
                <div
                    className={`w-full md:w-1/2 ${
                        openDesc
                            ? "h-[40vh] md:h-[50vh] py-4 md:py-8"
                            : "h-0 py-0"
                    } px-4 md:px-8 transition-all duration-300 ${
                        openDesc ? "opacity-100" : "opacity-0"
                    } overflow-hidden bg-[#D7CAB5] text-black space-y-10 rounded-lg md:rounded-2xl`}
                >
                    <p className="md:text-lg leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse ipsum minima exercitationem repudiandae tempora sed
                        rem recusandae maxime pariatur deserunt, quaerat quas
                        suscipit, autem est obcaecati optio, accusantium iste!
                        Sapiente.
                    </p>

                    <div className="grid grid-cols-2 items-end">
                        <div>
                            <p className="uppercase font-semibold text-sm mb-2">
                                Skills
                            </p>

                            <p>Video Editing</p>
                            <p>Animation</p>
                            <p>Motion Graphics</p>
                            <p>Storyboarding</p>
                            <p>Cinematic Editing</p>
                        </div>

                        <div>
                            <p className="uppercase font-semibold text-sm mb-2">
                                Category
                            </p>

                            <p>Mythology</p>
                            <p>Devotional</p>
                            <p>Music Video</p>
                            <p>3D Animation</p>
                            <p>Visual Effects</p>
                        </div>
                    </div>
                </div> */}
            </div>

            <iframe
                src={work?.video}
                title={work?.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={`w-full h-full `}
            />
        </div>
    );
};

export default YoutubePlayer;