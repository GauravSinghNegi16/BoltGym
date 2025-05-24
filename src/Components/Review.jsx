import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Rohit Sharma",
    feedback:
      "This gym has completely transformed my routine. The trainers genuinely care about your progress!",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Priya Mehra",
    feedback:
      "Clean, well-equipped, and welcoming environment. I feel more energetic and confident than ever!",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Suresh Patel",
    feedback:
      "Affordable fees and expert guidance. Highly recommended for anyone starting their fitness journey.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Review = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".review-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // when top of card hits 80% of viewport height
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-black px-5 py-10 text-white lg:px-[6%]">
      <h2 className="text-5xl font-bold font-[myHeadingfont] mb-4 capitalize lg:text-[3.5vw]">
        member reviews
      </h2>
      <p className="text-lg text-gray-300 font-[myParafont] mb-10 lg:text-[1.3vw]">
        Real stories. Real results. Hear from our gym members.
      </p>

      <div ref={containerRef} className="flex flex-col gap-6">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="review-card bg-[#1a1a1a] rounded-2xl p-5 shadow-md border border-[#2e2e2e] flex gap-4 items-start"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#e4ff1a]"
            />
            <div className="flex flex-col">
              <p className="text-md font-[myParafont] mb-2">"{item.feedback}"</p>
              <h4 className="text-[#e4ff1a] font-medium text-2xl font-[myHeadingfont]">
                {item.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;
