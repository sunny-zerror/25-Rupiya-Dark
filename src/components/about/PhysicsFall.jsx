"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger);

const SHAPES = [
    { type: "square", size: 128, color: "#21935b" },
    { type: "circle", size: 80, color: "#fecc33" },
    { type: "pill", text: "Founded in 2023", size: 28 },
    { type: "square", size: 128, color: "#fecc33" },
    { type: "pill", text: "24hr Turnaround", size: 28 },
    { type: "pill", text: "100M+ Views", size: 48 },
    { type: "circle", size: 176, color: "#b7ab98" },
    { type: "triangle", size: 140, color: "#b7ab98" },
    { type: "pill", text: "50+ Projects", size: 28 },
    { type: "hexagon", size: 240, color: "#30a81d" },
    { type: "pill", text: "15k+ Ads", size: 28 },
];

export default function PhysicsSection() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const bodiesRef = useRef([]);
    const engineRef = useRef(null);
    const runnerRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const config = {
            gravity: { x: 0, y: 1 },
            restitution: 0.5,
            friction: 0.15,
            frictionAir: 0.02,
            density: 0.002,
            wallThickness: 200,
            mouseStiffness: 0.6,
        };

        const clamp = (val, min, max) =>
            Math.max(min, Math.min(max, val));

        const {
            Engine,
            World,
            Bodies,
            Runner,
            Mouse,
            MouseConstraint,
        } = Matter;

        // 🔹 Create engine ONCE
        const engine = Engine.create();
        engine.gravity = config.gravity;
        engineRef.current = engine;

        const containerRect = container.getBoundingClientRect();
        const wallThickness = config.wallThickness;

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
                containerRect.height + wallThickness * 2,
                { isStatic: true }
            ),
            Bodies.rectangle(
                containerRect.width + wallThickness / 2,
                containerRect.height / 2,
                wallThickness,
                containerRect.height + wallThickness * 2,
                { isStatic: true }
            ),
        ];

        World.add(engine.world, walls);

        const objects = container.querySelectorAll(".object");

        objects.forEach((obj, index) => {
            const rect = obj.getBoundingClientRect();

            const startX =
                Math.random() * (containerRect.width - rect.width) +
                rect.width / 2;

            const startY = -200;

            const body = Bodies.rectangle(
                startX,
                startY,
                rect.width,
                rect.height,
                {
                    frictionAir: config.frictionAir,
                    friction: config.friction,
                    density: config.density,
                    restitution: config.restitution,
                }
            );

            bodiesRef.current.push({
                body,
                element: obj,
                width: rect.width,
                height: rect.height,
            });

            World.add(engine.world, body);
        });

        const mouse = Mouse.create(container);

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: config.mouseStiffness },
        });

        World.add(engine.world, mouseConstraint);

        // 🔹 Runner created but NOT started
        const runner = Runner.create();
        runnerRef.current = runner;

        // 🔹 DOM Sync
        const update = () => {
            bodiesRef.current.forEach(
                ({ body, element, width, height }) => {
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
                }
            );

            animationFrameRef.current =
                requestAnimationFrame(update);
        };

        update();

        const resetBodies = () => {
            bodiesRef.current.forEach(({ body, width }) => {
                const startX =
                    Math.random() * (containerRect.width - width) +
                    width / 2;

                const startY = -200;

                Matter.Body.setPosition(body, { x: startX, y: startY });
                Matter.Body.setVelocity(body, { x: 0, y: 0 });
                Matter.Body.setAngularVelocity(body, 0);
                Matter.Body.setAngle(body, 0);
            });
        };

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
            <div ref={sectionRef} className=" physics_fall padding relative w-full h-screen  flex flex-col justify-center  overflow-hidden">
                <p className=" text_anim text-8xl w-fit mask-trigger  relative z-10 leading-none uppercase  font-semibold mb-20">
                    WHO <br /> <span className="text-[#eb5939]">we</span> ARE
                </p>
                <p className=" text_anim w-[25%]  text-xl  leading-none font-medium">
                    Our name is a playful nod to the idea that world-class production doesn&apos;t have to cost a fortune.
                </p>
                <p className=" text_anim w-[25%]  mt-5 text-xl leading-none font-medium">
                    we bring the same obsessive attention to detail to every project.
                </p>
                <div
                    ref={containerRef}
                    className="absolute flex  right-0 w-full h-full"
                >
                    {SHAPES.map((s, i) => (
                        <div key={i} className=" object physics_inner  absolute w-max select-none cursor-grab active:cursor-grabbing">
                            <Shape shape={s} />
                        </div>
                    ))}
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
                className={`${base} ${patternClass} border-2 rounded-full text-4xl w-fit whitespace-nowrap text-[#000000] font-medium`}
                style={{
                    padding: "1rem 2rem",
                    backgroundColor: "#eb5939",
                }}
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

    if (shape.type === "hexagon") {
        return (
            <svg
                viewBox="0 0 374 324"
                className={`${base} ${patternClass}`}
                style={{ width: shape.size }}
            >
                <path
                    d="M374 161.947L280.5 323.894H93.5L0 161.947L93.5 0L280.5 0L374 161.947Z"
                    fill={shape.color || "#30a81d"}
                />
            </svg>
        );
    }

    return null;
}