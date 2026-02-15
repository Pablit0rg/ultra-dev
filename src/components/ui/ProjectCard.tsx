"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ProjectCard({ title, description, tag }: any) {
  // Efeito de inclinação 3D sutil
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-8 rounded-3xl border border-zinc-800 bg-black/40 backdrop-blur-md transition-colors hover:border-zinc-400/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
      <div className="relative z-10">
        <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase">{tag}</span>
        <h3 className="text-2xl font-semibold text-white mt-4 mb-3 tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}