"use client";

import React, { useState, useEffect } from "react";
import {
  Video,
  FileText,
  Mic,
  Share2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedSource, setSelectedSource] = useState<0 | 1 | 2>(0);
  const [activeTab, setActiveTab] = useState<0 | 1 | 2 | 3>(0);
  const [pulseTick, setPulseTick] = useState(0);

  // Subtle cyclic pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sources = [
    {
      id: "video",
      name: "영상",
      label: "YouTube 4K 풀 영상",
      meta: "45분 영상 원본",
      icon: Video,
      color: "text-sky-400",
      accentBorder: "border-sky-500/40",
      preview: "45분 분량의 강연 및 인터뷰 영상",
    },
    {
      id: "article",
      name: "칼럼",
      label: "기술 아티클 원문",
      meta: "3,400자 텍스트 원본",
      icon: FileText,
      color: "text-indigo-400",
      accentBorder: "border-indigo-500/40",
      preview: "심층 인사이트가 담긴 기술 및 전략 칼럼",
    },
    {
      id: "audio",
      name: "음성",
      label: "팟캐스트 녹취록",
      meta: "32분 음성 대담 원본",
      icon: Mic,
      color: "text-teal-400",
      accentBorder: "border-teal-500/40",
      preview: "2인 대담 녹취 오디오 및 스크립트",
    },
  ];

  // The 4 clean deliverables expanded from each source
  const deliverables = [
    // From Video
    [
      {
        id: "shorts",
        channel: "Shorts",
        platform: "쇼츠 · 릴스 · 틱톡",
        title: "숏폼 대본",
        content: "“이것만 알면 콘텐츠 제작 90%가 끝납니다.” 45분 영상에서 가장 높은 몰입도를 기록한 42초 구간을 추출하여 세로형 자막 대본으로 자동 완성했습니다.",
        icon: Video,
        color: "text-sky-400",
        border: "border-sky-500/40",
      },
      {
        id: "blog",
        channel: "Blog",
        platform: "네이버 · 벨로그 · 미디엄",
        title: "블로그 칼럼",
        content: "영상 타임라인을 기반으로 핵심 챕터 4개를 분할하고, 검색 엔진에 최적화된 3,800자 SEO 기술 문서로 구조화했습니다.",
        icon: FileText,
        color: "text-indigo-400",
        border: "border-indigo-500/40",
      },
      {
        id: "newsletter",
        channel: "Newsletter",
        platform: "이메일 레터 · 스티비",
        title: "뉴스레터",
        content: "[주간 다이제스트] 영상의 핵심 인사이트 3줄 요약과 실천 체크리스트를 즉시 발송 가능한 이메일 서식으로 패키징했습니다.",
        icon: Mail,
        color: "text-purple-400",
        border: "border-purple-500/40",
      },
      {
        id: "social",
        channel: "Social",
        platform: "X · 링크드인 · 인스타그램",
        title: "SNS 스레드",
        content: "1/7 “대부분의 크리에이터가 놓치는 단 하나의 핵심 원천...” 바이럴 확산에 최적화된 7편의 연속 스레드로 분할 배포합니다.",
        icon: Share2,
        color: "text-emerald-400",
        border: "border-emerald-500/40",
      },
    ],
    // From Article
    [
      {
        id: "shorts",
        channel: "Shorts",
        platform: "쇼츠 · 릴스 · 틱톡",
        title: "숏폼 대본",
        content: "칼럼 결론부의 가장 강력한 명제를 45초 스피치용 구어체 스크립트로 전환했습니다.",
        icon: Video,
        color: "text-sky-400",
        border: "border-sky-500/40",
      },
      {
        id: "blog",
        channel: "Blog",
        platform: "네이버 · 벨로그 · 미디엄",
        title: "블로그 칼럼",
        content: "플랫폼별 포맷 규격에 맞춰 마크다운 서식을 완벽하게 재배치하고 가독성을 극대화했습니다.",
        icon: FileText,
        color: "text-indigo-400",
        border: "border-indigo-500/40",
      },
      {
        id: "newsletter",
        channel: "Newsletter",
        platform: "이메일 레터 · 스티비",
        title: "뉴스레터",
        content: "구독자 전용 1분 브리핑 다이제스트로 칼럼의 3대 핵심 포인트를 요약 정리했습니다.",
        icon: Mail,
        color: "text-purple-400",
        border: "border-purple-500/40",
      },
      {
        id: "social",
        channel: "Social",
        platform: "X · 링크드인 · 인스타그램",
        title: "SNS 스레드",
        content: "칼럼 본문 중 가장 많은 공감을 이끌어낼 수 있는 인용구 5편을 선별해 연속 트윗으로 변환했습니다.",
        icon: Share2,
        color: "text-emerald-400",
        border: "border-emerald-500/40",
      },
    ],
    // From Audio
    [
      {
        id: "shorts",
        channel: "Shorts",
        platform: "쇼츠 · 릴스 · 틱톡",
        title: "숏폼 대본",
        content: "게스트의 핵심 발언 30초 컷과 자막 싱크를 정밀하게 일치시킨 하이라이트 대본을 추출했습니다.",
        icon: Video,
        color: "text-sky-400",
        border: "border-sky-500/40",
      },
      {
        id: "blog",
        channel: "Blog",
        platform: "네이버 · 벨로그 · 미디엄",
        title: "블로그 칼럼",
        content: "음성 대화록의 노이즈와 구어체를 정제하고, 논리적인 챕터별 해설 칼럼으로 아티클화했습니다.",
        icon: FileText,
        color: "text-indigo-400",
        border: "border-indigo-500/40",
      },
      {
        id: "newsletter",
        channel: "Newsletter",
        platform: "이메일 레터 · 스티비",
        title: "뉴스레터",
        content: "32분 대담 중 독자가 반드시 챙겨야 할 실전 액션 플랜을 이메일 브리핑 형태로 구성했습니다.",
        icon: Mail,
        color: "text-purple-400",
        border: "border-purple-500/40",
      },
      {
        id: "social",
        channel: "Social",
        platform: "X · 링크드인 · 인스타그램",
        title: "SNS 스레드",
        content: "인터뷰 문답(Q&A) 포맷으로 가공하여 링크드인 및 X에서 높은 공유를 유도하는 카드 뉴스를 구성했습니다.",
        icon: Share2,
        color: "text-emerald-400",
        border: "border-emerald-500/40",
      },
    ],
  ];

  const currentOutputs = deliverables[selectedSource];
  const activeOutput = currentOutputs[activeTab];
  const SourceIcon = sources[selectedSource].icon;

  return (
    <section
      id="the-workflow"
      className="relative py-32 sm:py-48 overflow-hidden bg-[#030712]"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full space-y-16 sm:space-y-24 relative z-10">
        
        {/* Section Header: Pure Monumental Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-xs font-semibold tracking-wider text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono uppercase text-[11px]">THE WORKFLOW</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.06]">
            원천 하나로, 모든 결과물로.
          </h2>

          <p className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            단 하나의 원본 콘텐츠가 모든 플랫폼 규격으로 자동 확장됩니다.
          </p>
        </div>

        {/* The Monumental Visual Stage: Single Living Showcase */}
        <div className="rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-[#070b14]/90 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl space-y-12">
          
          {/* Source Selector Bar: 3 Clean Minimalist Pills */}
          <div className="flex items-center justify-center pb-8 border-b border-white/5">
            <div className="inline-flex p-1 rounded-xl bg-slate-900/80 border border-white/10">
              {sources.map((src, idx) => (
                <button
                  key={src.id}
                  type="button"
                  onClick={() => setSelectedSource(idx as 0 | 1 | 2)}
                  className={`px-5 py-2 rounded-lg text-xs font-medium transition-all ${
                    selectedSource === idx
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {src.name}
                </button>
              ))}
            </div>
          </div>

          {/* Core Visual Pipeline: ONE SOURCE ➔ EXPANDED DELIVERABLES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* The Single Source (Left Anchor) */}
            <div className="lg:col-span-5 space-y-4">

              <div className={`p-8 rounded-2xl border ${sources[selectedSource].accentBorder} bg-gradient-to-br from-[#0c1426] to-[#060a14] space-y-6 shadow-2xl relative overflow-hidden group`}>
                {/* Visual Audio/Video Equalizer Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <SourceIcon className={`w-5 h-5 ${sources[selectedSource].color}`} />
                    <span className="text-white font-bold text-sm">{sources[selectedSource].label}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">{sources[selectedSource].meta}</span>
                </div>

                <div className="h-20 rounded-xl bg-black/40 border border-white/5 flex items-end justify-between px-4 py-3 gap-1.5 relative overflow-hidden">
                  {[30, 65, 45, 80, 55, 90, 40, 75, 85, 50, 70, 95, 60, 40, 85, 65].map((val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-sky-500 to-indigo-400 rounded-full transition-all duration-300"
                      style={{
                        height: `${((val + pulseTick * 8 + i * 6) % 80) + 20}%`,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>

                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {sources[selectedSource].preview}
                </p>
              </div>
            </div>

            {/* Glowing Laser Conduit (Center Beam) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
              <div className="hidden lg:flex items-center justify-center w-full relative">
                <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 relative">
                  <div className="absolute inset-0 bg-white/40 blur-[2px]" />
                </div>
                <div className="absolute w-10 h-10 rounded-full bg-[#050813] border border-white/20 flex items-center justify-center text-sky-400 shadow-xl">
                  <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </div>

              <div className="lg:hidden flex items-center justify-center py-2 text-slate-500">
                <span className="text-2xl animate-bounce">↓</span>
              </div>
            </div>

            {/* The Expanded Deliverables (Right Showcase) */}
            <div className="lg:col-span-5 space-y-4">
              {/* 4 Interactive Format Selector Tabs */}
              <div className="grid grid-cols-4 gap-2">
                {currentOutputs.map((out, idx) => (
                  <button
                    key={out.id}
                    type="button"
                    onClick={() => setActiveTab(idx as 0 | 1 | 2 | 3)}
                    className={`py-2 px-3 rounded-xl border text-center transition-all ${
                      activeTab === idx
                        ? "bg-white text-black border-white font-bold shadow-lg"
                        : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="text-xs block">{out.channel}</span>
                  </button>
                ))}
              </div>

              {/* Active Deliverable Live Preview Card */}
              <div className={`p-8 rounded-2xl border ${activeOutput.border} bg-gradient-to-br from-[#0c1426] to-[#060a14] space-y-4 shadow-2xl relative min-h-[220px] flex flex-col justify-between`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{activeOutput.platform}</span>
                    <span className="text-white font-medium">{activeOutput.title}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal pt-2">
                    {activeOutput.content}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
