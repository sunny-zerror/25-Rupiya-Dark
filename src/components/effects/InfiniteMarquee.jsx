"use client";

import { useEffect, useRef, useState } from "react";

export default function InfiniteMarquee({
    children,
    speed = 60,
    draggable = true,
    className = "",
    ariaLabel = "Auto-scrolling marquee",
}) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const isTouchRef = useRef(false);
    const isPaused = useRef(false);
    const direction = useRef(-1);

    const [contentWidth, setContentWidth] = useState(0);

    const position = useRef(0);
    const velocity = useRef(0);

    const isDragging = useRef(false);
    const lastX = useRef(0);

    useEffect(() => {
        if (!trackRef.current) return;

        const observer = new ResizeObserver(() => {
            setContentWidth(trackRef.current.scrollWidth / 2);
        });

        observer.observe(trackRef.current);
        return () => observer.disconnect();
    }, []);

    /* Animation loop */
    useEffect(() => {
        if (!contentWidth) return;

        let raf;
        let lastTime = performance.now();

        const animate = (time) => {
            const delta = (time - lastTime) / 1000;
            lastTime = time;

            if (!isDragging.current && !isPaused.current) {
                position.current += direction.current * speed * delta;
            }

            position.current += velocity.current;
            velocity.current *= isTouchRef.current ? 0.92 : 0.95;

            if (position.current <= -contentWidth) {
                position.current += contentWidth;
            } else if (position.current >= 0) {
                position.current -= contentWidth;
            }

            trackRef.current.style.transform = `translateX(${position.current}px)`;
            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [contentWidth, speed]);

    useEffect(() => {
        if (!draggable || !containerRef.current) return;

        const el = containerRef.current;

        const onPointerDown = (e) => {
            if (e.pointerType === "mouse" && e.button !== 0) return;

            isDragging.current = true;
            lastX.current = e.clientX;

            // ✅ detect touch once
            isTouchRef.current = e.pointerType === "touch";

            el.setPointerCapture(e.pointerId);

            el.classList.remove("cursor-grab");
            el.classList.add("cursor-grabbing");
        };

        const onPointerMove = (e) => {
            if (!isDragging.current) return;

            const delta = e.clientX - lastX.current;

            const multiplier = isTouchRef.current ? 3 : 0.6;
            velocity.current = delta * multiplier;

            if (delta !== 0) {
                direction.current = delta > 0 ? 1 : -1;
            }

            lastX.current = e.clientX;
        };

        const stopDrag = (e) => {
            isDragging.current = false;

            try {
                el.releasePointerCapture(e.pointerId);
            } catch { }

            el.classList.remove("cursor-grabbing");
            el.classList.add("cursor-grab");

            if (velocity.current !== 0) {
                direction.current = velocity.current > 0 ? 1 : -1;
            }
        };

        el.addEventListener("pointerdown", onPointerDown);
        el.addEventListener("pointermove", onPointerMove);
        el.addEventListener("pointerup", stopDrag);
        el.addEventListener("pointercancel", stopDrag);
        el.addEventListener("pointerleave", stopDrag);

        return () => {
            el.removeEventListener("pointerdown", onPointerDown);
            el.removeEventListener("pointermove", onPointerMove);
            el.removeEventListener("pointerup", stopDrag);
            el.removeEventListener("pointercancel", stopDrag);
            el.removeEventListener("pointerleave", stopDrag);
        };
    }, [draggable]);

    useEffect(() => {
        if (!containerRef.current) return;

        const el = containerRef.current;

        const onWheel = (e) => {
            const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
            if (!horizontal) return;

            e.preventDefault();

            velocity.current -= e.deltaX * 0.1;
        };

        el.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", onWheel);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            role="marquee"
            aria-live="off"
            aria-label={ariaLabel}
            className={`w-full overflow-x-clip marquee-no-select ${draggable ? "cursor-grab" : ""
                } ${className}`}
        >
            <div
                ref={trackRef}
                className="inline-flex select-none will-change-transform"
            >
                {children}
                {children}
            </div>
        </div>
    );
}