import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import TheIdea from "@/components/TheIdea";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#030712] overflow-hidden">
      <Navbar />
      
      {/* 1. HERO: Automate More & Explore the Workflow → */}
      <Hero />

      {/* 2 & 3. THE WORKFLOW: 아름다운 단일 AI 파이프라인 시각화 (ONE SOURCE ➔ AI ➔ CHANNELS) */}
      <WorkflowSection />

      {/* 4. THE IDEA: 단 하나의 원천만 남기세요 & 기존 반복 노동 vs KNCA 자율 파이프라인 */}
      <TheIdea />

      {/* 5. COMPANY & Closed Beta Conversion */}
      <TrustAndConversion />

      {/* 6. FOOTER & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
