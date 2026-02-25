"use client";

import ProgressBar from "./components/ProgressBar";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroImage from "./components/HeroImage";
import ChallengeSolution from "./components/ChallengeSolution";
import LongScrollSection from "./components/LongScrollSection";
import GallerySection from "./components/GallerySection";
import ProcessSection from "./components/ProcessSection";
import NextProject from "./components/NextProject";
import BackToTop from "./components/BackToTop";

export default function ClientPage({ project, nextProject }) {
  return (
    <article className="min-h-screen bg-neutral text-white font-sans selection:bg-teal-400 selection:text-black">
      <ProgressBar />
      <NavBar slug={project.slug} />
      <HeroSection project={project} />
      <HeroImage image={project.image} title={project.title} />
      <ChallengeSolution challenge={project.challenge} solution={project.solution} />
      <LongScrollSection longPage={project.longPage} />
      <GallerySection images={project.images} />
      <ProcessSection project={project} />
      <NextProject nextProject={nextProject} />
      <BackToTop />
    </article>
  );
}
