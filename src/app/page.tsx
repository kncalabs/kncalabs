import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SystemCapabilities from "@/components/SystemCapabilities";
import TheIdea from "@/components/TheIdea";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#030712] overflow-hidden">
      <Navbar />
      
      {/* 1. UNIFIED SYSTEM HERO: Ingestion + AI Engine + Multi-Channel Synthesis */}
      <Hero />

      {/* 2. WHAT WE DO + CAPABILITIES: 4-Stage Autonomous Pipeline Specification */}
      <SystemCapabilities />

      {/* 3. SYSTEM ARCHITECTURE & PARADIGM SHIFT: The Thesis */}
      <TheIdea />

      {/* 4. ACCESS & OPERATING ENTITY: Core Alpha Access & Governance */}
      <TrustAndConversion />

      {/* 5. FOOTER & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
