"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUp, HiOutlineGlobe } from "react-icons/hi";

export default function ClientPage({ project, nextProject }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  // Normalize process sections to support both single (legacy) and multiple sections
  const processSections =
    project.processSections ||
    (project.processImage
      ? [
          {
            image: project.processImage,
            sectionTitle: project.processSectionTitle,
            title: project.processTitle,
            text: project.processText,
          },
        ]
      : []);

  return (
    <article className="min-h-screen bg-base-100 pb-32 text-base-content font-sans">
      {/* HEADER / HERO */}
      <div className="hero min-h-[40vh] bg-base-200 pt-24 pb-20">
        <motion.div
          {...animationSettings}
          className="hero-content text-center container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-sm uppercase tracking-widest opacity-50 mb-4">
              Case Study • {project.year}
            </div>
            <h1 className="text-5xl font-heading mb-6 tracking-wide">
              {project.title}
            </h1>
            <p className="text-xl opacity-80 mb-6 tracking-widest">
              {project.tagline}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {project.tech.map((t) => (
                <div
                  key={t}
                  className="bg-gray-800 px-4 py-2 rounded-full shadow-sm text-sm border border-gray-700 tracking-wide"
                >
                  {t}
                </div>
              ))}
            </div>

            {project.url && (
              <div className="mt-8">
                {" "}
                {/* Reduced margin from 16 to 8 for better grouping */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm rounded-md text-xs font-normal normal-case text-white/40 border-white/20 hover:bg-white/90 hover:text-black hover:border-white/50 transition-all"
                >
                  Visit Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5" /* Slightly adjusted icon size to match text-xs */
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-10">
        {/* MAIN IMAGE (DaisyUI Mockup) */}
        <motion.div
          {...animationSettings}
          className="mockup-browser border bg-base-300 border-base-300 shadow-2xl mb-24"
        >
          {/* The 'relative' class allows the Image to fill the container */}
          <div className="relative w-full aspect-video bg-base-100">
            <Image
              src={project.image} // Your image path from the data array
              alt={project.title}
              fill // Automatically fills the parent div
              className="object-cover" // Ensures it crops nicely if ratios don't match exactly
              priority // Loads this image immediately (good for LCP)
            />
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <motion.div
          {...animationSettings}
          className="grid md:grid-cols-2 gap-16 text-lg"
        >
          <div>
            <h2 className="text-1xl mb-4 font-heading font-bold uppercase tracking-wide">
              The Challenge
            </h2>
            <p className="opacity-50 text-lg italic font-serif leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-teal-400 first-letter:float-left first-letter:mr-3">
              {project.challenge}
            </p>
          </div>
          <div className="bg-base-200 p-8 rounded-2xl shadow-sm">
            <h2 className="text-1xl mb-4 font-heading font-bold uppercase tracking-wide">
              The Solution
            </h2>
            <p className="opacity-80 text-base tracking-wide leading-8">
              {project.solution}
            </p>
          </div>
        </motion.div>
      </div>

      {/* OTHER IMAGES GRID */}
      {project.images && project.images.length > 0 && (
        <motion.div
          {...animationSettings}
          className="container mx-auto max-w-6xl mt-32"
        >
          <h3 className="text-2xl font-bold mb-12 text-center font-heading uppercase tracking-widest">
            {project.moreImagesTitle || "More from the Deck"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {project.images.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* VIDEO EMBED SECTION */}
      {project.videos && project.videos.length > 0 && (
        <motion.div
          {...animationSettings}
          className="container mx-auto max-w-6xl mt-32"
        >
          <h3 className="text-2xl font-bold mb-12 text-center font-heading uppercase tracking-widest">
            Motion & Video
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {project.videos.map((videoSrc, index) => (
              <div
                key={index}
                className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-base-200"
              >
                <iframe
                  src={videoSrc}
                  title={`${project.title} - Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* PROCESS SECTIONS */}
      {processSections.map((section, index) => (
        <motion.div
          key={index}
          {...animationSettings}
          className="container mx-auto max-w-6xl mt-32"
        >
          <h3 className="text-2xl font-bold mb-12 text-center font-heading uppercase tracking-widest">
            {section.sectionTitle || "The Process"}
          </h3>
          <div className="mockup-browser border bg-base-200 border-base-300 shadow-2xl">
            <div className="relative w-full aspect-video bg-base-100">
              <Image
                src={section.image}
                alt={`Process - ${section.title || "Image"}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* The "Spec Sheet" Copy Below */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 px-4 py-8">
            <div className="w-full md:w-1/4">
              <h3 className="text-base font-bold uppercase tracking-widest text-white">
                {section.title}
              </h3>
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-base text-gray-400 leading-relaxed">
                {section.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* FOOTER NAVIGATION */}
      <motion.div
        {...animationSettings}
        className="container mx-auto max-w-6xl mt-32 pt-10 px-4 flex justify-between items-center"
      >
        <Link
          href="/"
          className="btn btn-outline gap-2 text-teal-400 hover:bg-teal-400 hover:text-gray-900 hover:border-teal-400 rounded-full"
        >
          Home
        </Link>
        {nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="btn btn-outline gap-2 text-right text-teal-400 hover:bg-teal-400 hover:text-gray-900 hover:border-teal-400 rounded-full"
          >
            Next: {nextProject.title}
          </Link>
        )}
      </motion.div>

      {/* BACK TO TOP BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 btn btn-circle btn-outline shadow-lg z-50 text-teal-400 hover:bg-teal-400 hover:text-gray-900 hover:border-teal-400"
        aria-label="Back to Top"
      >
        <HiArrowUp className="w-6 h-6" />
      </motion.button>
    </article>
  );
}
