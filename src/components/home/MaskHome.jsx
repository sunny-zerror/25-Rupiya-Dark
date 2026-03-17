import React from 'react'
import ClientsMarquee from './ClientsMarquee'
import Showreel from './Showreel'
import FeaturedWork from './FeaturedWork'
import { works } from '@/app/utils/WorksData'
import { TestimonialsData } from '@/app/utils/TestimonialsData'


const SERVICES = [
    {
        id: "01",
        title: "LOUD VISUALS",
        vid: "/videos/music_vid.mp4",
        desc: "Concept → shoot → edit → drop. Loud visuals, fast turnarounds, and music videos built to hit harder than the track.",
        bgColor: "#fecc33"
    },
    , {},
    {
        id: "02",
        title: "CINEMA FOR BRANDS",
        vid: "/videos/brand_film.mp4",
        desc: "We build cinematic brand stories with big-screen energy. Premium visuals without the oversized production circus.",
        bgColor: "#21935b"
    },
    , {},
    {
        id: "03",
        title: "AI CONTENT ENGINES",
        vid: "/videos/ai_contant.mp4",
        desc: "AI-powered characters, worlds, and visual pipelines designed to produce high-volume content without starting from zero.",
        bgColor: "#30a81d"
    },
    {
        id: "04",
        title: "SOCIAL CUTS",
        vid: "/videos/ai_social.mp4",
        desc: "Short-form edits engineered for every platform. Same cinematic vibe, optimized for scroll speed and algorithm love.",
        bgColor: "#fecc33"
    }
];

const MaskHome = () => {
    return (
        <>

            {/* Home */}
            <div >
                <div className=" padding w-full h-[40vh]  flex items-end justify-between">
                    <h1 className='text-9xl font-semibold flex flex-col uppercase leading-[.7] '>
                        25 Rupiya <br />
                        <span className=' w-full flex justify-end text-[1.828rem] leading-9 uppercase'>Production</span>
                    </h1>
                    <div className="pr-36">
                        <p className="text-2xl font-medium leading-none">
                            AI powered cinematic production
                            <br />
                            made for screens, not excuses.
                        </p>
                    </div>
                </div>

                <div className="w-full h-screen relative"></div>

            </div>

            {/* About */}
            <div className=" text-center space-y-10 pt-32 ">
                <p className="font-thin uppercase pp_neue text-sm">About us</p>

                <div className="mask-trigger relative">
                    <p className="text-4xl font-medium">
                        Tiny crew.
                        Loud visuals.
                        <span className="bg-pattern inline-flex w-16  p-3  mx-1">
                            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30" r="30" fill="#FECC33"></circle>
                            </svg>
                        </span>
                        No boring stuff. <br />

                        <span className="bg-pattern text-[#b7ab98] my-2">25 Rupiya Productions</span>
                        mixes Bollywood drama <br />

                        <span className="bg-pattern inline-flex p-2">✨</span>
                        with AI-driven imagination

                        <span className="bg-pattern inline-flex w-14  p-3  mx-1">
                            <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 27L0 54V0L27 27Z" fill="#21935b"></path>
                                <path d="M54 27L27 54V0L54 27Z" fill="#21935b"></path>
                            </svg>
                        </span>

                        to craft <br />
                        cinematic moments

                        <span className="bg-pattern inline-flex  p-2">🎬</span>
                        made for screens, scrolls, and the internet.
                    </p>
                </div>
            </div>

            <ClientsMarquee />
            <div className="w-full h-screen"></div>

            {/* our work */}
            <div >
                <div className="intro-platform-images relative w-full h-[30vh] my-20"></div>
                <div className=" opacity-0 platform_images_paren w-full center">
                    <div className="w-[80%]  bg-[#f5f5f5] rounded-2xl overflow-hidden ">
                        <div className="p-5">
                            <div className="w-full group flex gap-x-3">
                                <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F85656]">
                                </div>
                                <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#F9BC4A]">
                                </div>
                                <div className="size-4  cursor-pointer aspect-square center p-[0.1rem] shrink-0 rounded-full bg-[#39C951]">
                                </div>
                            </div>
                            <div className="flex w-full py-6  gap-x-10">
                                <p className=" font-medium uppercase flex items-center gap-x-4 text-xl leading-none">Our Works</p>
                                <div className=" flex  flex-wrap  gap-x-2">
                                    {[1, 2, 3, 4, 5, 5, 6].map((item, i) => (
                                        <div key={i} className={`px-3 py-1  pp_neue text-xs rounded-full  `}>
                                            <button className="capitalize">item</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="uppercase text-xs pp_neue leading-none">Showing of  works</p>
                        </div>

                        <div className="w-full grid  grid-cols-7 ">
                            <div className="platform-images w-full grid grid-cols-5 grid-rows-2 row-span-2 col-span-5"></div>
                            {works.slice(4).map((item, i) => (
                                <div
                                    key={i}
                                    className={` work w-full aspect-video group cursor-pointer overflow-hidden   transition-[opacity,filter,padding] duration-300  `}
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

            {/* Services */}
            <div >
                <div className=" padding pt-20! grid grid-cols-3 ">
                    <div className="col-span-2">
                        <p className=" text-8xl uppercase leading-none  font-semibold ">
                            Creative <br />services
                        </p>
                    </div>
                    <div className="h-full flex items-end pr-36">
                        <p className='text-2xl font-medium pt-12 pl-3 leading-none'>
                            Concept → cut → screen. AI tools. Cinematic stories. Internet speed.
                        </p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-x-5 gap-y-20 padding">
                    {SERVICES.map((service, index) => (
                        <div key={index} className=" group">
                            <div style={{ backgroundColor: service.bgColor }} className=" opacity-0 w-full aspect-video rounded-xl hover:p-5 overflow-hidden  transition-all duration-300">
                            </div>
                            <div className="pt-2">
                                <p className="font-thin uppercase pp_neue mb-2 ">{service.id}             </p>
                                <p className=' uppercase font-medium text-3xl mb-2'>
                                    {service.title}
                                </p>
                                <p className='leading-tight text-lg '>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* testimonials */}
            <div className="">
                <div className="line-break"></div>

                <div className="padding mt-4 w-full">
                    <div className=" w-full grid grid-cols-3">
                        <div className="col-span-2">
                            <p className="text-8xl uppercase leading-none  font-semibold ">
                            Good <br />things said
                            </p>
                        </div>
                        <div className="h-full flex items-end pr-36">
                            <p className='text-2xl font-medium pt-12 pl-3 leading-none'>Kind words from brands that trusted us with their stories.</p>
                        </div>
                    </div>
                    <div
                        className="mySwiper opacity-0 flex   overflow-x-scroll  scroller_none relative cursor-grab active:cursor-grabbing mt-20">
                        {TestimonialsData.map((item, i) => (
                            <div key={i} className='w-[90vw]! md:w-[40vw]!'>
                                <div className="">
                                    <img src={item.image} alt="" />
                                </div>
                                <p className='text-3xl'>{item.desc}</p>
                                <div className=" pt-8">
                                    <p className='text-xl font-medium'>{item.name}</p>
                                    <p className='text-xl opacity-50  font-medium'>{item.post}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </>
    )
}

export default MaskHome