"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineRefresh } from "react-icons/hi";
import GeometricBackground from "./GeometricBackground";

const radioheadLyrics = [
  "For a minute there, I lost myself",
  "Everything in its right place",
  "I'm not living, I'm just killing time",
  "You can try the best you can",
  "Just 'cause you feel it doesn't mean it's there",
  "Gravity always wins",
  "No alarms and no surprises",
  "Ambition makes you look pretty ugly",
  "I'm a creep, I'm a weirdo",
  "You do it to yourself, you do",
  "Don't leave me high, don't leave me dry",
  "It wears me out",
  "Ice age coming, ice age coming",
  "This is what you'll get",
  "You have not been paying attention",
  "Truth will mess you up",
  "Broken hearts make it rain",
  "I jumped in the river and what did I see?",
  "Slowly we unfurl as lotus flowers",
  "We are accidents waiting to happen",
];

export default function HeroSection() {
  const [lyric, setLyric] = useState("");
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [refreshCount, setRefreshCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setLyric(
      radioheadLyrics[Math.floor(Math.random() * radioheadLyrics.length)],
    );
    audioRef.current = new Audio("/sounds/click.mp3");
    audioRef.current.volume = 0.2;
  }, []);

  const handleNewLyric = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    setRotation((prev) => prev - 360);
    setRefreshCount((prev) => prev + 1);
    let newLyric;
    do {
      newLyric =
        radioheadLyrics[Math.floor(Math.random() * radioheadLyrics.length)];
    } while (newLyric === lyric && radioheadLyrics.length > 1);
    setLyric(newLyric);
  };

  const tooltipMessages = [
    "Generate new lyric",
    "You do it to yourself...",
    "This is what you'll get...",
    "When you mess with us...",
  ];

  const isLimitReached = refreshCount >= tooltipMessages.length;

  useEffect(() => {
    if (isLimitReached) {
      const timer = setTimeout(() => setRefreshCount(0), 10000);
      return () => clearTimeout(timer);
    }
  }, [isLimitReached]);

  const tooltipText = isLimitReached
    ? "Karma Police called!"
    : tooltipMessages[refreshCount];

  return (
    <div className="relative z-0 min-h-screen w-full flex items-center overflow-hidden">
      <GeometricBackground />
      {/* Content Layer */}
      <div className="container mx-auto px-6 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full pointer-events-auto"
        >
          <h1 className="text-[12vw] leading-[0.8] font-black mb-8 tracking-tighter">
            Digital Designer & Developer
          </h1>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl mb-8 opacity-80">
              I build high-performance web experiences for{" "}
              <span className="relative inline-block group">
                <a
                  href="#information"
                  className="underline decoration-teal-400 underline-offset-4 hover:text-teal-400 transition-colors"
                >
                  beautiful people
                </a>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-2 bg-teal-400 text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none whitespace-nowrap z-20 origin-top">
                  Say hello{" "}
                  <motion.span
                    className="inline-block"
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    style={{ originX: 0.8, originY: 0.8 }}
                  >
                    🖐️
                  </motion.span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-teal-400"></span>
                </span>
              </span>
              .
            </h2>

            <div className="flex flex-wrap gap-4 mb-12"></div>
            {/* Radiohead Lyric Generator */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  isLimitReached
                    ? {
                        opacity: 1,
                        boxShadow: [
                          "0 0 0 0px rgba(45, 212, 191, 0)",
                          "0 0 0 1px rgba(45, 212, 191, 0.4)",
                          "0 0 0 0px rgba(45, 212, 191, 0)",
                        ],
                      }
                    : { opacity: 1, boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
                }
                transition={
                  isLimitReached
                    ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.4 }
                }
                className="flex items-center gap-4 p-4 bg-base-200/50 backdrop-blur-sm rounded-lg border border-base-300 w-full max-w-md"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-1 grid-rows-1">
                    <AnimatePresence>
                      <motion.p
                        key={lyric}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-md font-serif italic col-start-1 row-start-1"
                      >
                        "{lyric}"
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <p className="text-sm uppercase tracking-widest opacity-60 mt-1">
                    OK Computer
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      ▍
                    </motion.span>
                    <span className="text-teal-400 text-xs">
                      [ Fitter. Happier. ]
                    </span>
                  </p>
                </div>
                <div
                  className={`tooltip tooltip-left md:tooltip-top ${
                    isLimitReached ? "tooltip-error" : ""
                  }`}
                  data-tip={tooltipText}
                >
                  <motion.button
                    onClick={handleNewLyric}
                    disabled={isLimitReached}
                    className="btn btn-ghost btn-circle btn-sm opacity-50 hover:opacity-100"
                    aria-label="New lyric"
                  >
                    <motion.div
                      animate={{ rotate: rotation }}
                      transition={{ duration: 0.5 }}
                    >
                      <HiOutlineRefresh className="w-8 h-8 text-gray-600" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
