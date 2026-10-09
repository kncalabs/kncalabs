import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheShift from "@/components/TheShift";
import IntegratedProductWorkflow from "@/components/IntegratedProductWorkflow";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. Hero: 압도적 7rem 타이포그래피 + 4단계 라이브 파이프라인 콘솔 */}
      <Hero />

      {/* 2. The Shift: 기존 수작업 쳇바퀴(Old Way) vs KNCA 자율 시스템(Autonomous System) */}
      <TheShift />

      {/* 3. The Product Workflow: 4-Stage 연결 파이프라인 + 실시간 시뮬레이션 콘솔 통합 */}
      <IntegratedProductWorkflow />

      {/* 4. Trust & Conversion: 기업 실체(Stay C Jeju) + Closed Beta 전환 콘솔 완전 통합 */}
      <TrustAndConversion />

      {/* Micro Footer & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
