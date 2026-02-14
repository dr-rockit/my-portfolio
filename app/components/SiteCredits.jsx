import React from "react";
// Make sure to import these from react-icons
import { 
  RiHeart3Fill, 
  RiRobot2Line, 
  RiReactjsLine, 
  RiTailwindCssFill, 
  RiPenNibFill 
} from "react-icons/ri";

const CreditItem = ({ icon: Icon, label }) => {
  return (
    <div className="group relative flex items-center justify-center">
      {/* The Icon */}
      <Icon size={16} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
      
      {/* The Tooltip (Radiohead Style) */}
      <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono uppercase tracking-widest text-teal-400 whitespace-nowrap bg-gray-800 px-2 py-1 border border-white/10 pointer-events-none z-10">
        [{label}]
      </span>
    </div>
  );
};

const SiteCredits = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-xs uppercase text-gray-500 mb-1">
        Specs
      </p>
      
      {/* The Icons Row */}
      <div className="flex items-center gap-4">
        {/* 1. Passion */}
        <CreditItem icon={RiHeart3Fill} label="Love" />
        
        {/* 2. AI Assistance */}
        <CreditItem icon={RiRobot2Line} label="AI_Assist" />
        
        {/* 3. The Framework (React/Next) */}
        <CreditItem icon={RiReactjsLine} label="Next.js" />
        
        {/* 4. The Styling (Tailwind) */}
        <CreditItem icon={RiTailwindCssFill} label="Tailwind" />
        
        {/* 5. The Craft (Design) */}
        <CreditItem icon={RiPenNibFill} label="Hand_Crafted" />
      </div>
    </div>
  );
};

export default SiteCredits;