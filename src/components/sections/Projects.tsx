"use client";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PrevDesk",
    tag: "Legal Tech",
    description: "Sistema de gestão inteligente para escritórios de advocacia focado em previdência.",
  },
  {
    title: "Afrotunde",
    tag: "Landing Page",
    description: "Plataforma premium para locticians, celebrando a arte ancestral das tranças.",
  },
  {
    title: "DaRafa",
    tag: "E-commerce",
    description: "Experiência digital moderna para marca de produtos artesanais.",
  }
];

export function Projects() {
  return (
    <section className="py-24 px-4 w-full max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-xs uppercase tracking-[0.5em] text-zinc-500 mb-12"
      >
        Selected Work
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}