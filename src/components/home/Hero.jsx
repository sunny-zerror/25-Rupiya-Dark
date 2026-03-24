"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import React, { useRef } from 'react'

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

const Hero = () => {

    const root = useRef(null);
    const cycleTL = useRef(null);
    const intervalRef = useRef(null);

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
            }, 5500);

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

        const tl = gsap.timeline({delay:0.5});
        tl.from(split.words, {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08
        });

        tl.to(".hero-search-background",{
            opacity:1,
            ease: "power3.out",
        },"<+=4.0")
        tl.to(".search_btn_paren",{
            opacity:1,
            ease: "power3.out",
        })



    });


    return (
        <div ref={root}>
            <div className=" padding w-full h-[40vh]  flex items-end justify-between">
                <h1 className=' text_anim text-8xl font-semibold leading-0 uppercase '>
                    <span className='leading-[5rem] '>25 Rupiya</span> <br />
                    <span className=' w-full flex justify-end text-[1.36rem] leading-5 text-[#eb5939] uppercase'>Production</span>
                </h1>
                <div className="pr-36">
                    <p className=' text_anim mask-trigger text-lg font-medium  leading-none'> AI powered cinematic production<br /> built different.</p>
                </div>
            </div>

            <div className="w-full h-screen relative">
                <div className="hero-search-background opacity-0 bg-pattern">

                    <div className="search_btn_paren flex opacity-0 items-center p-2 justify-between z-10 absolute top-1/2 left-1/2 w-[50%] h-20 rounded-full bg-[#b7ab98] -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center pl-7 tracking-wider whitespace-nowrap pp_neue uppercase text-sm h-full relative">
                            {HERO_GROUPS.map(({ term }) => (
                                <div key={term} className="absolute text-black font-semibold hero-term opacity-0">
                                    <p>{term}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#eb5939] text-black h-full px-10 rounded-full center">
                            <p className="uppercase tracking-wide text-sm font-semibold pp_neue">
                                Search ⌘/
                            </p>
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