"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// Ensure you have: npm install react-icons
import { RiArrowRightUpLine } from "react-icons/ri";

// DATA: I mapped your projects to the new "Bento" structure
// Added 'span' classes to control size (2x2, 2x1, etc.)
const projects = [
  {
    id: "01",
    title: "Personalyze.ai",
    category: "AI / MOTION",
    image: "/images/project-13.jpg",
    slug: "personalyze-ai",
    year: "2025",
    // FEATURED: Large Box (2x2)
    span: "md:col-span-2 md:row-span-2", 
  },
  {
    id: "02",
    title: "Attic Cellar",
    category: "WEB / PRINT",
    image: "/images/project-1.jpg",
    slug: "attic-cellar",
    year: "2026",
    span: "", // Standard 1x1
  },
  {
    id: "03",
    title: "Garden Room",
    category: "BRANDING",
    image: "/images/project-6.jpg",
    slug: null, // No case study yet
    year: "2024",
    span: "", 
  },
  {
    id: "04",
    title: "Morgan Stanley",
    category: "MOBILE UI",
    image: "/images/project-8.jpg",
    slug: "morgan-stanley",
    year: "2023",
    // WIDE: Landscape (2x1)
    span: "md:col-span-2", 
  },
  {
    id: "05",
    title: "Lazenby Square",
    category: "MOBILE UI",
    image: "/images/project-5.jpg",
    slug: "lazenby-square",
    year: "2023",
    span: "", 
  },
  {
    id: "06",
    title: "Freedom2Hear",
    category: "PITCH DECK",
    image: "/images/project-14.jpg",
    slug: "freedom2hear",
    year: "2023",
    // TALL: Portrait (1x2)
    span: "md:row-span-2", 
  },
  {
    id: "07",
    title: "The Skills Farm",
    category: "WEB",
    image: "/images/project-7.jpg",
    slug: null,
    year: "2022",
    span: "md:col-span-2",
  },
  {
    id: "08",
    title: "Higgs Yard",
    category: "ARCH VIZ",
    image: "/images/project-15.jpg",
    slug: null,
    slug: "higgs-yard",
    year: "2021",
    span: "",
  },
    {
    id: "09",
    title: "Hyperlaunch",
    category: "WEB",
    image: "/images/project-11.jpg",
    slug: null,
    year: "2020",
    span: "",
  },
      {
    id: "10",
    title: "Lampton Parkside",
    category: "ARCH VIZ",
    image: "/images/project-3.jpg",
    slug: "lampton-parkside",
    year: "2021",
    span: "",
  },
  {
    id: "11",
    title: "Cocoon",
    category: "MOBILE UI",
    image: "/images/project-12.jpg",
    slug: null,
    year: "2023",
    // WIDE: Landscape (2x1)
    span: "md:col-span-2", 
  },
  {
    id: "12",
    title: "Quintessence",
    category: "INTERACTIVE PRESENTATION",
    image: "/images/project-9.jpg",
    slug: null,
    year: "2019",
    span: "",
  },
  {
    id: "13",
    title: "Sarah Freer",
    category: "WEB",
    image: "/images/project-2.jpg",
    slug: "sarah-freer",
    year: "2025",
    // TALL: Portrait (1x2)
    span: "md:row-span-2", 
  },
  {
    id: "14",
    title: "MRP Productions",
    category: "WEB",
    image: "/images/project-4.jpg",
    slug: null,
    year: "2020",
    span: "",
  },
  {
    id: "15",
    title: "Qico Intelligent Spaces",
    category: "WEB / SOCIAL MEDIA",
    image: "/images/project-10.jpg",
    slug: null,
    year: "2021",
    span: "",
  },
    {
    id: "16",
    title: "RenewableUK",
    category: "UI DESIGN",
    image: "/images/project-16.jpg",
    slug: null,
    year: "2025",
    span: "",
  },
  // ... (add the rest of your list here, they will auto-fill as 1x1 squares)
];

