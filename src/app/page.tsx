import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFriction from "@/components/ProblemFriction";
import TheShift from "@/components/TheShift";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import OneSourceManyOutputs from "@/components/OneSourceManyOutputs";
import ProductVisualization from "@/components/ProductVisualization";
import Capabilities from "@/components/Capabilities";
import FutureBusiness from "@/components/FutureBusiness";
import FutureVision from "@/components/FutureVision";
import AboutSection from "@/components/AboutSection";
import WaitlistCTA from "@/components/WaitlistCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. Hero: 가치 제안 및 핵심 메시지 (Build Once. Automate More.) */}
      <Hero />

      {/* 2. The Problem: 수작업 8단계 사슬과 반복 노동의 비효율 (Content shouldn’t require repeating the same work) */}
      <ProblemFriction />

      {/* 3. The Shift: 강력한 패러다임 전환 (From Content Creation to Content Systems) */}
      <TheShift />

      {/* 4. What We Do: 4대 핵심 역량 에디토리얼 서사 쇼케이스 */}
      <WhatWeDo />

      {/* 5. How It Works: 4단계 연속 연결 파이프라인 (01 Capture -> 02 Understand -> 03 Transform -> 04 Distribute) */}
      <HowItWorks />

      {/* 6. One Source -> Many Outputs: 핵심 제품 개념 매트릭스 (Left: Source -> Center: AI -> Right: Outputs) */}
      <OneSourceManyOutputs />

      {/* 7. Product Visualization: 실제 시스템 인터페이스 시뮬레이션 콘솔 (Source -> Processing -> Outputs -> Queue) */}
      <ProductVisualization />

      {/* 8. What We Build: 현재 구축 중인 4대 핵심 역량 (Capabilities) */}
      <Capabilities />

      {/* 9. Future Business: 로드맵 계획 및 탐색 단계 (Planned vs Exploring 투명 분리) */}
      <FutureBusiness />

      {/* 10. Future Vision: 강력한 브랜드 비전 (Content is becoming infrastructure. 6-Stage Loop) */}
      <FutureVision />

      {/* 11. Corporate Authority: 기업 실체 및 신뢰 기반 (Stay C Jeju, Founded 2023) */}
      <AboutSection />

      {/* 9. Seamless Zero-Friction Conversion: 마찰 없는 클로즈드 베타 신청 */}
      <WaitlistCTA />
      <ContactSection />

      {/* Micro Footer */}
      <Footer />
      <BackToTop />
    </main>
  );
}
