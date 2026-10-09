import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheShift from "@/components/TheShift";
import EngineShowcase from "@/components/EngineShowcase";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. HERO: The 5-Second AI Punch & Live Multi-Channel Orchestration Console */}
      <Hero />

      {/* 2. THE SHIFT: Old Way (Manual Hell) vs KNCA (Autonomous System) */}
      <TheShift />

      {/* 3. THE ENGINE: Unified 4-Stage Architecture (Capture -> Understand -> Transform -> Distribute) */}
      <EngineShowcase />

      {/* 4. COMPANY: Authentic Engineering Entity (Stay C Jeju, Founded 2023) */}
      <AboutSection />

      {/* 5. CONVERSION: Zero-Friction Closed Beta Access */}
      <WaitlistCTA />

      {/* Minimal Footer */}
      <Footer />
      <BackToTop />
    </main>
  );
}
