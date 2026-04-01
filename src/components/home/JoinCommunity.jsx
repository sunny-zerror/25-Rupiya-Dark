import React from 'react'
import Galaxy from '../effects/Galaxy'

const JoinCommunity = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <div className='w-full h-full '>
                    <Galaxy
                        mouseRepulsion
                        mouseInteraction
                        density={1}
                        glowIntensity={0.1}
                        saturation={0}
                        hueShift={10}
                        twinkleIntensity={0.3}
                        rotationSpeed={0.1}
                        repulsionStrength={2}
                        autoCenterRepulsion={0}
                        starSpeed={0.2}
                        speed={1}
                    />
                </div>
                <div className="w-full absolute h-full center z-10 pointer-events-none inset-0 flex-col text-center">

                <p className='text-5xl md:text-7xl uppercase font-semibold'>WE DON'T <br /> <span className='text-[#eb5939]'> FOLLOW TRENDS</span> <br /> WE CREATE THEM</p>
                <div className="mt-12">
                    <button
                        className=" pointer-events-auto cursor-pointer px-8 py-4 bg-[#eb5939] text-white rounded-lg hover:scale-95 hover:bg-transparent hover:border border-[#eb5939] hover:text-[#eb5939] text-sm tracking-wide font-medium transition-all duration-300 "
                        >
                        START YOUR PROJECT
                    </button>
                </div>
                        </div>
            </div>
        </>
    )
}

export default JoinCommunity