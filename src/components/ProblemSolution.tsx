"use client";

import React from "react";
import { Copy, Unlink, Sliders, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  const problemCards = [
    {
      id: "card-1",
      icon: Copy,
      title: "One idea, endless formats",
      description: "하나의 콘텐츠를 플랫폼마다 반복해서 다시 만드는 비효율.",
      solutionTitle: "Single Source Orchestration",
      solutionDesc: "단 1회의 원천 입력으로 멀티 포맷을 자율 생성하도록 설계."
    },
    {
      id: "card-2",
      icon: Unlink,
      title: "Disconnected workflows",
      description: "수집·작성·편집·검수·배포가 서로 다른 도구에 분산되는 문제.",
      solutionTitle: "Unified Agent Pipeline",
      solutionDesc: "수집부터 배포 보조까지 하나의 통합 에이전트 파이프라인으로 연결."
    },
    {
      id: "card-3",
      icon: Sliders,
      title: "Automation without control",
      description: "자동화가 너무 강하면 품질과 브랜드 일관성을 관리하기 어려운 문제.",
      solutionTitle: "Human-in-the-Loop Control",
      solutionDesc: "실무자의 최종 검수와 톤앤매너 가드레일을 보장하는 인간-AI 협업 구조."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-rose-400 uppercase font-semibold">
            Problem & Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Content creation shouldn’t mean <br className="hidden sm:inline" />
            <span className="text-gradient">repeating the same work.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            기존 콘텐츠 워크플로우의 비효율을 해결하기 위해 KNCA가 제시하는 제품 방향성
          </p>
        </div>

        {/* 3 Problem & Solution Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="glass-panel p-8 rounded-3xl space-y-6 glass-panel-hover border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Problem Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-rose-400/80 bg-rose-950/40 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                      Problem 0{idx + 1}
                    </span>
                  </div>

                  {/* Problem Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Solution Answer Box */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>KNCA Solution</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {card.solutionTitle}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.solutionDesc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
