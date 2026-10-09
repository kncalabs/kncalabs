import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheShift from "@/components/TheShift";
import HowItWorks from "@/components/HowItWorks";
import ProductVisualization from "@/components/ProductVisualization";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. HERO ENGINE: The 5-Second AI Punch & Live Interactive Orchestrator */}
      <Hero />

      {/* 2. THE SHIFT: Old Manual Loop vs KNCA Autonomous AI System */}
      <TheShift />

      {/* 3. HOW IT WORKS: 4-Stage Continuous Workflow Architecture (Capture -> Understand -> Transform -> Distribute) */}
      <HowItWorks />

      {/* 4. THE LIVE CONSOLE: Real Ingestion & Multi-Format Output Simulation */}
      <ProductVisualization />

      {/* 5. ABOUT & INTEGRITY: Authentic Company Behind the AI (Stay C Jeju, Founded 2023) */}
      <AboutSection />

      {/* 6. CONVERSION: Closed Beta Access & Direct Contact */}
      <WaitlistCTA />

      {/* Minimalist Footer */}
      <Footer />
      <BackToTop />
    </main>
  );
}
