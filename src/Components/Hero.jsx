import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Button from './Button';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.Hero-heading h1',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.Hero-sub-heading p',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.Hero-calltoaction button',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.5,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center+=150',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants for buttons hover animation
  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(228, 255, 26, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      ref={heroRef}
      className="w-full h-screen bg-[url(/Images/pexels-dimkidama-6796964.jpg))] bg-cover bg-center bg-no-repeat relative"
    >
      <NavBar />
      <div className="w-full h-full hero-overlay absolute top-0 left-0 z-2"></div>

      <div className="w-full h-full hero-content px-5 md:px-[6%] absolute top-0 left-0 z-3 flex items-end justify-center gap-8">
        <div className="h-[75%] w-full flex flex-col">
          <div className="Hero-heading w-full h-[60%] text-white font-semibold flex flex-col items-start justify-center lg:items-center">
            <div className="flex flex-col lg:flex-row lg:gap-4 items-start justify-center">
              <motion.h1
                className="font-semibold text-7xl uppercase font-[myHeadingfont] md:text-[17vw] lg:text-[11vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                Unleash
              </motion.h1>
              <motion.h1
                className="font-semibold text-7xl uppercase font-[myHeadingfont] md:text-[17vw] lg:text-[11vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Your
              </motion.h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 items-start justify-center">
              <motion.h1
                className="font-semibold text-7xl uppercase font-[myHeadingfont] md:text-[17vw] lg:text-[11vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Inner
              </motion.h1>
              <motion.h1
                className="font-semibold text-7xl uppercase font-[myHeadingfont] text-[#e4ff1a] md:text-[17vw] lg:text-[11vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Athlete
              </motion.h1>
            </div>
          </div>

          <motion.div
            className="Hero-sub-heading w-full h-[20%] text-white font-semibold flex flex-col items-start justify-center lg:items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="font-normal text-xl font-[myParafont] md:w-[65%] lg:w-[56%] md:text-[3vw] lg:text-[1.3vw]">
              Personalized workouts, expert coaching, and unlimited motivation. Our Gym is your ultimate fitness destination.
            </p>
          </motion.div>

          <div className="Hero-calltoaction w-full h-[15%] text-white font-semibold flex items-center justify-around md:items-center md:justify-start md:gap-5 lg:items-center lg:justify-center">
            <motion.div>
              <Button title={"join now"} />
            </motion.div>
            <motion.div>
              <Button title={"learn more"} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
