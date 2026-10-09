import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
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
      
      {/* 5초: KNCA Labs가 무엇을 하는가? (AI Content Automation - Build Once. Automate More.) */}
      <Hero />

      {/* 5초 강화: 무엇을 하는지 4대 카테고리로 즉시 인지 */}
      <WhatWeDo />

      {/* 10초: 어떻게 하는가? (Capture → Understand → Transform → Distribute 4단계 파이프라인 모션) */}
      <HowItWorks />

      {/* 20초: 어떤 기능을 만드는가? (What We’re Building - 4대 핵심 구축 영역) */}
      <Capabilities />

      {/* 30초: 앞으로 어디까지 확장하려는가? (Future Business - Planned & Exploring 투명 구분) */}
      <FutureBusiness />

      {/* 마지막: 어떤 회사인가? (Corporate Profile, Stay C Jeju 2023, Long-term Brand Infrastructure Mission) */}
      <AboutSection />

      {/* Closed Beta Early Access & Contact */}
      <WaitlistCTA />
      <ContactSection />

      {/* Premium Minimal Micro Footer */}
      <Footer />
      <BackToTop />
    </main>
  );
}
