import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFriction from "@/components/ProblemFriction";
import TheShift from "@/components/TheShift";
import HowItWorks from "@/components/HowItWorks";
import ProductVisualization from "@/components/ProductVisualization";
import Capabilities from "@/components/Capabilities";
import FutureVision from "@/components/FutureVision";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. Hero: AI Content Orchestration System (First 5-Sec AI Experience) */}
      <Hero />

      {/* 2. The Problem: The Manual Content Treadmill */}
      <ProblemFriction />

      {/* 3. The Paradigm Shift: From Content Creation to Content Systems */}
      <TheShift />

      {/* 4. The Core Pipeline: 4-Stage Connected Workflow Engine */}
      <HowItWorks />

      {/* 5. Live Simulation Console: Interactive URL Ingestion & Dispatched Outputs */}
      <ProductVisualization />

      {/* 6. Capabilities: Autonomous AI Architecture Specs */}
      <Capabilities />

      {/* 7. Future Vision & Flywheel: Content Becoming Infrastructure */}
      <FutureVision />

      {/* 8. Corporate Trust & Integrity: Stay C Jeju (Founded 2023) */}
      <AboutSection />

      {/* 9. Final Conversion & Closed Beta Access */}
      <WaitlistCTA />

      {/* Footer & Navigation Controls */}
      <Footer />
      <BackToTop />
    </main>
  );
}
