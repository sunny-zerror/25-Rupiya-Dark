"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import React, { useEffect, useRef, useState } from 'react'
import VideoPlayer from './VideoPlayer';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HERO_GROUPS = [
    {
        term: "Knight on a Horse",
        images: [
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd116_knight-10.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd112_knight-5.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15c_knight-7.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd117_knight-9.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd114_knight-2.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd156_knight-4.avif",
        ],
    },
    {
        term: "Reflections on the Water",
        images: [
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15d_water-1.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd159_water-8.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15e_water-6.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd115_water-3.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd158_water-10.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11b_water-5.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11c_water-7.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11a_water-9.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd118_water-2.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd119_water-4.avif",
        ],
    },
    {
        term: "Black and white film",
        images: [
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd175_film-1.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd13a_film-8.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd174_film-6.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd137_film-3.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd162_film-10.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd161_film-5.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd139_film-7.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd138_film-9.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd135_film-2.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd136_film-4.avif",
        ],
    },
    {
        term: "Quiet moments",
        images: [
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd160_quiet-1.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd133_quiet-8.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd132_quiet-6.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11f_quiet-3.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15f_quiet-10.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11d_quiet-5.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd131_quiet-7.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd134_quiet-9.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd11e_quiet-2.avif",
            "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd120_quiet-4.avif",
        ],
    },
];

const promptWork = [
    {
        id: 1,
        title: "Generate a video for Rafi 100 Concert by Sonu Nigam.",
        video: "/videos/showreel_compress.mp4",
    },
    {
        id: 2,
        title: "Generate a short video of Haunted Tales.",
        video: "/videos/showreel_compress.mp4",
    },
    {
        id: 3,
        title: "An episode of born of vishnulok.",
        video: "/videos/showreel_compress.mp4",
    },
    {
        id: 4,
        title: "A short movie of ramayan named as ramleela.",
        video: "/videos/showreel_compress.mp4",
    },
    {
        id: 5,
        title: "Generate a short video against war of Kaju katli and soan papdi.",
        video: "/videos/showreel_compress.mp4",
    },
]

