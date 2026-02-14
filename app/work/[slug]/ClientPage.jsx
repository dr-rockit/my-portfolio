"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Make sure you have installed react-icons
import { RiArrowLeftLine, RiArrowRightUpLine, RiArrowUpLine } from "react-icons/ri";

export default function ClientPage({ project, nextProject }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

  // Helper for technical list items
  const TechTag = ({ text }) => (
    <span className="inline-block border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-400 mr-2 mb-2">
      {text}
    </span>
  );

  return (
    <article className="min-h-screen bg-neutral text-white font-sans selection:bg-teal-400 selection:text-black">
      
      {/* 1. PROGRESS BAR (Top of screen) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 2. NAVIGATION BAR (Simple & Technical) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-6 flex justify-between items-center mix-blend-difference">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-teal-400 transition-colors"
        >
          <RiArrowLeftLine className="group-hover:-translate-x-1 transition-transform" />
          [ Back_To_Archive ]
        </Link>
        <span className="hidden md:block text-xs font-mono text-white/30">
          CASE_ID: {project.slug?.toUpperCase()}
        </span>
      </nav>

      {/* 3. HERO SECTION (Massive & Technical) */}
      <header className="pt-40 pb-20 px-4 md:px-8 max-w-400 mx-auto">
        
        {/* The Title */}
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

        {/* The Spec Sheet (Grid) */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-8"
        >
          {/* Col 1: Year */}
          <div>
             <span className="block text-xs font-mono text-teal-400 mb-2">[ YEAR ]</span>
             <span className="text-lg font-serif">{project.year}</span>
          </div>

          {/* Col 2: Services / Role (Static for now or from data) */}
          <div>
             <span className="block text-xs font-mono text-teal-400 mb-2">[ ROLE ]</span>
             <span className="text-lg font-serif">Design & Development</span>
          </div>

          {/* Col 3: Tech Stack */}
          <div className="md:col-span-2">
             <span className="block text-xs font-mono text-teal-400 mb-2">[ TECH_STACK ]</span>
             <div className="flex flex-wrap">
               {project.tech.map((t) => <TechTag key={t} text={t} />)}
             </div>
          </div>
        </motion.div>

        {/* Live Link Button */}
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


      {/* 4. MAIN HERO IMAGE (Full Width, Sharp) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-video md:aspect-auto md:h-[90vh] relative mb-32"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral to-transparent opacity-20" />
      </motion.div>


      {/* 5. EDITORIAL TEXT LAYOUT (Sticky Sidebar) */}
      <section className="px-4 md:px-8 max-w-350 mx-auto mb-32 space-y-32">
        
        {/* THE CHALLENGE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <div className="sticky top-32">
                 <h2 className="text-sm font-mono text-teal-400 mb-4 tracking-widest uppercase">
                   01 / The Challenge
                 </h2>
                 <div className="h-px w-12 bg-white/20"></div>
              </div>
           </div>
           <div className="md:col-span-8">
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-gray-200">
                <span className="float-left text-6xl md:text-7xl font-serif text-teal-400 mr-2 mt-4 leading-[0.8]">
                  {project.challenge.charAt(0)}
                </span>
                {project.challenge.slice(1)}
              </p>
           </div>
        </div>

        {/* THE SOLUTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <div className="sticky top-32">
                 <h2 className="text-sm font-mono text-teal-400 mb-4 tracking-widest uppercase">
                   02 / The Solution
                 </h2>
                 <div className="h-px w-12 bg-white/20"></div>
              </div>
           </div>
           <div className="md:col-span-8">
              <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-gray-400">
                {project.solution}
              </p>
           </div>
        </div>
      </section>

      {/* 6. BENTO GALLERY (Dynamic Grid) */}
      {project.images && project.images.length > 0 && (
        <section className="px-4 md:px-8 mb-32">
          <div className="max-w-350 mx-auto">
             <div className="flex items-center gap-4 mb-12">
               <span className="text-sm font-mono text-teal-400">[ VISUAL_DATA ]</span>
               <div className="h-px bg-white/10 grow"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {project.images.map((img, index) => (
                 <div 
                   key={index}
                   // FIX 1: Removed 'min-h-100' and 'md:min-h-150'
                   // FIX 2: Added 'aspect-video' so the box is always 16:9
                   className={`relative w-full aspect-video ${
                     (index + 1) % 3 === 0 ? "md:col-span-2" : ""
                   }`}
                 >
                   <Image
                     src={img}
                     alt={`Gallery ${index}`}
                     fill
                     // FIX 3: Optional - You can keep object-cover now that the aspect ratio matches,
                     // but 'object-contain' is the safest way to ensure 100% of the image is always visible
                     // if your images vary slightly in size.
                     className="object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700 ease-out"
                   />
                   <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-2 py-1 border border-white/10">
                      <span className="text-[10px] font-mono text-teal-400">
                        FIG_0{index + 1}
                      </span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>
      )}

      {/* 7. PROCESS & VIDEO (Using existing data structure) */}
      {(project.processSections || project.processImage) && (
        <section className="px-4 md:px-8 max-w-350 mx-auto mb-32">
           <div className="flex items-center gap-4 mb-16">
               <span className="text-sm font-mono text-teal-400">[ PROCESS_LOG ]</span>
               <div className="h-px bg-white/10 grow"></div>
           </div>

           {/* Videos */}
           {project.videos?.map((vid, i) => (
             <div key={i} className="mb-24">
                <div className="relative w-full aspect-video border border-white/10 bg-black">
                   <iframe
                     src={vid}
                     className="absolute inset-0 w-full h-full"
                     allowFullScreen
                   />
                </div>
             </div>
           ))}

           {/* Process Sections (Mapped) */}
           {/* Normalizing data structure to array if it's single object */}
           {(project.processSections || [
             {
               image: project.processImage,
               title: project.processTitle,
               text: project.processText,
               sectionTitle: project.processSectionTitle
             }
           ]).map((proc, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                 <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    {proc.image && (
                      <div className="relative aspect-video border border-white/5">
                        <Image src={proc.image} alt="Process" fill className="object-cover" />
                      </div>
                    )}
                 </div>
                 <div className="space-y-6">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                       {proc.sectionTitle || "Process"}
                    </span>
                    <h3 className="text-3xl font-serif italic text-white">
                       {proc.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                       {proc.text}
                    </p>
                 </div>
              </div>
           ))}
        </section>
      )}


      {/* 8. NEXT PROJECT (Massive Footer Link) */}
      {nextProject && (
        <Link href={`/work/${nextProject.slug}`} className="block group relative border-t border-white/10">
           <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-neutral transition-colors duration-500 group-hover:bg-neutral-900">
              <span className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">
                 [ Next_Case_Study ]
              </span>
              <h2 className="font-serif italic text-[10vw] leading-none text-white group-hover:text-teal-400 transition-colors duration-300">
                 {nextProject.title}
              </h2>
              <div className="mt-8 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                 <span className="uppercase tracking-widest text-sm">View Project</span>
                 <RiArrowRightUpLine size={20} />
              </div>
           </div>
        </Link>
      )}

      {/* BACK TO TOP */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-teal-400 text-black rounded-full hover:scale-110 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.3)]"
      >
        <RiArrowUpLine size={24} />
      </motion.button>

    </article>
  );
}
