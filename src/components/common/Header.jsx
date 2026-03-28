"use client";
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import React, { useState } from 'react'

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>

      <div onClick={() => setOpenMenu(false)} className={`w-full h-screen fixed top-0 left-0 z-[99] bg-black/20 backdrop-blur-xs ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300 `}></div>
      <div className="w-full center fixed z-1000 top-0 p-3 md:p-5 pointer-events-none">
        <div className={` px-6 md:px-8 pointer-events-auto  transition-all duration-300 text-black ${openMenu ? " w-full md:w-[45vw] rounded-2xl pb-6 md:pb-8 bg-[#D7CAB5]" : "  w-full md:w-[30vw] rounded-2xl bg-[#D7CAB5]"} `}>
          <div onClick={() => setOpenMenu(!openMenu)} className=" cursor-pointer rounded-full h-14 flex items-center justify-between">
            <p className='pp_neue uppercase text-sm font-thin'>Logo</p>
            <div className=" block w-fit relative h-full center">
              <RiMenuLine size={16} className={`absolute transition-all duration-300 ${openMenu ? "opacity-0" : "opacity-100"}`} />
              <RiCloseLine size={20} className={`absolute transition-all duration-300 ${openMenu ? "opacity-100" : "opacity-0"}`} />
            </div>
          </div>
          <div className={` shrink-0 overflow-hidden transition-all duration-300  ${openMenu ? "space-y-5 max-h-[60vh] opacity-100" : "space-y-0 max-h-0 opacity-0"}  `}>
            <div className="md:flex items-center justify-between">
              <nav className=" relative text-2xl flex flex-col gap-y-2 md:gap-y-5">
                {navLinks.map((item, index) => (
                  <Link key={index} onClick={() => setOpenMenu(false)} href={item.href} className='cursor-pointer font-medium transition-all duration-300 hover:underline'>{item.name}</Link>
                ))}

                <div className=" md:hidden absolute bottom-0 right-0 text-base items-end  flex flex-col font-medium  capitalize">
                  <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Instagram</Link>
                  <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Facebook</Link>
                  <Link href={"/"} className='flex items-center cursor-pointer gap-x-1 group'> <span className='size-0 group-hover:size-1 transition-all duration-300 bg-black shrink-0 rounded-full'></span>Youtube</Link>
                </div>
              </nav>
              <div className=" w-full mt-5 md:mt-0 md:w-1/2  aspect-video">
                <video loop autoPlay muted playsInline className='cover rounded-lg' src="/videos/showreel_compress.mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header