const ProjectCard = ({ project }) => {
  const isClickable = !!project.slug;

  return (
    <article
      className={`
        group relative w-full h-full overflow-hidden bg-neutral rounded-lg border border-white/5
        ${isClickable ? "cursor-pointer" : "cursor-default"}
      `}
    >
      {/* 1. BACKGROUND IMAGE with Zoom Effect */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* 2. OVERLAY (Dark Gradient) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* 3. RADIOHEAD ID TAG (Top Right) - Desktop Only */}
      <div className="hidden md:block absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[10px] text-teal-400 tracking-widest border border-teal-400/30 px-2 py-1 bg-black/50 backdrop-blur-md">
           [{project.id}]_REF
        </span>
      </div>

      {/* 3b. MOBILE CASE STUDY BADGE (Top Right) */}
      {isClickable && (
        <div className="md:hidden absolute top-4 right-4 z-20">
          <span className="font-mono text-[10px] text-black bg-teal-400 px-2 py-1 tracking-widest uppercase font-bold">
             Case Study
          </span>
        </div>
      )}

      {/* 4. CONTENT (Bottom Left) */}
      <div className="absolute bottom-0 left-0 p-6 w-full z-20 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
        
        {/* Category + Year */}
        <div className="flex items-center gap-3 mb-2 opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity">
           <span className="font-mono text-[10px] uppercase tracking-widest text-teal-400">
             {project.category}
           </span>
           <span className="w-8 h-px bg-white/20"></span>
           <span className="font-mono text-[10px] text-gray-400">
             {project.year}
           </span>
        </div>

        {/* Title + Arrow */}
        <div className="flex justify-between items-end">
            <h3 className="font-serif italic text-2xl md:text-3xl text-white leading-none">
              {project.title}
            </h3>
            
            {isClickable && (
              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-4 md:group-hover:translate-x-0 transition-all duration-300 text-teal-400">
                  <RiArrowRightUpLine size={24} />
              </div>
            )}
        </div>
      </div>

      {/* 5. HOVER BORDER (Glitch Detail) */ }
      <div className="absolute inset-0 border border-transparent group-hover:border-teal-400/20 pointer-events-none transition-colors duration-300 rounded-lg" />
    </article>
  );
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");

  // Logic: When filtering, we might lose the 'bento' shape perfection, 
  // so usually Bento grids work best showing "All". 
  // If you filter, it will just reflow automatically thanks to grid-flow-dense.
  const filteredProjects = projects.filter((project) =>
    filter === "case-studies" ? project.slug : true
  );

  return (
    <section className="px-4 md:px-8 pb-32">
      <div className="max-w-350 mx-auto">
        
        {/* FILTER BUTTONS (Optional - Minimal Style) */}
        <div className="flex gap-6 mb-12 border-b border-white/10 pb-4">
          <button
            onClick={() => setFilter("all")}
            className={`text-sm font-mono uppercase tracking-widest transition-colors ${
              filter === "all" ? "text-teal-400" : "text-gray-500 hover:text-white"
            }`}
          >
            [ Selected_Works ]
          </button>
          <button
            onClick={() => setFilter("case-studies")}
            className={`text-sm font-mono uppercase tracking-widest transition-colors ${
              filter === "case-studies" ? "text-teal-400" : "text-gray-500 hover:text-white"
            }`}
          >
            [ Case_Studies ]
          </button>
        </div>

        {/* THE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-dense">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                // If filtering, we might want to reset spans to 1x1 to avoid holes, 
                // OR keep them to maintain the visual hierarchy.
                // Keeping them usually looks cooler.
                className={`${project.span || "col-span-1 row-span-1"}`}
              >
                {project.slug ? (
                  <Link href={`/work/${project.slug}`} className="block h-full w-full">
                    <ProjectCard project={project} />
                  </Link>
                ) : (
                  <div className="block h-full w-full">
                    <ProjectCard project={project} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};

export default PortfolioSection;