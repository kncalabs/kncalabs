"use client";

import React, { useState } from "react";
import {
  Video,
  FileText,
  Mic,
  Cpu,
  Share2,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedSource, setSelectedSource] = useState<0 | 1 | 2>(0);
  const [activeOutput, setActiveOutput] = useState<0 | 1 | 2 | 3>(0);
  const [streamTick, setStreamTick] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Cyclic live data stream animation (Living Pipeline)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStreamTick((prev) => (prev + 1) % 100);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const triggerLivePulse = (idx: 0 | 1 | 2) => {
    setSelectedSource(idx);
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 800);
  };

  const sources = [
    {
      id: "video",
      title: "영상 원문",
      label: "YouTube 4K",
      icon: Video,
      color: "from-sky-500 to-blue-600",
      accent: "text-sky-400",
      border: "border-sky-500/40",
      bg: "bg-sky-500/10",
      preview: "YouTube 4K · 45분 영상",
      meta: "45:12 · 4K UHD · 음성 트랙 포함",
    },
    {
      id: "article",
      title: "장문 칼럼",
      label: "Tech Article",
      icon: FileText,
      color: "from-indigo-500 to-purple-600",
      accent: "text-indigo-400",
      border: "border-indigo-500/40",
      bg: "bg-indigo-500/10",
      preview: "심층 기술 아티클 원문",
      meta: "Markdown · 3,420 words · 8개 섹션",
    },
    {
      id: "audio",
      title: "음성 녹취",
      label: "Podcast Audio",
      icon: Mic,
      color: "from-teal-500 to-emerald-600",
      accent: "text-teal-400",
      border: "border-teal-500/40",
      bg: "bg-teal-500/10",
      preview: "팟캐스트 대화 녹취록",
      meta: "WAV Audio · 32:04 · 2인 대담",
    },
  ];

  // Specific deliverables expanded from that single source
  const deliverables = [
    // Source 0 (영상) -> 4 expanded outputs
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        result: "45분 영상에서 42초 바이럴 훅 추출 완료",
        badge: "0~60초",
        tag: "영상 ➔ 숏폼",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/40",
        bg: "bg-sky-950/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        result: "영상 타임라인 기반 3,800자 SEO 칼럼 변환",
        badge: "장문 칼럼",
        tag: "영상 ➔ 칼럼",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/40",
        bg: "bg-indigo-950/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        result: "핵심 인사이트 3줄 요약 + 에디터스 픽 발송본",
        badge: "주간 레터",
        tag: "영상 ➔ 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/40",
        bg: "bg-purple-950/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        result: "핵심 논점 7개 트윗 스레드 즉시 생성",
        badge: "3줄 요약",
        tag: "영상 ➔ 스레드",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/40",
        bg: "bg-emerald-950/20",
      },
    ],
    // Source 1 (칼럼) -> 4 expanded outputs
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        result: "칼럼 결론부 핵심 주장 50초 스크립트화",
        badge: "0~60초",
        tag: "칼럼 ➔ 숏폼",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/40",
        bg: "bg-sky-950/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        result: "멀티 플랫폼 호환 마크다운 재구조화 완료",
        badge: "장문 칼럼",
        tag: "칼럼 ➔ 칼럼",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/40",
        bg: "bg-indigo-950/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        result: "구독자 전용 1분 브리핑 다이제스트 구성",
        badge: "주간 레터",
        tag: "칼럼 ➔ 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/40",
        bg: "bg-purple-950/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        result: "핵심 인용구 기반 5편 연속 스레드 배포",
        badge: "3줄 요약",
        tag: "칼럼 ➔ 스레드",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/40",
        bg: "bg-emerald-950/20",
      },
    ],
    // Source 2 (음성) -> 4 expanded outputs
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        result: "화자별 핵심 발언 30초 하이라이트 클립",
        badge: "0~60초",
        tag: "음성 ➔ 숏폼",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/40",
        bg: "bg-sky-950/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        result: "음성 대화록 노이즈 정제 및 챕터별 아티클화",
        badge: "장문 칼럼",
        tag: "음성 ➔ 칼럼",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/40",
        bg: "bg-indigo-950/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        result: "에피소드 핵심 정리 오디오 레터 전송본",
        badge: "주간 레터",
        tag: "음성 ➔ 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/40",
        bg: "bg-purple-950/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        result: "인터뷰 Q&A 형식 링크드인 카드 포스팅",
        badge: "3줄 요약",
        tag: "음성 ➔ 스레드",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/40",
        bg: "bg-emerald-950/20",
      },
    ],
  ];

  const currentOutputs = deliverables[selectedSource];
  const CurrentSourceIcon = sources[selectedSource].icon;

  return (
    <section
      id="the-workflow"
      className="relative py-28 sm:py-40 overflow-hidden bg-[#030712]"
    >
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="workflow-grid-dedicated" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-grid-dedicated)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full space-y-16 sm:space-y-20 relative z-10">
        
        {/* Section Header: 3. THE WORKFLOW */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-xs font-semibold tracking-wider text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono uppercase text-[11px]">THE WORKFLOW</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            하나의 콘텐츠, AI를 거쳐 4개 결과물로 확장.
          </h2>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            단 1회의 입력으로 숏폼 대본, 블로그 칼럼, 뉴스레터, SNS 스레드가 동시 생성됩니다.
          </p>
        </div>

        {/* Dedicated Monumental AI Workflow Canvas */}
        <div className="relative rounded-3xl sm:rounded-[2rem] border border-white/10 bg-[#070b14]/90 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          
          {/* Header pill within canvas: Interactive Source Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/5 gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-300 font-medium tracking-wider">
                AUTONOMOUS EXPANSION PIPELINE
              </span>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">원천 선택:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-900/80 border border-white/10">
                {sources.map((src, idx) => {
                  const Icon = src.icon;
                  return (
                    <button
                      key={src.id}
                      type="button"
                      onClick={() => triggerLivePulse(idx as 0 | 1 | 2)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 relative ${
                        selectedSource === idx
                          ? "bg-white/10 text-white border border-white/20 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{src.title}</span>
                      {selectedSource === idx && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* VISUAL DIAGRAM CANVAS */}
          <div className="relative">
            
            {/* Desktop Full-Span Laser Flow Tracks (Connecting Source -> AI -> 4 Channels) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none -z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 420" preserveAspectRatio="none" fill="none">
                {/* 1. Track from ONE SOURCE (Left) to AI Core (Center) */}
                <path d="M 310 210 L 460 210" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 310 210 L 460 210"
                  stroke="rgba(56, 189, 248, 0.7)"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                />
                {/* Flowing Ingest Photon */}
                <circle r="4" fill="#38bdf8" className="filter drop-shadow-[0_0_8px_#38bdf8]">
                  <animateMotion
                    path="M 310 210 L 460 210"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 2. Branching Tracks from AI Core (Center) to 4 Deliverables (Right) */}
                {/* Branch 0: to Shorts */}
                <path d="M 540 210 C 600 210, 620 55, 680 55" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 540 210 C 600 210, 620 55, 680 55"
                  stroke="rgba(56, 189, 248, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                />
                <circle r="3.5" fill="#38bdf8" className="filter drop-shadow-[0_0_6px_#38bdf8]">
                  <animateMotion
                    path="M 540 210 C 600 210, 620 55, 680 55"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 1: to Blog */}
                <path d="M 540 210 C 600 210, 620 155, 680 155" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 540 210 C 600 210, 620 155, 680 155"
                  stroke="rgba(129, 140, 248, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                />
                <circle r="3.5" fill="#818cf8" className="filter drop-shadow-[0_0_6px_#818cf8]">
                  <animateMotion
                    path="M 540 210 C 600 210, 620 155, 680 155"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 2: to Newsletter */}
                <path d="M 540 210 C 600 210, 620 265, 680 265" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 540 210 C 600 210, 620 265, 680 265"
                  stroke="rgba(192, 132, 252, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                />
                <circle r="3.5" fill="#c084fc" className="filter drop-shadow-[0_0_6px_#c084fc]">
                  <animateMotion
                    path="M 540 210 C 600 210, 620 265, 680 265"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 3: to Social */}
                <path d="M 540 210 C 600 210, 620 365, 680 365" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 540 210 C 600 210, 620 365, 680 365"
                  stroke="rgba(52, 211, 153, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                />
                <circle r="3.5" fill="#34d399" className="filter drop-shadow-[0_0_6px_#34d399]">
                  <animateMotion
                    path="M 540 210 C 600 210, 620 365, 680 365"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* STAGE 1: ONE SOURCE (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono font-bold text-slate-300 tracking-wider flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">01</span>
                      <span className="tracking-widest">ONE SOURCE</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      STREAMING INGEST
                    </span>
                  </div>

                  {/* The Ingest Chamber: Living Breathing Box */}
                  <div
                    className={`p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                      sources[selectedSource].border
                    } bg-gradient-to-br from-[#0b1220] via-slate-950 to-slate-950 shadow-2xl ${
                      isProcessing ? "scale-[1.02] ring-2 ring-sky-400/40" : ""
                    }`}
                  >
                    {/* Subtle Scanline Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-4 rounded-xl ${sources[selectedSource].bg} ${sources[selectedSource].accent} relative shrink-0`}>
                        <CurrentSourceIcon className="w-7 h-7" />
                        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                      </div>
                      <div>
                        <span className="text-base sm:text-lg font-bold text-white block">
                          {sources[selectedSource].title}
                        </span>
                        <span className="text-xs font-mono text-slate-400 block mt-0.5">
                          {sources[selectedSource].preview}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 space-y-2 relative z-10">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>METADATA</span>
                        <span className="text-slate-300">{sources[selectedSource].meta}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500">PACKET STATUS</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          READY · 1 INGEST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STAGE 2: THE AI TRANSFORMATION ENGINE (4 cols - Center Nexus) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6 lg:py-0">
                
                {/* The Core Nexus Monolith: Living Heartbeat */}
                <div
                  className="relative group cursor-pointer"
                  onClick={() => triggerLivePulse(selectedSource)}
                  title="클릭하여 실시간 확장 파동 재실행"
                >
                  {/* Dynamic Radiance Aura */}
                  <div className={`absolute -inset-6 bg-gradient-to-r from-sky-500/25 via-indigo-500/25 to-emerald-500/25 rounded-full blur-2xl transition-opacity duration-700 ${
                    isProcessing ? "opacity-100 scale-110" : "opacity-60"
                  } animate-pulse`} />

                  <div className={`relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#050813] border-2 border-white/20 p-3 shadow-2xl transition-transform duration-500 flex flex-col items-center justify-center text-center space-y-1.5 ${
                    isProcessing ? "scale-105 border-sky-400" : "hover:scale-102"
                  }`}>
                    {/* High-Tech Orbital Rings */}
                    <div className="absolute inset-1.5 rounded-full border border-sky-400/30 border-t-white animate-spin" style={{ animationDuration: "6s" }} />
                    <div className="absolute inset-3.5 rounded-full border border-dashed border-emerald-400/20 border-b-sky-300 animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
                    
                    <div className="p-3 rounded-full bg-white/5 text-sky-300 relative">
                      <Cpu className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform ${isProcessing ? "rotate-90 scale-110 text-sky-400" : "animate-pulse"}`} />
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-sky-400 font-bold block">
                        AI EXPANSION CORE
                      </span>
                      <span className="text-xs font-bold text-white block mt-0.5">
                        1 원천 ➔ 4 채널 확장
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      FAN-OUT 1:4
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[11px] font-mono text-slate-300 shadow-sm">
                    <Sparkles className="w-3 h-3 text-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
                    1회 입력 ➔ 전 채널 동시 분해 런타임
                  </span>
                </div>
              </div>

              {/* STAGE 3: 02 CONTENT (4 cols - 4 Output Channels) */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-2.5">
                <div className="text-[11px] font-mono font-bold text-slate-300 tracking-wider flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">02</span>
                    <span className="tracking-widest">CONTENT</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">4 CHANNELS ACTIVE</span>
                </div>

                {/* 4 Output Channels Fanout */}
                <div className="space-y-2">
                  {currentOutputs.map((out, idx) => {
                    const isSelected = activeOutput === idx;
                    const OutIcon = out.icon;
                    return (
                      <div
                        key={out.id}
                        onClick={() => setActiveOutput(idx as 0 | 1 | 2 | 3)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                          isSelected
                            ? `${out.border} ${out.bg} shadow-lg ring-1 ring-sky-500/40`
                            : "border-slate-800/80 bg-slate-900/60 hover:bg-slate-900 text-slate-400"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2.5">
                            <div className="p-1 rounded-lg bg-white/5 text-sky-400 shrink-0 mt-0.5">
                              <OutIcon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-white leading-tight">
                                  {out.title}
                                </span>
                                <span className="text-[10px] font-mono text-slate-500">
                                  · {out.platform}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300 mt-1 font-sans leading-tight">
                                {out.result}
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-emerald-400 font-semibold block">
                              {out.badge}
                            </span>
                            <span className="text-[9px] font-mono text-slate-500 block mt-1">
                              {out.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Architectural Brand Telemetry Console: Living Engine Heartbeat */}
          <div className="mt-10 pt-8 border-t border-white/5 rounded-2xl bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-indigo-950/20 p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 relative">
                <Cpu className="w-6 h-6 animate-pulse" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-sky-400 font-bold tracking-wider block">
                    AUTONOMOUS EXPANSION ACTIVE
                  </span>
                  <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-mono">
                    LIVE
                  </span>
                </div>
                <span className="text-sm font-semibold text-white block mt-0.5">
                  1개의 원천 콘텐츠가 4개 채널 결과물(숏폼 대본·칼럼·뉴스레터·SNS 스레드)로 실시간 확장됩니다.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs shrink-0">
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">LATENCY</span>
                <span className="text-emerald-400 font-bold text-sm">
                  {(0.21 + (streamTick % 5) * 0.01).toFixed(2)}s
                </span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">EXPANSION</span>
                <span className="text-white font-bold text-sm">1 ➔ 4 CH</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">FAN-OUT</span>
                <span className="text-sky-300 font-bold text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                  100% SYNC
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
