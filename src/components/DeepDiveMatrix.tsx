"use client";

import React, { useState } from "react";
import { Brain, Sparkles, SlidersHorizontal, SendHorizontal, CheckCircle2, ArrowRight } from "lucide-react";

export default function DeepDiveMatrix() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const pillars = [
    {
      id: "cat-1",
      number: "01",
      icon: Brain,
      title: "Content Intelligence",
      badge: "ANALYSIS ENGINE",
      headline: "원천 데이터를 읽고 핵심 맥락을 스스로 이해합니다.",
      story: "단순 키워드 추출이 아닙니다. 긴 인터뷰, 백서, 유튜브 영상의 서사 구조와 의도를 문맥 추론으로 분석하여 재활용 가능한 핵심 지식 자산으로 정제합니다.",
      details: [
        "긴 아티클 및 리서치 자료의 핵심 논점 추출",
        "인터뷰 및 영상 텍스트의 서사 맥락 구조화",
        "도메인 지식 그래프 및 컨텍스트 보존"
      ],
      deliverable: "Knowledge Graph · Lossless Context Anchor",
      status: "Active Alpha"
    },
    {
      id: "cat-2",
      number: "02",
      icon: Sparkles,
      title: "AI Content Generation",
      badge: "GENERATION MATRIX",
      headline: "하나의 원천에서 수십 개의 파생 콘텐츠를 생성합니다.",
      story: "매번 처음부터 쓰는 고통을 끝냅니다. 정제된 단일 지식을 바탕으로 심층 칼럼, 숏폼 스크립트, 소셜 스레드, 뉴스레터 등 타깃 접점별 최적화된 콘텐츠를 동시 집필합니다.",
      details: [
        "0-60초 숏폼 릴스/쇼츠 제작용 분초 단위 대본",
        "링크드인/X용 인사이트 집약형 소셜 스레드",
        "구독자를 위한 주간 큐레이션 뉴스레터"
      ],
      deliverable: "Multi-Format Synthesis Prompt Chain",
      status: "Active Alpha"
    },
    {
      id: "cat-3",
      number: "03",
      icon: SlidersHorizontal,
      title: "Content Adaptation",
      badge: "ADAPTATION LOGIC",
      headline: "채널과 독자의 문법에 맞춰 톤앤매너를 재설계합니다.",
      story: "동일한 내용이라도 채널마다 통하는 언어가 다릅니다. 기술 블로그에는 전문성을, SNS에는 흡입력 있는 훅(Hook)을, 글로벌 독자에게는 자연스러운 문화적 맥락을 적용합니다.",
      details: [
        "플랫폼별 알고리즘과 소비 호흡에 맞춘 문체 재작성",
        "모바일 피드 스크롤을 멈추게 하는 썸네일 & 타이틀 최적화",
        "다국어 독자를 위한 문화적 맥락 적응"
      ],
      deliverable: "Dynamic Persona Alignment & Tone Lock",
      status: "Active Alpha"
    },
    {
      id: "cat-4",
      number: "04",
      icon: SendHorizontal,
      title: "Automated Distribution",
      badge: "DISTRIBUTION RAILS",
      headline: "완성된 결과물을 수동 복사 없이 다채널로 직접 전달합니다.",
      story: "웹사이트 CMS, 소셜 미디어 배포 큐, 뉴스레터 발송 시스템 등 실제 다채널로 연결되는 파이프라인을 통해 완성된 콘텐츠를 즉시 전달 및 동시 발행합니다.",
      details: [
        "웹사이트 및 테크 블로그 CMS 원클릭 퍼블리싱",
        "소셜 채널 동시 릴리즈 큐 스케줄링",
        "뉴스레터 자동 발송 및 아카이브 자산화"
      ],
      deliverable: "Headless CMS API & Social Queue",
      status: "Beta Core"
    }
  ];

  const current = pillars[activeStoryIdx];
  const CurrentIcon = current.icon;

  return (
    <section id="deepdive-matrix" className="py-20 sm:py-28 bg-[#070b13] relative border-t border-slate-900/90 overflow-hidden">
      {/* Background Subtle Tech Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Story-Driven */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>SYSTEM CAPABILITIES & ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Engine Capabilities &amp; Architecture
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            원천 지식 추출부터 다채널 배포 레일까지 직결된 4대 핵심 구축 역량
          </p>
        </div>

        {/* Interactive Deep Dive Console: Left Rails + Right Display */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column (5 Cols): Chapter Selection Rails */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeStoryIdx === idx;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-slate-900/95 border-sky-400 shadow-xl shadow-sky-500/10 ring-1 ring-sky-400/40"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold ${isSelected ? "text-sky-400" : "text-slate-600"}`}>
                      {pillar.number}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
                      isSelected ? "bg-sky-500/20 border-sky-400 text-sky-300" : "bg-slate-900 border-slate-800 text-slate-500 group-hover:text-slate-300"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 block">{pillar.badge}</span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "text-sky-400 translate-x-0.5" : "text-slate-700 opacity-0 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Dynamic Showcase Canvas */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950/80 border border-slate-800/90 p-6 sm:p-9 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-semibold block">
                      STAGE {current.number} — {current.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                  {current.status}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                  &quot;{current.headline}&quot;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {current.story}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 font-sans text-xs text-slate-300">
                {current.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Deliverable Pill */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-slate-500">Deliverable:</span>
              <span className="text-sky-300 font-semibold">{current.deliverable}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
