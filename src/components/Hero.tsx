"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-radial-glow px-6 sm:px-8 lg:px-12 border-b border-sky-950/60"
    >
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />
        </svg>
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] bg-sky-500/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Hero Core Monolith: 오직 핵심만 남긴 순수 브랜드 경험 */}
      <div className="max-w-5xl mx-auto text-center space-y-10 sm:space-y-12 relative z-10">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold shadow-lg shadow-sky-950/50 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="tracking-widest uppercase">KNCA LABS · AUTONOMOUS CONTENT</span>
          </div>
        </div>

        {/* Monumental Display Headline: Automate More. */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tight text-white leading-[0.94] break-words">
          Build Once. <br />
          <span className="text-gradient">Automate More.</span>
        </h1>

        {/* Single Punchy Subtitle: 장황한 설명 배제 */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-slate-200 max-w-2xl mx-auto font-medium leading-tight tracking-tight">
          원천 하나로 모든 채널을 완성합니다.
        </p>

        {/* Guided CTA: Explore the Workflow → */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#the-workflow"
            className="px-8 py-4.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base sm:text-lg transition-all flex items-center gap-3 shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>Explore the Workflow</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Gentle Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono opacity-60 hover:opacity-100 transition-opacity">
        <span>SCROLL DOWN</span>
        <div className="w-1 h-4 rounded-full bg-slate-600 animate-pulse" />
      </div>

    </section>
  );
}
