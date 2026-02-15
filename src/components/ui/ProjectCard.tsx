"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string; // Caminho da imagem ou URL
  href: string;
  index: number;
}

export function ProjectCard({ title, category, image, href, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative w-full cursor-pointer"
    >
      <Link href={href} className="block">
        {/* Container da Imagem com Overflow Hidden para efeito de Zoom */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-zinc-900">
          <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
          
          {/* Placeholder visual se não houver imagem real ainda */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50" />
          
          {/* Se tiver imagem real, descomente abaixo */}
          {/* <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          /> */}
        </div>

        {/* Metadados do Projeto */}
        <div className="mt-6 flex justify-between items-end border-b border-zinc-900 pb-4 transition-colors group-hover:border-zinc-700">
          <div>
            <span className="block text-xs font-medium tracking-widest text-zinc-500 uppercase mb-2">
              {category}
            </span>
            <h3 className="text-2xl font-light text-zinc-200 group-hover:text-white transition-colors">
              {title}
            </h3>
          </div>
          
          {/* Seta indicativa */}
          <div className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}