import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemFriction from "@/components/ProblemFriction";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import TangibleOutcomes from "@/components/TangibleOutcomes";
import Capabilities from "@/components/Capabilities";
import FutureBusiness from "@/components/FutureBusiness";
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

      {/* 2. Problem First: 사용자의 반복적인 고통과 비효율 직시 (The Repetitive Friction & Before vs After) */}
      <ProblemFriction />

      {/* 3. Solution Categories: 4대 핵심 역량으로 해결 방법 제시 (What We Do) */}
      <WhatWeDo />

      {/* 4. Visual Workflow: 복잡한 서비스를 4단계 시각적 플로우로 쉽게 설명 (How It Works) */}
      <HowItWorks />

      {/* 5. Concrete Tangible Results: 실제 사용 결과물과 절감 지표 시연 (Tangible Deliverables) */}
      <TangibleOutcomes />

      {/* 6. Capabilities: 현재 구축 중인 핵심 엔진 아키텍처 (What We’re Building) */}
      <Capabilities />

      {/* 7. Future Strategic Value: 미래 인프라 확장 가치 투명 제시 (Future Business) */}
      <FutureBusiness />

      {/* 8. Corporate Authority: 기업 실체 및 신뢰 기반 (Stay C Jeju, Founded 2023) */}
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
