import React from "react";
import { Zap, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TheShift() {
  return (
    <section id="the-shift" className="py-24 sm:py-36 bg-[#050811] relative border-t border-slate-800/90 overflow-hidden">
      {/* Background High-Impact Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/10 blur-[160px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono font-semibold tracking-wider text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>THE PARADIGM SHIFT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            From <span className="text-slate-500 line-through decoration-rose-500/80 decoration-4">Content Creation</span> <br />
            to <span className="text-gradient">Content Systems.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            더 많이 쓰려고 애쓰지 마십시오. 이제 자율 시스템으로 전환할 때입니다.
          </p>
        </div>

        {/* Visual Dual-Chamber Paradigm Shift Engine */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
          
          {/* LEFT: Old Way */}
          <div className="rounded-3xl bg-slate-950/80 border border-rose-950/60 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-rose-400 uppercase">
                    The Old Way (수작업 반복)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  MANUAL
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">1. 원고 작성</span>
                  <span className="text-slate-500">3시간</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-rose-300">
                  <span>2. 숏폼용 재작성</span>
                  <span>1.5시간</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-rose-300">
                  <span>3. SNS 스레드 요약</span>
                  <span>1시간</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/60 flex items-center justify-between text-rose-200 font-bold">
                  <span>4. 채널별 수동 업로드</span>
                  <span>매번 반복</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>주당 12시간 이상 소모</span>
              <span className="text-rose-400 font-bold">크리에이티브 고갈</span>
            </div>
          </div>

          {/* RIGHT: KNCA Autonomous System */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-indigo-950/50 border border-sky-500/50 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl shadow-sky-950/40">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-sky-300 uppercase">
                    KNCA Labs (AI 시스템)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold">
                  AUTONOMOUS
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between">
                  <span className="text-white font-bold">1. ONE SOURCE</span>
                  <span className="text-emerald-400">단 1회 투입 (Build Once)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/40 flex items-center justify-between">
                  <span className="text-white font-bold">2. AI UNDERSTANDING</span>
                  <span className="text-indigo-300">Claude 맥락 추론</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/40 flex items-center justify-between">
                  <span className="text-white font-bold">3. MANY CONTENTS</span>
                  <span className="text-amber-300">4대 포맷 동시 합성</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/50 flex items-center justify-between">
                  <span className="text-emerald-300 font-bold">4. MANY CHANNELS</span>
                  <span className="text-emerald-400 font-bold">다채널 자동 배포</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
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
