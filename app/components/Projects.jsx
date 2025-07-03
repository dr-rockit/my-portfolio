"use client";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Attic Cellar Treatment Rooms",
      type: "Website/Social Media Content/Print",
      image: "/images/project-1.jpg",
    },
    {
      id: 2,
      title: "Sarah Freer",
      type: "Website/Print",
      image: "/images/project-2.jpg",
    },
    {
      id: 3,
      title: "Gratitood",
      type: "Mobile App/Website",
      image: "/images/project-3.jpg",
    },
    {
      id: 4,
      title: "MRP Productions",
      type: "Logo/Poster/Web",
      image: "/images/project-4.jpg",
    },
    {
      id: 5,
      title: "Lazenby Square",
      type: "Mobile App UI/UX",
      image: "/images/project-5.jpg",
    },
    {
      id: 6,
      title: "Into the Garden Room",
      type: "Logo",
      image: "/images/project-6.jpg",
    },
    {
      id: 7,
      title: "The Skills Farm",
      type: "Website",
      image: "/images/project-7.jpg",
    },
    {
      id: 8,
      title: "Mic & the Mechanics",
      type: "Poster/Print",
      image: "/images/project-8.jpg",
    },
    {
      id: 9,
      title: "Latimer - Property Search",
      type: "UI/UX",
      image: "/images/project-9.jpg",
    },
    {
      id: 10,
      title: "Qico Intelligent Spaces",
      type: "Social Media Advertising/Print",
      image: "/images/project-10.jpg",
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
      type: "Mobile App",
      image: "/images/project-12.jpg",
    },
    {
      id: 13,
      title: "Personalyze",
      type: "Infographic/Motion",
      image: "/images/project-13.jpg",
    },
    {
      id: 14,
      title: "Personalyze",
      type: "Infographic/Motion",
      image: "/images/project-14.jpg",
    },
    {
      id: 15,
      title: "Higgs Yard",
      type: "UI/UX",
      image: "/images/project-15.jpg",
    },
    {
      id: 16,
      title: "RenewableUK",
      type: "UI/UX",
      image: "/images/project-16.jpg",
    },
    // Add more projects here
  ];
  return (
    <div
      id="projects"
      className="flex width-full p-4 text-sm tracking-tight antialiased text-cyan-500 leading-tight"
    >
      <div className="flex-1 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full aspect-square border-t-1 dark:border-t-cyan-900 pt-8"
            >
              <div className="flex justify-between items-end p-2 mb-8">
                <div className="left">
                  <p>{project.title}</p>
                  <p className="project-type text-cyan-700">{project.type}</p>
                </div>
                <div className="right">
                  <p className="project-number text-cyan-700">
                    {String(project.id).padStart(2, "0")}
                  </p>
                </div>
              </div>
              <div className="card width-full relative aspect-square bg-neutral-50 dark:bg-neutral-800 rounded-xl overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute bottom-0 left-0 w-full flex justify-center"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-3/4 object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
