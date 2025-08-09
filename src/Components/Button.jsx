import React from 'react';
import { motion } from 'framer-motion';

function Button({ title }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        backgroundColor: "black",
        color: "#e4ff1a",
        border: "1px solid #e4ff1a"
      }}
      transition={{ duration: 0.3 }}
      className="mt-10 h-12 px-6 bg-[#e4ff1a] text-black font-semibold text-xl capitalize rounded-tl-2xl rounded-br-2xl font-[myButtonfont] mt-3
                 md:h-20 md:text-[4vw] md:px-7
                 lg:text-[2vw] lg:h-16"
    >
      {title}
    </motion.button>
  );
}

export default Button;
