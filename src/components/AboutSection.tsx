"use client";

import React from "react";
import { Building2, Target, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-8 sm:p-12 border border-slate-800 space-y-8 relative overflow-hidden bg-radial-glow">
          
          {/* Section Header */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Independent Software Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              About <span className="text-gradient">KNCA Labs</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              KNCA Labs is an independent software studio focused on building practical AI-powered automation tools for content creation and digital workflows.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              KNCA Labs는 <strong>주식회사 케이앤씨에이 (KNCA Inc.)</strong>의 공식 AI 기술 연구개발 및 소프트웨어 프로덕트 브랜드입니다.
            </p>
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
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Transparent AI Engineering</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Claude API Integration</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Independent & Authentic</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
