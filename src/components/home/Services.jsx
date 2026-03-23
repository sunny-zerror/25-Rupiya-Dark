import React from 'react'

const SERVICES = [
    {
        id: "01",
        title: "MUSIC VIDEOS",
        vid: "/videos/music_vid.mp4",
        desc: "From concept development to shoot and final delivery, we move at internet speed. High-impact visuals crafted, edited, and posted in days — not dragged out for weeks.",
        // bgColor: "#fecc33"
    },
    , {},
    {
        id: "02",
        title: "BRAND FILMS",
        vid: "/videos/brand_film.mp4",
        desc: "We build cinematic campaign worlds that feel premium and culturally sharp. Big-screen energy and storytelling — without the bloated production price tag.",
        // bgColor: "#21935b"
    },
    , {},
    {
        id: "03",
        title: "AI CONTENT SYSTEMS",
        vid: "/videos/ai_contant.mp4",
        desc: "Scalable character pipelines, visual styles, and modular creative assets. Designed to generate consistent, high-volume content without reinventing the wheel each time.",
        // bgColor: "#30a81d"
    },
    {
        id: "04",
        title: "EDITORIAL & SOCIAL CUTDOWNS",
        vid: "/videos/ai_social.mp4",
        desc: "Platform-native edits tailored for every feed, format, and algorithm. Short-form versions that keep the original vibe while maximizing reach and retention.",
        // bgColor: "#fecc33"
    }
];

const Services = () => {
    return (
        <>
            <div className=" padding pt-32! grid grid-cols-3 ">
                <div className="col-span-2">
                    <p className=" mask-trigger w-fit text-8xl uppercase leading-none  font-semibold ">
                       Stories <br /> <span className='text-[#eb5939]'>we</span> craft
                    </p>
                </div>
                <div className="h-full flex items-end pr-36">
                    <p className=' mask-trigger text-2xl font-medium pt-12 pl-3 leading-none'>From concept to final cut—AI-assisted storytelling that scales. Fast turnarounds, cinematic finish.</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-5 gap-y-20 padding">
                {SERVICES.map((service, index) => (
                    <div key={index} className=" group">
                        <div style={{ backgroundColor: service.bgColor }} className="w-full aspect-video rounded-xl overflow-hidden  transition-all duration-300">
                            {service.vid && (
                                <video autoPlay loop muted playsInline className='cover rounded-xl ' src={service.vid} alt="" />
                            )}
                        </div>
                            <div className=" mask-trigger pt-2">
                                <p className="font-thin uppercase pp_neue mb-2 ">    {service.id}             </p>
                                <p className='uppercase font-medium text-3xl mb-2'>
                                    {service.title}
                                </p>
                                <p className='leading-tight text-lg '>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services