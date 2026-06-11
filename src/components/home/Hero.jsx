"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import React, { useEffect, useRef, useState } from 'react'
import YoutubePlayer from '../common/YoutubePlayer';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HERO_GROUPS = [
    {
        term: "Knight on a Horse",
        images: [
            "/images/home/heroanim/knight_on_a_horse_image1.avif",
            "/images/home/heroanim/knight_on_a_horse_image8.avif",
            "/images/home/heroanim/knight_on_a_horse_image6.avif",
            "/images/home/heroanim/knight_on_a_horse_image3.avif",
            "/images/home/heroanim/knight_on_a_horse_image10.avif",
            "/images/home/heroanim/knight_on_a_horse_image5.avif",
            "/images/home/heroanim/knight_on_a_horse_image7.avif",
            "/images/home/heroanim/knight_on_a_horse_image9.avif",
            "/images/home/heroanim/knight_on_a_horse_image2.avif",
            "/images/home/heroanim/knight_on_a_horse_image4.avif",
        ],
    },
    {
        term: "Reflections on the Water",
        images: [
            "/images/home/heroanim/reflections_on_the_water_image1.avif",
            "/images/home/heroanim/reflections_on_the_water_image8.avif",
            "/images/home/heroanim/reflections_on_the_water_image6.avif",
            "/images/home/heroanim/reflections_on_the_water_image3.avif",
            "/images/home/heroanim/reflections_on_the_water_image10.avif",
            "/images/home/heroanim/reflections_on_the_water_image5.avif",
            "/images/home/heroanim/reflections_on_the_water_image7.avif",
            "/images/home/heroanim/reflections_on_the_water_image9.avif",
            "/images/home/heroanim/reflections_on_the_water_image2.avif",
            "/images/home/heroanim/reflections_on_the_water_image4.avif",
        ],
    },
    {
        term: "Black and white film",
        images: [
            "/images/home/heroanim/black_and_white_film_image1.avif",
            "/images/home/heroanim/black_and_white_film_image8.avif",
            "/images/home/heroanim/black_and_white_film_image6.avif",
            "/images/home/heroanim/black_and_white_film_image3.avif",
            "/images/home/heroanim/black_and_white_film_image10.avif",
            "/images/home/heroanim/black_and_white_film_image5.avif",
            "/images/home/heroanim/black_and_white_film_image7.avif",
            "/images/home/heroanim/black_and_white_film_image9.avif",
            "/images/home/heroanim/black_and_white_film_image2.avif",
            "/images/home/heroanim/black_and_white_film_image4.avif",
        ],
    },
    {
        term: "Quiet moments",
        images: [
            "/images/home/heroanim/quiet_moments_image1.avif",
            "/images/home/heroanim/quiet_moments_image8.avif",
            "/images/home/heroanim/quiet_moments_image6.avif",
            "/images/home/heroanim/quiet_moments_image3.avif",
            "/images/home/heroanim/quiet_moments_image10.avif",
            "/images/home/heroanim/quiet_moments_image5.avif",
            "/images/home/heroanim/quiet_moments_image7.avif",
            "/images/home/heroanim/quiet_moments_image9.avif",
            "/images/home/heroanim/quiet_moments_image2.avif",
            "/images/home/heroanim/quiet_moments_image4.avif",
        ],
    },
];

const promptWork = [
  {
    id: 1,
    title: "Epic Shiva Tandava animation with glowing 108 Naam visuals",
    video: "https://www.youtube.com/embed/fmmuhxx-IQA?si=WCEdFjnRzOviIjUf",
  },
  {
    id: 2,
    title: "Animated Jai Hanuman bhajan with divine cinematic visuals",
    video: "https://www.youtube.com/embed/ycyXpW0aMGQ?si=mNUlQ3fyAshVjvA4",
  },
  {
    id: 3,
    title: "Cinematic Namaste Narasimhaya devotional animated music video",
    video: "https://www.youtube.com/embed/0_ibtCxWVas?si=G9RARbp1cI0mOCj4",
  },
  {
    id: 4,
    title: "Epic Mahabharata battle animation between Arjuna and Karna",
    video: "https://www.youtube.com/embed/adWLSgye8as?si=Plu9DKP3ODZzOAPk",
  },
  {
    id: 5,
    title: "Funny cinematic food war between Kaju Katli and Soan Papdi",
    video: "https://www.youtube.com/embed/NvRSdbSUMlU?si=hRpmHI4iNZv8pPAh",
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

        tl.to([".hero-search-background", ".search_btn_paren"], {
            opacity: 1,
            stagger: 0.1,
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

            <YoutubePlayer isVideoOpen={isVideoOpen} work={selectedWork} setIsVideoOpen={setIsVideoOpen} />

            <div className=" padding w-full pt-32! md:h-[40vh]  md:flex items-end justify-between">
                <h1 className=' max-sm:w-full text-center  text_anim text-[18vw] whitespace-nowrap md:text-8xl font-semibold leading-0 uppercase '>
                    <span className='leading-[14vw] md:leading-[5rem]'>25 Rupiya</span> <br />
                    <span className=' w-full flex justify-end text-[1.36rem] leading-5 text-[#eb5939] uppercase'>Productions</span>
                </h1>
                <div className=" max-sm:mt-5 max-sm:w-full md:pr-36">
                    <p className=' text_anim mask-trigger text-xl font-medium  leading-none'> AI powered cinematic production<br /> built different.</p>
                </div>
            </div>

            <div className="w-full h-[70vh] md:h-screen relative">
                <div className="hero-search-background  bg-pattern opacity-0">

                    <div className="search_btn_paren  opacity-0 space-y-3  z-10 absolute bottom-20 md:top-1/2 left-1/2 w-[95%] md:w-[50%]  -translate-x-1/2 md:-translate-y-1/2">

                        <div className={`w-full absolute bottom-17 text-black  bg-[#D7CAB5] rounded-2xl overflow-hidden transition-all duration-300 px-4 ${openSearch ? "max-h-[40vh] p-4" : "max-h-0 p-0"} `}>
                            <p className='uppercase text-xs  md:text-sm pp_neue font-extrabold'> suggested Prompts for you:</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {promptWork.map((item, i) => (
                                    <div onClick={(e) => {
                                        handleWork(item)
                                    }} key={i} className=" cursor-pointer border w-fit px-4 leading-tight rounded-full text-xs  md:text-sm uppercase py-2 hover:bg-[#eb5939] transition-all duration-300 flex items-center gap-x-2">
                                        <img className='w-4' src="https://cdn-icons-png.flaticon.com/512/12301/12301908.png" alt="loading img" />
                                        <p className='font-medium'>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div onClick={(() => setOpenSearch(!openSearch))} className={` cursor-pointer w-full p-2 flex items-center justify-between  bg-[#D7CAB5]  transition-all duration-300 h-16 md:h-18   rounded-2xl  `}>
                            <div className="flex items-center pl-7 tracking-wider whitespace-nowrap pp_neue uppercase text-xs md:text-sm h-full relative">
                                {HERO_GROUPS.map(({ term }) => (
                                    <div key={term} className="absolute text-black font-semibold hero-term opacity-0">
                                        <p>{term}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={`bg-[#eb5939] text-black h-full px-6 md:px-8 center transition-all duration-300  rounded-xl`}>
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
                                    alt="hero anim img"
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