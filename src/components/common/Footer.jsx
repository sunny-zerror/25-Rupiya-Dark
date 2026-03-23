"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Link } from 'next-view-transitions';
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  useGSAP(() => {

    gsap.set(".footer_dot", {
      borderRadius: "50%"
    })

    const dot_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer_paren",
        start: "20% bottom",
        end: "top top",
        scrub: true,
        // markers: true
      }
    });

    dot_tl.to(".footer_dot", {
      top: "75%",
      ease: "linear",
    })
      .to(".footer_dot", {
        width: "100%",
        height: "100vh",
        borderRadius: "0px",
        top: "0%",
        ease: "power4.out",
        duration: 0.2
      })
      .to(".footer_inner", {
        opacity: 1,
        duration: 0.1
      }, "<0.05")

  })

  return (
    <>
      <div className=" footer_paren w-full relative">
        <div className=" footer_dot size-5  pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 bg-[#eb5939] "></div>
        <div className=" footer_inner w-full padding py-5! space-y-20 relative z-10 opacity-0 text-[#0d0d0d] ">
          <p className='text-5xl font-medium  leading-none'> <br /> Made for<span className=' ml-1 bg-pattern text-[#eb5939]'>  Designers.</span>  <br />Built for Storytellers.</p>

          <div className=" grid grid-cols-5 gap-x-20">
            <div className=" col-span-2 space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm">Subscribe for Newsletter</p>
              <div className="   search_btn_paren flex items-center p-2 justify-between  h-14 rounded-full bg-[#b7ab98] ">
                <div className="flex items-center pl-4 tracking-wider whitespace-nowrap pp_neue uppercase w-full pr-10 text-sm h-full relative">
                  <input type="text" name="" placeholder='Enter Your Email Address' className='outline-none w-full font-semibold border-none' id="" />
                  {/* <p className=' translate-y-[1.5px] text-[#0d0d0d] font-semibold'>Enter Your Email Address</p> */}
                </div>

                <div className="bg-[#0d0d0d] text-[#b7ab98]  h-full px-5 rounded-full center">
                  <p className="uppercase tracking-wide text-sm  pp_neue">
                    Submit
                  </p>
                </div>
              </div>
            </div>
            <div className=""></div>
            <div className="space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm">Company</p>

              <div className=" flex flex-col font-medium">
                <Link href={"/"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Home</Link>
                <Link href={"/about"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>About Us</Link>
                <Link href={"/work"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>work</Link>
                <Link href={"/contact"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Contact</Link>
              </div>

            </div>
            <div className="space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm">Socials</p>

              <div className=" flex flex-col font-medium">
                <Link href={"/"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Instagram</Link>
                <Link href={"/"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Facebook</Link>
                <Link href={"/"} className='flex items-center gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Youtube</Link>
              </div>

            </div>
          </div>

          <div className="w-full justify-between flex items-center">
            <p className="font-semibold uppercase pp_neue text-sm">Developed by zerror studios</p>
            <p className="font-semibold uppercase pp_neue text-sm">© 25 Rupiya Production, all rights reserved, {new Date().getFullYear()}</p>
          </div>

          <div className="w-full text-center">
            <p className='text-[7.92vw] whitespace-nowrap leading-none uppercase font-semibold'>25 Rupiya <span className='text-[#b7ab98]'> Production</span></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer