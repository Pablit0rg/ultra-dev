"use client"; // Obrigatório para Framer Motion
import { motion } from "framer-motion";

export function Hero() { // <--- Verifique esta linha
  return (
    // ... conteúdo do componente
  );
}

{/* Adicione isso abaixo do seu parágrafo atual no Hero.tsx */}
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