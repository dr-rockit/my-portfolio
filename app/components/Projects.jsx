"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <article
      className={`my-2 mx-2 group ${
        project.slug ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="card w-full relative aspect-square bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex flex-col hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        <figure className="relative flex-1 w-full overflow-hidden">
          {/* Using project.image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* VISUAL CUE: Only show button if slug exists */}
          {project.slug && (
            <>
              <div className="absolute top-3 right-3 z-20">
                <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px] z-10">
                <span className="text-white border border-white/50 px-4 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors">
                  View Project
                </span>
              </div>
            </>
          )}
        </figure>
        <div className="card-body p-4 flex-none bg-neutral-900 flex flex-col gap-2">
          <h2 className="card-title text-neutral-300 text-base flex justify-between items-center">
            {project.title}
            {project.slug && (
              <span className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transform">
                →
              </span>
            )}
          </h2>

          {/* Using project.type */}
          <p className="project-type text-neutral-500 text-sm">
            {project.type}
          </p>
        </div>
      </div>
    </article>
  );
};

const projects = [
  {
    id: 1,
    title: "Personalyze.ai",
    type: "Infographics/Motion Graphics",
    image: "/images/project-13.jpg",
    slug: "personalyze-ai",
  },
  {
    id: 2,
    title: "Attic Cellar Treatment Rooms",
    type: "Website/Social Media/Print",
    image: "/images/project-1.jpg",
    slug: "attic-cellar",
  },
  {
    id: 3,
    title: "Into the Garden Room",
    type: "Logo Design/Print",
    image: "/images/project-6.jpg",
  },
  {
    id: 4,
    title: "Morgan Stanley",
    type: "UI Mobile App Design",
    image: "/images/project-8.jpg",
    slug: "morgan-stanley",
  },
  {
    id: 5,
    title: "Lazenby Square",
    type: "Mobile App UI/UX",
    image: "/images/project-5.jpg",
  },
  {
    id: 6,
    title: "Freedom2Hear",
    type: "Deck Design & Visuals",
    image: "/images/project-14.jpg",
    slug: "freedom2hear",
  },
  {
    id: 7,
    title: "The Skills Farm",
    type: "Website",
    image: "/images/project-7.jpg",
  },
  {
    id: 8,
    title: "Higgs Yard",
    type: "UI/UX Design",
    image: "/images/project-15.jpg",
    slug: "higgs-yard",
  },
  {
    id: 9,
    title: "Latimer - Property Search",
    type: "UI/UX Design",
    image: "/images/project-9.jpg",
  },
  {
    id: 2,
    title: "RenewableUK",
    type: "UI/UX Design",
    image: "/images/project-16.jpg",
  },
  {
    id: 11,
    title: "Hyperlaunch",
    type: "Microsite (Flash)",
    image: "/images/project-11.jpg",
  },
  {
    id: 12,
    title: "Cocoon",
    type: "Mobile App UI/UX",
    image: "/images/project-12.jpg",
  },
  {
    id: 13,
    title: "Gratitood",
    type: "Mobile App/Website",
    image: "/images/project-3.jpg",
  },
  {
    id: 14,
    title: "Sarah Freer",
    type: "Website/Print",
    image: "/images/project-2.jpg",
  },
  {
    id: 15,
    title: "MRP Productions",
    type: "Logo/Poster/Web",
    image: "/images/project-4.jpg",
  },
  {
    id: 16,
    title: "Qico Intelligent Spaces",
    type: "Social Media Advertising/Print",
    image: "/images/project-10.jpg",
  },

  // Add more projects here
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    filter === "case-studies" ? project.slug : true,
  );

  return (
    <div className="flex-1 px-8 my-48">
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "all"
              ? "bg-teal-500 text-white shadow-lg scale-105"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter("case-studies")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "case-studies"
              ? "bg-teal-500 text-white shadow-lg scale-105"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700"
          }`}
        >
          Case Studies
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="h-full"
            >
              {project.slug ? (
                <Link href={`/work/${project.slug}`} className="block h-full">
                  <ProjectCard project={project} />
                </Link>
              ) : (
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
