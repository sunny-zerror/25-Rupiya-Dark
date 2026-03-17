import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="line-break"></div>
      <div className="w-full padding py-5! space-y-20 ">
        <p className='text-5xl font-medium  leading-none'> <br /> Made for<span className=' ml-1 bg-pattern text-[#eb5939]'>  Designers.</span>  <br />Built for Storytellers.</p>



        <div className=" grid grid-cols-5 gap-x-20">
          <div className=" col-span-2 space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Subscribe for Newsletter</p>
            <div className="   search_btn_paren flex items-center p-2 justify-between  h-14 rounded-full bg-[#b7ab98] ">
              <div className="flex items-center pl-4 tracking-wider whitespace-nowrap pp_neue uppercase text-sm h-full relative">
                <p className=' translate-y-[1.5px] text-black font-semibold'>Enter Your Email Address</p>
              </div>

              <div className="bg-[#eb5939] text-black  h-full px-5 rounded-full center">
                <p className="uppercase tracking-wide text-sm font-semibold pp_neue">
                  Submit
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Company</p>

            <div className="font-medium">
              <p>Home</p>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
            </div>

          </div>
          <div className="space-y-5">
            <p className="font-thin uppercase pp_neue text-sm">Socials</p>

            <div className="font-medium">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Youtube</p>
            </div>

          </div>
        </div>

        <div className="w-full justify-between flex items-center">
          <p className="font-thin uppercase pp_neue text-sm">Developed by zerror studios</p>
          <p className="font-thin uppercase pp_neue text-sm">© 25 Rupiya Production, all rights reserved, {new Date().getFullYear()}</p>
        </div>

        <div className="w-full text-center">
          <p className='text-[7.92vw] whitespace-nowrap leading-none uppercase font-semibold'>25 Rupiya <span className='text-[#eb5939]'> Production</span></p>
        </div>

      </div>
    </>
  )
}

export default Footer