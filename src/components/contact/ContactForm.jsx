import React from 'react'

const ContactForm = () => {
  return (
            <div className="w-full padding grid grid-cols-3">
            <div className="w-full pr-10 space-y-12 col-span-1">
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
            <div className="w-full col-span-2 pr-44 ">
                <p className='text-5xl uppercase font-semibold mb-10'>Tell Us More</p>
                <p>Fill out the form and we'll get back to you as soon as possible. Prefer to talk to us directly? Give us a call or send an email.</p>
                <form action="" className=' pt-10 space-y-10 w-full  '>
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
                    <button className=' bg-[#eb5939] text-[#0d0d0d] pp_neue  font-semibold py-3 px-10 rounded-xl'>Send</button>
                    </div>
                </form>
            </div>

            </div>
  )
}

export default ContactForm