import React, { useEffect, useRef, useState } from "react";
import { PiArrowCircleUpBold } from "react-icons/pi";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// LazyImage component to show blur placeholder while loading
function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-center filter transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100 grayscale-0" : "opacity-0 grayscale"
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse filter blur-sm"></div>
      )}
    </div>
  );
}

function Program() {
  const containerRef = useRef(null);

  const data = [
    { url: "/Images/cardio.webp", title: "cardio" },
    { url: "/Images/Strength.jpg", title: "strength" },
    { url: "/Images/yoga.jpg", title: "yoga" },
    { url: "/Images/machines.jpg", title: "machines" },
    { url: "/Images/boxing.jpg", title: "boxing" },
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".program-large-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 80 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black px-4 py-10 md:px-[6%]">
      <div className="w-full mb-12 flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div>
          <h1
            className="text-3xl sm:text-4xl text-white font-semibold font-[myHeadingfont] capitalize
              md:text-[10vw] lg:text-[7vw]"
          >
            transform your
          </h1>
          <h1
            className="text-3xl sm:text-4xl text-white font-semibold font-[myHeadingfont] capitalize
              md:text-[10vw] lg:text-[7vw]"
          >
            fitness journey
          </h1>
        </div>
        <p
          className="text-sm sm:text-base md:text-lg text-white font-[myParafont] capitalize
                md:text-[3vw] md:w-[95%] lg:text-[1.3vw] lg:w-[45%] lg:mt-4"
        >
          Offers customized workout programs designed to help clients achieve their fitness goals, such as weight loss, strength and conditioning and body shaping
        </p>
      </div>

      <div
        ref={containerRef}
        className="w-full min-h-screen flex flex-wrap gap-6 justify-center"
      >
        {data.map((elem, index) => (
          <div
            key={index}
            className={`program-large-card relative bg-black w-full rounded-xl overflow-hidden ${
              index === 0 || index === 1 || index === 4
                ? "md:w-full h-[450px] lg:h-[460px]"
                : "md:w-[48%] h-[350px]"
            }`}
          >
            <LazyImage
              src={elem.url}
              alt={elem.title}
              className="w-full h-full"
            />

            <h1
              className="absolute bottom-3 left-1 text-5xl text-[#e4ff1a] font-semibold font-[myHeadingfont] capitalize
                md:text-[12vw] md:left-3 lg:text-[6vw]"
            >
              {elem.title}
            </h1>

            <div
              className="w-12 h-12 bg-[#e4ff1a] rounded-br-2xl absolute top-0 left-0 flex items-center justify-center
                md:h-24 md:w-24"
            >
              <PiArrowCircleUpBold className="text-black text-4xl md:text-5xl rotate-45" />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <Button
          title={"explore all programs"}
          className="mt-30 mb-16"
          id="programs-btn"
        />
      </div>
    </div>
  );
}

export default Program;
