import React from "react";
const About = () => {
    return (
        <>
            <div className=" text-center space-y-10 pt-20 md:pt-44 ">
                <p className="font-thin uppercase pp_neue text-sm text-[#eb5939]">About us</p>
                <div className=" w-full flex-col px-5 leading-tight center   relative">
                    <>
                        <p className=" md:w-[60%] mask-trigger text-2xl md:text-4xl font-medium">
                            A tiny squad, but the visuals are absolutely serving.
                            Zero excuses, just pure heat.
                            <span className=" text-[#eb5939]"> 25 Rupiya Productions </span>
                            is out here mixing that dramatic Bollywood lore with literal AI
                            <span className=" text-[#eb5939]"> magic. </span>
                        </p>

                        <p className=" md:w-[60%] mask-trigger text-2xl md:text-4xl font-medium mt-6">
                            We’re cooking up cinematic moments that actually hit different for the whole internet
                            <span className=" text-[#eb5939]"> era. </span>
                            Main character energy only.
                        </p>
                    </>
                </div>
            </div>
        </>
    );
}

export default About