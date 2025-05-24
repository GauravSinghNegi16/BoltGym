import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white px-5 py-10 font-[myParafont] relative lg:px-[6%]">
      {/* Back button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white text-2xl hover:text-[#e4ff1a] transition-all duration-200 z-50 flex items-center gap-2"
        aria-label="Go back"
        whileHover={{ scale: 1.1 }}
      >
        <FaArrowLeft />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <motion.div
        className="max-w-2xl mx-auto h-full flex flex-col justify-center gap-10 mt-[5%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Header */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          custom={1}
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-[myHeadingfont] text-[#e4ff1a] uppercase">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-base">
            Whether you have a question or want to start your fitness journey with Bolt, feel free to reach out.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="w-full flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((val, idx) => {
            const baseProps = {
              className:
                "w-full px-4 py-3 rounded-lg bg-zinc-900 text-white border border-zinc-700 placeholder-gray-400 focus:outline-none focus:border-[#e4ff1a]",
              variants: fadeInUp,
              custom: idx + 2,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
            };
            return idx === 2 ? (
              <motion.textarea
                key={idx}
                rows="4"
                placeholder="Your Message"
                className={`${baseProps.className} resize-none`}
                {...baseProps}
              />
            ) : (
              <motion.input
                key={idx}
                type={idx === 0 ? "text" : "email"}
                placeholder={idx === 0 ? "Your Name" : "Your Email"}
                {...baseProps}
              />
            );
          })}

          {/* Submit button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-[#e4ff1a] text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="text-sm text-gray-400 text-center"
          variants={fadeInUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          📍 Bolt Gym, Sector 21, Your City <br />
          📞 +91 9876543210 &nbsp;&nbsp; | &nbsp;&nbsp; ✉️ boltfitness@email.com
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
