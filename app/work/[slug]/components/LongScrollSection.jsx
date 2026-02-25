"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LongScrollSection({ longPage }) {
  const [activeSlice, setActiveSlice] = useState(0);

  if (!longPage) return null;

  return (
    <section className="px-4 md:px-8 max-w-350 mx-auto mb-32">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 flex flex-col">
          {(longPage.slices || []).map((slice, index) => (
            <motion.div 
              key={index} 
              className="relative w-full"
              onViewportEnter={() => setActiveSlice(index)}
              viewport={{ margin: "-50% 0px -50% 0px" }}
            >
              <Image
                src={slice.image}
                alt={`Slice ${index}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover block"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>

        <div className="w-full md:w-1/2 relative hidden md:block">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-8">
               <span className="text-sm font-mono text-teal-400 uppercase tracking-widest">
                 [ One_Page_Flow ]
               </span>
               <span className="text-xs font-mono text-gray-500">
                 {String(activeSlice + 1).padStart(2, '0')} / {String((longPage.slices || []).length).padStart(2, '0')}
               </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-12">
              {longPage.title}
            </h2>

            <div className="border-l border-white/10 ml-2">
              {(longPage.slices || []).map((slice, index) => (
                <div key={index} className="relative pl-8 py-2">
                  {activeSlice === index && (
                    <motion.div 
                      layoutId="activeLine"
                      className="absolute -left-px top-0 bottom-0 w-0.5 bg-teal-400"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <h3 className={`font-mono text-xs uppercase tracking-widest mb-2 transition-colors duration-500 ${
                    activeSlice === index ? "text-teal-400" : "text-gray-600"
                  }`}>
                    {slice.label}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeSlice === index ? "auto" : 0,
                      opacity: activeSlice === index ? 1 : 0,
                      marginBottom: activeSlice === index ? 24 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xl font-light text-gray-300 leading-relaxed">
                      {slice.text}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}