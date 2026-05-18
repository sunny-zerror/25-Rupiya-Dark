"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import React, { useEffect, useRef, useState } from 'react'

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const projectFormRef = useRef(null);
    const contactFormRef = useRef(null);
    const [step, setStep] = useState(1);
    const progressRef = useRef(null);
    const form1Ref = useRef(null);
    const form2Ref = useRef(null);
    const [active, setActive] = useState("project")

    const [formData, setFormData] = useState({
        service: "",
        hasBudget: "",
        budget: "",
        projectDetails: "",
        name: "",
        email: "",
        company: "",
        contact: "",
        message: "",
    });

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

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

        if (!formData.service) {
            toast.error("Please select a service");
            return;
        }

        if (!formData.hasBudget) {
            toast.error("Please select budget option");
            return;
        }

        if (
            formData.hasBudget === "Yes" &&
            !formData.budget
        ) {
            toast.error("Please select budget range");
            return;
        }

        if (!formData.projectDetails.trim()) {
            toast.error("Please enter project details");
            return;
        }

        if (step < 2) {
            setStep(step + 1);
        }
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

        gsap.from(split.words, {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08
        });

    });

    const handleSubmit = async (type) => {

        // COMMON VALIDATIONS
        if (!formData.name.trim()) {
            toast.error("Name is required");
            return;
        }

        if (!formData.email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!formData.contact.trim()) {
            toast.error("Contact number is required");
            return;
        }

        // EMAIL VALIDATION
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email");
            return;
        }

        // CONTACT VALIDATION
        const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

        if (!phoneRegex.test(formData.contact)) {
            toast.error("Enter valid contact number");
            return;
        }

        // PROJECT FORM VALIDATIONS
        if (type === "project") {

            if (!formData.service) {
                toast.error("Please select a service");
                return;
            }

            if (!formData.hasBudget) {
                toast.error("Please select budget option");
                return;
            }

            // Budget required only if user selected YES
            if (
                formData.hasBudget === "Yes" &&
                !formData.budget
            ) {
                toast.error("Please select budget range");
                return;
            }

            if (!formData.projectDetails.trim()) {
                toast.error("Please enter project details");
                return;
            }

            if (!formData.company.trim()) {
                toast.error("Company name is required");
                return;
            }
        }

        // OTHER FORM VALIDATION
        if (type === "other") {

            if (!formData.message.trim()) {
                toast.error("Message is required");
                return;
            }
        }

        try {

            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    type,
                }),
            });

            const data = await res.json();

            if (data.success) {

                toast.success("Message sent successfully 🚀");

                // RESET FORM
                setFormData({
                    service: "",
                    hasBudget: "",
                    budget: "",
                    projectDetails: "",
                    name: "",
                    email: "",
                    company: "",
                    contact: "",
                    message: "",
                });

                setStep(1);

            } else {

                toast.error("Something went wrong");

            }

        } catch (error) {

            console.log(error);
            toast.error("Server Error");

        } finally {

            setLoading(false);

        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="w-full padding pt-44! md:pt-52! md:grid grid-cols-5">
                <div className="w-full pr-10 space-y-5 md:space-y-12 col-span-2">
                    <h1 className='text_anim mask-trigger w-fit mb-28 md:mb-36 text-5xl md:text-7xl uppercase leading-none  font-semibold '>We'd
                        <span className='text-[#eb5939]'>  love </span> <br />to hear
                    </h1>
                    <div className="">
                        <p className=' text-sm uppercase text-[#eb5939]'>Email</p>
                        <p className='text-lg'>hello@gmail.com</p>
                    </div>
                    <div className="">
                        <p className=' text-sm uppercase text-[#eb5939]'>contact</p>
                        <p className='text-lg'>+91 0000000000</p>
                    </div>
                    <div className="">
                        <p className=' text-sm uppercase text-[#eb5939]'>Address</p>
                        <p className='text-lg'>24 Rupiya Production, Mumbai</p>
                    </div>
                </div>
                <div className="w-full mt-20 md:mt-0 col-span-3 md:pr-36 pb-10">
                    <p className='text_anim text-3xl md:text-4xl uppercase font-semibold mb-3'>Tell Us More</p>
                    <p className='md:w-[80%] text-lg leading-tight'>Fill out the form and we&apos;ll get back to you as soon as possible. Prefer to talk to us directly? Give us a call or send an email.</p>

                    <div className="relative mt-6 flex bg-[#202020]  gap-x-5 w-fit p-2 rounded-lg">

                        <div
                            className={`absolute h-[75%] top-1/2 -translate-y-1/2 w-1/2 bg-[#eb5939] rounded-lg transition-all duration-300 ${active === "project" ? "left-2" : "left-[64%] w-[33%]"
                                }`}
                        />

                        <button
                            onClick={() => setActive("project")}
                            className={` text-sm pp_neue cursor-pointer translate-y-[1px] uppercase center relative z-10 px-6 py-2 ${active === "project" ? "text-[#0d0d0d] font-semibold transition-all duration-300" : ""}`}
                        >
                            New Project
                        </button>

                        <button
                            onClick={() => setActive("other")}
                            className={` text-sm uppercase cursor-pointer pp_neue translate-y-[1px] center relative z-10 px-6 py-2  ${active === "other" ? "text-[#0d0d0d] font-semibold transition-all duration-300" : ""}`}
                        >
                            Other
                        </button>
                    </div>

                    <div className={`w-full h-[2px] bg-[#202020] relative rounded-full mt-10 opacity-0 ${active === "project" ? "opacity-100" : ""}  `}>

                        <div className={`size-4 absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-500
                ${step >= 1 ? "bg-[#D7CAB5]" : "bg-[#202020]"}`} />

                        <div className={`size-4 left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-500
                ${step >= 2 ? "bg-[#D7CAB5]" : "bg-[#202020]"}`} />

                        <div className="size-4 right-0 translate-x-1/2 absolute top-1/2 -translate-y-1/2 rounded-full bg-[#202020]" />

                        <div
                            ref={progressRef}
                            className="w-0 h-full absolute left-0 bg-[#D7CAB5]"
                        />
                    </div>

                    <div className={`relative ${active === "project" ? "h-[90vh]" : "h-[50vh]"} ${step === 2 ? "h-[40vh]!" : ""} transition-all duration-300 w-full mt-10`}>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}
                            ref={projectFormRef}
                            className=" project_form absolute top-0 left-0 w-full">

                            {step === 1 && (
                                <div ref={form1Ref} className="space-y-6 md:space-y-10">

                                    <div className="space-y-3">
                                        <p className="text-lg">I need :</p>
                                        <div className="flex gap-3 flex-wrap">
                                            {["Branding", "Print", "Web Design", "Other"].map((item, i) => (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    onClick={() => handleChange("service", item)}
                                                    className={`px-4 py-2 text-sm border rounded-sm cursor-pointer transition-all duration-300   ${formData.service === item
                                                        ? "bg-[#eb5939] text-[#0d0d0d] font-semibold border-[#eb5939]"
                                                        : "border-[#444444] text-[#d7cab5]"}
                                                         `}>
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-lg">Do you have a budget in mind?</p>
                                        <div className="flex gap-3">
                                            {["Yes", "No"].map((item, i) => (
                                                <button
                                                    type="button"
                                                    key={i}
                                                    onClick={() => handleChange("hasBudget", item)}
                                                    className={`px-4 py-2 text-sm border rounded-sm cursor-pointer transition-all duration-300  
      ${formData.hasBudget === item
                                                            ? "bg-[#eb5939] text-[#0d0d0d] font-semibold border-[#eb5939]"
                                                            : "border-[#444444] text-[#d7cab5]"}
    `}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {formData.hasBudget === "Yes" && (
                                        <div className="space-y-3">
                                            <p className="text-lg">Budget ?</p>

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
                                                    <button
                                                        type="button"
                                                        key={i}
                                                        onClick={() => handleChange("budget", item)}
                                                        className={`px-4 py-2 text-sm border rounded-sm cursor-pointer capitalize transition-all duration-300  
                    ${formData.budget === item
                                                                ? "bg-[#eb5939] text-[#0d0d0d] font-semibold border-[#eb5939]"
                                                                : "border-[#444444] text-[#d7cab5]"}
                    `}
                                                    >
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-3">
                                        <p className="text-lg">Tell us about your project :</p>
                                        <textarea value={formData.projectDetails}
                                            onChange={(e) => handleChange("projectDetails", e.target.value)} className="border-b w-full h-32 text-sm outline-none resize-none" />
                                    </div>

                                </div>
                            )}


                            {step === 2 && (
                                <div ref={form2Ref} className="space-y-6 md:space-y-10">

                                    <div className="w-full grid grid-cols-2">
                                        <p className='text-lg'>Name :</p>

                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            className="outline-none border-b"
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full grid grid-cols-2">
                                        <p className='text-lg'>Email :</p>

                                        <input
                                            type="text"
                                            placeholder="Enter Email"
                                            className="outline-none border-b"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full grid grid-cols-2">
                                        <p className='text-lg'>Company Name :</p>

                                        <input
                                            type="text"
                                            placeholder="Enter Company"
                                            className="outline-none border-b"
                                            value={formData.company}
                                            onChange={(e) => handleChange("company", e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full grid grid-cols-2">
                                        <p className='text-lg'>Contact :</p>

                                        <input
                                            type="text"
                                            placeholder="+91 0000000000"
                                            className="outline-none border-b"
                                            value={formData.contact}
                                            onChange={(e) => handleChange("contact", e.target.value)}
                                        />
                                    </div>

                                </div>
                            )}


                            <div className="w-full flex gap-x-5 text-sm mt-6 md:mt-12 justify-end">
                                {step !== 1 && (
                                    <button type="button" onClick={prev} className="bg-[#202020] text-[#d7cab5] cursor-pointer py-3 px-10 pp_neue  uppercase rounded-lg">
                                        <p className='translate-y-[1px]'>
                                            Prev
                                        </p>
                                    </button>
                                )}

                                {step !== 2 ? (
                                    <button type="button" onClick={next} className="bg-[#eb5939] text-[#0d0d0d] font-semibold cursor-pointer py-3 pp_neue  uppercase px-10 rounded-lg">
                                        <p className='translate-y-[1px]'>
                                            Next
                                        </p>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        disabled={loading}
                                        onClick={() => handleSubmit("project")}
                                        className="bg-[#eb5939] text-[#0d0d0d] font-semibold cursor-pointer py-3 px-10 rounded-lg pp_neue uppercase disabled:opacity-50"
                                    >
                                        <p className='translate-y-[1px]'>
                                            {loading ? "Sending..." : "Submit"}
                                        </p>
                                    </button>
                                )}
                            </div>

                        </form>

                        <form
                            ref={contactFormRef}
                            className='contact_form absolute top-0 left-0 opacity-0 pointer-events-none space-y-6 md:space-y-10 w-full'
                        >

                            <div className="w-full grid grid-cols-2">
                                <p className='text-lg'>Name :</p>

                                <input
                                    type="text"
                                    placeholder='Enter Name'
                                    className='outline-none border-b'
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2">
                                <p className='text-lg'>Email :</p>

                                <input
                                    type="text"
                                    placeholder='Enter Email'
                                    className='outline-none border-b'
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2">
                                <p className='text-lg'>Contact :</p>

                                <input
                                    type="text"
                                    placeholder='+91 0000000000'
                                    className='outline-none border-b'
                                    value={formData.contact}
                                    onChange={(e) => handleChange("contact", e.target.value)}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2">
                                <p className='text-lg'>Message :</p>

                                <textarea
                                    data-lenis-prevent
                                    placeholder='Enter your message'
                                    className='outline-none border-b resize-none h-32 custom_scroller pr-5'
                                    value={formData.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                />
                            </div>

                            <div className="w-full flex justify-end">

                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => handleSubmit("other")}
                                    className='bg-[#eb5939] uppercase text-sm text-[#0d0d0d] pp_neue cursor-pointer font-semibold py-3 px-10 rounded-lg disabled:opacity-50'
                                >
                                    <p className='translate-y-[1px]'>
                                        {loading ? "Sending..." : "Send"}
                                    </p>
                                </button>

                            </div>

                        </form>
                    </div>


                </div>

            </div>
        </>
    )
}

export default ContactForm