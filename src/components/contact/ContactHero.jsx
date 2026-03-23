"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import React from 'react'

const ContactHero = () => {

    
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


    return (
        <>
            <div className="w-full h-screen flex items-center pt-44! padding">
                <h1 className='text_anim mask-trigger w-fit text-8xl uppercase leading-none  font-semibold '>We'd  love to hear <br /> about 
                  <span className='text-[#eb5939]'>  your  project !</span></h1>
            </div>
        </>
    )
}

export default ContactHero