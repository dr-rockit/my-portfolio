"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: showBackToTop ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-teal-400 text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.3)]"
    >
      <RiArrowUpLine size={24} />
    </motion.button>
  );
}