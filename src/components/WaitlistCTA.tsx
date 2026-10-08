"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !email.includes("@")) {
      setLoading(false);
      return;
    }

    // 100% Client-side submission handling via Mailto
    const subject = encodeURIComponent(`[KNCA Closed Beta 사전 신청] ${companyName || '기업/기관'}`);
    const body = encodeURIComponent(`회사/기관명: ${companyName}\n직함/부서: ${role}\n이메일: ${email}\n\nKNCA Closed Beta 신청합니다.`);
    
    // Open user's default email app
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-brand-500/30 relative overflow-hidden bg-radial-glow">
          
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Closed Beta & Demo Access</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              KNCA 차세대 AI 에이전트 Closed Beta 사전 신청
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              지금 Closed Beta 신청 정보를 작성해 주시면, 이메일을 통해 우선 안내해 드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  회사/기관명
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: KNCA Labs"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  직함 / 부서
                </label>
                <input
                  type="text"
                  placeholder="예: CTO / AI 팀장"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                공식 비즈니스 이메일 <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold text-base shadow-xl shadow-brand-500/20 hover:shadow-brand-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>처리 중...</span>
              ) : (
                <>
                  <span>Closed Beta 신청 이메일 작성</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>백오피스 서버 없이 이메일 프로그램으로 안전하게 발송됩니다.</span>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 max-w-xl mx-auto p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>신청 정보가 준비되었습니다. 기본 이메일 앱을 확인해 주세요.</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
