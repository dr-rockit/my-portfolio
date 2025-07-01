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

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      document.documentElement.classList.add(
        "transition-colors",
        "duration-500"
      );
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle(
          "dark",
          storedTheme === "dark"
        );
      } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.add("transition-colors", "duration-500");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="absolute top-6 right-6 p-2 rounded-full z-20 transition-colors duration-300 hover:bg-teal-500 bg-gray-200 dark:bg-gray-800 text-yellow-500 dark:text-gray-200"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-8.66h1M3.34 12h1m14.14 5.66l.71.71M5.05 5.05l.71.71m0 12.02l-.71.71m12.02-12.02l-.71.71M12 5a7 7 0 000 14 7 7 0 000-14z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          )}
        </button>
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
