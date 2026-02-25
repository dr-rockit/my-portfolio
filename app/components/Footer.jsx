import React from "react";
import SiteCredits from "../components/SiteCredits";
import { RiInstagramLine, RiFacebookBoxLine, RiArrowRightUpLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // THE RADIOHEAD LOGIC:
  // We break the name into an array including the symbols (/, _) to treat them as equal visual characters.
  const watermarkChars = ['I', '_', 'A', 'N', '/', 'J', '_', 'F', 'E', 'A', '_', 'R', 'S'];

  return (
    <footer className="bg-neutral text-neutral-content relative overflow-hidden pt-20 pb-0 px-4 md:px-8">
      
      {/* 1. THE BIG "CALL TO ACTION" */}
      <div className="max-w-7xl mx-auto mb-20 border-b border-white/10 pb-20 relative z-10">
        <h2 className="font-serif text-[12vw] leading-[0.8] mb-8 text-white">
          Have an idea?
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl text-gray-400 font-light font-sans">
              I'm currently available for new projects. Let's build something 
              <span className="font-serif italic text-white mx-2">beautiful</span> 
              together.
            </p>
          </div>
          
          <a 
            href="mailto:ianjfears@gmail.com" 
            className="group flex items-center gap-3 text-2xl md:text-3xl font-serif text-white hover:text-teal-400 transition-colors"
          >
            ianjfears@gmail.com
            <RiArrowRightUpLine className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>


      {/* 2. THE DATA GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 text-sm tracking-wide relative z-10">
        
        {/* Established */}
        <div className="md:col-span-4 space-y-4">
           <p className="font-mono text-xs uppercase text-gray-500 mb-2">Established</p>
           <p className="text-gray-400 max-w-xs leading-relaxed">
             Designing and building beautiful spaces since 1997. 
             Based in Cornwall, working globally.
           </p>
<div className="pt-6 opacity-80 hover:opacity-100 transition-opacity">
             <SiteCredits />
           </div>
        </div>

        {/* Connect */}
        <div className="md:col-span-4 space-y-4">
           <p className="font-mono text-xs uppercase text-gray-500 mb-2">Connect</p>
           <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/drrockit/?hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors w-max group">
                <RiInstagramLine size={18} className="text-gray-400 group-hover:text-teal-400" />
                <span className="font-serif italic text-lg">Instagram</span>
              </a>
              <a href="https://www.facebook.com/ifears" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors w-max group">
                <RiFacebookBoxLine size={18} className="text-gray-400 group-hover:text-teal-400" />
                <span className="font-serif italic text-lg">Facebook</span>
              </a>
           </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-4 md:text-right flex flex-col justify-between">
           <div>
             <p className="font-mono text-xs uppercase text-gray-500 mb-2">Copyright</p>
             <p className="text-gray-500">© {currentYear} Ian Fears.</p>
             <p className="text-gray-600">All rights reserved.</p>
           </div>
        </div>
      </div>


      {/* 3. THE RADIOHEAD "IN RAINBOWS" WATERMARK 
          - Logic: Flexbox with 'justify-between' forces the letters to spread edge-to-edge.
          - Style: Bold Sans-Serif to match the album typography.
          - Symbols: Underscores and Slashes act as spacers.
      */}
      <div className="w-full flex justify-between items-end overflow-hidden -mb-4 md:-mb-10 px-2 select-none pointer-events-none opacity-[0.04]">
        {watermarkChars.map((char, index) => (
          <span 
            key={index} 
            className={`
               font-sans font-bold text-[13vw] leading-none 
               ${char === '/' || char === '_' ? 'text-white' : 'text-white'}
            `}
          >
            {char}
          </span>
        ))}
      </div>

    </footer>
  );
};

export default Footer;