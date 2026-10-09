"use client";

import React from "react";
import { Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function TheIdea() {
  return (
    <section
      id="the-idea"
      className="relative py-28 sm:py-40 bg-[#030712] overflow-hidden text-center px-6 sm:px-8 lg:px-12"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-25" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-slate-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 relative z-10">
        
        {/* Category Pill: 4. THE IDEA */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="tracking-widest uppercase text-[11px]">4. THE IDEA</span>
          </div>
        </div>

        {/* The Core Thesis: Monumental Statement */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
            콘텐츠를 더 많이 쓰는 시대는 끝났습니다. <br />
            <span className="text-gradient">단 하나의 원천만 남기세요.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
            플랫폼마다 글을 다시 쓰고 요약하는 일은 인간의 일이 아닙니다. <br className="hidden sm:inline" />
            가장 본질적인 원천 하나에 집중하면, 나머지는 시스템이 확장합니다.
          </p>

          {/* Clean Micro Thesis Spine */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span className="text-white font-semibold">ONE SOURCE</span>
              <span className="text-slate-600">→</span>
              <span className="text-sky-300 font-semibold">CONTENT SYSTEM</span>
              <span className="text-slate-600">→</span>
              <span className="text-emerald-400 font-semibold">CHANNELS</span>
            </div>
          </div>
        </div>

        {/* Concrete Paradigm Shift: Old Manual Way vs KNCA Autonomous Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left pt-6">
          
          {/* Left: The Old Way (Manual Labor) */}
          <div className="rounded-3xl bg-[#090d18]/80 border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-rose-300/80 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>기존 방식: 반복 노동</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">
                  수작업 소모
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-400 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between">
                  <span>1. 글·영상 원문 1개 완성</span>
                  <span className="text-slate-500 font-mono">반나절</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 flex items-center justify-between text-rose-300/90">
                  <span>2. 쇼츠용으로 다시 쓰기</span>
                  <span className="font-mono">1~2시간</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 flex items-center justify-between text-rose-300/90">
                  <span>3. 블로그·SNS용으로 다시 요약</span>
                  <span className="font-mono">반복 복사</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
              <span>결과: 시간 소모</span>
              <span className="font-mono text-slate-500">지속 불가능</span>
            </div>
          </div>

          {/* Right: The KNCA Autonomous Way */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#090d18] to-slate-950 border border-white/15 p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>KNCA Labs: 콘텐츠 시스템</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30 font-mono">
                  자동 완성
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span>1. 원천 1개 입력</span>
                  <span className="text-emerald-400 font-mono font-semibold">입력 끝</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                  <span>2. 채널별 자동 재작성</span>
                  <span className="text-sky-300 font-mono">스스로 분해</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between text-white font-medium">
                  <span>3. 모든 채널 동시 완성</span>
                  <span className="font-mono text-emerald-400">수초 완료</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>시간 90% 절감</span>
              </span>
              <span className="text-white font-mono font-bold">Build Once</span>
            </div>
          </div>

        </div>

        {/* Downward Scroll Indicator to Company & Access: ↓ */}
        <div className="pt-8 text-center">
          <a
            href="#trust-and-access"
            className="inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to Company & Access"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">COMPANY</span>
            <span className="text-xl font-light animate-bounce text-slate-400 group-hover:text-white leading-none">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
