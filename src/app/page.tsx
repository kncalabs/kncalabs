import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheIdea from "@/components/TheIdea";
import WorkflowSection from "@/components/WorkflowSection";
import TheShift from "@/components/TheShift";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#030712] overflow-hidden">
      <Navbar />
      
      {/* 1. HERO: Automate More & Explore the Workflow → */}
      <Hero />

      {/* 2. THE IDEA: 단 하나의 원천만 남기세요 */}
      <TheIdea />

      {/* 3. THE WORKFLOW: 아름다운 단일 AI 파이프라인 시각화 */}
      <WorkflowSection />

      {/* 4. THE FUTURE: 일하는 방식의 전환 (Old Way vs Autonomous Way) */}
      <TheShift />

      {/* Company & Closed Beta Conversion */}
      <TrustAndConversion />

      {/* Micro Footer & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
