"use client";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center px-6 py-3 rounded-full border border-zinc-800 bg-black/50 backdrop-blur-md"
    >
      <div className="flex gap-8">
        {['Início', 'Projetos', 'Habilidades', 'Contato'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}