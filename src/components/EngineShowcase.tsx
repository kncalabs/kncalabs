"use client";

import React, { useState } from "react";
import { Activity, FileText, Cpu, Layers, Share2, Terminal } from "lucide-react";

export default function EngineShowcase() {
  const [activeStep, setActiveStep] = useState<number>(2); // 1: Ingest, 2: Reasoning, 3: Synthesize, 4: Distribute

  const steps = [
    {
      num: "01",
      id: "ingest",
      title: "CAPTURE",
      sub: "Single Source Ingestion",
      icon: FileText,
      color: "sky",
      badge: "INPUT",
      spec: "YouTube · Audio · PDF · URL",
      description: "단 하나의 원천 지식을 손실 없이 엔진으로 주입합니다."
    },
    {
      num: "02",
      id: "reason",
      title: "UNDERSTAND",
      sub: "Claude Context Window",
      icon: Cpu,
      color: "indigo",
      badge: "REASONING",
      spec: "Knowledge Graph Extraction",
      description: "인공지능 코어가 핵심 논점, 서사 맥락, 타깃 의도를 정밀 분해합니다."
    },
    {
      num: "03",
      id: "synthesize",
      title: "TRANSFORM",
      sub: "Parallel Prompt Matrix",
      icon: Layers,
      color: "amber",
      badge: "SYNTHESIS",
      spec: "Shorts · Article · Social · Email",
      description: "정제된 단일 지식을 4대 배포 채널의 고유 문법에 맞게 동시 집필합니다."
    },
    {
      num: "04",
      id: "distribute",
      title: "DISTRIBUTE",
      sub: "Automated Release Rails",
      icon: Share2,
      color: "emerald",
      badge: "DISPATCH",
      spec: "CMS API · Social Queue · Newsletter",
      description: "준비된 다채널 퍼블리싱 파이프라인으로 즉시 동시 배포합니다."
    }
  ];

  return (
    <section id="system-engine" className="py-24 sm:py-36 bg-[#080c14] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Pipeline Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>HOW THE SYSTEM WORKS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            The Autonomous Engine.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            단 하나의 원천(Source)이 4단계 파이프라인을 거쳐 다채널로 동시 전개됩니다.
          </p>
        </div>

        {/* 4 Connected Laser Pipeline Cards */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx + 1;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between backdrop-blur-md relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-sky-400 ring-2 ring-sky-500/30 shadow-2xl shadow-sky-500/10 scale-[1.02]"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 font-bold">{step.num}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        isActive ? "bg-sky-500/20 text-sky-300 border border-sky-500/40" : "bg-slate-900 text-slate-500 border border-slate-800"
                      }`}>
                        {step.badge}
                      </span>
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                      isActive ? "bg-sky-500/20 border-sky-400 text-sky-300" : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                      <p className="text-xs font-mono text-sky-400 mt-0.5">{step.sub}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate max-w-[150px]">{step.spec}</span>
                    <span className={isActive ? "text-emerald-400 font-bold" : "text-slate-600"}>
                      {isActive ? "ACTIVE" : "READY"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real Live Pipeline Output Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-slate-400 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-200">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Orchestration Core:</span>
              <strong className="text-white">
                {activeStep === 1 && "1. Capture: 1개 원천 영상 수집 및 텍스트/시각 트랙 정규화 완료"}
                {activeStep === 2 && "2. Understand: Claude 3.5 Sonnet이 도메인 지식 그래프 및 훅(Hook) 구조 분석"}
                {activeStep === 3 && "3. Transform: 숏폼 대본, 칼럼, SNS 스레드, 뉴스레터 4대 포맷 동시 합성"}
                {activeStep === 4 && "4. Distribute: 다채널 CMS 및 소셜 릴리즈 큐로 즉시 동시 발행 준비 완료"}
              </strong>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-sky-300">Lossless Context</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">Latency: 420ms</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
