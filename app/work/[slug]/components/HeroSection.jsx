"use client";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

const TechTag = ({ text }) => (
  <span className="inline-block border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-400 mr-2 mb-2">
    {text}
  </span>
);

export default function HeroSection({ project }) {
  return (
    <header className="pt-40 pb-20 px-4 md:px-8 max-w-400 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <h1 className="font-serif italic text-[12vw] md:text-[8rem] leading-[0.85] tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
          {project.tagline}
        </p>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.4, duration: 0.8 }}
         className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-8"
      >
        <div>
           <span className="block text-xs font-mono text-teal-400 mb-2">[ YEAR ]</span>
           <span className="text-lg font-serif">{project.year}</span>
        </div>
        <div>
           <span className="block text-xs font-mono text-teal-400 mb-2">[ ROLE ]</span>
           <span className="text-lg font-serif">Design & Development</span>
        </div>
        <div className="md:col-span-2">
           <span className="block text-xs font-mono text-teal-400 mb-2">[ TECH_STACK ]</span>
           <div className="flex flex-wrap">
             {project.tech.map((t) => <TechTag key={t} text={t} />)}
           </div>
        </div>
      </motion.div>

      {project.url && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
           <a
             href={project.url}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
           >
             Visit Live Site <RiArrowRightUpLine />
           </a>
        </motion.div>
      )}
    </header>
  );
}