"use client";

import React, { useState } from "react";
import { Brain, Sparkles, SlidersHorizontal, SendHorizontal, CheckCircle2, ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const stories = [
    {
      id: "cat-1",
      number: "01",
      icon: Brain,
      title: "Content Intelligence",
      badge: "ANALYSIS ENGINE",
      headline: "원천 데이터를 읽고 핵심 맥락을 스스로 이해합니다.",
      story: "단순한 키워드 추출이 아닙니다. 긴 인터뷰, 백서, 유튜브 스크립트의 서사 구조와 의도를 딥러닝 문맥 추론으로 분석하여 '재활용 가능한 핵심 지식 자산'으로 정제합니다.",
      details: [
        "긴 아티클 및 리서치 자료의 핵심 논점 추출",
        "인터뷰 및 영상 텍스트의 서사 맥락 구조화",
        "도메인 지식 그래프 및 컨텍스트 보존"
      ],
      metric: "원천 정보 손실 0%에 수렴하는 정밀 추출",
      tag: "Claude 3.5 Sonnet Context Window"
    },
    {
      id: "cat-2",
      number: "02",
      icon: Sparkles,
      title: "AI Content Generation",
      badge: "GENERATION MATRIX",
      headline: "하나의 원천에서 수십 개의 파생 콘텐츠를 생성합니다.",
      story: "매번 처음부터 쓰는 고통을 끝냅니다. 정제된 단일 지식을 바탕으로 심층 칼럼, 숏폼 스크립트, 소셜 스레드, 뉴스레터 등 오디언스 접점별 최적화된 콘텐츠를 자동 생성합니다.",
      details: [
        "0-60초 숏폼 릴스/쇼츠 제작용 분초 단위 대본",
        "링크드인/X용 인사이트 집약형 소셜 스레드",
        "구독자를 위한 주간 큐레이션 뉴스레터"
      ],
      metric: "포맷별 작성 시간 4시간 → 10초 단축",
      tag: "Multi-Format Synthesis"
    },
    {
      id: "cat-3",
      number: "03",
      icon: SlidersHorizontal,
      title: "Content Adaptation",
      badge: "ADAPTATION LOGIC",
      headline: "채널과 독자의 문법에 맞춰 톤앤매너를 재설계합니다.",
      story: "동일한 내용이라도 채널마다 통하는 언어가 다릅니다. 기술 블로그에는 전문성을, SNS에는 흡입력 있는 훅(Hook)을, 글로벌 독자에게는 자연스러운 로컬라이징을 적용합니다.",
      details: [
        "플랫폼별 알고리즘과 소비 호흡에 맞춘 문체 재작성",
        "모바일 피드 스크롤을 멈추게 하는 썸네일 & 타이틀 최적화",
        "다국어 독자를 위한 문화적 맥락 적응"
      ],
      metric: "채널별 참여율(Engagement) 3.2배 향상",
      tag: "Dynamic Persona Tuning"
    },
    {
      id: "cat-4",
      number: "04",
      icon: SendHorizontal,
      title: "Automated Publishing",
      badge: "DISTRIBUTION RAILS",
      headline: "검수부터 배포까지, 단 한 번의 클릭으로 완료됩니다.",
      story: "완성된 결과물을 복사해서 각 사이트에 일일이 붙여넣을 필요가 없습니다. 웹사이트 CMS, 소셜 미디어, 뉴스레터 발송 시스템으로 연결되는 단일 자동화 레일을 제공합니다.",
      details: [
        "웹사이트 및 테크 블로그 CMS 원클릭 퍼블리싱",
        "소셜 채널 동시 릴리즈 및 스케줄링",
        "배포 후 성과 추적 및 아카이브 자산화"
      ],
      metric: "배포 오퍼레이션 리소스 90% 이상 절감",
      tag: "Autonomous Delivery Rails"
    }
  ];

  const current = stories[activeStoryIdx];
  const CurrentIcon = current.icon;

  return (
    <section id="what-we-do" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Story-Driven */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>LESS UI · MORE STORY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            What We Do
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            원천 콘텐츠가 살아 숨 쉬는 워크플로우로 진화하는 4단계 스토리
          </p>
        </div>

        {/* Interactive Story Showcase (Editorial Split-Panel Architecture) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 Cols): Chapter Selection Rails */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {stories.map((story, idx) => {
              const Icon = story.icon;
              const isActive = activeStoryIdx === idx;

              return (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? "bg-slate-900/90 border-sky-500/60 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30"
                      : "bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                    isActive
                      ? "bg-sky-500/20 border-sky-400/80 text-sky-300"
                      : "bg-slate-800 border-slate-700/80 text-slate-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono tracking-wider font-semibold ${
                        isActive ? "text-sky-300" : "text-slate-500"
                      }`}>
                        CHAPTER {story.number}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-[10px] font-mono text-slate-400">{story.badge}</span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold tracking-tight truncate ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}>
                      {story.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): The Deep Editorial Story Panel */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/50 border border-slate-800 p-7 sm:p-10 flex flex-col justify-between backdrop-blur-md relative overflow-hidden">
            {/* Ambient Accent inside Story Panel */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 blur-[100px] pointer-events-none -z-0" />

            <div className="space-y-6 relative z-10">
              
              {/* Story Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-300">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-sky-400 block">
                      ACT {current.number} — {current.badge}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {current.title}
                    </h4>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                  {current.tag}
                </span>
              </div>

              {/* Story Narrative Statement */}
              <div className="space-y-3">
                <h5 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  &quot;{current.headline}&quot;
                </h5>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {current.story}
                </p>
              </div>

              {/* Concrete Capabilities Checkpoints */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  Engineering Highlights
                </span>
                {current.details.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Story Impact Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Impact Metric</span>
                <p className="text-sm font-mono font-bold text-emerald-400">
                  {current.metric}
                </p>
              </div>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 hover:text-white transition-colors"
              >
                <span>파이프라인 동작 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
