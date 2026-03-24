"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BriefSVG = () => (
  <svg
    id="svg-brief"
    className="absolute inset-0 w-full h-full opacity-0"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Document body */}
    <rect
      className="stroke-draw"
      x="60" y="40" width="120" height="160" rx="8"
      stroke="white" strokeWidth="2.5"
      strokeDasharray="560" strokeDashoffset="560"
    />
    {/* Dog-ear fold */}
    <path
      className="stroke-draw"
      d="M148 40 L180 72"
      stroke="white" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="46" strokeDashoffset="46"
    />
    <path
      className="stroke-draw"
      d="M148 40 L180 40 L180 72 Z"
      stroke="white" strokeWidth="2" fill="#0d0d0d"
      strokeDasharray="100" strokeDashoffset="100"
    />
    {/* Lines */}
    <line className="stroke-draw" x1="80" y1="100" x2="160" y2="100"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="80" strokeDashoffset="80" />
    <line className="stroke-draw" x1="80" y1="120" x2="148" y2="120"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="68" strokeDashoffset="68" />
    <line className="stroke-draw" x1="80" y1="140" x2="155" y2="140"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="75" strokeDashoffset="75" />
    <line className="stroke-draw" x1="80" y1="160" x2="132" y2="160"
      stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"
      strokeDasharray="52" strokeDashoffset="52" />
    {/* Speech bubble */}
    <path
      className="stroke-draw"
      d="M155 68 Q185 42 220 65 Q248 84 228 112 Q212 134 188 126 L168 148 L176 122 Q140 116 138 92 Q136 68 155 68 Z"
      stroke="white" strokeWidth="2.5" fill="#0d0d0d"
      strokeDasharray="380" strokeDashoffset="380"
    />
    {/* Dots inside bubble */}
    <circle data-fadein className="fade-el" cx="178" cy="96" r="5" fill="white" opacity="0" />
    <circle data-fadein className="fade-el" cx="195" cy="96" r="5" fill="white" opacity="0" />
    <circle data-fadein className="fade-el" cx="212" cy="96" r="5" fill="white" opacity="0" />
  </svg>
);

const ConceptSVG = () => (
  <svg
    id="svg-concept"
    className="absolute inset-0 w-full h-full opacity-0"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 4 moodboard cards */}
    <rect className="stroke-draw" x="40" y="60" width="88" height="80" rx="6"
      stroke="white" strokeWidth="2"
      strokeDasharray="336" strokeDashoffset="336" />
    <rect className="stroke-draw" x="140" y="60" width="88" height="80" rx="6"
      stroke="white" strokeWidth="2"
      strokeDasharray="336" strokeDashoffset="336" />
    <rect className="stroke-draw" x="40" y="158" width="88" height="80" rx="6"
      stroke="white" strokeWidth="2"
      strokeDasharray="336" strokeDashoffset="336" />
    <rect className="stroke-draw" x="140" y="158" width="88" height="80" rx="6"
      stroke="white" strokeWidth="2"
      strokeDasharray="336" strokeDashoffset="336" />
    {/* Card textures */}
    <line className="stroke-draw" x1="40" y1="60" x2="128" y2="140"
      stroke="rgba(255,255,255,0.25)" strokeWidth="1"
      strokeDasharray="112" strokeDashoffset="112" />
    <circle className="stroke-draw" cx="184" cy="100" r="24"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"
      strokeDasharray="150" strokeDashoffset="150" />
    <line className="stroke-draw" x1="56" y1="183" x2="112" y2="183"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="56" strokeDashoffset="56" />
    <line className="stroke-draw" x1="56" y1="197" x2="100" y2="197"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="44" strokeDashoffset="44" />
    <line className="stroke-draw" x1="156" y1="183" x2="212" y2="183"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="56" strokeDashoffset="56" />
    <line className="stroke-draw" x1="156" y1="197" x2="196" y2="197"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="40" strokeDashoffset="40" />
    {/* Lightbulb emerging top-right */}
    <path
      className="stroke-draw"
      d="M232 52 Q210 28 210 8 Q210 -16 228 -24 Q246 -32 258 -18 Q270 -4 262 18 Q256 34 254 52 Z"
      stroke="white" strokeWidth="2.5" fill="#0d0d0d"
      strokeDasharray="280" strokeDashoffset="280"
    />
    <line className="stroke-draw" x1="234" y1="54" x2="252" y2="54"
      stroke="white" strokeWidth="2.5" strokeLinecap="round"
      strokeDasharray="18" strokeDashoffset="18" />
    <line className="stroke-draw" x1="236" y1="64" x2="250" y2="64"
      stroke="white" strokeWidth="2.5" strokeLinecap="round"
      strokeDasharray="14" strokeDashoffset="14" />
    {/* Filament */}
    <path className="stroke-draw"
      d="M236 44 Q242 32 243 22 Q243 16 243 22 Q243 32 249 44"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"
      strokeDasharray="60" strokeDashoffset="60" />
    {/* Rays */}
    <line data-fadein className="fade-el" x1="266" y1="10" x2="278" y2="2"
      stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="272" y1="26" x2="286" y2="26"
      stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="266" y1="42" x2="278" y2="50"
      stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0" />
  </svg>
);

