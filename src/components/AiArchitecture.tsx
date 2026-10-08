"use client";

import React from "react";
import { Cpu, ShieldCheck, RefreshCw, Sparkles } from "lucide-react";

export default function AiArchitecture() {
  const techPillars = [
    {
      icon: Cpu,
      title: "Content Analysis & Reasoning",
      desc: "Claude 3.5 Sonnet API의 대용량 추론 역량을 바탕으로 원천 문맥 및 핵심 의미를 파악합니다."
    },
    {
      icon: RefreshCw,
      title: "Multi-Format Transformation",
      desc: "단일 텍스트를 블로그, 이메일, 요약문, 소셜 폼 등으로 자유롭게 재구성하는 가공 파이프라인."
    },
    {
      icon: Sparkles,
      title: "Intelligent Generation",
      desc: "채널별 규격과 톤앤매너를 준수하는 정교한 텍스트 생성을 수행합니다."
    },
    {
      icon: ShieldCheck,
      title: "Quality Control & Guardrails",
      desc: "실무자의 최종 승인과 환각(Hallucination) 검증을 거치는 안전한 품질 제어 아키텍처."
    }
  ];

  return (
    <section id="ai-tech" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Claude for Startups Technical Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built with <span className="text-gradient">AI at the Core</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            KNCA is designed around modern AI models to automate content understanding, transformation, generation, and quality control.
          </p>
        </div>

        {/* Dedicated Claude Statement Highlight Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl glass-panel p-8 border border-amber-500/30 bg-amber-950/10 space-y-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold justify-center sm:justify-start">
            <Cpu className="w-4 h-4" />
            <span>Anthropic Claude API Integration Statement</span>
          </div>
          <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed font-sans">
            &quot;Claude is being integrated into the KNCA development and content-processing workflow for tasks such as content analysis, transformation, generation, reasoning, and quality control.&quot;
          </p>
          <p className="text-xs text-slate-400">
            * 본 웹사이트는 Anthropic Claude for Startups 지원 프로그램 심사를 위해 구체적인 기술 적용 방식과 비전을 성실히 기술한 공식 페이지입니다.
          </p>
        </div>

        {/* Technical Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel p-6 rounded-2xl space-y-3 glass-panel-hover border border-slate-800"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
