"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useMousePosition from "@/app/utils/useMousePosition";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  const [isOnOrange, setIsOnOrange] = useState(false);
  const cursorRef = useRef(null);
  const starRef = useRef(null);
  const handRef = useRef(null);
  const [isMask, setIsMask] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const pos = useRef({
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
  });

  const render = () => {
    pos.current.current.x = gsap.utils.interpolate(
      pos.current.current.x,
      pos.current.target.x,
      0.15
    );

    pos.current.current.y = gsap.utils.interpolate(
      pos.current.current.y,
      pos.current.target.y,
      0.15
    );

    if (cursorRef.current) {
      gsap.set(cursorRef.current, {
        x: pos.current.current.x,
        y: pos.current.current.y,
        xPercent: -50,
        yPercent: -50,
      });
    }
  };

  useEffect(() => {
    gsap.ticker.add(render);
    return () => gsap.ticker.remove(render);
  }, []);

  useEffect(() => {
    pos.current.target.x = x;
    pos.current.target.y = y;
  }, [x, y]);

  useEffect(() => {
    const handleMove = (e) => {
      
      const pointerEl = e.target.closest("button, a, .cursor-pointer");
      setIsPointer(!!pointerEl);

      const maskEl = e.target.closest(".mask-trigger");
      setIsMask(!!maskEl);

      let el = e.target;
      let found = false;

      while (el && el !== document.body) {
        const bg = window.getComputedStyle(el).backgroundColor;

        if (bg === "rgb(235, 89, 57)") {
          found = true;
          break;
        }

        el = el.parentElement;
      }

      setIsOnOrange(found);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleMove);
    window.addEventListener("mouseover", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);


  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      scale: isMask ? 15.5 : 1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [isMask]);

  useEffect(() => {
    if (!starRef.current || !handRef.current) return;

    const color = isOnOrange ? "#000000" : "#eb5939";

    gsap.to([starRef.current, handRef.current], {
      duration: 0.2,
      ease: "power2.out",
      filter: isOnOrange
        ? "brightness(0) saturate(100%)"   // → BLACK
        : "brightness(1) saturate(100%)",  // → ORIGINAL
    });
  }, [isOnOrange]);

  // 🎯 animate svg switch
  useEffect(() => {
    if (!starRef.current || !handRef.current) return;

    if (isPointer) {
      // star → out
      gsap.to(starRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });

      // hand → in
      gsap.fromTo(
        handRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        }
      );
    } else {
      // hand → out
      gsap.to(handRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });

      // star → in
      gsap.fromTo(
        starRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        }
      );
    }
  }, [isPointer]);

  return (
    <div
      ref={cursorRef}
      className=" window_custom_cursor center pointer-events-none fixed top-0 left-0 z-[99999999] size-8 max-sm:hidden!"
      style={{
        transform: "translate3d(0,0,0)",
      }}
    >
      {/* ⭐ STAR (default) */}
      <img
        ref={starRef}
        src="/icons/star.svg"
        alt="cursor"
        className="absolute  w-full h-full"
        style={{ opacity: 1 }}
      />

      {/* ✋ HAND (hover) */}
      <img
        ref={handRef}
        src="/icons/hand_cursor.svg"
        alt="cursor"
        className="absolute  w-full h-full"
        style={{ opacity: 0, transform: "scale(0)" }}
      />
    </div>
  );
}