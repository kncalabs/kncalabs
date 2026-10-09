"use client";

import React from "react";

export default function TheIdea() {
  return (
    <section
      id="the-idea"
      className="relative py-32 sm:py-48 bg-[#030712] border-b border-white/10 overflow-hidden flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-slate-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        
        {/* Subtle Category Pill: 2. THE IDEA */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="tracking-widest uppercase text-[11px]">2. THE IDEA</span>
          </div>
        </div>

        {/* The Core Thesis: Monumental Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
          콘텐츠를 더 많이 쓰는 시대는 끝났습니다. <br />
          <span className="text-gradient">단 하나의 원천만 남기세요.</span>
        </h2>

        {/* Punchy Narrative Explanation (Linear / Apple Restrained Style) */}
        <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
          플랫폼마다 글을 다시 쓰고 요약하는 일은 인간의 일이 아닙니다. <br className="hidden sm:inline" />
          가장 본질적인 원천 하나에 집중하면, 나머지는 시스템이 확장합니다.
        </p>

        {/* Clean Micro Thesis Spine */}
        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <span className="text-white font-semibold">ONE SOURCE</span>
            <span className="text-slate-600">→</span>
            <span className="text-sky-300 font-semibold">AUTONOMOUS EXPANSION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
