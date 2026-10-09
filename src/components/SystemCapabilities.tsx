"use client";

import React, { useState } from "react";
import { Brain, Sparkles, SlidersHorizontal, SendHorizontal, CheckCircle2 } from "lucide-react";

export default function SystemCapabilities() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "stage-1",
      number: "01",
      icon: Brain,
      category: "UNDERSTAND",
      title: "Content Intelligence",
      tagline: "원천 데이터를 읽고 핵심 맥락을 스스로 이해합니다.",
      description:
        "무작정 문장을 생성하지 않습니다. 45분 인터뷰, 긴 기술 백서, 영상 스크립트의 서사 구조와 의도를 딥러닝 문맥 추론으로 분석하여 재활용 가능한 핵심 지식 자산으로 정제합니다.",
      specs: [
        "원천 서사 맥락 및 논점 손실률 0% 정밀 추출",
        "도메인 지식 그래프 및 컨텍스트 앵커 보존",
      ],
      output: "Knowledge Graph · Core Logic Extraction",
      status: "Active Alpha Build",
      accent: "text-sky-400",
      border: "border-sky-500/40",
      glow: "bg-sky-500/10",
    },
    {
      id: "stage-2",
      number: "02",
      icon: Sparkles,
      category: "SYNTHESIS",
      title: "AI Content Generation",
      tagline: "하나의 원천에서 다채널 결과물을 동시 생성합니다.",
      description:
        "매번 처음부터 쓰는 반복 작업을 끝냅니다. 정제된 단일 지식을 바탕으로 쇼츠 0~60초 분초 단위 대본, 3,800자 SEO 심층 칼럼, 소셜 7연작 스레드를 자율 생성합니다.",
      specs: [
        "포맷별 작성 소요 시간 4시간 → 10초 단축",
        "단일 원본 기반 다채널 규격 동시 변환",
      ],
      output: "Multi-Format Parallel Generation",
      status: "Active Alpha Build",
      accent: "text-indigo-400",
      border: "border-indigo-500/40",
      glow: "bg-indigo-500/10",
    },
    {
      id: "stage-3",
      number: "03",
      icon: SlidersHorizontal,
      category: "ADAPTATION",
      title: "Content Adaptation",
      tagline: "채널과 독자의 문법에 맞춰 톤앤매너를 재설계합니다.",
      description:
        "같은 내용이라도 플랫폼마다 통하는 언어가 다릅니다. 기술 칼럼에는 전문성을, 숏폼에는 흡입력 있는 훅(Hook)을, 글로벌 독자에게는 자연스러운 문화적 맥락을 최적화합니다.",
      specs: [
        "플랫폼별 알고리즘과 소비 호흡에 맞춘 문체 재작성",
        "스크롤을 멈추게 하는 썸네일 & 훅 구조 잠금",
      ],
      output: "Platform Persona Alignment · Hook Optimization",
      status: "Active Alpha Build",
      accent: "text-purple-400",
      border: "border-purple-500/40",
      glow: "bg-purple-500/10",
    },
    {
      id: "stage-4",
      number: "04",
      icon: SendHorizontal,
      category: "DISTRIBUTION",
      title: "Automated Publishing",
      tagline: "검수부터 다채널 배포까지 단일 레일로 직결됩니다.",
      description:
        "완성된 결과물을 복사해서 각 사이트에 수동으로 붙여넣지 않습니다. 웹사이트 CMS, 소셜 미디어 API 큐, 뉴스레터 발송 시스템으로 연결되는 단일 자동화 배포 파이프라인을 가동합니다.",
      specs: [
        "Headless CMS 및 테크 블로그 원클릭 퍼블리싱",
        "소셜 채널 동시 릴리즈 큐 & 뉴스레터 직결",
      ],
      output: "Headless CMS · Social API Queue · Newsletter Rails",
      status: "Core Beta Architecture",
      accent: "text-emerald-400",
      border: "border-emerald-500/40",
      glow: "bg-emerald-500/10",
    },
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section
      id="capabilities"
      className="relative py-28 sm:py-36 bg-[#030712] overflow-hidden px-6 sm:px-8 lg:px-12 flex flex-col items-center"
    >
      {/* Continuous System Spine from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-sky-500/40 via-indigo-500/20 to-transparent pointer-events-none" />

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-indigo-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-14 sm:space-y-18 relative z-10">
        
        {/* Header: Unified What We Do & Capabilities Specification */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="tracking-widest uppercase text-[11px]">WHAT WE DO · CAPABILITIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Four Stages. <br />
            <span className="text-gradient">One Autonomous Pipeline.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            원천 이해부터 다채널 자율 배포까지 직결된 4대 핵심 아키텍처.
          </p>
        </div>

        {/* Unified Monolithic Chassis: 4 Interconnected Pipeline Rails */}
        <div className="rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-[#070b14]/90 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          
          {/* Horizontal Pipeline Sequence Selector (Desktop & Mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pb-8 border-b border-white/5">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 group relative overflow-hidden ${
                    isActive
                      ? `${stage.border} ${stage.glow} bg-slate-900/80 shadow-lg`
                      : "border-white/5 bg-slate-950/40 hover:border-white/15 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-white">
                      {stage.number}
                    </span>
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded ${
                      isActive ? "bg-white/10 text-white font-semibold" : "text-slate-500"
                    }`}>
                      {stage.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${stage.accent}`} />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {stage.title}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Architecture Console */}
          <div className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative & Capabilities Detail (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className={`px-2.5 py-0.5 rounded-full ${current.glow} border ${current.border} ${current.accent} font-bold`}>
                    STAGE {current.number} · {current.category}
                  </span>
                  <span className="text-slate-500 font-mono">Status: {current.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.tagline}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                  {current.description}
                </p>
              </div>

              {/* Verified Architectural Specifications */}
              <div className="space-y-2.5 pt-2">
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                    <CheckCircle2 className={`w-4 h-4 ${current.accent} flex-shrink-0`} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Live Stage Artifact Console (5 cols) */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border ${current.border} bg-[#040711] p-6 space-y-5 shadow-2xl relative overflow-hidden`}>
                
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <CurrentIcon className={`w-4 h-4 ${current.accent}`} />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {current.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    ONLINE
                  </span>
                </div>

                {/* Pipeline Output Rail */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    PIPELINE DELIVERABLE
                  </span>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 font-mono text-xs text-sky-300">
                    {current.output}
                  </div>
                </div>

                {/* Micro Pipeline Step Connectivity */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Architecture</span>
                  <span className="text-slate-300 font-semibold">Continuous Pipeline Rails</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Continuous System Spine Down to The Idea */}
        <div className="pt-10 flex flex-col items-center">
          <a
            href="#the-idea"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to The Idea"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">THE IDEA</span>
            <span className="text-xl font-light animate-bounce text-slate-400 group-hover:text-white leading-none">↓</span>
          </a>
          <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-sky-500/40 via-indigo-500/20 to-transparent mt-4" />
        </div>

      </div>
    </section>
  );
}
