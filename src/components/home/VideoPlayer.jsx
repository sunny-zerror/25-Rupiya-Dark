"use client";

import { RiFullscreenLine, RiPauseLine, RiPlayLine, RiVolumeMuteLine, RiVolumeUpLine } from "@remixicon/react";
import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const playerRef = useRef(null);

    const rafRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    const [showCenterBtn, setShowCenterBtn] = useState(true);
const hideTimeoutRef = useRef(null);

const startHideTimer = () => {
  clearTimeout(hideTimeoutRef.current);

  hideTimeoutRef.current = setTimeout(() => {
    setShowCenterBtn(false);
  }, 300);
};

    // ✅ smooth progress loop
    const updateProgress = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;

        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);

        rafRef.current = requestAnimationFrame(updateProgress);
    };

const togglePlay = () => {
  const video = videoRef.current;
  if (!video) return;

  if (video.paused) {
    video.play();
    setIsPlaying(true);
    setShowCenterBtn(true);
    startHideTimer();
  } else {
    video.pause();
    setIsPlaying(false);
    setShowCenterBtn(true); // keep visible on pause
  }
};

    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const handleLoaded = () => {
        setDuration(videoRef.current.duration);
    };

    // ✅ click seek
    const handleSeek = (e) => {
        const rect = progressRef.current.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        videoRef.current.currentTime = percent * duration;
    };

    // ✅ drag seek
    const handleDrag = (e) => {
        const rect = progressRef.current.getBoundingClientRect();
        const percent = Math.min(
            Math.max((e.clientX - rect.left) / rect.width, 0),
            1
        );
        videoRef.current.currentTime = percent * duration;
    };

    const handleMouseDown = () => {
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", handleDrag);
        }, { once: true });
    };

    // ✅ fullscreen
    const handleFullscreen = () => {
        const player = playerRef.current;

        if (!document.fullscreenElement) {
            player.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const currentTime =
        duration ? (progress / 100) * duration : 0;

    useEffect(() => {
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    useEffect(() => {
  const handleMouseMove = () => {
    setShowCenterBtn(true);

    if (isPlaying) {
      startHideTimer();
    }
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    clearTimeout(hideTimeoutRef.current);
  };
}, [isPlaying]);

    return (
        <div className="w-full h-screen relative center overflow-hidden mb-20">
            <div ref={playerRef} className="w-full">

                <video
                    ref={videoRef}
                    src="/videos/produce.mp4"
                    className="w-full"
                    onLoadedMetadata={handleLoaded}
                />

                 <button
  onClick={togglePlay}
  className={`center bg-black p-5 rounded-full absolute top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 z-10 
  transition-opacity duration-300
  ${showCenterBtn ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>
  {isPlaying ? <RiPauseLine /> : <RiPlayLine />}
</button>

                {/* Controls */}
                <div className="  absolute bottom-2 left-0 w-full text-white px-10 space-y-3">

                    {/* Progress */}
                    <div
                        ref={progressRef}
                        onClick={handleSeek}
                        onMouseDown={handleMouseDown}
                        className="w-full h-2 bg-gray-700 rounded-full cursor-pointer relative"
                    >
                        <div
                            className="h-full bg-red-600 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-between">

                        <div className="flex gap-4 items-center">
                            <span>
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>
                        <div className="flex gap-x-5">
                            <button onClick={toggleMute}>
                                {isMuted ? <RiVolumeUpLine /> : <RiVolumeMuteLine />}
                            </button>
                            <button onClick={handleFullscreen}>
                                <RiFullscreenLine />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;