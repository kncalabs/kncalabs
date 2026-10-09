"use client";

import React from "react";
import { Cpu, Workflow, SendHorizontal, Users2, ArrowUpRight } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      id: "cap-1",
      icon: Cpu,
      title: "AI Content Automation",
      badge: "CORE ENGINE",
      description: "원천 콘텐츠를 다양한 콘텐츠 형식으로 자동 변환.",
      highlights: ["Multi-format Conversion", "Contextual Structuring", "Semantic Reasoning"]
    },
    {
      id: "cap-2",
      icon: Workflow,
      title: "OSMU Content Pipeline",
      badge: "ARCHITECTURE",
      description: "하나의 콘텐츠를 여러 포맷과 채널로 확장.",
      highlights: ["One Source Multi Use", "Cross-Channel Expansion", "Narrative Consistency"]
    },
    {
      id: "cap-3",
      icon: SendHorizontal,
      title: "Automated Publishing",
      badge: "DISTRIBUTION",
      description: "생성부터 배포까지 반복 작업을 자동화.",
      highlights: ["End-to-End Pipeline", "Zero Redundant Operations", "Channel Delivery"]
    },
    {
      id: "cap-4",
      icon: Users2,
      title: "Creator & Business Automation",
      badge: "SOLUTIONS",
      description: "크리에이터와 기업의 반복적인 콘텐츠 업무를 자동화.",
      highlights: ["Team Operational Scale", "Editorial Efficiency", "Workflow Acceleration"]
    }
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            What We’re Building
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            현재 구축 중인 KNCA의 핵심 자동화 영역 및 아키텍처 역량입니다.
          </p>
        </div>

        {/* 4 Clean Capabilities Cards Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-sky-400/40 flex items-center justify-center text-sky-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-sky-300 border border-slate-800 px-2.5 py-0.5 rounded-full bg-slate-950 font-semibold tracking-wider transition-colors">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                      <span>{cap.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 transition-colors" />
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-medium">
                      {cap.description}
                    </p>
                  </div>

                  {/* Highlights Sub-tags */}
                  <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {cap.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-slate-400 font-normal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-6 mt-4 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Under Active Build</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
