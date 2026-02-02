"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import Signals from "./Signals";

const About = () => {
  const paragraphStyles = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  };

  const skills = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Ableton Live",
    "DaVinci Resolve",
    "Sketch",
    "Figma",
    "Framer",
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React & Next.js",
    "Tailwind CSS",
    "Motion",
    "daisyUI",
    "Git",
    "GitHub",
    "WordPress",
  ];

  const services = [
    "Brand Identity & Visual Storytelling",
    "Digital Design Systems & UI/UX",
    "Responsive Web & Front-End Development",
    "Interactive & Touchscreen Experiences",
    "Motion Graphics & Digital Animation",
    "Audio Production & Sound Design",
    "Technical Consulting & Project Strategy",
  ];

  return (
    <div
      id="information"
      className="relative text-white flex flex-col-reverse lg:flex-row items-stretch justify-center px-8 gap-8 mb-16"
    >
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-stretch justify-center w-full gap-8">
        <div className="flex flex-col justify-end self-stretch w-full lg:w-1/2">
          {/* Top content (optional image/logo placeholder) */}
          <div className="left-content text-gray-400 text-lg space-y-1 pt-8">
            <div className="relative w-full h-full">
              <h4 className="text-sm uppercase tracking-widest text-gray-500">
                Contact
              </h4>
              <div>
                {" "}
                <p className="tracking-normal">
                  Let's work together —{" "}
                  <a
                    href="mailto:ianjfears@gmail.com"
                    className="text-teal-400 transition-opacity duration-300 hover:opacity-70 no-underline"
                  >
                    <span className="font-normal">ianjfears</span>
                    <span className="font-light text-gray-500">[at]</span>
                    <span className="font-normal">gmail.com</span>
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Prefer to talk? Drop me an email and I'll happily share my
                  number for a quick call.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full space-y-8">
          <motion.p
            {...paragraphStyles}
            className="text-xl lg:text-3xl font-medium leading-tight text-gray-900 dark:text-white"
          >
            I'm Ian — a digital designer, front-end developer, and visual
            storyteller with a love for clean design, smart interaction, and
            immersive motion.
          </motion.p>{" "}
          <motion.p
            {...paragraphStyles}
            transition={{ ...paragraphStyles.transition, delay: 0.2 }}
            className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          >
            For over three decades, I've been crafting digital experiences that
            connect, inform, and surprise. Today, I combine that deep design
            intuition with the power of AI - using modern tools to prototype
            faster, optimize code, and push the boundaries of what's possible.
            It's a hybrid workflow that allows me to deliver high-performance,
            rich experiences with the craftsmanship of a veteran and the speed
            of a startup.
          </motion.p>{" "}
          <motion.p
            {...paragraphStyles}
            transition={{ ...paragraphStyles.transition, delay: 0.4 }}
            className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          >
            From interactive installations in luxury property suites to brand
            identities for new ventures, I work across disciplines to bring
            ideas to life—blending visuals, code, motion, and sound into
            cohesive, engaging narratives.
          </motion.p>{" "}
          <motion.p
            {...paragraphStyles}
            transition={{ ...paragraphStyles.transition, delay: 0.4 }}
            className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          >
            Now based back home in{" "}
            <span className="text-gray-900 dark:text-white font-semibold underline decoration-success decoration-2 underline-offset-4">
              Cornwall
            </span>
            , I balance screen time with coastal trails and the outdoors with my
            dog, Obi. I'm also a longtime music producer and modular synth
            enthusiast - a passion for signal flow and soundscapes that often
            feeds back into my creative process.
          </motion.p>
          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-8"
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Services
            </h3>

            <ul className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  /* Slightly longer delay per item gives it a "cascading" feel */
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  /* THE UPGRADED STYLING:
                     1. bg-teal-500/10: Gives it a permanent subtle weight (not just grey)
                     2. border-teal-500/20: Adds definition
                     3. rounded-full: Distinguishes it from square project cards
                     4. text-teal-300: High contrast, easy to read
                  */
                  className="bg-teal-500/10 border border-teal-500/20 text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-teal-500/20 hover:border-teal-400 hover:text-teal-100 transition-all cursor-default"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-8"
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Skills
            </h3>

            {/* Changed gap to gap-2 for better packing of small pills */}
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  /* THE LOGIC: 
         1. cursor-default: Keeps the mouse as an arrow (signals "not clickable")
         2. hover:border-white/40: Just brightens the border slightly (signals "I see you")
         3. No text color change: Keeps it looking like data, not a button
      */
                  className="border border-white/10 text-neutral-400 px-3 py-1 rounded-full text-sm hover:border-white/40 hover:text-neutral-200 transition-colors cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Favourite Things Section */}
          <div className="pt-8">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Signals & Noise
            </h3>
            <Signals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
