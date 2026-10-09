"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  RefreshCw,
  Zap,
  Workflow,
  Cpu,
  Layers,
  SendHorizontal,
  Compass,
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function FutureVision() {
  const [activeLoopIdx, setActiveLoopIdx] = useState(0);

  const loopNodes = [
    {
      step: "01",
      title: "SOURCE",
      role: "RAW KNOWLEDGE INGESTION",
      desc: "영상, 오디오, 문서, 리서치 등 모든 지식 원천을 무손실 유입",
      icon: Workflow,
      badge: "INPUT"
    },
    {
      step: "02",
      title: "UNDERSTAND",
      role: "CONTEXT & INTENT REASONING",
      desc: "LLM 코어가 원본의 서사 뼈대, 핵심 논점 및 타깃 의도를 정밀 분해",
      icon: Cpu,
      badge: "REASONING"
    },
    {
      step: "03",
      title: "GENERATE",
      role: "AUTONOMOUS SYNTHESIS",
      desc: "정제된 지식 자산으로부터 채널별 최적화된 다중 콘텐츠 동시 집필",
      icon: Sparkles,
      badge: "SYNTHESIS"
    },
    {
      step: "04",
      title: "ADAPT",
      role: "PERSONA & TONE TUNING",
      desc: "각 배포 채널의 알고리즘과 오디언스 소비 문법에 맞춰 톤앤매너 재구성",
      icon: Layers,
      badge: "ADAPTATION"
    },
    {
      step: "05",
      title: "DISTRIBUTE",
      role: "MULTI-CHANNEL RAILS",
      desc: "웹사이트 CMS, 소셜 미디어, 뉴스레터 발송 시스템으로 즉시 자동 배포",
      icon: SendHorizontal,
      badge: "DELIVERY"
    },
    {
      step: "06",
      title: "LEARN",
      role: "FEEDBACK EVOLUTION LOOP",
      desc: "오디언스 반응과 도달 성과 데이터를 피드백 루프로 환류하여 시스템 스스로 진화",
      icon: TrendingUp,
      badge: "EVOLUTION"
    }
  ];

  // Self-evolving closed-loop animation cycle (respects prefers-reduced-motion)
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(() => {
      setActiveLoopIdx((prev) => (prev + 1) % loopNodes.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [loopNodes.length]);

  return (
    <section id="future-vision" className="py-24 sm:py-36 bg-[#060911] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background High-End Ambient Nebula */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[500px] bg-indigo-500/10 blur-[170px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Majestic Brand Vision Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 border border-slate-700/80 text-xs font-mono font-semibold tracking-wider">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-300">LONG-TERM BRAND VISION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06]">
            Content is becoming <br />
            <span className="text-gradient">infrastructure.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            &quot;KNCA Labs is building the systems that turn content into workflows.&quot;
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed pt-1">
            콘텐츠는 더 이상 1회성 소모품이 아닙니다. 단일 원천에서 스스로 증폭되고, 배포를 거쳐 피드백으로 자율 진화하는 <strong className="text-white font-medium">영속적인 AI 인프라스트럭처 루프</strong>입니다.
          </p>
        </div>

        {/* The Evolving Closed-Loop System Visual Architecture (6-Stage Continuous Ring) */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          
          {/* Header of Visual Loop Canvas */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                Continuous AI Workflow Infrastructure
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                The Self-Evolving Flywheel Loop
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin duration-3000" />
              <span>Closed-Loop Flywheel Active</span>
            </div>
          </div>

          {/* 6 Node Sequential Grid / Orbital Architecture */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {loopNodes.map((node, idx) => {
              const Icon = node.icon;
              const isActive = activeLoopIdx === idx;
              const isPast = activeLoopIdx > idx;

              return (
                <div
                  key={node.step}
                  onClick={() => setActiveLoopIdx(idx)}
                  className={`rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-slate-900/95 border-sky-400 shadow-xl shadow-sky-500/20 ring-1 ring-sky-400/30 scale-[1.02]"
                      : isPast
                      ? "bg-slate-900/50 border-slate-700/80 text-slate-300"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isActive ? "bg-sky-500/20 border-sky-400 text-sky-300" : "bg-slate-800 border-slate-700 text-slate-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                        )}
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          isActive ? "bg-sky-500/20 text-sky-300 border border-sky-400/40" : "bg-slate-900 text-slate-400 border border-slate-800"
                        }`}>
                          {node.badge}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-sky-400/80 font-semibold block">
                        STAGE {node.step}
                      </span>
                      <h4 className="text-xl font-extrabold text-white tracking-tight">
                        {node.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                        {node.role}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                      {node.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{isActive ? "Executing Node..." : "Conduit Linked"}</span>
                    {idx < loopNodes.length - 1 ? (
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-sky-400 translate-x-1 transition-transform" : "text-slate-600"}`} />
                    ) : (
                      <span className="text-emerald-400 flex items-center gap-1 font-bold">
                        <span>↺ Feed to 01</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Loop Return Feedback Bar */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900/80 to-indigo-950/40 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5 text-slate-200">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>현재 플라이휠 궤도:</span>
              <strong className="text-white">
                Stage {loopNodes[activeLoopIdx].step} — {loopNodes[activeLoopIdx].title} ({loopNodes[activeLoopIdx].role})
              </strong>
            </div>

            <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-2">
              <span>06 LEARN ➔ 01 SOURCE 자율 개선 루프 연결</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Unified Roadmap & Expansion Subsection: Planned vs Exploring */}
          <div className="mt-14 pt-10 border-t border-slate-800/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block">
                  Building In Public · Future Business
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  차세대 워크플로우 인프라 확장 로드맵
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300">
                  ● 2 Planned
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
                  ○ 3 Exploring
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-sky-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-white">AI Content Infrastructure</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">Planned</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    대규모 콘텐츠 변환 및 자동화 파이프라인을 지탱하는 기반 인프라 체계.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-4 block border-t border-slate-800/80 pt-2">핵심 엔진 안정화 후 확장 예정</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-sky-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-white">Creator Automation</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold">Planned</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    개인 창작자를 위한 1인 미디어 다채널 자율 배포 및 멀티 포맷 스케일업 솔루션.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-4 block border-t border-slate-800/80 pt-2">클로즈드 베타 피드백 수렴 후 구체화</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-300">Business Content Automation</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Exploring</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    기업 브랜드, 미디어사 및 조직의 반복 콘텐츠 오퍼레이션을 자율화하는 엔터프라이즈 솔루션.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-4 block border-t border-slate-800/80 pt-2">시장 수요 조사 및 파트너십 탐색</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-300">AI Workflow Platform</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Exploring</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    외부 협업 도구 및 에이전트 간 오케스트레이션을 지원하는 차세대 통합 워크플로우 플랫폼.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-4 block border-t border-slate-800/80 pt-2">개념 검증(PoC) 및 아키텍처 연구</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-300">Open API / Automation Infrastructure</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Exploring</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    개발자와 타 시스템이 직접 연동하여 콘텐츠 변환 파이프라인을 호출할 수 있는 통합 API 게이트웨이.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-4 block border-t border-slate-800/80 pt-2">프로토콜 및 인터페이스 규격 리서치</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
