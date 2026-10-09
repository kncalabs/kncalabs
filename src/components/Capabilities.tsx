"use client";

import React from "react";
import { Cpu, Workflow, SendHorizontal, Users2, ArrowRight } from "lucide-react";

export default function Capabilities() {
  const capabilityRows = [
    {
      id: "cap-1",
      icon: Cpu,
      number: "01",
      title: "AI Content Automation",
      category: "CORE INGESTION & REASONING",
      description: "단일 텍스트, 영상 스크립트, 리서치 노트를 입력받아 맥락 손실 없이 다중 포맷으로 자율 분해 및 재구성하는 지능형 코어 엔진.",
      technicalSpecs: ["Multi-Format Semantic Parsing", "Contextual Structuring", "Deterministic Guardrails"],
      status: "Active Alpha Build"
    },
    {
      id: "cap-2",
      icon: Workflow,
      number: "02",
      title: "OSMU Content Pipeline",
      category: "CROSS-CHANNEL EXPANSION",
      description: "One Source Multi Use 철학을 구현하는 파이프라인. 원천 메시지의 브랜드 일관성을 100% 유지하며 채널별 호흡에 맞춘 파생물 생성.",
      technicalSpecs: ["Cross-Format Narrative Lock", "Adaptive Tone Matrix", "Channel Constraint Solver"],
      status: "Core Architecture"
    },
    {
      id: "cap-3",
      icon: SendHorizontal,
      number: "03",
      title: "Automated Publishing Rails",
      category: "DISTRIBUTION INFRASTRUCTURE",
      description: "기획과 생성에 머물지 않고, 블로그 CMS, 소셜 미디어 API, 사내 메일링 시스템으로 연결되는 단일 자동 배포 인프라 레일.",
      technicalSpecs: ["Headless CMS Webhooks", "Social Distribution Queue", "Direct Delivery Sync"],
      status: "Pipeline Integration"
    },
    {
      id: "cap-4",
      icon: Users2,
      number: "04",
      title: "Creator & Business Operations",
      category: "SCALABLE WORKFLOWS",
      description: "1인 크리에이터부터 대규모 미디어 기업까지, 매주 반복되는 수십 시간의 콘텐츠 오퍼레이션을 자율화하는 고효율 협업 프레임워크.",
      technicalSpecs: ["Multi-Persona Routing", "Editorial Review Gateways", "Audit & Analytics Tracking"],
      status: "Closed Beta Preview"
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Architectural & Editorial */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>ARCHITECTURAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            What We’re Building
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            단순한 도구의 나열이 아닌, 콘텐츠 운영을 위한 4대 엔지니어링 아키텍처 역량입니다.
          </p>
        </div>

        {/* Editorial Architecture Rows (No Repetitive Box Cards) */}
        <div className="mt-16 sm:mt-20 border-t border-slate-800/80 divide-y divide-slate-800/80">
          {capabilityRows.map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.id}
                className="py-10 sm:py-12 group transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:bg-slate-900/20 px-3 sm:px-4 rounded-xl"
              >
                {/* Col 1: Number & Category Badge (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-sky-400 font-bold">
                      {row.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 tracking-wider">
                      {row.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{row.status}</span>
                  </div>
                </div>

                {/* Col 2: Title & Deep Description (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3 group-hover:text-sky-300 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{row.title}</span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {row.description}
                  </p>
                </div>

                {/* Col 3: Technical Specifications & Tags (4 cols) */}
                <div className="lg:col-span-4 space-y-2 lg:pl-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Technical Architecture
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {row.technicalSpecs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-medium group-hover:border-slate-700 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Technical Assurance Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>End-to-end modular pipeline engineered for zero friction.</span>
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
