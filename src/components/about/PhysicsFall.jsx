"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger);

const SHAPES = [
    { type: "square", size: 128, color: "#21935b" },
    { type: "circle", size: 38, color: "#21935b" },
    { type: "circle", size: 80, color: "#fecc33" },
    { type: "circle", size: 100, color: "#d7cab5" },
    { type: "square", size: 128, color: "#fecc33" },
    { type: "pill", text: "Founded in 2023", size: 28 },
    { type: "pill", text: "24hr Turnaround", size: 28 },
    { type: "pill", text: "100M+ Views", size: 48 },
    { type: "circle", size: 176, color: "#d7cab5" },
    { type: "triangle", size: 140, color: "#d7cab5" },
    { type: "pill", text: "50+ Projects", size: 28 },
    { type: "pill", text: "15k+ Ads", size: 28 },
];

export default function PhysicsSection() {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const bodiesRef = useRef([]);
    const engineRef = useRef(null);
    const runnerRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth < 768);
        };

        check(); // initial
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;
        if (isMobile === null) return; // optional safeguard
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const {
            Engine,
            World,
            Bodies,
            Runner,
            Mouse,
            MouseConstraint,
            Body,
        } = Matter;

        const engine = Engine.create();
        engine.gravity.y = 1;

        engineRef.current = engine;

        const getContainerRect = () => container.getBoundingClientRect();

        const containerRect = getContainerRect();
        // ⭐ Walls
        const wallThickness = 200;

        const walls = [
            Bodies.rectangle(
                containerRect.width / 2,
                containerRect.height + wallThickness / 2,
                containerRect.width + wallThickness * 2,
                wallThickness,
                { isStatic: true }
            ),
            Bodies.rectangle(
                -wallThickness / 2,
                containerRect.height / 2,
                wallThickness,
                containerRect.height * 2,
                { isStatic: true }
            ),
            Bodies.rectangle(
                containerRect.width + wallThickness / 2,
                containerRect.height / 2,
                wallThickness,
                containerRect.height * 2,
                { isStatic: true }
            ),
        ];

        World.add(engine.world, walls);

        // ⭐ Create Bodies
        const objects = container.querySelectorAll(".object");

        bodiesRef.current = [];

        objects.forEach((obj, index) => {
            const rect = obj.getBoundingClientRect();
            const containerRect = getContainerRect();

            const startX =
                Math.random() * (containerRect.width - rect.width) +
                rect.width / 2;

            const startY = -200 - index * 120 - Math.random() * 150;

            const body = Bodies.rectangle(
                startX,
                startY,
                rect.width,
                rect.height,
                {
                    restitution: 0.8,
                    friction: 0.05,
                    frictionAir: 0.02,
                    density: Body.create().density,
                }
            );

            bodiesRef.current.push({
                body,
                element: obj,
                width: rect.width,
                height: rect.height,
                index,
            });

            World.add(engine.world, body);
        });

        // ⭐ Mouse Drag
        const mouse = Mouse.create(container);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.9 },
        });

        World.add(engine.world, mouseConstraint);

        // ⭐ Runner
        const runner = Runner.create();
        runnerRef.current = runner;

        // ⭐ DOM Sync Loop
        const clamp = (val, min, max) =>
            Math.max(min, Math.min(max, val));

        const update = () => {
            const containerRect = getContainerRect(); // ✅ dynamic

            bodiesRef.current.forEach(({ body, element, width, height }) => {
                const x = clamp(
                    body.position.x - width / 2,
                    0,
                    containerRect.width - width
                );

                const y = clamp(
                    body.position.y - height / 2,
                    -height * 3,
                    containerRect.height - height
                );

                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
                element.style.transform = `rotate(${body.angle}rad)`;
            });

            animationFrameRef.current = requestAnimationFrame(update);
        };

        update();

        const resetBodies = () => {
            const containerRect = getContainerRect(); // ✅ add

            bodiesRef.current.forEach(({ body, width, index }) => {
                const startX =
                    Math.random() * (containerRect.width - width) +
                    width / 2;

                const startY =
                    -200 - index * 120 - Math.random() * 150;

                Body.setPosition(body, { x: startX, y: startY });
                Body.setVelocity(body, { x: 0, y: 0 });
                Body.setAngularVelocity(body, 0);
                Body.setAngle(body, 0);
            });
        };

        // ⭐ ScrollTrigger
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom top",

            onEnter: () => {
                resetBodies();
                Runner.run(runner, engine);
            },

            onLeave: () => {
                Runner.stop(runner);
            },

            onEnterBack: () => {
                resetBodies();
                Runner.run(runner, engine);
            },

            onLeaveBack: () => {
                Runner.stop(runner);
            },
        });

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            Runner.stop(runner);
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, [isMobile]);

    useEffect(() => {
        const handleResize = () => {
            resetBodies(); // reflow shapes properly
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            <div ref={sectionRef} className=" physics_fall padding relative w-full h-[100svh]  flex flex-col justify-center  overflow-hidden">
                <p className=" text_anim text-5xl md:text-7xl w-fit mask-trigger  leading-none uppercase  font-semibold mb-20">
                    WHO <br /> <span className="text-[#eb5939]">we</span> ARE
                </p>
                <p className=" text_anim md:w-[25%]  text-lg  leading-none font-medium">
                    Our name is a playful nod to the idea that world-class production doesn&apos;t have to cost a fortune.
                </p>
                <p className=" text_anim md:w-[25%]  mt-5 text-lg leading-none font-medium">
                    we bring the same obsessive attention to detail to every project.
                </p>
                <div
                    ref={containerRef}
                    className="absolute inset-0 w-full h-full max-sm:pointer-events-none max-sm:z-[-5] "
                >
                    {SHAPES.map((s, i) => {
                        const finalShape = {
                            ...s,
                            size: isMobile ? s.size / 2 : s.size
                        };

                        return (
                            <div key={i} className="object physics_inner absolute w-max select-none">
                                <Shape shape={finalShape} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

function Shape({ shape }) {
    const base = "physics_item flex items-center justify-center";
    const patternClass = shape.bgPattern ? "bg-pattern" : "";

    if (shape.type === "pill") {
        return (
            <div
                className={`${base} ${patternClass}  border-2 px-4 md:px-8 py-2 md:py-4 bg-[#eb5939] rounded-full text-base md:text-4xl w-fit whitespace-nowrap text-[#000000] font-medium`}
            >
                {shape.text}
            </div>
        );
    }

    if (shape.type === "circle") {
        return (
            <div
                className={`${base} ${patternClass} rounded-full`}
                style={{
                    width: shape.size,
                    height: shape.size,
                    backgroundColor: shape.color || "",
                }}
            />
        );
    }

    if (shape.type === "square") {
        return (
            <div
                className={`${base} ${patternClass}`}
                style={{
                    width: shape.size,
                    height: shape.size,
                    backgroundColor: shape.color || "",
                }}
            />
        );
    }

    if (shape.type === "triangle") {
        return (
            <div
                className={`${base} ${patternClass} triangle_shape bg-[#eb5939]`}
                style={{
                    width: shape.size,
                    height: shape.size,
                }}
            />
        );
    }


    return null;
}