"use client";

import React from "react";
import { Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function TheShift() {
  return (
    <section id="the-shift" className="py-24 sm:py-36 bg-[#060a16] relative border-t border-sky-900/40 overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/15 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-mono font-semibold tracking-wider text-sky-300">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>THE PARADIGM SHIFT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            From <span className="text-slate-500 line-through decoration-rose-500 decoration-4">Creation Loops</span> to <span className="text-gradient">Content Systems.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
            단발성 수작업 창작의 쳇바퀴에서 벗어나 자율적으로 동작하는 시스템으로 전환합니다.
          </p>
        </div>

        {/* Clean Contrast Comparison: 카드 나열이 아닌 직관적 대비 뷰 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Old Way */}
          <div className="rounded-3xl bg-slate-950/80 border border-rose-950/60 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Old Way (기존 수작업)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  수동 반복
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-400 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <span>1. 원문 작성</span>
                  <span className="text-slate-500">2~4시간 소요</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-rose-300">
                  <span>2. 채널별 수동 재작성</span>
                  <span>포맷마다 다시 쓰기</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-center justify-between text-rose-300">
                  <span>3. 복사·붙여넣기 발행</span>
                  <span>채널별 수동 업로드</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-rose-400 flex items-center justify-between">
              <span>결과: 크리에이티브 고갈</span>
              <span className="font-bold">끝없는 수작업 쳇바퀴</span>
            </div>
          </div>

          {/* Right: The KNCA Autonomous Way */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-indigo-950/50 border border-sky-500/50 p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-300 font-mono text-xs font-bold uppercase">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>KNCA Labs (자율 시스템)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  AUTONOMOUS
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between">
                  <span>1. 단 1회 원천 투입 (Build Once)</span>
                  <span className="text-emerald-400 font-semibold">입력 완료</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/40 flex items-center justify-between">
                  <span>2. Claude 기반 자율 변환</span>
                  <span className="text-indigo-300">맥락 무손실 합성</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/50 flex items-center justify-between text-emerald-300">
                  <span>3. 다채널 동시 배포 (Automate More)</span>
                  <span className="font-bold">원클릭 릴리즈</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>시간 90% 절감</span>
              </span>
              <span className="text-white font-bold">Automate More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
