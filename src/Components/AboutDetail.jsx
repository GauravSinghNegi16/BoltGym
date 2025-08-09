import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black text-white px-5 py-10 font-[myParafont] relative lg:px-[6%]">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white text-2xl hover:text-[#e4ff1a] transition-all duration-200 z-50 flex items-center gap-2"
        aria-label="Go back"
      >
        <FaArrowLeft />
      </button>

      {/* Section 1 */}
      <motion.div
        className="mb-10 mt-[5%]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-[myHeadingfont] font-bold text-[#e4ff1a] uppercase">About Bolt</h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
          Welcome to <span className="text-white font-semibold">Bolt</span> – where strength meets spirit. We’re more than just a gym; we’re a community
          focused on helping you become the best version of yourself. From beginners to athletes, Bolt offers state-of-the-art equipment, expert trainers,
          and a motivating environment to keep you going strong.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="mb-10"
        variants={fadeInUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#e4ff1a] mb-3">Our Facilities</h2>
        <ul className="space-y-2 text-gray-300">
          {[
            "🏋️ Modern Strength & Cardio Equipment",
            "🧘‍♀️ Yoga & Aerobics Studio",
            "🥊 Boxing Zone",
            "🚿 Clean Changing Rooms & Showers",
            "☕ Smoothie & Nutrition Bar",
          ].map((facility, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.02, color: "#ffffff" }}
              className="transition-colors duration-200"
            >
              {facility}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="mb-10"
        variants={fadeInUp}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#e4ff1a] mb-3">Why Choose Bolt?</h2>
        <p className="text-gray-300">
          At Bolt, we focus on personalized fitness journeys. With professional trainers, flexible timings, and engaging programs, we make sure your
          fitness goals are always in focus. Our environment is supportive, inclusive, and electric with energy.
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        variants={fadeInUp}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#e4ff1a] mb-3">Membership Plans</h2>
        <ul className="text-gray-300 space-y-2">
          {[
            "💥 Monthly Plan – ₹1,499",
            "🔥 Quarterly Plan – ₹4,199",
            "⚡ Yearly Plan – ₹14,999",
            "🎁 Free trial available",
          ].map((plan, i) => (
            <motion.li key={i} whileHover={{ scale: 1.02, color: "#ffffff" }} className="transition">
              {plan}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutDetail;
