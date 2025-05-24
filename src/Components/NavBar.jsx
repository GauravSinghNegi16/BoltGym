import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants for menu slide animation
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <div
      className="w-full h-20 absolute px-4 z-9
           md:h-[10vh] md:px-[6%]
           lg:px-[6%]"
    >
      <div className="w-full h-full flex items-center justify-between px-1 relative border-b-2 border-white lg:px-5">
        <div className="logo flex items-center justify-center gap-1">
          <span>
            <AiOutlineThunderbolt className="text-4xl text-[#e4ff1a] md:text-[6.5vw] lg:text-[6vh]" />
          </span>
          <h1 className="text-[#e4ff1a] font-semibold text-3xl font-[myButtonfont] capitalize cursor-pointer md:text-[5.5vw] lg:text-[5.3vh]">
            Bolt
          </h1>
        </div>

        <div className="nav-options hidden lg:flex items-center justify-center gap-10">
          <Link
            to="/"
            className="text-white text-xl capitalize cursor-pointer lg:text-[2.5vh] font-[myButtonfont] font-medium"
          >
            Home
          </Link>
          <Link
            to="/programs"
            className="text-white text-xl capitalize cursor-pointer lg:text-[2.5vh] font-[myButtonfont] font-medium"
          >
            Programs
          </Link>
          <Link
            to="/pricing"
            className="text-white text-xl capitalize cursor-pointer lg:text-[2.5vh] font-[myButtonfont] font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-white text-xl capitalize cursor-pointer lg:text-[2.5vh] font-[myButtonfont] font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl capitalize cursor-pointer lg:text-[2.5vh] font-[myButtonfont] font-medium"
          >
            Contact
          </Link>
        </div>

        <motion.div
          className="lg:hidden z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <IoClose className="text-white text-3xl cursor-pointer md:text-[5.5vw]" />
          ) : (
            <IoMenu className="text-white text-3xl cursor-pointer md:text-[5.5vw]" />
          )}
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`fixed top-0 right-0 h-full w-full bg-black lg:hidden z-10 md:w-1/2`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col mt-24 gap-6 px-6">
                {["/", "/programs", "/pricing", "/about", "/contact"].map(
                  (path, i) => {
                    const names = ["Home", "Programs", "Pricing", "About", "Contact"];
                    return (
                      <Link
                        key={i}
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-2xl capitalize cursor-pointer font-[myButtonfont] font-medium"
                      >
                        {names[i]}
                      </Link>
                    );
                  }
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
