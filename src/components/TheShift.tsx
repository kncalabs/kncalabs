import React from "react";
import { Zap, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TheShift() {
  return (
    <section id="the-shift" className="py-28 sm:py-44 bg-[#060a16] relative border-t border-sky-900/40 overflow-hidden">
      {/* Background High-Impact Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-45 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/15 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/20 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Commanding Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-mono font-semibold tracking-wider shadow-lg shadow-sky-950/40">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sky-300">CORE PARADIGM SHIFT</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.04]">
            From <span className="text-slate-500 line-through decoration-rose-500 decoration-4 sm:decoration-8">Content Creation</span> <br />
            to <span className="text-gradient">Content Systems.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            더 많이 쓰려고 애쓰지 마십시오. <br className="hidden sm:inline" />
            이제 단발성 수작업 창작의 쳇바퀴에서 벗어나, <strong className="text-white font-semibold">자율적으로 동작하는 콘텐츠 시스템</strong>으로 전환할 때입니다.
          </p>
        </div>

        {/* Visual Dual-Chamber Paradigm Shift Engine */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          {/* LEFT CHAMBER: The Exhausting Loop (Conventional) - 5 Cols */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-950/80 border border-rose-950/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-rose-400 uppercase">
                    The Old Way (기존 방식)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  MANUAL HELL
                </span>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* 1. ONE CONTENT */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center font-mono text-xs text-slate-400 font-bold">1</span>
                    <span className="font-mono text-sm font-bold text-slate-300">ONE CONTENT</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">단일 원고 완성</span>
                </div>

                <div className="flex justify-center text-slate-600 font-mono text-sm py-0.5">↓</div>

                {/* 2. MANUAL WORK */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center font-mono text-xs text-slate-400 font-bold">2</span>
                    <span className="font-mono text-sm font-bold text-slate-300">MANUAL WORK</span>
                  </div>
                  <span className="text-[11px] font-mono text-rose-400 font-semibold">채널마다 복사·줄글 수정</span>
                </div>

                <div className="flex justify-center text-rose-500/80 font-mono text-sm py-0.5">↓</div>

                {/* 3. REPEAT */}
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-rose-300 font-mono text-xs font-semibold">
                  <span>REPEAT (다음 채널용 다시 쓰기)</span>
                  <span>소모 2시간</span>
                </div>

                <div className="flex justify-center text-rose-500/80 font-mono text-sm py-0.5">↓</div>

                {/* 4. REPEAT */}
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-center justify-between text-rose-300 font-mono text-xs font-semibold">
                  <span>REPEAT (소셜 요약 스레드 재가공)</span>
                  <span>소모 1.5시간</span>
                </div>

                <div className="flex justify-center text-rose-500 font-mono text-sm py-0.5">↓</div>

                {/* 5. REPEAT */}
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-900/70 flex items-center justify-between text-rose-200 font-mono text-xs font-bold animate-pulse">
                  <span>REPEAT (뉴스레터 및 숏폼 대본)</span>
                  <span>하루 작업 마비</span>
                </div>

              </div>

            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>결과: 크리에이티브 고갈</span>
              <span className="text-rose-400 font-bold">끝없는 쳇바퀴 트랩</span>
            </div>
          </div>

          {/* MIDDLE CONNECTOR (Desktop Breakthrough Beam) - 2 Cols */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center relative">
            <div className="w-[2px] h-full bg-gradient-to-b from-rose-500/20 via-sky-400 to-indigo-500/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-xl shadow-sky-500/30">
                <Zap className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <span className="mt-8 text-[11px] font-mono tracking-widest text-sky-300 font-bold uppercase rotate-90">
              SHIFT
            </span>
          </div>

          {/* RIGHT CHAMBER: The Autonomous Content System (KNCA Labs) - 5 Cols */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-indigo-950/50 border border-sky-500/50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-2xl shadow-sky-950/40">
            {/* Ambient Inner Pulse */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 blur-[100px] pointer-events-none -z-0" />

            <div className="space-y-6 relative z-10">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-sky-300 uppercase">
                    KNCA Labs (새로운 패러다임)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold">
                  AUTONOMOUS SYSTEM
                </span>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* 1. ONE SOURCE */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center font-mono text-xs text-sky-300 font-bold">1</span>
                    <span className="font-mono text-sm font-bold text-white">ONE SOURCE</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">단 1회 투입 (Build Once)</span>
                </div>

                <div className="flex justify-center text-sky-400 font-mono text-sm py-0.5">↓</div>

                {/* 2. AI WORKFLOW */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/40 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center font-mono text-xs text-indigo-300 font-bold">2</span>
                    <span className="font-mono text-sm font-bold text-white">AI WORKFLOW</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-300">Claude 기반 맥락 추론 파이프라인</span>
                </div>

                <div className="flex justify-center text-sky-400 font-mono text-sm py-0.5">↓</div>

                {/* 3. MULTIPLE OUTPUTS */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/40 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center font-mono text-xs text-amber-300 font-bold">3</span>
                    <span className="font-mono text-sm font-bold text-white">MULTIPLE OUTPUTS</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-300">아티클·숏폼·스레드·뉴스레터 동시 생성</span>
                </div>

                <div className="flex justify-center text-emerald-400 font-mono text-sm py-0.5">↓</div>

                {/* 4. AUTOMATED DISTRIBUTION */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/50 flex items-center justify-between shadow-lg shadow-emerald-950/20">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-mono text-xs text-emerald-300 font-bold">4</span>
                    <span className="font-mono text-sm font-bold text-emerald-300">AUTOMATED DISTRIBUTION</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">다채널 원클릭 퍼블리싱</span>
                </div>

              </div>

            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300 relative z-10">
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
