"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & IA",
    skills: ["Python", "Java (Spring)", "Firebase", "n8n Automation", "AI Prompting"]
  },
  {
    category: "Tools & Ops",
    skills: ["Git/GitHub", "Google IDX", "Vercel", "Docker", "Linux"]
  }
];

export function Skills() {
  return (
    <section className="py-24 px-4 w-full max-w-6xl mx-auto border-t border-zinc-900">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-xs uppercase tracking-[0.5em] text-zinc-500 mb-16 text-center"
      >
        Technical Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-white font-medium mb-6 flex items-center gap-2">
              <span className="h-1 w-1 bg-zinc-500 rounded-full" />
              {item.category}
            </h3>
            <ul className="space-y-3">
              {item.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-zinc-500 text-sm font-light hover:text-zinc-300 transition-colors cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}