const ProduceSVG = () => (
  <svg
    id="svg-produce"
    className="absolute inset-0 w-full h-full opacity-0"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Camera body */}
    <rect className="stroke-draw" x="40" y="90" width="170" height="120" rx="10"
      stroke="white" strokeWidth="2.5"
      strokeDasharray="580" strokeDashoffset="580" />
    {/* Viewfinder bump */}
    <rect className="stroke-draw" x="90" y="72" width="70" height="24" rx="6"
      stroke="white" strokeWidth="2"
      strokeDasharray="188" strokeDashoffset="188" />
    {/* Lens rings */}
    <circle className="stroke-draw" cx="135" cy="150" r="44"
      stroke="white" strokeWidth="2.5"
      strokeDasharray="276" strokeDashoffset="276" />
    <circle className="stroke-draw" cx="135" cy="150" r="30"
      stroke="rgba(255,255,255,0.55)" strokeWidth="1.8"
      strokeDasharray="188" strokeDashoffset="188" />
    <circle className="stroke-draw" cx="135" cy="150" r="14"
      stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"
      strokeDasharray="88" strokeDashoffset="88" />
    {/* Glint */}
    <circle data-fadein className="fade-el" cx="120" cy="136" r="4"
      fill="rgba(255,255,255,0.7)" opacity="0" />
    {/* Shutter button */}
    <circle className="stroke-draw" cx="192" cy="100" r="8"
      stroke="white" strokeWidth="2"
      strokeDasharray="50" strokeDashoffset="50" />
    {/* AI node graph – floats beside camera */}
    <circle data-fadein className="fade-el" cx="230" cy="100" r="8"
      stroke="white" strokeWidth="2" fill="none" opacity="0" />
    <circle data-fadein className="fade-el" cx="256" cy="124" r="8"
      stroke="white" strokeWidth="2" fill="none" opacity="0" />
    <circle data-fadein className="fade-el" cx="256" cy="156" r="8"
      stroke="white" strokeWidth="2" fill="none" opacity="0" />
    <line data-fadein className="fade-el" x1="238" y1="100" x2="248" y2="124"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="256" y1="132" x2="256" y2="148"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="238" y1="102" x2="248" y2="154"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" opacity="0" />
    {/* Record dot */}
    <circle data-fadein className="fade-el" cx="62" cy="100" r="6"
      fill="#eb5939" opacity="0" />
  </svg>
);

const DeliverSVG = () => (
  <svg
    id="svg-deliver"
    className="absolute inset-0 w-full h-full opacity-0"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect className="stroke-draw" x="80" y="80" width="130" height="90" rx="8"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"
      strokeDasharray="440" strokeDashoffset="440" />
    <rect className="stroke-draw" x="66" y="66" width="130" height="90" rx="8"
      stroke="rgba(255,255,255,0.55)" strokeWidth="1.8"
      strokeDasharray="440" strokeDashoffset="440" />
    <rect className="stroke-draw" x="52" y="52" width="130" height="90" rx="8"
      stroke="white" strokeWidth="2.5"
      strokeDasharray="440" strokeDashoffset="440" />
    <polygon
      className="stroke-draw"
      points="90,68 90,116 136,92"
      stroke="white" strokeWidth="2.5" strokeLinejoin="round"
      strokeDasharray="150" strokeDashoffset="150"
    />
    <path className="stroke-draw"
      d="M195 92 L230 92 L230 148"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="96" strokeDashoffset="96" />
    <polyline className="stroke-draw"
      points="218,138 230,150 242,138"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="34" strokeDashoffset="34" />
    <rect className="stroke-draw" x="152" y="160" width="36" height="22" rx="4"
      stroke="white" strokeWidth="2"
      strokeDasharray="116" strokeDashoffset="116" />
    <rect className="stroke-draw" x="198" y="160" width="36" height="22" rx="4"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"
      strokeDasharray="116" strokeDashoffset="116" />
    <rect className="stroke-draw" x="244" y="160" width="36" height="22" rx="4"
      stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"
      strokeDasharray="116" strokeDashoffset="116" />
    <polyline data-fadein className="fade-el"
      points="160,171 167,178 180,164"
      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      opacity="0" />
    <line data-fadein className="fade-el" x1="190" y1="60" x2="218" y2="60"
      stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="190" y1="70" x2="230" y2="70"
      stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
    <line data-fadein className="fade-el" x1="190" y1="80" x2="210" y2="80"
      stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0" />
  </svg>
);

