"use client";

import React from "react";
import { Brain, Sparkles, SlidersHorizontal, SendHorizontal, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function Capabilities() {
  const capabilityRows = [
    {
      id: "cap-1",
      icon: Brain,
      number: "01",
      title: "Content Intelligence",
      category: "PIPELINE STAGE — UNDERSTAND",
      coreHeadline: "Understand content before generating it.",
      workflowConnect: "01 Ingestion ➔ 02 Reasoning",
      description: "무작정 문장을 생성하기 전에, 원천 자료(인터뷰, 영상, 기술 리포트)의 핵심 서사와 맥락, 도메인 지식을 먼저 정밀하게 이해하고 지식 구조도로 정제합니다.",
      workflowOutput: "Knowledge Graph · Context Anchor · Core Logic Extraction",
      status: "Active Alpha Build"
    },
    {
      id: "cap-2",
      icon: Sparkles,
      number: "02",
      title: "AI Content Generation",
      category: "PIPELINE STAGE — SYNTHESIS",
      coreHeadline: "Generate structured content from source material.",
      workflowConnect: "02 Reasoning ➔ 03 Multi-Generation",
      description: "정제된 단일 지식 기반 위에서 Claude API 프롬프트 체인을 통해 각 채널 규격에 맞춘 고도로 구조화된 파생 콘텐츠를 자율 생성합니다.",
      workflowOutput: "Long-form Articles · Short-form Video Scripts · Social Threads",
      status: "Active Alpha Build"
    },
    {
      id: "cap-3",
      icon: SlidersHorizontal,
      number: "03",
      title: "Content Adaptation",
      category: "PIPELINE STAGE — ADAPTATION",
      coreHeadline: "Adapt one idea to different formats and channels.",
      workflowConnect: "03 Generation ➔ 04 Optimization",
      description: "하나의 원천 아이디어가 각 배포 플랫폼의 알고리즘과 소비 호흡에 맞게 자연스럽게 녹아들도록 톤앤매너, 포맷, 훅(Hook) 구조를 채널별로 최적화합니다.",
      workflowOutput: "Platform Persona Alignment · Length Constraints · Audience Tone Lock",
      status: "Active Alpha Build"
    },
    {
      id: "cap-4",
      icon: SendHorizontal,
      number: "04",
      title: "Automated Publishing",
      category: "PIPELINE STAGE — DISTRIBUTION",
      coreHeadline: "Move content toward multiple channels.",
      workflowConnect: "04 Optimization ➔ Multi-Channel Release",
      description: "완성된 결과물을 일일이 수동 업로드하지 않고, 웹사이트 CMS, 소셜 미디어 배포 큐, 뉴스레터 발송 시스템 등 실제 다채널로 직접 연결 및 배포합니다.",
      workflowOutput: "Headless CMS Publishing · Social API Queue · Newsletter Delivery",
      status: "Core Beta Architecture"
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-36 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>WHAT WE BUILD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            What We Build
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            단순한 독립 기능이 아닙니다. 실제 자동화 워크플로우 파이프라인의 각 단계와 직결된 4대 핵심 구축 역량입니다.
          </p>
        </div>

        {/* Editorial Architecture Rows Connected to Workflow */}
        <div className="mt-16 sm:mt-20 border-t border-slate-800/80 divide-y divide-slate-800/80">
          {capabilityRows.map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.id}
                className="py-10 sm:py-12 group transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:bg-slate-900/20 px-3 sm:px-4 rounded-xl"
              >
                {/* Col 1: Number, Category & Workflow Stage Link (3 cols) */}
                <div className="lg:col-span-3 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-sky-400 font-bold">
                      {row.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 tracking-wider">
                      {row.category}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 bg-sky-950/40 border border-sky-500/30 px-2.5 py-1 rounded-lg">
                    <ArrowRight className="w-3 h-3 text-sky-400" />
                    <span>{row.workflowConnect}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{row.status}</span>
                  </div>
                </div>

                {/* Col 2: Title & Deep Description & Core Headline (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3 group-hover:text-sky-300 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{row.title}</span>
                  </h3>

                  <p className="text-sm font-semibold text-sky-200 font-mono">
                    &quot;{row.coreHeadline}&quot;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {row.description}
                  </p>
                </div>

                {/* Col 3: Workflow Tangible Deliverables / Spec Output (4 cols) */}
                <div className="lg:col-span-4 space-y-2.5 lg:pl-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Workflow Deliverables & Rails
                  </span>
                  
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.workflowOutput}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Workflow Integrity Assurance */}
        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Each capability operates as a modular stage within the unified KNCA pipeline.</span>
          </span>
          <a
            href="#future-business"
            className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>미래 비즈니스 로드맵 확인</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
