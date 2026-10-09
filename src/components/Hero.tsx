"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-radial-glow px-6 sm:px-8 lg:px-12"
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
        
        {/* Subtle Category Pill: Linear / Anthropic Style */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="tracking-widest uppercase text-[11px]">AI CONTENT AUTOMATION</span>
          </div>
        </div>

        {/* Monumental Display Headline: Apple/Linear Spec */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tight text-white leading-[0.94] break-words">
          Build Once. <br />
          <span className="text-gradient">Automate More.</span>
        </h1>

        {/* Single Punchy Subtitle: Monochromatic & Crisp */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
          원천 하나로 모든 채널을 완성합니다.
        </p>

        {/* Guided CTA: Vercel / Linear Style High-Contrast Monolith Button */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#the-workflow"
            className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-200 text-black font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 shadow-lg shadow-white/5 active:scale-[0.98] group"
          >
            <span>Explore the Workflow</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Downward Scroll Indicator Cue: ↓ */}
      <a
        href="#the-idea"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll to The Idea"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">EXPLORE</span>
        <span className="text-lg font-light animate-bounce text-slate-400 group-hover:text-white leading-none">↓</span>
      </a>

    </section>
  );
}
