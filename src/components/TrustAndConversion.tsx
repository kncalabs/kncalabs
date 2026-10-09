"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Lock,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TrustAndConversion() {
  const [activeTab, setActiveTab] = useState<"beta" | "contact">("beta");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !email.includes("@")) {
      setLoading(false);
      return;
    }

    if (activeTab === "beta") {
      const subject = encodeURIComponent(`[KNCA Closed Beta 사전 신청] ${companyName || '크리에이터/기업'}`);
      const body = encodeURIComponent(`회사/팀명: ${companyName}\n직함/역할: ${role}\n이메일: ${email}\n\nKNCA 차세대 AI 워크플로우 Closed Beta 신청합니다.`);
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    } else {
      const subject = encodeURIComponent(`[KNCA Labs 비즈니스 문의] ${companyName || '파트너'}`);
      const body = encodeURIComponent(`성함/회사: ${companyName}\n이메일: ${email}\n\n문의 내용:\n${message}`);
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="trust-and-access" className="py-28 sm:py-40 bg-[#030712] relative overflow-hidden">
      {/* Background High-Impact Radiant Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-500/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-24">
        
        {/* 1. UNIFIED CONVERSION HERO CARD: Linear / Vercel Monolith */}
        <div className="rounded-3xl border border-white/10 p-10 sm:p-20 relative overflow-hidden bg-[#070b14]/90 backdrop-blur-2xl shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-widest uppercase text-[11px]">Core alpha testing in progress</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Deploy Your <br />
              <span className="text-gradient">Content System.</span>
            </h2>

            <p className="text-base sm:text-xl text-slate-400 leading-relaxed font-normal">
              반복 작업을 멈추고 시스템을 시작하세요.
            </p>

            {/* Brand Equation Spine */}
            <div className="pt-2 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 font-medium tracking-wider">
                <span>ONE SOURCE</span>
                <span className="text-slate-600">→</span>
                <span>AI</span>
                <span className="text-slate-600">→</span>
                <span>PUBLISHING INFRASTRUCTURE</span>
                <span className="text-slate-600">→</span>
                <span>CHANNELS</span>
              </span>
            </div>

            {/* Assurance Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                신용카드 등록 없음
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                자동 결제 없음
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                Closed Beta 데모 우선 제공
              </span>
            </div>
          </div>

          {/* Action Console: Mode Switcher & Form */}
          <div className="mt-10 max-w-xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800 mb-6">
              <button
                type="button"
                onClick={() => { setActiveTab("beta"); setSubmitted(false); }}
                className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeTab === "beta"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Closed Beta 신청
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab("contact"); setSubmitted(false); }}
                className={`flex-1 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeTab === "contact"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                비즈니스 / 기술 제휴 문의
              </button>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">신청 메일 클라이언트가 실행되었습니다</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  메일 발송을 완료해 주시면 24시간 내에 Closed Beta 접근 링크 또는 검토 회신을 안내해 드립니다.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-sky-400 hover:underline"
                  >
                    새로운 신청서 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400 block">
                      회사명 / 팀명 / 채널명
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="예: KNCA 스튜디오 / 독립 크리에이터"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-sky-500/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400 block">
                      역할 / 직함
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="예: 콘텐츠 리드, 크리에이터, 파운더"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-sky-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 block">
                    업무용 이메일 주소 <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-sky-500/50"
                    />
                  </div>
                </div>

                {activeTab === "contact" && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400 block">
                      문의 내용
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="원하시는 제휴 방식이나 도입 검토 배경을 간단히 적어주세요."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-hidden focus:border-sky-500/50 resize-none"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20 active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{activeTab === "beta" ? "Closed Beta 우선 접근 신청" : "비즈니스 제휴 문의 보내기"}</span>
                </button>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>개인정보보호 및 암호화 전송</span>
                  </span>
                  <span>회신 소요: 평균 24시간 이내</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 2. CONSOLIDATED CORPORATE CREDIBILITY: 5. COMPANY (Apple/Linear Spec) */}
        <div id="company" className="rounded-3xl bg-[#090d18]/80 border border-white/10 p-8 sm:p-12 backdrop-blur-xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>COMPANY · OPERATING ENTITY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
                KNCA Labs
              </h3>
              <p className="text-xs font-mono text-sky-400 mt-0.5">
                AI-powered content automation company
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Core alpha testing in progress · Founded 2023</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-xs leading-relaxed">
            {/* Mission Statement (7 cols) */}
            <div className="md:col-span-7 space-y-2">
              <p className="text-sm font-semibold text-white">
                &quot;콘텐츠를 자율 워크플로우로 전환합니다.&quot;
              </p>
              <p className="text-slate-400 font-sans">
                원천 1개에서 다채널 자율 배포까지 연결하는 차세대 콘텐츠 인프라를 만듭니다.
              </p>
            </div>

            {/* Corporate Fact Grid (5 cols) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4 pt-1 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
              <div className="space-y-1">
                <span className="text-slate-500 font-mono block">Entity & Operation</span>
                <span className="text-white font-medium block">Stay C Jeju (스테이씨 제주)</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 font-mono block">Established</span>
                <span className="text-white font-medium block">2023 · South Korea</span>
              </div>
              <div className="space-y-1 col-span-2">
                <span className="text-slate-500 font-mono block">Direct Contact</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sky-300 hover:underline font-mono">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Downward Scroll Indicator to Footer: ↓ */}
        <div className="pt-4 text-center">
          <a
            href="#footer"
            className="inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to Footer"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">FOOTER</span>
            <span className="text-xl font-light animate-bounce text-slate-400 group-hover:text-white leading-none">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
