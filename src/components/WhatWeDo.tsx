"use client";

import React from "react";
import { Brain, Sparkles, SlidersHorizontal, SendHorizontal, CheckCircle2 } from "lucide-react";

export default function WhatWeDo() {
  const categories = [
    {
      id: "cat-1",
      icon: Brain,
      title: "Content Intelligence",
      badge: "01 / Analysis",
      color: "sky",
      description: "원천 데이터를 정밀 분석하여 핵심 지식과 서사적 맥락을 정확하게 추출합니다.",
      items: [
        "Content analysis",
        "Summarization",
        "Information extraction",
        "Context understanding"
      ]
    },
    {
      id: "cat-2",
      icon: Sparkles,
      title: "AI Content Generation",
      badge: "02 / Generation",
      color: "indigo",
      description: "단일 원천에서 채널별 최적화된 다채로운 콘텐츠 포맷을 자율 생성합니다.",
      items: [
        "Articles & Deep Dives",
        "Production Scripts",
        "Short-form Content",
        "Social Posts & Newsletters"
      ]
    },
    {
      id: "cat-3",
      icon: SlidersHorizontal,
      title: "Content Adaptation",
      badge: "03 / Adaptation",
      color: "violet",
      description: "각 배포 채널의 규격과 대상 오디언스에 맞춰 톤앤매너와 형식을 재구성합니다.",
      items: [
        "Platform-specific rewriting",
        "Format conversion",
        "Tone adaptation",
        "Localization"
      ]
    },
    {
      id: "cat-4",
      icon: SendHorizontal,
      title: "Automated Publishing",
      badge: "04 / Distribution",
      color: "emerald",
      description: "다채널 배포 준비 및 퍼블리싱 파이프라인을 원클릭으로 가동합니다.",
      items: [
        "Website & Blog CMS",
        "Social platforms",
        "Messaging channels",
        "Multi-channel distribution"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            What We Do
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Turn one source into an automated content system.
          </p>
        </div>

        {/* 4 Distinct, Clean Cards Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative rounded-2xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-sky-400/40 flex items-center justify-center text-sky-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-sky-300 transition-colors">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {cat.description}
                    </p>
                  </div>

                  {/* Items List */}
                  <div className="pt-2 border-t border-slate-800/60 space-y-2.5">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-6 mt-4 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Engineered Pipeline</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
