import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFriction from "@/components/ProblemFriction";
import TheShift from "@/components/TheShift";
import HowItWorks from "@/components/HowItWorks";
import OneSourceManyOutputs from "@/components/OneSourceManyOutputs";
import ProductVisualization from "@/components/ProductVisualization";
import DeepDiveMatrix from "@/components/DeepDiveMatrix";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. Hero: 압도적 5초 AI 인상 및 시네마틱 4-Stage 콘솔 */}
      <Hero />

      {/* 2. The Reality Check: 8단계 수작업 노동의 비효율 */}
      <ProblemFriction />

      {/* 3. The Paradigm Shift: 수작업 쳇바퀴 vs KNCA 자율 시스템 */}
      <TheShift />

      {/* 4. The Core Pipeline: 4단계 연속 연결 파이프라인 (01 Capture -> 02 Understand -> 03 Transform -> 04 Distribute) */}
      <HowItWorks />

      {/* 5. Matrix & Interactive Proof: 1개 소스 -> 5개 다채널 분기 매트릭스 */}
      <OneSourceManyOutputs />

      {/* 6. Product Visualization: 실제 시스템 런타임 인터페이스 시뮬레이션 */}
      <ProductVisualization />

      {/* 7. Deep Dive Matrix: What We Do + Capabilities를 단일 통합한 아키텍처 쇼케이스 */}
      <DeepDiveMatrix />

      {/* 8. Trust & Conversion: 기업 실체(Stay C Jeju) + Closed Beta 전환 콘솔 완전 통합 */}
      <TrustAndConversion />

      {/* Micro Footer & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
