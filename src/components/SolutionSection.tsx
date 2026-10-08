"use client";

import React from "react";
import { FileInput, Brain, Sparkles, SlidersHorizontal, CheckSquare, SendHorizontal, ArrowRight } from "lucide-react";

export default function SolutionSection() {
  const solutionSteps = [
    {
      step: "01",
      icon: FileInput,
      title: "SOURCE",
      subtitle: "단일 원천 수집",
      desc: "단 하나의 원본 텍스트, 아티클, 문서를 플랫폼에 인입합니다.",
      badge: "Input"
    },
    {
      step: "02",
      icon: Brain,
      title: "UNDERSTAND",
      subtitle: "Claude API 추론 파악",
      desc: "Anthropic Claude 3.5 Sonnet API가 핵심 인사이트와 문맥을 분석합니다.",
      badge: "Analysis"
    },
    {
      step: "03",
      icon: Sparkles,
      title: "GENERATE",
      subtitle: "채널별 포맷 생성",
      desc: "각 타깃 매체 규격에 최적화된 초안을 자율 재구성합니다.",
      badge: "Generation"
    },
    {
      step: "04",
      icon: SlidersHorizontal,
      title: "OPTIMIZE",
      subtitle: "플랫폼 최적화",
      desc: "가독성, 톤앤매너, 분량을 개별 채널 요구조건에 맞춰 미세 조정합니다.",
      badge: "Optimization"
    },
    {
      step: "05",
      icon: CheckSquare,
      title: "REVIEW",
      subtitle: "인간 검수 & 가드레일",
      desc: "실무자의 최종 검토와 브랜드 품질 일관성을 보장하는 단계입니다.",
      badge: "Guardrail"
    },
    {
      step: "06",
      icon: SendHorizontal,
      title: "PUBLISH",
      subtitle: "최종 발행 보조",
      desc: "검증 완료된 멀티 채널 콘텐츠를 배포 준비 상태로 최종 보조합니다.",
      badge: "Output"
    }
  ];

  return (
    <section id="product" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
            Solution Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One source. One workflow. <br className="hidden sm:inline" />
            <span className="text-gradient">Multiple outputs.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            KNCA가 해결하는 단일 원천 6단계 자율 변환 프로세스 아키텍처
          </p>
        </div>

        {/* 6-Step Visual Flow Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {solutionSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 border border-slate-800 px-2.5 py-0.5 rounded-full bg-slate-950">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono text-sky-400 font-semibold tracking-wider">
                      PHASE 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-300">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-end text-slate-600">
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    Next Phase <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