const Hero = () => {

    const root = useRef(null);
    const cycleTL = useRef(null);
    const intervalRef = useRef(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState()
    const [openSearch, setOpenSearch] = useState(false)

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

    useGSAP(
        () => {
            const groups = gsap.utils.toArray(".hero-search-image-group");
            const termEls = gsap.utils.toArray(".hero-term p");

            const images = [];
            const charGroups = [];

            gsap.to(".hero-term", {
                opacity: 1,
                duration: 0.1,
                delay: 0.1
            })

            groups.forEach(group => {
                const imgs = gsap.utils.toArray("img", group);
                images.push(imgs);
                gsap.set(imgs, { autoAlpha: 0, scale: 0 });
            });

            termEls.forEach(p => {
                const split = new SplitText(p, { type: "chars" });
                gsap.set(split.chars, { autoAlpha: 0 });
                charGroups.push(split.chars);
            });

            let index = 0;
            let prev = null;

            const playCycle = () => {
                cycleTL.current?.kill();

                const tl = gsap.timeline({
                    defaults: {
                        duration: 0.7,
                        ease: "power2.out",
                    },
                });

                if (prev !== null) {
                    tl.to(charGroups[prev], {
                        autoAlpha: 0,
                        duration: 0.15,
                        stagger: 0.03,
                    })
                        .to(
                            images[prev],
                            {
                                autoAlpha: 0,
                                scale: 0,
                                ease: "power2.in",
                            },
                            "-=0.3"
                        );
                }

                tl.to(
                    charGroups[index],
                    {
                        autoAlpha: 1,
                        duration: 0.15,
                        stagger: 0.05,
                    },
                    prev !== null ? 0.4 : 0
                )
                    .to(
                        images[index],
                        {
                            autoAlpha: 1,
                            scale: 1,
                            stagger: {
                                each: 0.12,
                                from: "random",
                            },
                        },
                        "-=0.3"
                    );

                prev = index;
                index = (index + 1) % images.length;

                cycleTL.current = tl;
            };

            const startLoop = () => {
                playCycle();
                intervalRef.current = setInterval(playCycle, 5000);
            };

            setTimeout(() => {
                startLoop();
            }, 5000);

        },
        { scope: root }
    );


    useGSAP(() => {

        const split = SplitText.create(".text_anim", {
            type: "words",
            wordsClass: "word"
        });

        split.words.forEach((word) => {

            const wrapper = document.createElement("span");

            wrapper.style.display = "inline-block";
            wrapper.style.overflow = "hidden";
            wrapper.style.verticalAlign = "top";

            word.parentNode.insertBefore(wrapper, word);
            wrapper.appendChild(word);

        });

        const tl = gsap.timeline({ delay: 0.5 });
        tl.from(split.words, {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08
        });

        tl.to([ ".hero-search-background",".search_btn_paren"], {
            opacity: 1,
            stagger:0.1,
            ease: "power3.out",
        }, "<+=4.0")
        tl.to(".sqre", {
            opacity: 0,
            stagger: {
                each: 0.003,
                from: "random"
            },
            ease: "expo.out",
        }, "<")



    });


    return (
        <div ref={root} className='relative w-full'>

            <VideoPlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />

            <div className=" padding w-full pt-32! md:h-[40vh]  md:flex items-end justify-between">
                <h1 className=' text_anim text-7xl md:text-8xl font-semibold leading-0 uppercase '>
                    <span className='leading-[5rem] '>25 Rupiya</span> <br />
                    <span className=' w-full flex justify-end text-[1.36rem] leading-5 text-[#eb5939] uppercase'>Production</span>
                </h1>
                <div className="pr-36">
                    <p className=' text_anim mask-trigger text-xl font-medium  leading-none'> AI powered cinematic production<br /> built different.</p>
                </div>
            </div>

            <div className="w-full h-[80vh] md:h-screen relative">
                <div className="hero-search-background  bg-pattern opacity-0">

                    <div className="search_btn_paren  opacity-0 space-y-3  z-10 absolute top-1/2 left-1/2 w-[95%] md:w-[50%]  -translate-x-1/2 -translate-y-1/2">

                        <div className={`w-full absolute bottom-18 text-black  bg-[#D7CAB5] rounded-lg overflow-hidden transition-all duration-300 px-4 ${openSearch ? "max-h-[40vh] p-4" : "max-h-0 p-0"} `}>
                            <p className='uppercase text-xs  md:text-sm pp_neue font-extrabold'> suggested Prompts for you:</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {promptWork.map((item, i) => (
                                    <div onClick={(e) => {
                                        handleWork(item)
                                    }} key={i} className=" cursor-pointer border w-fit px-4 leading-tight rounded-full text-xs  md:text-sm uppercase py-2 hover:bg-[#eb5939] transition-all duration-300 flex items-center gap-x-2">
                                        <img className='w-4' src="https://cdn-icons-png.flaticon.com/512/12301/12301908.png" alt="" />
                                        <p className='font-medium'>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div onClick={(() => setOpenSearch(!openSearch))} className={` cursor-pointer w-full p-2 flex items-center justify-between  bg-[#D7CAB5]  transition-all duration-300 h-16 md:h-18  ${openSearch ? "rounded-lg" : " rounded-2xl "} `}>
                            <div className="flex items-center pl-7 tracking-wider whitespace-nowrap pp_neue uppercase text-xs md:text-sm h-full relative">
                                {HERO_GROUPS.map(({ term }) => (
                                    <div key={term} className="absolute text-black font-semibold hero-term opacity-0">
                                        <p>{term}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={`bg-[#eb5939] text-black h-full px-6 md:px-10 center transition-all duration-300 ${openSearch ? "rounded-lg " : " rounded-xl"} `}>
                                <p className="uppercase tracking-wide text-xs  md:text-sm font-semibold pp_neue">
                                    Search ⌘/
                                </p>
                            </div>
                        </div>
                    </div>

                    {HERO_GROUPS.map(({ term, images }) => (
                        <div
                            key={term}
                            data-search-term={term}
                            className="hero-search-image-group"
                        >
                            {images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    loading="eager"
                                    alt=""
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Hero