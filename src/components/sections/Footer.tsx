"use client";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-4 w-full max-w-6xl mx-auto border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold tracking-tighter text-white">
          PABLO<span className="text-zinc-500 underline decoration-zinc-800 underline-offset-4">ROSA</span>
        </h2>
        <p className="text-zinc-500 text-sm max-w-xs font-light">
          Disponível para projetos freelance e consultorias de alta performance.
        </p>
      </div>

      <div className="flex flex-col md:items-end gap-6">
        <div className="flex gap-8">
          <a href="https://github.com/Pablit0rg" target="_blank" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Github</a>
          <a href="#" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:seu-email@exemplo.com" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Email</a>
        </div>
        
        <p className="text-[10px] text-zinc-700 uppercase tracking-[0.3em]">
          © {currentYear} — Built by @pablit0rg
        </p>
      </div>
    </footer>
  );
}