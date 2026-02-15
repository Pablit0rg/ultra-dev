"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-32 px-4 w-full max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter"
        >
          VAMOS CONSTRUIR O <span className="text-zinc-600">PRÓXIMO NÍVEL?</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.a 
          href="mailto:pablorosagomes@gmail.com"
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm flex items-center gap-6 group transition-all hover:border-zinc-500"
        >
          <div className="p-4 rounded-2xl bg-zinc-800 group-hover:bg-white group-hover:text-black transition-all">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">Email Oficial</p>
            <p className="text-white font-medium">pablorosagomes@gmail.com</p>
          </div>
        </motion.a>

        <motion.a 
          href="https://wa.me/55419995231"
          target="_blank"
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm flex items-center gap-6 group transition-all hover:border-zinc-500"
        >
          <div className="p-4 rounded-2xl bg-zinc-800 group-hover:bg-green-500 group-hover:text-white transition-all">
            <MessageSquare size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">WhatsApp Direto</p>
            <p className="text-white font-medium">+55 (41) 9995-231</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}