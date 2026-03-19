"use client";
import { RiCloseLine } from '@remixicon/react';
import React, { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: "What services are offered?",
    answer:
      "We design and build modern, high-performing websites using Framer and custom components."
  },
  {
    id: 2,
    question: "Who is this for?",
    answer:
      "Ideal for startups, agencies, creators, and teams needing a professional digital presence."
  },
  {
    id: 3,
    question: "How do projects start?",
    answer:
      "Projects begin with clear requirements, goals, and timelines to ensure smooth execution."
  },
  {
    id: 4,
    question: "How long is the delivery time?",
    answer:
      "Timelines vary by scope, but most projects are completed within two to four weeks."
  },
  {
    id: 5,
    question: "Is Framer required?",
    answer:
      "Yes, all templates and builds are optimized specifically for Framer workflows."
  },
  {
    id: 6,
    question: "Can we customize?",
    answer:
      "Everything is fully customizable, including layout, colors, components, and interactions."
  },
  {
    id: 7,
    question: "Do you offer support?",
    answer:
      "Yes, we provide guidance, documentation, and support to help you launch confidently."
  },
  {
    id: 8,
    question: "What about updates?",
    answer:
      "We regularly improve templates with updates, refinements, and new features."
  }
];

const Faq = () => {

    const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div>
        <div className="w-full padding grid grid-cols-2 pb-32!">
            <div className="pr-44">
                <p className='text-5xl font-semibold mb-4'>FREQUENTLY <span className='text-[#eb5939]'> ASKED</span> <br /> QUESTIONS</p>
                <p className='text-xl'>This is different we get that, you may have questions, here are some answers.</p>
            </div>
            <div className="w-full">
                {faqData.map((item,i)=>(
                    <div onClick={()=>setOpenFaqId(item.id)} key={i} className="w-full cursor-pointer border-b pt-6 border-white/10 ">
                        <div className="w-full pb-5 flex justify-between">
                            <p className='text-3xl'>{item.question}</p>
                            <RiCloseLine className={`transition-all duration-300 ${openFaqId === item.id ? "rotate-0" : "rotate-45"}`}  />
                        </div>
                        <div className={` w-full h-0 transition-all duration-300 ${openFaqId === item.id ? "h-20" : "h-0"} overflow-hidden`}>
                            <p className='text-xl w-[80%]'>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq