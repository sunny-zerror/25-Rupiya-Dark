import { Teams } from '@/app/utils/OurTeamsData'
import React from 'react'

const MaskAbout = () => {
    return (
        <>
            <div className=" physics_fall padding relative w-full h-screen  flex flex-col justify-center  overflow-hidden">
                <p className="text-5xl md:text-7xl leading-none uppercase  font-semibold mb-20">
                    WHO <br /> Let us cook
                </p>
                <p className="w-[25%] text-lg leading-none font-medium">
                    We make things look expensive… even when your budget is emotionally struggling.
                </p>
                <p className="w-[25%] mt-5 text-lg leading-none font-medium">
                    Strategy in brain, creativity in veins, and deadlines chasing us daily.
                </p>
            </div>

            <div className="w-full h-[calc(100vh+103vw+10rem)]">
            </div>


            <div className="">
                <div className="padding grid grid-cols-3 mt-12 w-full">
                    <div className="col-span-2">
                        <p className="text-5xl md:text-7xl uppercase leading-none  font-semibold ">
                            The<br />Crew
                        </p>
                    </div>
                    <div className="h-full flex items-end pr-36">
                        <p className='text-lg font-medium pt-12 pl-3 leading-none'>  Small squad. Loud ideas. AI in the toolkit, chaos in the group chat. We move fast and make it look expensive.
                        </p>
                    </div>
                </div>

                <div className="padding mt-10 flex overflow-x-scroll gap-x-9">
                    {Teams.map((team, i) => (
                        <div key={i} className="w-[28vw]! shrink-0 aspect-3/4 ">
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default MaskAbout