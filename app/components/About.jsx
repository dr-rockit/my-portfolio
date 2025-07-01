"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
      <div className="absolute inset-0 z-0 hidden dark:block">
        <Image
          src="/images/skull.jpg"
          alt="Background"
          fill
          priority
          quality={60}
          className="object-cover object-center opacity-20"
        />
      </div>

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
        <div className="lg:w-1/2 w-full text-[16px] lg:text-[24px] leading-relaxed text-gray-800 dark:text-gray-100 space-y-6 tracking-normal">
          <motion.p {...paragraphStyles}>
            I'm Ian — a digital designer, front-end developer, and visual
            storyteller with a love for clean design, smart interaction, and
            immersive motion. For over three decades, I've been crafting digital
            experiences that connect, inform, and occasionally surprise.
          </motion.p>{" "}
          <motion.p
            {...paragraphStyles}
            transition={{ ...paragraphStyles.transition, delay: 0.2 }}
          >
            From interactive installations in luxury property marketing suites
            to brand identities for AI startups, I work across disciplines to
            bring ideas to life — combining visuals, code, motion, and sound
            into cohesive, engaging experiences.
          </motion.p>{" "}
          <motion.p
            {...paragraphStyles}
            transition={{ ...paragraphStyles.transition, delay: 0.4 }}
          >
            I'm lucky to work remotely from the beautiful edges of Eryri
            National Park (Snowdonia), often swapping my screen for the trails
            to explore the landscape with my dog Obi. I'm also a longtime music
            producer and modular synth enthusiast — which often feeds back into
            my creative process.
          </motion.p>
          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-8"
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Services
            </h3>
            <ul className="flex flex-wrap gap-4 text-teal-400 font-medium text-base lg:text-lg tracking-wide lg:tracking-normal">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-teal-500 hover:text-white transition-colors cursor-default"
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
            <ul className="flex flex-wrap gap-4 text-gray-500 font-medium text-base">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
            <ul className="space-y-1 text-sm text-teal-700 italic tracking-wide">
              <li>
                <strong className="text-gray-500">Music —</strong> Mark
                Pritchard & Thom Yorke - Tall Tales
              </li>
              <li>
                <strong className="text-gray-500">Book —</strong> Made By James
                - The Honest Guide to Creativity and Logo Design by James Martin
              </li>
              <li>
                <strong className="text-gray-500">TV Show —</strong> Slow Horses
                (Apple TV+)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
