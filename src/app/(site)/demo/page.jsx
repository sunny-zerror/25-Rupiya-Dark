"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const page = () => {

    useGSAP(()=>{
        gsap.to(".blue_div",{
            opacity:0,
            duration:1,
            delay:1,
            onComplete:()=>{
                gsap.to(".blue_div",{
                    display:none
                })
            }
        })
    })

    return (
        <>
            <div className="w-full h-screen relative   ">

                <div className=" blue_div w-full h-screen noise_bg pointer-events-none bg-blue-500  absolute top-0 left-0 z-20 "></div>
                <img className='cover brightness-50' src="https://images.unsplash.com/photo-1771926927841-1a81a1094b81?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className=' absolute text-white text-5xl z-50 bottom-0 left-1/2 -translate-x-1/2'>Lorem ipsum dolor sit amet.</h1>

            </div>
        </>
    )
}

export default page