"use client";

import {
    RiCloseLine,
    RiFullscreenLine,
    RiPauseLine,
    RiPlayLine,
    RiVolumeMuteLine,
    RiVolumeUpLine,
} from "@remixicon/react";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ isVideoOpen, work, setIsVideoOpen }) => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const playerRef = useRef(null);
    const rafRef = useRef(null);

    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const [openDesc, setOpenDesc] = useState(false)

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [time, setTime] = useState({
        current: 0,
        duration: 0,
    });

    const updateProgress = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;

        setProgress((video.currentTime / video.duration) * 100);
        setTime({
            current: video.currentTime,
            duration: video.duration,
        });

        rafRef.current = requestAnimationFrame(updateProgress);
    };

    const play = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            await video.play();
            setIsPlaying(true);
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateProgress);
        } catch (error) {
            console.error("Video play failed:", error);
        }
    };

    const pause = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        setIsPlaying(false);
        cancelAnimationFrame(rafRef.current);
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            play();
        } else {
            pause();
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const seekToClientX = (clientX) => {
        const video = videoRef.current;
        const progressBar = progressRef.current;

        if (!video || !progressBar || !video.duration) return;

        const rect = progressBar.getBoundingClientRect();
        const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);

        video.currentTime = percent * video.duration;
        setProgress(percent * 100);
        setTime({
            current: video.currentTime,
            duration: video.duration,
        });
    };

    const handleSeekClick = (e) => {
        seekToClientX(e.clientX);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();

        const video = videoRef.current;
        if (!video) return;

        const wasPlaying = !video.paused;
        cancelAnimationFrame(rafRef.current);

        seekToClientX(e.clientX);

        const move = (ev) => {
            seekToClientX(ev.clientX);
        };

        const up = () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);

            if (wasPlaying) {
                rafRef.current = requestAnimationFrame(updateProgress);
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    };

    const handleFullscreen = () => {
        const player = playerRef.current;
        if (!player) return;

        if (!document.fullscreenElement) {
            player.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    const format = (seconds) => {
        if (!Number.isFinite(seconds)) return "0:00";

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onLoadedMetadata = () => {
            setTime({
                current: video.currentTime || 0,
                duration: video.duration || 0,
            });
        };

        const onTimeUpdate = () => {
            setTime({
                current: video.currentTime || 0,
                duration: video.duration || 0,
            });

            if (video.duration) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onVolumeChange = () => setIsMuted(video.muted);
        const onEnded = () => {
            setIsPlaying(false);
            cancelAnimationFrame(rafRef.current);
        };

        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("timeupdate", onTimeUpdate);
        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);
        video.addEventListener("volumechange", onVolumeChange);
        video.addEventListener("ended", onEnded);

        return () => {
            video.removeEventListener("loadedmetadata", onLoadedMetadata);
            video.removeEventListener("timeupdate", onTimeUpdate);
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
            video.removeEventListener("volumechange", onVolumeChange);
            video.removeEventListener("ended", onEnded);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);


    return (
        <div ref={playerRef} className={`w-full h-screen center bg-[#0d0d0d] overflow-hidden fixed top-0 left-0 z-100 transition-all duration-300 ${isVideoOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}  `}>

            <div onClick={(() => setOpenDesc(false))} className={` w-full h-full absolute top-0 left-0 bg-black/40 backdrop-blur-sm z-10 transition-all duration-300 ${openDesc ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}></div>

            <div className=" w-full  z-10 absolute top-0 space-y-5 p-5 px-10 pointer-events-none">
                <div className="w-full flex items-center justify-between">
                    <div onClick={() => setOpenDesc(!openDesc)} className="  cursor-pointer pointer-events-auto h-14 p-5 w-44 justify-between  flex items-center gap-5 bg-[#b7ab98] text-black  rounded-2xl ">
                        <p className="uppercase">Read {openDesc ? "Less" : "More"}  </p>
                        <RiCloseLine size={18} className={`${openDesc ? "rotate-0" : "rotate-45"} transition-all duration-300`} />
                    </div>
                    <div onClick={(() => { setIsVideoOpen(false), setIsVideoLoaded(false) })} className="  h-14 p-5 w-fit pointer-events-auto cursor-pointer  flex items-center gap-5 bg-[#b7ab98] text-black  justify-between rounded-2xl">
                        <RiCloseLine />
                    </div>
                </div>
                <div className={`w-1/2 ${openDesc ? "h-[50vh] py-8" : "h-0 py-0"} px-8 transition-all duration-300 ${openDesc ? "opacity-100" : "opacity-0"}  overflow-hidden  bg-[#b7ab98] text-black  space-y-10 rounded-2xl`}>
                    <p className="text-xl leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum minima exercitationem repudiandae tempora sed rem recusandae maxime pariatur deserunt, quaerat quas suscipit, autem est obcaecati optio, accusantium iste! Sapiente.</p>
                    <div className="  grid grid-cols-2  items-end">
                        <div className="">
                            <p className="uppercase font-semibold text-sm mb-2">Skills</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                        </div>
                        <div className="">
                            <p className="uppercase font-semibold text-sm mb-2">Skills</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                            <p>Video Editing</p>
                        </div>
                    </div>
                </div>
            </div>

            {!isVideoLoaded && (
                <div className="w-full video_skeleton absolute h-screen top-0 left-0 pointer-events-none z-10 bg-black"></div>
            )}

            <video
                ref={videoRef}
                src={work?.video}
                className={`w-full transition-all duration-300  ${isVideoLoaded ? "opacity-100" : "opacity-0"}   `}
                preload="metadata"
                onLoadedData={() => {
                    setTimeout(() => {
                        setIsVideoLoaded(true)
                    }, 500)
                }} />

            <div className="absolute bottom-4 left-0 w-full center">
                <div className="flex items-center gap-5 text-white backdrop-blur-xl px-5 py-3 rounded-xl w-[80%]">
                    <button onClick={togglePlay} className="hover:scale-110 transition-all duration-150" >
                        {isPlaying ? <RiPauseLine size={26} /> : <RiPlayLine size={26} />}
                    </button>

                    <button onClick={toggleMute} className="hover:scale-110 transition-all duration-150" >
                        {isMuted ? <RiVolumeMuteLine size={24} /> : <RiVolumeUpLine size={24} />}
                    </button>

                    <div
                        ref={progressRef}
                        onClick={handleSeekClick}
                        onMouseDown={handleMouseDown}
                        className="w-full h-2 bg-[#2e2e2e] rounded-full cursor-pointer relative overflow-hidden"
                    >
                        <div
                            className="h-full bg-[#eb5939] rounded-full pointer-events-none"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <span className="whitespace-nowrap">
                        {format(time.current)} / {format(time.duration)}
                    </span>

                    <button onClick={handleFullscreen} className="hover:scale-110 transition-all duration-150" >
                        <RiFullscreenLine size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;