const process = [
  {
    title: "BRIEF",
    vid: "/videos/brief.mp4",
    desc: "You share the story, references, and deadline. We understand the vision, tone, and platform goals before moving into concept development."
  },
  {
    title: "CONCEPT",
    vid: "/videos/concept.mp4",
    desc: "We craft moodboards, visual directions, and storyboards while building the AI pipeline that will drive the production process."
  },
  {
    title: "PRODUCE",
    vid: "/videos/produce.mp4",
    desc: "Shoot, generate, and composite visuals with rapid iterations. A hybrid workflow combining real production and AI to move fast."
  },
  {
    title: "DELIVER",
    vid: "/videos/deliver.mp4",
    desc: "Final cut, platform-ready exports, and reusable assets delivered. Optimized for multiple formats so your content keeps working everywhere."
  }
];

const SVGS = [BriefSVG, ConceptSVG, ProduceSVG, DeliverSVG];
const SVG_IDS = ["svg-brief", "svg-concept", "svg-produce", "svg-deliver"];

const StickyProcess = () => {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const BEATS = 5;
    const BEAT_SIZE = 1 / BEATS;
    const EXIT_WINDOW = 0.06;
    const ENTER_OFFSET = EXIT_WINDOW;

    SVG_IDS.forEach((id, i) => {
      const svg = document.getElementById(id);
      if (!svg) return;

      const strokes = svg.querySelectorAll(".stroke-draw");
      const fades = svg.querySelectorAll(".fade-el");

      const beatStart = (i + 1) * BEAT_SIZE;

      // Exit previous SVG
      if (i > 0) {
        const prevSvg = document.getElementById(SVG_IDS[i - 1]);
        if (prevSvg) {
          masterTL.add(
            gsap.to(prevSvg, {
              opacity: 0,
              y: -40,
              duration: EXIT_WINDOW,
              ease: "power2.in",
            }),
            beatStart
          );
        }
      }

      const enterStart = beatStart + ENTER_OFFSET;

      masterTL.add(
        gsap.fromTo(svg, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.03 }),
        enterStart
      );

      strokes.forEach((el, j) => {
        const dashLen = parseFloat(el.getAttribute("stroke-dasharray") || "0");
        masterTL.add(
          gsap.fromTo(
            el,
            { strokeDashoffset: dashLen },
            { strokeDashoffset: 0, duration: 0.1, ease: "power2.out" }
          ),
          enterStart + 0.02 + j * 0.01
        );
      });

      fades.forEach((el, j) => {
        masterTL.add(
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.05 }),
          enterStart + 0.02 + strokes.length * 0.01 + j * 0.008
        );
      });

      // ❌ Removed last exit animation
    });

  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="w-full h-[calc(100vh+103vw+10rem)] flex ">

      <div className="w-1/2 sticky top-0 h-screen bg-[#eb5939] flex items-center justify-center">
        <div className="w-[88%] aspect-square overflow-hidden flex items-center justify-center rounded-full bg-[#0d0d0d] relative">
          <div className="w-[75%] relative center h-[75%]">
            <BriefSVG />
            <ConceptSVG />
            <ProduceSVG />
            <DeliverSVG />
          </div>
        </div>
      </div>

      <div className="w-1/2 px-20 border border-[#eb5939] border-b">

        <div className="h-screen space-y-10 flex flex-col justify-center">
          <p className="text-7xl uppercase font-semibold leading-none">
            Why <br /> <span className="text-[#eb5939]">Choose</span> <br />Us
          </p>
          <p className="text-lg w-[80%]">
            From concept to final cut—AI-assisted storytelling that scales.
            Fast turnarounds, cinematic finish.
          </p>
        </div>

        {process.map((service, i) => (
          <div
            key={i}
            className="serv_slide h-[25vw] flex flex-col justify-center space-y-5"
          >
            <p className="font-thin uppercase pp_neue text-sm">Step {i + 1}</p>
            <p className="text-4xl text-[#eb5939] leading-none font-medium">
              {service.title}
            </p>
            <p className="text-lg leading-tight w-[80%]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyProcess;