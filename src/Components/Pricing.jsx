import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { LuIndianRupee } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  const data = [
    {
      plan: "basic plan",
      rate: "600",
      sub1: "single personalized plan",
      sub2: "Tailored to fitness",
      sub3: "basic workout",
      sub4: "meal suggestions",
    },
    {
      plan: "pro plan",
      rate: "1200",
      sub1: "personal training",
      sub2: "weight tracking",
      sub3: "meal plan",
      sub4: "progress monitoring",
      sub5: "customizable routines",
    },
    {
      plan: "elite plan",
      rate: "2000",
      sub1: "all pro plan features",
      sub2: "one-on-one coaching",
      sub3: "weekly check-ins",
      sub4: "priority support",
      sub5: "expert guidance",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="w-full bg-black px-4 py-12 text-white font-[myPafont] relative">
      {/* Back button top-left */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white text-2xl hover:text-[#e4ff1a] transition-all duration-200 z-999"
        aria-label="Go back"
      >
        <FaArrowLeft />
      </button>

      <div className="text-center mb-12 mt-[2%]">
        <h1 className="text-4xl sm:text-5xl font-bold font-[myHeadingfont] uppercase text-[#e4ff1a]">
          Pricing Plans
        </h1>
        <p className="mt-3 text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          Choose the perfect plan to match your fitness goals and start your journey today.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-stretch">
        {data.map((elem, index) => {
          const features = [elem.sub1, elem.sub2, elem.sub3, elem.sub4, elem.sub5].filter(Boolean);
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-zinc-200 rounded-3xl px-6 py-6 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] max-w-[350px] flex flex-col justify-between shadow-lg"
            >
              <h2 className="text-2xl text-zinc-800 font-semibold font-[myHeadingfont] text-center capitalize mb-4">
                {elem.plan}
              </h2>

              <div className="flex items-center gap-1 mb-4">
                <LuIndianRupee className="text-black text-2xl" />
                <h3 className="text-2xl font-bold text-black font-[myHeadingfont]">{elem.rate}/</h3>
                <span className="text-base text-gray-700">Month</span>
              </div>

              <ul className="list-disc pl-5 text-gray-800 text-sm mb-6">
                {features.map((f, i) => (
                  <li key={i} className="capitalize mb-1">
                    {f}
                  </li>
                ))}
              </ul>

              {/* Framer motion hover on Button */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Button title={"join now"} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
