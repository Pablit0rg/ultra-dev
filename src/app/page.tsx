import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-white selection:text-black">
      {/* Luz focal no topo para profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-32 pb-32">
        <div className="h-screen flex items-center justify-center">
          <Hero />
        </div>
        
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}