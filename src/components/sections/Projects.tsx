"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";

const projectsData = [
  {
    title: "Nexa AI Core",
    category: "Artificial Intelligence",
    image: "/projects/nexa.jpg",
    href: "#",
  },
  {
    title: "SmartLeads System",
    category: "SaaS Platform",
    image: "/projects/smartleads.jpg",
    href: "#",
  },
  {
    title: "AfroTunde",
    category: "Brand Experience",
    image: "/projects/afrotunde.jpg",
    href: "#",
  },
  {
    title: "PrevDesk",
    category: "Legal Tech Dashboard",
    image: "/projects/prevdesk.jpg",
    href: "#",
  }
];

export function Projects() {
  return (
    <section className="relative z-10 w-full py-32 px-4 md:px-12 bg-black">
      {/* Header da Seção */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          SELECTED <br/> <span className="text-zinc-600">WORKS</span>
        </h2>
        <p className="mt-4 md:mt-0 text-zinc-400 max-w-sm text-sm tracking-wide">
          Uma curadoria de soluções digitais de alta performance, focadas em escalabilidade e experiência do usuário.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            category={project.category}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}