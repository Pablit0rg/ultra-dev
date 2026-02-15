import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_50%)]" />

      <section className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
          PABLO <span className="text-zinc-500">ROSA</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
          Software Engineer & Creative Director. Crafting high-end digital experiences.
        </p>
        
        <div className="mt-10 flex gap-4 justify-center">
          <div className="h-px w-12 bg-zinc-800 self-center" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Ultra-Modern Portfolio</span>
          <div className="h-px w-12 bg-zinc-800 self-center" />
        </div>
      </section>
    </main>
  );
}