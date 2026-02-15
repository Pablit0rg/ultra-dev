"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tag: string;
}

export function ProjectCard({ title, description, tag }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl transition-all hover:border-zinc-700"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-800 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500" />
      <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 block">{tag}</span>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}