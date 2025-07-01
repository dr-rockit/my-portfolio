"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { animate } from "motion";

const LottieWrapper = dynamic(() => import("./LottieWrapper"), { ssr: false });

const phrases = [
  <>⚛️ React, 🧪 Next.js and 🧩 Tailwind.</>,
  <>✏️ Designer. 💻 Developer. 🧠 Problem Solver. ☕ Coffee Addict.</>,
  <>🪄 Crafting nice things for humans on the internet.</>,
  <>🛸 Exploring creative galaxies of design and code.</>,
  <>👁️ Visual design, 🧠 UX and 🎬 motion.</>,
  <>🌱 Designing functional, beautiful experiences.</>,
  <>⚡ Focused on performance, accessibility, and aesthetics.</>,
  <>✨ Pixels, 💻 code and 🎨 creativity.</>,
  <>🎛️ Synths, 🎚️ bleeps and 🥁 drum machines.</>,
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Set up interval to change phrase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleScrollToProjects = useCallback(() => {
    const section = document.getElementById("projects");
    if (!section) return;

    const yOffset = -20;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

    animate(window.scrollY, y, {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center min-h-screen text-center py-20 font-spline-sans relative z-10">
        <div id="skull" className="relative w-52 h-52 mb-8">
          <LottieWrapper />
        </div>
        <motion.h1
          className="text-5xl font-extrabold mb-4 font-serif tracking-tight text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I design pixels & build with code -{" "}
          <span className="text-teal-400">I'm Ian.</span>
        </motion.h1>
        <div className="min-h-[72px] sm:min-h-[48px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 className="text-base lg:text-2xl text-gray-500 tracking-tight">
                {phrases[currentPhraseIndex]}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-16">
          <a
            onClick={handleScrollToProjects}
            className="text-teal-400 font-light tracking-wide text-xl lg:text-2xl bg-gray-800 px-10 py-5 rounded-xl shadow-lg hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
          >
            Selected Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
