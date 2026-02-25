"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage({ image, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full aspect-video md:aspect-auto md:h-[90vh] relative mb-32"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral to-transparent opacity-20" />
    </motion.div>
  );
}