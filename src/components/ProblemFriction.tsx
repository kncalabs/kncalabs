"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";

export default function ProblemFriction() {
  const [activeStep, setActiveStep] = useState(0);

  // 8 Exhausting Manual Steps Loop
  const loopSteps = [
    { name: "Collect", detail: "자료 수집 & 조사", time: "1.5h" },
    { name: "Analyze", detail: "문맥 분석 & 요약", time: "1.0h" },
    { name: "Write", detail: "초안 작성", time: "2.5h" },
    { name: "Edit", detail: "수정 & 교열", time: "1.0h" },
    { name: "Resize", detail: "채널별 규격 조절", time: "1.5h" },
    { name: "Rewrite", detail: "포맷별 재작성", time: "2.0h" },
    { name: "Publish", detail: "수동 업로드", time: "1.0h" },
    { name: "Distribute", detail: "다채널 전파", time: "1.5h" }
  ];

  // Visual simulation of repetitive manual treadmill loop (respects prefers-reduced-motion)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopSteps.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [loopSteps.length]);

  return (
    <section id="problem-friction" className="py-24 sm:py-32 bg-[#060911] relative border-t border-slate-800/80">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-rose-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Problem Statement */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono font-medium tracking-wide">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>THE REALITY CHECK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Content shouldn’t require <br />
            <span className="text-rose-400">repeating the same work.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            하나의 콘텐츠를 발행하기 위해 거쳐야 하는 8단계의 고된 수작업. <br className="hidden sm:inline" />
            그리고 다음 주기가 오면 <strong className="text-white font-semibold">이 모든 과정을 또다시 처음부터 반복</strong>합니다.
          </p>
        </div>

        {/* Visual The Repetitive Treadmill Loop: 8-Step Exhausting Chain */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-bold text-white">The Manual Content Treadmill</span>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                12+ HOURS PER CYCLE
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Active Stage: <strong className="text-rose-300">{loopSteps[activeStep].name} ({loopSteps[activeStep].detail})</strong>
            </span>
          </div>

          {/* 8-Step Progress Pipeline */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {loopSteps.map((step, idx) => (
              <div
                key={step.name}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-rose-500/20 border-rose-500/60 ring-2 ring-rose-500/30 scale-105"
                    : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500">0{idx + 1}</div>
                <div className="text-xs font-bold text-white mt-1">{step.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{step.detail}</div>
                <div className="mt-2 text-[10px] font-mono text-rose-400/90 font-semibold">{step.time}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>총 소요 시간: 매주 12시간 이상의 단순 반복 노가다</span>
            </span>
            <span className="text-slate-300 font-semibold">
              해결책: <span className="text-sky-400">Build Once. Automate More.</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
