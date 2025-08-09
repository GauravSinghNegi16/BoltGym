import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-5 py-10 bg-black text-white font-[myParafont] lg:px-[6%]">

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h1 className="text-6xl font-semibold font-[myHeadingfont] mb-3 lg:text-[5vw]">About Us</h1>
        <p className="text-lg lg:text-[1.3vw]">
          At <span className="font-normal text-[#e4ff1a]">Bolt</span>, we don’t just build bodies – we build confidence, strength, and community.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-8">
        <h2 className="text-4xl font-semibold font-[myHeadingfont] mb-2 lg:text-[3.5vw]">Our Mission</h2>
        <p className="text-lg lg:text-[1.3vw]">
          To help everyone achieve their fitness goals through expert guidance, powerful workouts, and a motivating environment.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-8">
        <h2 className="text-4xl font-semibold font-[myHeadingfont] mb-4 lg:text-[3.5vw]">Why Choose Us?</h2>
        <ul className="space-y-3">
          {["Certified Trainers", "Modern Equipment", "Personalized Plans", "Open 7 Days a Week"].map((item, index) => (
            <motion.li
              key={index}
              className="bg-[#1f1f1f] p-3 rounded-lg hover:bg-[#2b2b2b] transition"
              whileHover={{ scale: 1.02 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={fadeInUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} className="my-8">
        <h2 className="text-4xl font-semibold font-[myHeadingfont] mb-2 lg:text-[3.5vw]">Meet Our Trainer</h2>
        <div className="bg-[#1f1f1f] p-4 rounded-lg">
          <p className="text-2xl font-semibold lg:text-[2vw]">Rahul Singh</p>
          <p className="lg:text-[1.3vw]">7+ years of experience | ISSA Certified | Transformation Specialist</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 bg-[#e4ff1a] text-black p-5 rounded-xl text-center"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl font-semibold font-[myHeadingfont] mb-2">Ready to Begin?</h2>
        <p className="text-lg">Join Bolt today and transform your fitness journey!</p>
      </motion.div>
    </div>
  );
};

export default About;
