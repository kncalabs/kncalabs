"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, Repeat, Clock, Layers, RefreshCcw, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemFriction() {
  const [activeStep, setActiveStep] = useState(0);

  // 8 Exhausting Manual Steps Loop
  const loopSteps = [
    { name: "Collect", detail: "자료 수집 & 조사" },
    { name: "Analyze", detail: "문맥 분석 & 요약" },
    { name: "Write", detail: "초안 작성" },
    { name: "Edit", detail: "수정 & 교열" },
    { name: "Resize", detail: "채널별 규격 조절" },
    { name: "Rewrite", detail: "포맷별 재작성" },
    { name: "Publish", detail: "수동 업로드" },
    { name: "Distribute", detail: "다채널 전파" }
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
            <span>THE PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Content shouldn’t require <br />
            <span className="text-rose-400">repeating the same work.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            하나의 콘텐츠를 만들기 위해 8단계를 거치고, 다음 콘텐츠를 위해 <strong className="text-white font-semibold">이 모든 과정을 끝없이 다시 반복</strong>하고 계십니까?
          </p>
        </div>

        {/* Visual The Repetitive Treadmill Loop: 8-Step Exhausting Chain */}
        <div className="mt-16 max-w-5xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-semibold block">
                The Manual Treadmill Trap
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                8개의 수작업 사슬 — 그리고 끝없는 무한 루프
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
              <Repeat className="w-3.5 h-3.5 text-rose-400 animate-spin duration-3000" />
              <span>&quot;그리고 다시 반복한다 (Repeat it all over again)&quot;</span>
            </div>
          </div>

          {/* 8 Connected Nodes Horizontal Rail (Interactive & Animated) */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 relative">
            {loopSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.name}
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-2xl p-3.5 sm:p-4 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-rose-500/15 border-rose-400/80 shadow-lg shadow-rose-500/20 ring-2 ring-rose-500/30 scale-105"
                      : isPast
                      ? "bg-slate-900/80 border-slate-700/80 text-slate-300"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-rose-400 animate-ping" : "bg-slate-700"}`} />
                  </div>

                  <div className="py-2">
                    <h4 className={`text-sm sm:text-base font-bold font-mono tracking-tight ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}>
                      {step.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mt-0.5 font-sans leading-tight">
                      {step.detail}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span>수작업</span>
                    {idx < loopSteps.length - 1 ? (
                      <ArrowRight className="w-3 h-3 text-slate-600" />
                    ) : (
                      <Repeat className="w-3 h-3 text-rose-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Loop Return Indicator Bar */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5 text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>현재 시뮬레이션 위치:</span>
              <strong className="text-white">
                Step 0{activeStep + 1} — {loopSteps[activeStep].name} ({loopSteps[activeStep].detail})
              </strong>
            </div>

            <div className="text-slate-400 flex items-center gap-2 text-[11px]">
              <span>8단계 완료 후 ➔</span>
              <span className="text-rose-400 font-bold underline">1단계(Collect)로 강제 회귀</span>
            </div>
          </div>

        </div>

        {/* 3 Core Impact Diagnostics Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-center text-rose-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                주당 12+ 시간 증발
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                하나의 글을 쓰고 다시 블로그, 소셜 스레드, 숏폼 스크립트로 분해하고 다시 쓰는 작업에 하루의 60% 이상이 소모됩니다.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-800/70 text-[11px] font-mono text-rose-400">
              생산성 누수 1순위 요인
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-center text-rose-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                6개 이상의 도구 파편화
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                에디터, 요약 봇, 번역기, SNS 예약 도구, CMS 관리자 페이지 사이를 오가는 복사·붙여넣기 노동이 컨텍스트를 파괴합니다.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-800/70 text-[11px] font-mono text-rose-400">
              도구 간 맥락 단절 및 휴먼 에러
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-center text-rose-400">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                원천 콘텐츠의 85% 사장
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                각 채널에 맞춰 가공할 시간과 여력이 부족해, 기껏 공들여 만든 양질의 원천 콘텐츠가 1회성 발행에 그치고 휘발됩니다.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-slate-800/70 text-[11px] font-mono text-rose-400">
              오디언스 확장 기회 상실
            </div>
          </div>
        </div>

        {/* Before vs After Contrast Architecture */}
        <div className="mt-10 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* The Old Way: Manual & Segmented */}
            <div className="space-y-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
                  기존 방식 (Conventional Way)
                </span>
                <span className="text-[11px] font-mono text-slate-400">수작업 4~6시간 소요</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Collect부터 Distribute까지 8단계를 매번 손으로 반복</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>복사·붙여넣기, 노션 정리, CMS 관리자 페이지 일일이 업로드</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>포맷 변환에 지쳐 정작 중요한 창의적 기획은 뒷전으로 밀림</span>
                </div>
              </div>
            </div>

            {/* The KNCA Way: Autonomous Pipeline */}
            <div className="space-y-4 p-5 rounded-xl bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-indigo-950/30 border border-sky-500/40 shadow-lg shadow-sky-950/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  KNCA Labs 파이프라인
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">1회 투입 · 수초 내 자동화</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Build Once</strong>: 원천 데이터 1개 입력으로 수집/분석 자동화</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>AI Understanding</strong>: 핵심 맥락 보존 및 채널별 타깃 규격 자율 변환</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Automate More</strong>: 아티클·숏폼·소셜·뉴스레터 동시 퍼블리싱</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
