"use client";
import React from 'react'
import Marquee from "react-fast-marquee";

const clientsData = [
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd111_Anomaly.avif",
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/6904c8ae97335f408bb683a5_Zalando.avif",
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd0d5_BETC.avif",
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/6904bc5fff30f9c3ef33ec3f_Fortiche.avif",
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd0d2_Canada.avif",
    "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/6904c8ae8f706c8286928416_Logitech.avif",
]

const ClientsMarquee = () => {
    return (
        <div>
            <div className="w-full center text-center pt-32">
                <p className='uppercase font-thin pp_neue text-sm text-[#eb5939] '>Trusted by the brands shaping culture</p>
            </div>
            <Marquee speed={200}>
                <div className=" my-20 flex gap-x-[8.5rem]">
                {clientsData.map((client, index) => (
                    <div key={index} className="">
                        <img src={client} alt="client logo  " className='invert-50' />
                    </div>
                ))}
                </div>
            </Marquee>
        </div>
    )
}

export default ClientsMarquee