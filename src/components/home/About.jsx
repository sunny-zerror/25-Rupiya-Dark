import React from "react";
const About = () => {
    return (
        <>
            <div className=" text-center space-y-10 pt-44 ">
                <p className="font-thin uppercase pp_neue text-sm text-[#eb5939]">About us</p>

                <div className="   relative">
                    <p className=" mask-trigger  text-4xl font-medium">Small team.
                        Big visuals.
                        <span className="bg-pattern inline-flex w-16  p-3  mx-1">
                            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#FECC33"></circle> </svg>
                        </span>
                        Zero excuses. <br />
                        <span className="bg-pattern my-2 text-[#eb5939]"> 25 Rupiya Productions </span>
                        blends Bollywood storytelling <br />
                        <span className="bg-pattern inline-flex p-2">✨</span>
                        with AI-powered creativity
                        <span className="bg-pattern inline-flex w-14  p-3  mx-1">
                            <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 27L0 54V0L27 27Z" fill="#21935b"></path> <path d="M54 27L27 54V0L54 27Z" fill="#21935b"></path> </svg>
                        </span>
                        to create <br /> cinematic experiences
                        <span className="bg-pattern inline-flex  p-2">🎬</span>
                        built for the internet generation.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About