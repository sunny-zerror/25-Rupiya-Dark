"use client";
import React from 'react'
import InfiniteMarquee from '../effects/InfiniteMarquee'
import { RiArrowRightUpLine } from '@remixicon/react'

const Projects = [
    {
        id: 1,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/ramleela_2.jpg",
        title: "RAMLEELA",
        category: "MYTHOLOGICAL TRAILER / 2024"
    }, {
        id: 2,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/sonu_nigam_2.jpg",
        title: "SONU NIGAM LIVE",
        category: "CONCERT FILM / 2024"

    }, {
        id: 3,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/trilokpati.jpg",
        title: "TRILOKPATI",
        category: "DEVOTIONAL MUSIC VIDEO / 2024"
    }, {
        id: 4,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/anmol_diwali.jpg",
        title: "ANMOL DIWALI",
        category: "BRAND FILM / 2024"
    }, {
        id: 5,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/bajrangbali.jpg",
        title: "BAJRANGBALI",
        category: "DEVOTIONAL / 2023"
    }, {
        id: 6,
        img: "https://5mrvgs6onabxy.ok.kimi.link/images/portfolio/train_seq.jpg",
        title: "THE JOURNEY",
        category: "VISUAL POETRY / 2024"
    },
]

const KeyProjects = () => {
    return (
        <>

            <div className="w-full text-center mt-32 padding">
                <p className="font-thin uppercase pp_neue text-sm">Key Projects</p>
                <p className="text-8xl leading-none font-semibold mb-10">
                    Explore our work
                </p>
            </div>
            <InfiniteMarquee>
                <div className="w-full flex select-none">
                    {Projects.map((project) => (
                        <div key={project.id}
                            onDragStart={(e) => e.preventDefault()}
                            className=" select-none group w-[20vw] ml-5 aspect-3/4 overflow-hidden rounded-lg  relative">
                            <img
                                src={project.img}
                                alt=""
                                draggable={false}
                                className="w-full h-full object-cover rounded-lg group-hover:h-[85%] transition-all duration-300 select-none pointer-events-none" />
                            <div className="absolute flex justify-between items-end opacity-0 group-hover:opacity-100 duration-300 transition-all bottom-0 left-0 text-black w-full">
                                <div className="">
                                    <p className="uppercase font-thin pp_neue text-xs">{project.category}</p>
                                    <p className="text-xl font-semibold tracking-wide">{project.title}</p>
                                </div>
                                <RiArrowRightUpLine className=' cursor-pointer hover:scale-110' />
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteMarquee>
        </>
    )
}

export default KeyProjects