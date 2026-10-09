"use client";

import React, { useState, useEffect } from "react";
import { FileInput, Brain, RefreshCw, SendHorizontal, ArrowRight, Check, Zap, Cpu } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: "01",
      badge: "INGESTION",
      title: "CAPTURE",
      desc: "Bring your source into the workflow.",
      detail: "YouTube 영상 링크, 리서치 문서, 팟캐스트 녹취본 등 어떤 원천 데이터든 단일 진입점으로 주입합니다.",
      icon: FileInput,
      color: "sky"
    },
    {
      number: "02",
      badge: "ANALYSIS",
      title: "UNDERSTAND",
      desc: "AI analyzes context, structure and intent.",
      detail: "Claude 지능 코어가 원본의 핵심 서사 맥락, 도메인 지식, 타깃 오디언스 의도를 누락 없이 정밀 추론합니다.",
      icon: Brain,
      color: "indigo"
    },
    {
      number: "03",
      badge: "SYNTHESIS",
      title: "TRANSFORM",
      desc: "Generate content adapted to each format.",
      detail: "심층 칼럼, 숏폼 스크립트, 소셜 스레드, 뉴스레터 등 각 포맷의 고유 문법에 맞게 자율 변환 및 생성합니다.",
      icon: RefreshCw,
      color: "amber"
    },
    {
      number: "04",
      badge: "DELIVERY",
      title: "DISTRIBUTE",
      desc: "Move content toward multiple channels.",
      detail: "블로그 CMS, 인스타그램, 틱톡, 뉴스레터 등 준비된 다채널 배포 레일로 즉시 전달 및 동시 발행합니다.",
      icon: SendHorizontal,
      color: "emerald"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-36 bg-[#080c14] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Pipeline Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-sky-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Unified Pipeline Story */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>UNIFIED SYSTEM PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            How It Works
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            단절된 4개의 카드가 아닙니다. <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">하나의 연결된 자율 워크플로우(Connected Workflow)</strong>로 작동합니다.
          </p>
        </div>

        {/* The Continuous Connected Workflow Pipeline Canvas */}
        <div className="mt-16 sm:mt-24 relative">
          
          {/* Continuous Laser Conduit Beam (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[6%] right-[6%] h-[3px] bg-slate-800/90 -z-0 pointer-events-none rounded-full">
            {/* Active Moving Laser Particle */}
            <div
              className="h-full bg-gradient-to-r from-transparent via-sky-400 to-indigo-400 shadow-lg shadow-sky-400/50 transition-all duration-700 ease-out rounded-full"
              style={{
                width: "25%",
                marginLeft: `${activeStep * 25}%`
              }}
            />
          </div>

          {/* 4 Connected Pipeline Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative group flex flex-col cursor-pointer"
                >
                  <div
                    className={`h-full rounded-2xl border p-6 sm:p-7 transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                      isActive
                        ? "bg-slate-900/95 border-sky-400/80 shadow-2xl shadow-sky-500/20 ring-1 ring-sky-400/40 scale-[1.03]"
                        : isPast
                        ? "bg-slate-900/70 border-slate-700/80"
                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="space-y-5">
                      
                      {/* Top Node Indicator & Stage Pulse */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 relative ${
                            isActive
                              ? "bg-sky-500/20 border-sky-400 text-sky-300 shadow-xl shadow-sky-500/30 scale-105"
                              : isPast
                              ? "bg-slate-800 border-slate-700 text-sky-400"
                              : "bg-slate-900 border-slate-800 text-slate-500"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          {isActive && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-sky-400 animate-ping" />
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full font-bold tracking-wider transition-colors ${
                              isActive
                                ? "bg-sky-500/20 text-sky-300 border-sky-400/50"
                                : "bg-slate-950 text-slate-400 border-slate-800"
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>
                      </div>

                      {/* Step Number & Exact Headline Specification */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-sky-400/80 block">
                          STAGE {step.number}
                        </span>
                        
                        <h3 className="text-2xl font-extrabold text-white tracking-tight flex items-center justify-between">
                          <span>{step.title}</span>
                          {isActive && (
                            <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-semibold">
                              LIVE
                            </span>
                          )}
                        </h3>

                        {/* Official Required Supporting Message */}
                        <p className="text-sm font-semibold text-sky-200 leading-snug">
                          {step.desc}
                        </p>
                      </div>

                      {/* Deep Operational Detail */}
                      <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                        {step.detail}
                      </p>

                    </div>

                    {/* Bottom Connecting Laser Rail Anchor */}
                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? "text-sky-300 font-semibold" : "text-slate-500"}>
                        {isActive ? "Pipeline In-Transit" : isPast ? "Passed" : "Standby"}
                      </span>

                      {!isLast ? (
                        <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-sky-300 transition-colors">
                          <span className="text-[10px]">Conduit</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-sky-400 translate-x-1 transition-transform" : ""}`} />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <Check className="w-3.5 h-3.5" />
                          <span>Multi-Channel Out</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Stepper Progress Indicator Dots (Mobile) */}
          <div className="flex justify-center items-center gap-2 mt-8 lg:hidden">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                aria-label={`Go to stage ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === i ? "w-8 bg-sky-400" : "w-2 bg-slate-800"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Real-time Stage Diagnostic Monitor Console */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono backdrop-blur-sm">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Cpu className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-slate-400">Current Pipeline Node:</span>
            <strong className="text-white">
              Stage 0{activeStep + 1} — {steps[activeStep].title} ({steps[activeStep].desc})
            </strong>
          </div>

          <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Zero-Loss Conduit</span>
          </div>
        </div>

      </div>
    </section>
  );
}
