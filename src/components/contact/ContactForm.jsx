"use client";
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const ContactForm = () => {
    const projectFormRef = useRef(null);
    const contactFormRef = useRef(null);
    const [step, setStep] = useState(1);
    const progressRef = useRef(null);
    const form1Ref = useRef(null);
    const form2Ref = useRef(null);
    const [active, setActive] = useState("project")

    useEffect(() => {
        gsap.to(progressRef.current, {
            width: step === 1 ? "0%" : "50%",
            duration: 0.6,
            ease: "power3.out"
        });

        gsap.fromTo(
            step === 1 ? form1Ref.current : form2Ref.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );

    }, [step]);


    const next = () => {
        if (step < 2) setStep(step + 1);
    };

    const prev = () => {
        if (step > 1) setStep(step - 1);
    };

    useEffect(() => {

        const tl = gsap.timeline();

        if (active === "project") {

            tl.to(contactFormRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.35,
                ease: "power2.out",
                pointerEvents: "none"
            }).fromTo(
                projectFormRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    pointerEvents: "auto"
                },
                "-=0.1"
            );

        } else {

            tl.to(projectFormRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.35,
                ease: "power2.out",
                pointerEvents: "none"
            }).fromTo(
                contactFormRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    pointerEvents: "auto"
                },
                "-=0.1"
            );

        }

    }, [active]);

    return (
        <div className="w-full padding grid grid-cols-5">
            <div className="w-full pr-10 space-y-12 col-span-2">
                <div className="">
                    <p className=' uppercase text-[#eb5939]'>Email</p>
                    <p className='text-2xl'>hello@gmail.com</p>
                </div>
                <div className="">
                    <p className=' uppercase text-[#eb5939]'>contact</p>
                    <p className='text-2xl'>+91 0000000000</p>
                </div>
                <div className="">
                    <p className=' uppercase text-[#eb5939]'>Address</p>
                    <p className='text-2xl'>zerror studios, Mumbai</p>
                </div>
            </div>
            <div className="w-full col-span-3 pr-36 ">
                <p className='text-5xl uppercase font-semibold mb-10'>Tell Us More</p>
                <p>Fill out the form and we&apos;ll get back to you as soon as possible. Prefer to talk to us directly? Give us a call or send an email.</p>

                <div className="relative mt-5 flex bg-[#202020]  gap-x-5 w-fit p-2 rounded-lg">

                    <div
                        className={`absolute h-[75%] top-1/2 -translate-y-1/2 w-1/2 bg-[#eb5939] rounded-lg transition-all duration-300 ${active === "project" ? "left-3" : "left-[64%] w-[33%]"
                            }`}
                    />

                    <button
                        onClick={() => setActive("project")}
                        className={`text-lg center relative z-10 px-6 py-2 ${active === "project" ? "text-[#0d0d0d] font-semibold transition-all duration-300" : ""}`}
                    >
                        New Project
                    </button>

                    <button
                        onClick={() => setActive("other")}
                        className={`text-lg center relative z-10 px-6 py-2  ${active === "other" ? "text-[#0d0d0d] font-semibold transition-all duration-300" : ""}`}
                    >
                        Other
                    </button>
                </div>

                <div className={`w-full h-[2px] bg-[#202020] relative rounded-full mt-10 opacity-0 ${active === "project" ? "opacity-100" : ""}  `}>

                    <div className={`size-4 absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-500
                ${step >= 1 ? "bg-[#b7ab98]" : "bg-[#202020]"}`} />

                    <div className={`size-4 left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-500
                ${step >= 2 ? "bg-[#b7ab98]" : "bg-[#202020]"}`} />

                    <div className="size-4 right-0 translate-x-1/2 absolute top-1/2 -translate-y-1/2 rounded-full bg-[#202020]" />

                    <div
                        ref={progressRef}
                        className="w-0 h-full absolute left-0 bg-[#b7ab98]"
                    />
                </div>

                <div className="relative h-[90vh] w-full mt-10">

                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}
                        ref={projectFormRef}
                        className=" project_form absolute top-0 left-0 w-full">

                        {step === 1 && (
                            <div ref={form1Ref} className="space-y-10">

                                <div className="space-y-3">
                                    <p className="text-xl">I need :</p>
                                    <div className="flex gap-3 flex-wrap">
                                        {["Branding", "Print", "Web Design", "Other"].map((item, i) => (
                                            <button type="button" key={i} className="px-4 py-2 border border-[#202020]">
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-xl">Do you have a budget in mind?</p>
                                    <div className="flex gap-3">
                                        {["Yes", "No"].map((item, i) => (
                                            <button type="button" key={i} className="px-4 py-2 border border-[#202020]">
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-xl">Budget ?</p>
                                    <div className="flex gap-3 flex-wrap">
                                        {[
                                            "Less than €2,500",
                                            "€2,500 - €5,000",
                                            "€5,000 - €10,000",
                                            "€10,000 - €15,000",
                                            "€15,000 - €20,000",
                                            "€20,000 - €30,000",
                                            "More than €30,000"
                                        ].map((item, i) => (
                                            <button type="button" key={i} className="px-4 py-2 border border-[#202020]">
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-xl">Tell us about your project :</p>
                                    <textarea className="border-b w-full h-32 outline-none resize-none" />
                                </div>

                            </div>
                        )}


                        {step === 2 && (
                            <div ref={form2Ref} className="space-y-10">

                                <div className="w-full   grid grid-cols-2">
                                    <p className='text-xl'>Name :</p>
                                    <input type="text" name="" id="" placeholder='Enter Name ' className='outline-none border-b ' />
                                </div>
                                <div className="w-full   grid grid-cols-2">
                                    <p className='text-xl'>Email :</p>
                                    <input type="text" name="" id="" placeholder='Enter Email ' className='outline-none border-b ' />
                                </div>
                                <div className="w-full   grid grid-cols-2">
                                    <p className='text-xl'>Company Name :</p>
                                    <input type="text" name="" id="" placeholder='Enter Email ' className='outline-none border-b ' />
                                </div>
                                <div className="w-full   grid grid-cols-2">
                                    <p className='text-xl'>Contact :</p>
                                    <input type="text" name="" id="" placeholder='+91 0000000000' className='outline-none border-b ' />
                                </div>

                            </div>
                        )}


                        <div className="w-full flex gap-x-5 mt-12 justify-end">
                            {step !== 1 && (
                                <button type="button" onClick={prev} className="bg-[#202020] text-white py-3 px-10 rounded-lg">
                                    Prev
                                </button>
                            )}

                            {step !== 2 ? (
                                <button type="button" onClick={next} className="bg-[#eb5939] text-[#0d0d0d] font-semibold py-3 px-10 rounded-lg">
                                    Next
                                </button>
                            ) : (
                                <button className="bg-[#eb5939] text-[#0d0d0d] font-semibold py-3 px-10 rounded-lg">
                                    Submit
                                </button>
                            )}
                        </div>

                    </form>

                    <form ref={contactFormRef} action="" className=' contact_form absolute top-0 left-0 opacity-0 pointer-events-none space-y-10 w-full  '>
                        <div className="w-full   grid grid-cols-2">
                            <p className='text-xl'>Name :</p>
                            <input type="text" name="" id="" placeholder='Enter Name ' className='outline-none border-b ' />
                        </div>
                        <div className="w-full   grid grid-cols-2">
                            <p className='text-xl'>Email :</p>
                            <input type="text" name="" id="" placeholder='Enter Email ' className='outline-none border-b ' />
                        </div>
                        <div className="w-full   grid grid-cols-2">
                            <p className='text-xl'>Contact :</p>
                            <input type="text" name="" id="" placeholder='+91 0000000000' className='outline-none border-b ' />
                        </div>
                        <div className="w-full   grid grid-cols-2">
                            <p className='text-xl'>Message :</p>
                            <textarea data-lenis-prevent type="text" name="" id="" placeholder='Enter your message' className='outline-none border-b resize-none h-32  custom_scroller pr-5 ' />
                        </div>
                        <div className="w-full flex justify-end">
                            <button className=' bg-[#eb5939] text-[#0d0d0d] pp_neue  font-semibold py-3 px-10 rounded-lg'>Send</button>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    )
}

export default ContactForm