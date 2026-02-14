"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineRefresh } from "react-icons/hi";

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
  "Yesterday I woke up sucking a lemon",
  "A pig in a cage on antibiotics",
  "Burgers float into my room",
  "There are barn doors and there are revolving doors",
  "We ride tonight, ghost horses",
  "The mongrel cat came home",
  "I am the key to the lock in your house",
  "One day I am going to grow wings",
  "Don't get any big ideas, they're not gonna happen",
  "Like a cat tied to a stick",
];

const RadioheadWidget = () => {
  const [lyric, setLyric] = useState("");
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [refreshCount, setRefreshCount] = useState(0);
  const audioRef = useRef(null);

  const isLimitReached = refreshCount >= 9;

  useEffect(() => {
    setMounted(true);
    setLyric(radioheadLyrics[Math.floor(Math.random() * radioheadLyrics.length)]);
    // Ensure you have this file in your public/sounds folder, or remove if not needed
    audioRef.current = new Audio("/sounds/click.mp3");
    audioRef.current.volume = 0.2;
  }, []);

  // Reset the "Karma Police" limit after 10 seconds
  useEffect(() => {
    if (isLimitReached) {
      const timer = setTimeout(() => setRefreshCount(0), 5000);
      return () => clearTimeout(timer);
    }
  }, [isLimitReached]);

  const handleNewLyric = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    setRotation((prev) => prev - 360);
    setRefreshCount((prev) => prev + 1);
    
    let newLyric;
    do {
      newLyric = radioheadLyrics[Math.floor(Math.random() * radioheadLyrics.length)];
    } while (newLyric === lyric && radioheadLyrics.length > 1);
    
    setLyric(newLyric);
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        isLimitReached
          ? {
              opacity: 1,
              borderColor: ["rgba(255,255,255,0.05)", "rgba(220, 38, 38, 0.5)", "rgba(255,255,255,0.05)"],
              x: [0, -3, 3, -3, 3, 0],
            }
          : { opacity: 1, borderColor: "rgba(255,255,255,0.05)", x: 0 }
      }
      transition={
        isLimitReached
          ? { duration: 0.2, repeat: 5, ease: "easeInOut" }
          : { duration: 0.4 }
      }
      className="bg-neutral/50 border border-white/5 p-6 rounded-xl backdrop-blur-sm max-w-md w-full"
    >
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          {/* Lyric Text Area */}
          <div className="min-h-12 relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={lyric}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="font-serif italic text-gray-300 text-lg leading-tight"
              >
                "{lyric}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Widget Footer */}
          <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-3">
             <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-mono flex items-center gap-1">
               <span className="mr-1">OK COMPUTER</span>
               <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  // CHANGED: text-accent -> text-teal-400 so it pops clearly
                  className="text-teal-400"
               >
                 ▍
               </motion.span>
               {/* CHANGED: text-accent -> text-teal-400 */}
               <span className="text-teal-400 inline">[ FITTER. HAPPIER. ]</span>
             </div>
          </div>
        </div>

        {/* Refresh Button */}
          <button
            onClick={handleNewLyric}
            disabled={isLimitReached}
            className={`
               btn btn-circle btn-sm btn-ghost 
               ${isLimitReached ? "text-red-500 cursor-not-allowed" : "text-gray-500 hover:text-white"}
            `}
            aria-label="New lyric"
          >
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <HiOutlineRefresh className="w-5 h-5" />
            </motion.div>
          </button>
      </div>
    </motion.div>
  );
};

export default RadioheadWidget;