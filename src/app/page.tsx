import Navbar from "@/components/Navbar";
import MonumentalEngine from "@/components/MonumentalEngine";
import TheShift from "@/components/TheShift";
import TrustAndConversion from "@/components/TrustAndConversion";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080c14] overflow-hidden">
      <Navbar />
      
      {/* 1. The Monumental Engine: 하나의 압도적 핵심 시각 요소 (7rem 타이포 + One Source 자율 런타임 콘솔) */}
      <MonumentalEngine />

      {/* 2. The Shift: 기존 수작업 쳇바퀴(Old Way) vs 자율 콘텐츠 시스템(Autonomous System) 대조 */}
      <TheShift />

      {/* 3. Trust & Conversion: 기업 실체(Stay C Jeju) + Closed Beta 전환 콘솔 완전 통합 */}
      <TrustAndConversion />

      {/* Micro Footer & Back to Top */}
      <Footer />
      <BackToTop />
    </main>
  );
}
