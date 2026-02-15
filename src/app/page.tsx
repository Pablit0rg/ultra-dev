import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0a_0%,transparent_70%)] pointer-events-none" />
      
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <Hero />
      </div>

      <Projects />
    </main>
  );
}