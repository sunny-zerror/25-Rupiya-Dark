'use client'

import { use, useEffect, useRef } from "react";
import gsap from "gsap";
import useMousePosition from "@/app/utils/useMousePosition";

export default function MaskReveal({ children }) {

    const { x, y } = useMousePosition();

    const maskRef = useRef(null);

    const cursor = useRef({
        current: { x: 0, y: 0 },
        target: { x: 0, y: 0 },
        size: 30
    });

    const render = () => {

        const rect = maskRef.current?.parentElement?.getBoundingClientRect();
        if (!rect) return;

        const relativeX = cursor.current.target.x - rect.left;
        const relativeY = cursor.current.target.y - rect.top;

        cursor.current.current.x = gsap.utils.interpolate(
            cursor.current.current.x,
            relativeX,
            0.15
        );

        cursor.current.current.y = gsap.utils.interpolate(
            cursor.current.current.y,
            relativeY,
            0.15
        );

        if (maskRef.current) {

            maskRef.current.style.setProperty(
                "--x",
                `${cursor.current.current.x}px`
            );

            maskRef.current.style.setProperty(
                "--y",
                `${cursor.current.current.y}px`
            );

            maskRef.current.style.setProperty(
                "--size",
                `${cursor.current.size}px`
            );
        }
    };
    
    useEffect(() => {

        gsap.ticker.add(render);

        const enter = () => {
            gsap.killTweensOf(cursor.current);

            gsap.to(cursor.current, {
                size: 450,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const leave = () => {
            gsap.killTweensOf(cursor.current);

            gsap.to(cursor.current, {
                size: 30,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const triggers = document.querySelectorAll(".mask-trigger");

        triggers.forEach(el => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => {
            gsap.ticker.remove(render);

            triggers.forEach(el => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };

    }, []);

    useEffect(() => {
        cursor.current.target.x = x;
        cursor.current.target.y = y;
    }, [x, y]);

    useEffect(() => {
        window.addEventListener("mousemove", () => {
            gsap.to(maskRef.current, {
                opacity: 1,
                delay: .5
            })
        })
    }, []);

    return (
        <div
            ref={maskRef}
            className="mask-layer opacity-0 absolute inset-0"
        >
            {children}
        </div>
    );
}