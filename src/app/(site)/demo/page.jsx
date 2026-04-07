"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = [
  {
    id: "01",
    title: "Film",
    class: "col-span-3",
    vid: "/videos/music_vid.mp4",
    desc: "We make sure it’s the right one.",
    descArray: ["We care about the details - because in the end,", "that is what matters the most.", "Every frame is a choice."],
    tags: ["WEB/TV SPOTS", "BRAND VIDEOS", "PRODUCT videos"],
    lottie: "/lottie/film.json"
  },
  {
    id: "02",
    title: "Photo",
    class: "col-span-2",
    vid: "/videos/brand_film.mp4",
    desc: "We let it be remembered.",
    descArray: ["There’s a story in every moment.", "Nothing added. Nothing lost.", "Each frame, carefully seen."],
    tags: ["editorial", "action", "LIFESTYLE"],
    lottie: "/lottie/photo.json"
  },
  {
    id: "03",
    title: "CGI/VFX",
    class: "col-span-2",
    vid: "/videos/ai_contant.mp4",
    desc: "We just bring any vision to life.",
    descArray: ["Ideas made visible.", "Footage transformed.", "Creating what can’t be filmed."],
    tags: ["ANIMATION", "VISUAL EFFECTS", "compositing"],
    lottie: "/lottie/vfx.json"
  },
  {
    id: "04",
    title: "PRODUCTION",
    class: "col-span-3",
    vid: "/videos/ai_social.mp4",
    desc: " You can now focus on your story.",
    descArray: ["Ideas need space to grow.", "From first shot to final frame,", "we handle the moving parts."],
    tags: ["Art Buying", "CASTING", "location"],
    lottie: "/lottie/production.json"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const playersRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allAnims = [];

      playersRef.current.forEach((playerEl, i) => {
        const cardEl = cardsRef.current[i];
        if (!playerEl || !cardEl) return;

        gsap.set(playerEl, { opacity: 0 });

        const handleReady = () => {
          const anim = playerEl.getLottie();
          if (!anim) return;

          allAnims.push(anim);
          const totalFrames = anim.getDuration(true);

          ScrollTrigger.create({
            trigger: cardEl,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,

            onUpdate: (self) => {
              const progress = self.progress;
              const frame = progress * totalFrames;

              anim.goToAndStop(frame, true);

              playersRef.current.forEach((el, index) => {
                if (!el) return;

                if (index === i && progress > 0 && progress < 1) {
                  gsap.to(el, { opacity: 1, duration: 0.2 });
                } else {
                  gsap.to(el, { opacity: 0, duration: 0.2 });
                }
              });
            },
          });
        };

        playerEl.addEventListener("ready", handleReady);

        return () => {
          playerEl.removeEventListener("ready", handleReady);
        };
      });

      const handleResize = () => {
        allAnims.forEach((anim) => anim?.resize && anim.resize());
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" text-[#0d0d0d] w-full h-[400vh] flex bg-[#EBEBEB]">

      <div className="w-1/2 padding py-0!">
        {Services.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="h-screen flex flex-col justify-center gap-y-10"
          >
            <h2 className="uppercase  font-medium text-5xl md:text-7xl"> {item.title}</h2>
            <div className="">
            {item.descArray.map((item, i) => (
              <p key={i} className="leading-tight text-xl w-[35rem]">
                {item}
              </p>
            ))}
            </div>
            <p className="leading-tight text-xl font-semibold  w-[35rem]">{item.desc}</p>

            <div className="w-full flex items-center justify-between pr-24">
              {item.tags.map((tag, i) => (
                <p key={i} className="text-lg uppercase ">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT STICKY LOTTIE */}
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          {Services.map((item, i) => (
            <lottie-player
              key={item.id}
              ref={(el) => (playersRef.current[i] = el)}
              src={item.lottie}
              background="transparent"
              speed="1"
              renderer="canvas"
              autoplay={false}
              loop={false}
              className="absolute inset-0"
              style={{ opacity: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}