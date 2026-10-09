"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Send, CheckCircle2, Lock, Mail, Building2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WaitlistCTA() {
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
    <section id="waitlist" className="py-24 sm:py-36 bg-[#060911] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background High-Impact Radiant Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-500/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-sky-500/40 p-8 sm:p-14 relative overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/90 backdrop-blur-xl shadow-2xl shadow-sky-950/50">
          
          {/* Main Headline & Narrative Closing */}
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>THE CONVERSION POINT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Stop repeating the work. <br />
              <span className="text-gradient">Build once. Automate more.</span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              AI-powered content workflows for the next generation of creators and businesses.
            </p>

            {/* The Ultimate Unifying Brand Equation */}
            <div className="pt-1 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold tracking-wider">
                <span>ONE SOURCE</span>
                <span className="text-slate-500">→</span>
                <span>AI</span>
                <span className="text-slate-500">→</span>
                <span>MANY CONTENTS</span>
                <span className="text-slate-500">→</span>
                <span>MANY CHANNELS</span>
              </span>
            </div>

            {/* Direct Workflow Anchor Navigation */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="#system-engine"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-sky-950/20 active:scale-[0.99] transition-all"
              >
                <span>Explore the Engine</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              </Link>
              <Link
                href="#the-shift"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all"
              >
                <span>The Paradigm Shift</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Assurance Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                신용카드 등록 없음
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                자동 결제 없음
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Closed Beta 데모 우선 제공
              </span>
            </div>
          </div>

          {/* Unified Action Console: Closed Beta & Direct Inquiry */}
          <div className="mt-12 max-w-xl mx-auto pt-8 border-t border-slate-800/80">
            {/* Mode Switcher */}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "beta" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                        회사 / 팀명
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 크리에이터 / 기업명"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                        직함 / 역할
                      </label>
                      <input
                        type="text"
                        placeholder="예: 콘텐츠 리드 / Founder"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                      공식 비즈니스 이메일 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                      성함 / 회사명
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="성함 또는 기업명"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                      회신 받으실 이메일 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1 font-mono">
                      문의 내용
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="기술 제휴, 파이프라인 연동, 커스텀 자동화 등 문의 내용을 작성해 주세요."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-extrabold text-base shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>처리 중...</span>
                ) : (
                  <>
                    <span>{activeTab === "beta" ? "Closed Beta 사전 신청 접수" : "비즈니스 제휴 문의 발송"}</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  직접 보안 이메일 발송
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <span>{siteConfig.contact.email}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>

            {/* Official Entity Footnote */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>KNCA Labs · Operated by Stay C Jeju</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="font-mono">{siteConfig.contact.email}</span>
              </div>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 max-w-xl mx-auto p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <span>신청/문의 내용이 준비되었습니다. 이메일 클라이언트 발송을 확인해 주세요.</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
