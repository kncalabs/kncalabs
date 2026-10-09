"use client";

import React from "react";
import { Building2, Target, Sparkles, ShieldCheck, Compass, Workflow, MapPin, Calendar, Activity } from "lucide-react";

export default function CompanySection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-sky-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 1. Main About Card */}
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 space-y-8 relative overflow-hidden backdrop-blur-md">
            
            {/* Section Header */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>COMPANY OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                About <span className="text-gradient">KNCA Labs</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                AI-powered content automation company based in South Korea.
              </p>
            </div>

            {/* Long-Term Brand Vision Banner: Not just AI Writing, but AI Workflow Infrastructure */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950/50 via-slate-900 to-indigo-950/50 border border-sky-500/30 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-300 font-semibold tracking-wider uppercase">
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>Long-Term Brand Mission</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium">
                  Beyond Simple Text Generation
                </span>
              </div>

              <p className="text-xl sm:text-2xl text-white font-extrabold tracking-tight leading-snug">
                &quot;KNCA Labs is building the AI infrastructure that turns content into workflows.&quot;
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <Workflow className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p>
                  KNCA Labs는 단순히 문장을 대신 생성하는 AI 글쓰기 도구에 머무르지 않습니다. 
                  원천 콘텐츠의 수집부터 다채널 자율 배포까지 전 과정을 연결하는 
                  <strong> 차세대 AI 워크플로우 및 자동화 인프라(Automation Infrastructure)</strong>를 구축하는 기술 기업입니다.
                </p>
              </div>
            </div>

            {/* Goal Statement Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                <Target className="w-4 h-4 text-sky-400" />
                <span>OUR CORE MISSION & GOAL</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                &quot;Our goal is simple: reduce repetitive work, improve content operations, and give creators more time to focus on ideas rather than manual production.&quot;
              </p>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent AI Engineering</span>
              </div>
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Claude API Integration</span>
              </div>
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Independent & Authentic</span>
              </div>
            </div>

          </div>

          {/* 2. Distinct, Clean Company & Operational Profile Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-7 sm:p-8 backdrop-blur-md space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                  Corporate Profile
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  KNCA Labs
                </h3>
              </div>

              {/* Current Active Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Core alpha testing in progress · Closed Beta architecture</span>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div className="space-y-1.5">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Established
                </span>
                <p className="text-white font-medium text-sm">
                  Founded in 2023 · South Korea
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  Operations & Entity
                </span>
                <p className="text-white font-medium text-sm">
                  Operated by Stay C Jeju (스테이씨 제주)
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Domain & Focus
                </span>
                <p className="text-slate-200 font-medium">
                  AI-powered content automation company based in South Korea.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
