"use client";

import { useEffect, useRef, useState } from "react";

export default function InfiniteParallax({
  children,
  draggable = true,
  className = "",
  ariaLabel = "Vertical draggable marquee",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isTouchRef = useRef(false);

  const [contentHeight, setContentHeight] = useState(0);

  const position = useRef(0);
  const velocity = useRef(0);

  const isSnapping = useRef(false);
  const snapTarget = useRef(null);
  const hasSettled = useRef(false);

  const isDragging = useRef(false);
  const lastY = useRef(0);

  const introStarted = useRef(false);

  useEffect(() => {
    if (!trackRef.current) return;
    const observer = new ResizeObserver(() => {
      setContentHeight(trackRef.current.scrollHeight / 2);
    });
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!contentHeight) return;
    if (!introStarted.current) {
      introStarted.current = true;
      const friction = 0.10; 
      const targetDistance = window.innerHeight * 2.302; 
      velocity.current = -(targetDistance * (1 - friction)); 
    }

    let raf;

    const getNearestSlideOffset = () => {
      const allSlides = Array.from(
        trackRef.current.querySelectorAll(".parallax-slide")
      );
      const totalSlides = allSlides.length;
      const firstCopySlides = allSlides.slice(0, totalSlides / 2);

      const viewportCenter = window.innerHeight / 2;

      let best = null;
      let bestDist = Infinity;

      firstCopySlides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.top + rect.height / 2;
        const dist = Math.abs(slideCenter - viewportCenter);

        if (dist < bestDist) {
          bestDist = dist;
          best = position.current + (viewportCenter - slideCenter);
        }
      });
      if (best !== null) {
        best = best % contentHeight;
        if (best >= 0) best -= contentHeight;
        if (best <= -contentHeight) best += contentHeight;
      }

      return best;
    };

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;
      const slides = trackRef.current.querySelectorAll(".parallax-slide");

      slides.forEach((slide) => {
        const parallaxEls = slide.querySelectorAll("[data-parallax]");
        parallaxEls.forEach((el) => {
          const multiplier = parseFloat(el.dataset.parallax) || 0.4;
          const rect = slide.getBoundingClientRect();
          const slideCenter = rect.top + rect.height / 2;
          const distance = slideCenter - viewportCenter;

          if (el.tagName === "IMG") {
            el.style.transform = `translateY(${distance * -multiplier}px) scale(1.3)`;
          } else {
            el.style.transform = `translateY(${distance * -multiplier}px)`;
          }
        });
      });
    };

    const animate = () => {
      if (!isDragging.current) {
        const speed = Math.abs(velocity.current);

        if (speed < 0.5 && !isSnapping.current && !hasSettled.current) {
          velocity.current = 0;

          if (position.current <= -contentHeight) position.current += contentHeight;
          else if (position.current >= 0) position.current -= contentHeight;
          trackRef.current.style.transform = `translateY(${position.current}px)`;

          isSnapping.current = true;
          snapTarget.current = getNearestSlideOffset();
        }

        if (isSnapping.current && snapTarget.current !== null) {
          velocity.current = 0;
          const diff = snapTarget.current - position.current;

          if (Math.abs(diff) < 0.3) {
            position.current = snapTarget.current;
            isSnapping.current = false;
            hasSettled.current = true;
            snapTarget.current = null;
          } else {
            position.current += diff * 0.08;
          }
        } else if (!isSnapping.current && !hasSettled.current) {
          position.current += velocity.current;
          velocity.current *= isTouchRef.current ? 0.92 : 0.96;
        }
      }

      if (position.current <= -contentHeight) position.current += contentHeight;
      else if (position.current >= 0) position.current -= contentHeight;

      trackRef.current.style.transform = `translateY(${position.current}px)`;
      updateParallax();

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [contentHeight]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      isSnapping.current = false;
      snapTarget.current = null;
      hasSettled.current = false;
      velocity.current += -e.deltaY * 0.05;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (!draggable || !containerRef.current) return;
    const el = containerRef.current;

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDragging.current = true;
      lastY.current = e.clientY;
      isTouchRef.current = e.pointerType === "touch";
      isSnapping.current = false;
      snapTarget.current = null;
      hasSettled.current = false;
      el.setPointerCapture(e.pointerId);
      el.classList.remove("cursor-grab");
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const delta = e.clientY - lastY.current;
      const multiplier = isTouchRef.current ? 2.5 : 0.6;
      velocity.current = delta * multiplier;
      position.current += delta;
      lastY.current = e.clientY;
    };

    const stopDrag = (e) => {
      isDragging.current = false;
      try { el.releasePointerCapture(e.pointerId); } catch { }
      el.classList.remove("cursor-grabbing");
      el.classList.add("cursor-grab");
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

  return (
    <div
      ref={containerRef}
      role="marquee"
      aria-live="off"
      aria-label={ariaLabel}
      className={`h-full overflow-y-clip marquee-no-select ${draggable ? "cursor-grab" : ""} ${className}`}
    >
      <div ref={trackRef} className="flex flex-col select-none will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}