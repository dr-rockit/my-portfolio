import React from 'react';
import GeometricBackground from './GeometricBackground';
import RadioheadWidget from './RadioheadWidget';
import Signals from './Signals';

const HeroSection = () => {
  // Define your lists here for cleaner JSX
  const services = [
    'Brand Identity & Visual Storytelling', 
    'Digital Design Systems & UI/UX', 
    'Responsive Web & Front-End Development', 
    'Interactive & Touchscreen Experiences',
    'Motion Graphics & Digital Animation',
    'Audio Production & Sound Design',
    'Technical Consulting & Project Strategy'
  ];

  const skills = [
    'Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 
    'Adobe Premiere Pro', 'Ableton Live', 'DaVinci Resolve', 
    'Sketch', 'Figma', 'Framer', 
    'HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Next.js', 
    'Tailwind CSS', 'Motion', 'daisyUI', 
    'Git', 'GitHub', 'WordPress'
  ];

  return (
    <section className="relative min-h-screen bg-base-100 text-base-content overflow-hidden px-4 md:px-8 pt-12 pb-20">
      {/* BACKGROUND IS Z-0 (First in stack) */}
      <GeometricBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- SECTION 1: THE MASSIVE HEADER --- */}
        <div className="mb-24">
          <h1 className="font-serif text-[13vw] md:text-[11rem] leading-[0.85] tracking-tight">
            Digital Designer <span className="font-light opacity-70">&</span>
            <br />
            <span className="italic">Developer</span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-400 mt-8 max-w-2xl font-light font-sans">
            I <span className="font-serif italic text-white">curate</span>{" "}
            digital experiences for{" "}
            <span className="border-b border-accent text-white pb-1">
              beautiful people
            </span>
            .
          </p>
        </div>

        {/* --- SECTION 2: THE SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT COLUMN (Cols 1-4): Widgets & Visuals */}
          <div className="lg:col-span-4 space-y-6">
            {/* 2. INSERT OK COMPUTER WIDGET COMPONENT HERE */}
            <RadioheadWidget />

            {/* 3. INSERT VISUAL COMPONENT HERE */}
          </div>

          {/* RIGHT COLUMN (Cols 5-12): Editorial Bio */}
          <div className="lg:col-span-8 lg:pl-12">
            <h2 className="text-2xl md:text-4xl font-serif italic leading-tight mb-12 text-white">
              I'm Ian — a digital designer, front-end developer, and visual
              storyteller with a love for clean design, smart interaction, and
              immersive motion.
            </h2>

            {/* 2-Column Text Block */}
            <div className="columns-1 md:columns-2 gap-12 space-y-6 text-gray-400 font-sans text-lg leading-relaxed">
              <p>
                <span className="float-left text-7xl font-serif text-white mr-2 mt-2 leading-[0.8]">
                  F
                </span>
                or over three decades, I've been crafting digital experiences
                that connect, inform, and surprise. Today, I combine that deep
                design intuition with the power of AI — using modern tools to
                prototype faster, optimize code, and push the boundaries of
                what's possible.
              </p>

              <p>
                It's a hybrid workflow that allows me to deliver
                high-performance, rich experiences with the craftsmanship of a
                veteran and the speed of a startup.
              </p>

              <p className="break-inside-avoid">
                From interactive installations in luxury property suites to
                brand identities for new ventures, I work across disciplines to
                bring ideas to life—blending visuals, code, motion, and sound
                into cohesive, engaging narratives.
              </p>

              <p className="break-inside-avoid">
                Now based back home in{" "}
                <span className="text-white font-serif italic">Cornwall</span>,
                I balance screen time with coastal trails and the outdoors with
                my dog, Obi. I'm also a long-time music producer and modular
                synth enthusiast - a passion for signal flow and soundscapes
                that often feeds back into my creative process.
              </p>
            </div>

            {/* --- SERVICES (Teal/Accent Style) --- */}
            <div className="mt-20 pt-8 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 rounded-full border border-emerald-500/20 text-xs font-bold tracking-wide text-emerald-400 bg-emerald-500/5 cursor-default hover:bg-emerald-500/10 transition-colors"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* --- SKILLS (Neutral/Ghost Style) --- */}
            <div className="mt-12">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-medium tracking-wide text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Favourite Things Section */}
            <div className="mt-12">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
                Signals & Noise
              </h3>
              <Signals />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;