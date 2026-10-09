import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkflowSection from "@/components/WorkflowSection";
import TheShift from "@/components/TheShift";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. HERO: Automate More & Explore the Workflow → (설명하지 않고 감각시키는 첫 화면) */}
      <Hero />

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
