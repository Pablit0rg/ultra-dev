"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
          PABLO <span className="text-zinc-500">ROSA</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide"
      >
        Software Engineer & Creative Director. Crafting high-end digital experiences.
      </motion.p>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex gap-4 justify-center"
      >
        <div className="h-px w-12 bg-zinc-800 self-center" />
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Ultra-Modern Portfolio</span>
        <div className="h-px w-12 bg-zinc-800 self-center" />
      </motion.div>

      {/* Authority Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-10"
      >
        <div>
          <p className="text-2xl font-bold text-white">2+</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">Anos de Experiência</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white">10+</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">Projetos Entregues</p>
        </div>
      </motion.div>
    </section>
  );
}