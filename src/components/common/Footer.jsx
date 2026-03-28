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
        start: "30% bottom",
        end: "bottom bottom",
        scrub: true,
        // markers: true
      }
    });

    dot_tl.to(".footer_dot", {
      top: "65%",
      ease: "linear",
    })
      .to(".footer_dot", {
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        top: "0%",
        ease: "power4.out",
      })
      .to(".footer_inner", {
        opacity: 1,
        duration: 0.1,
      }, "<0.31")

  })

  return (
    <>
      <div className=" footer_paren w-full h-fit overflow-hidden relative">
        <div className=" footer_dot size-5 shrink-0 pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 bg-[#eb5939] "></div>
        <div className=" footer_inner w-full padding py-5! pb-0! space-y-10 md:space-y-20 relative z-10 opacity-0 bg-[#eb5939]  text-[#0d0d0d] ">
          <p className='text-3xl md:text-4xl font-medium'> <br /> Made By  <span className=' bg-[#0d0d0d] text-[#eb5939] px-4'>  Designers.</span>  <br />Built for Storytellers.</p>
          <div className=" grid grid-cols-4 md:grid-cols-10 gap-x-20">
            <div className=" col-span-4  md:pr-10  space-y-5">
              <p className="font-semibold uppercase pp_neue text-xs">Subscribe for Newsletter</p>
              <div className="   search_btn_paren flex items-center p-2 justify-between  h-14 rounded-full bg-[#D7CAB5] ">
                <div className="flex items-center pl-4 tracking-wider whitespace-nowrap pp_neue uppercase w-full pr-10 text-sm h-full relative">
                  <input type="text" name="" placeholder='Enter Your Email Address' className='outline-none w-full font-semibold leading-none border-none' id="" />
                  {/* <p className=' translate-y-[1.5px] text-[#0d0d0d] font-semibold'>Enter Your Email Address</p> */}
                </div>

                <div className="bg-[#0d0d0d] text-[#D7CAB5]  h-full px-5 rounded-full center">
                  <p className="uppercase tracking-wide text-xs md:translate-y-[-1px]  pp_neue">
                    Submit
                  </p>
                </div>
              </div>
            </div>
            <div className=" max-sm:hidden md:col-span-2"></div>
            <div className=" max-sm:mt-10 col-span-2 md:col-span-1 space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm pl-1">Company</p>

              <div className=" flex flex-col font-medium capitalize">
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Home</Link>
                <Link href={"/about"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>About Us</Link>
                <Link href={"/work"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>work</Link>
                <Link href={"/contact"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Contact</Link>
              </div>

            </div>
            <div className=" max-sm:mt-10 col-span-2 md:col-span-1 space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm pl-1">Socials</p>

              <div className=" flex flex-col font-medium space-y-1 capitalize">
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Instagram</Link>
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Facebook</Link>
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Youtube</Link>
              </div>

            </div>
            <div className=" max-sm:mt-10  col-span-4 md:col-span-2 space-y-5">
              <p className="font-semibold uppercase pp_neue text-sm pl-1">Contact</p>
              <div className=" flex flex-col font-medium space-y-1 capitalize">
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>+91 89898 98989</Link>
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group normal-case'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>hello@25rupiya.com</Link>
                <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>2, Andheri West , Mumbai</Link>
              </div>


            </div>

          </div>

          <div className="w-full justify-between max-sm:space-y-2 md:flex items-center">
            <p className="font-semibold uppercase pp_neue text-xs">© 25 Rupiya Production, all rights reserved, {new Date().getFullYear()}</p>
            <p className="font-semibold uppercase pp_neue text-xs">Developed by <Link href="https://www.zerrorstudios.com/" target='_blank' className='underline cursor-pointer'> zerror studios</Link></p>
          </div>

          <div className="w-full text-center pb-5">
            <p className='text-[7.92vw]  whitespace-nowrap leading-none uppercase font-semibold'>25 Rupiya <span className='text-[#D7CAB5]'> Production</span></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer