import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, Mail, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Terms of Service | KNCA Labs",
  description: "Terms of Service for KNCA Labs official pre-launch website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 relative">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Pre-Launch Terms & Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service (이용약관)
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: October 2026 (Pre-launch Stage)
          </p>
        </div>

        {/* Policy Contents (Simple, Honest, Clear) */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">01.</span>
              <span>약관 동의 (Acceptance of Terms)</span>
            </h2>
            <p>
              본 이용약관은 Stay C Jeju(스테이씨 제주, 이하 &quot;회사&quot;)가 운영하는 AI 기술 및 프로덕트 브랜드 KNCA Labs의 공식 웹사이트(<a href="https://kncalabs.com" className="text-sky-400 underline">kncalabs.com</a>) 이용 조건에 대해 규정합니다. 본 사이트를 열람 및 이용하는 것은 본 약관에 동의하는 것으로 간주됩니다.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              <span>02. 현재 개발 중인 제품 웹사이트 명시 (Pre-Launch & Active Development Notice)</span>
            </h2>
            <p>
              본 웹사이트에 명시된 모든 제품 기능, 기술 구조, 워크플로우 다이어그램 및 시각 자료는 **현재 활발히 연구·개발(Active Development) 중인 제품**에 관한 사전 정보 제공 및 제품 소개를 위한 안내 목적입니다.
            </p>
            <p className="text-xs text-slate-400">
              * &quot;Designed to support...&quot; 또는 &quot;Planned workflow&quot;로 표시된 항목은 개발 진행 상태에 따라 구체적 포맷 및 연동 사양이 발전하거나 변경될 수 있습니다.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">03.</span>
              <span>지적 재산권 (Intellectual Property)</span>
            </h2>
            <p>
              KNCA Labs 서비스명, 고유 텍스트 및 웹사이트 아키텍처 디자인 권리는 KNCA Labs에 속합니다. 본 사이트에 명시된 3사 상표(Anthropic, Claude 등)는 해당 각 권리자의 소유입니다.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">04.</span>
              <span>문의 및 변경 사항 (Modifications & Contact)</span>
            </h2>
            <p>
              본 이용약관은 서비스 개발 진척 및 상용 런칭 시점에 맞춰 변경될 수 있습니다. 이용약관과 관련된 모든 질문이나 의견은 공식 이메일로 보내주시기 바랍니다:
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-sky-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:founder@kncalabs.com" className="underline font-bold">founder@kncalabs.com</a>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </main>
  );
}
