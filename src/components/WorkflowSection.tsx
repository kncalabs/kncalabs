"use client";

import React, { useState, useEffect } from "react";
import {
  Video,
  FileText,
  Mic,
  Cpu,
  Share2,
  Mail,
  Play,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedSource, setSelectedSource] = useState<0 | 1 | 2>(0);
  const [activeOutput, setActiveOutput] = useState<0 | 1 | 2 | 3>(0);
  const [streamTick, setStreamTick] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Cyclic live data stream animation (Living Pipeline)
  useEffect(() => {
    const interval = setInterval(() => {
      setStreamTick((prev) => (prev + 1) % 100);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  const triggerLivePulse = (idx: 0 | 1 | 2) => {
    setSelectedSource(idx);
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 900);
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
      meta: "45:12 · 4K UHD",
      detail: "1개의 영상이 자율 분해를 시작합니다.",
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
      meta: "Markdown · 3,420 words",
      detail: "1개의 칼럼이 자율 분해를 시작합니다.",
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
      meta: "WAV Audio · 32:04",
      detail: "1개의 음성이 자율 분해를 시작합니다.",
    },
  ];

  // Distinct visual deliverables generated from the single source
  const deliverables = [
    // Source 0: Video -> 4 Visual Deliverables
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        format: "9:16 모바일 숏폼",
        subtitle: "“이것만 알면 콘텐츠 제작 90%가 끝납니다.”",
        metric: "00:42 훅 추출",
        badge: "0~60초",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/50",
        bg: "bg-sky-950/20",
        glow: "shadow-sky-500/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        format: "구조화 장문 칼럼",
        subtitle: "영상 타임라인 기반 3,800자 SEO 기술 문서 변환",
        metric: "SEO 100점",
        badge: "3,800자",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/50",
        bg: "bg-indigo-950/20",
        glow: "shadow-indigo-500/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        format: "주간 다이제스트",
        subtitle: "[발송본] 이번 주 핵심 인사이트 3줄 요약 + 실전 가이드",
        metric: "오픈율 최적화",
        badge: "주간 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/50",
        bg: "bg-purple-950/20",
        glow: "shadow-purple-500/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        format: "바이럴 스레드 7편",
        subtitle: "1/7 “대부분의 크리에이터가 놓치는 단 하나의 핵심 원천...”",
        metric: "스레드 7연작",
        badge: "3줄 요약",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/50",
        bg: "bg-emerald-950/20",
        glow: "shadow-emerald-500/20",
      },
    ],
    // Source 1: Article -> 4 Visual Deliverables
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        format: "9:16 모바일 숏폼",
        subtitle: "“칼럼 결론부 핵심 명제 45초 스피치 대본”",
        metric: "00:45 훅 추출",
        badge: "0~60초",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/50",
        bg: "bg-sky-950/20",
        glow: "shadow-sky-500/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        format: "멀티 플랫폼 마크다운",
        subtitle: "네이버 블로그 및 벨로그 호환용 재구조화 완료",
        metric: "서식 완벽 호환",
        badge: "전문 배포",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/50",
        bg: "bg-indigo-950/20",
        glow: "shadow-indigo-500/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        format: "구독자 전용 레터",
        subtitle: "[브리핑] 칼럼 속 3가지 체크리스트 1분 요약본",
        metric: "다이제스트 팩",
        badge: "주간 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/50",
        bg: "bg-purple-950/20",
        glow: "shadow-purple-500/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        format: "핵심 인용구 스레드",
        subtitle: "1/5 “칼럼 본문 중 가장 많은 공감을 받은 3가지 문장...”",
        metric: "인용구 5개",
        badge: "3줄 요약",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/50",
        bg: "bg-emerald-950/20",
        glow: "shadow-emerald-500/20",
      },
    ],
    // Source 2: Audio -> 4 Visual Deliverables
    [
      {
        id: "shorts",
        title: "숏폼 대본",
        platform: "Shorts · Reels · TikTok",
        format: "9:16 모바일 숏폼",
        subtitle: "“게스트 핵심 발언 30초 컷 + 자막 싱크 대본”",
        metric: "00:30 하이라이트",
        badge: "0~60초",
        icon: Video,
        accent: "text-sky-300",
        border: "border-sky-500/50",
        bg: "bg-sky-950/20",
        glow: "shadow-sky-500/20",
      },
      {
        id: "blog",
        title: "블로그 칼럼",
        platform: "네이버 · 벨로그 · 테크",
        format: "대담 해설 아티클",
        subtitle: "음성 대화록 노이즈 정제 및 챕터별 해설 칼럼 변환",
        metric: "챕터 4개 분할",
        badge: "정제 완료",
        icon: FileText,
        accent: "text-indigo-300",
        border: "border-indigo-500/50",
        bg: "bg-indigo-950/20",
        glow: "shadow-indigo-500/20",
      },
      {
        id: "newsletter",
        title: "Newsletter",
        platform: "이메일 레터 · 스티비",
        format: "오디오 레터 발송본",
        subtitle: "[에피소드 총정리] 32분 대담 중 반드시 챙겨야 할 포인트",
        metric: "오디오 요약",
        badge: "주간 레터",
        icon: Mail,
        accent: "text-purple-300",
        border: "border-purple-500/50",
        bg: "bg-purple-950/20",
        glow: "shadow-purple-500/20",
      },
      {
        id: "social",
        title: "SNS 스레드",
        platform: "X · 링크드인 · 인스타",
        format: "Q&A 카드 스레드",
        subtitle: "Q. 성장을 위한 단 하나의 원천은? ➔ A. 시스템화된 파이프라인...",
        metric: "문답형 4선",
        badge: "3줄 요약",
        icon: Share2,
        accent: "text-emerald-300",
        border: "border-emerald-500/50",
        bg: "bg-emerald-950/20",
        glow: "shadow-emerald-500/20",
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
        <div className="relative rounded-3xl sm:rounded-[2rem] border border-white/10 bg-[#070b14]/90 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">
          
          {/* Header Bar: Interactive Source Switcher */}
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
              <svg className="w-full h-full" viewBox="0 0 1000 460" preserveAspectRatio="none" fill="none">
                <defs>
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.8" />
                  </filter>
                  <filter id="neon-glow-indigo" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#818cf8" floodOpacity="0.8" />
                  </filter>
                  <filter id="neon-glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#c084fc" floodOpacity="0.8" />
                  </filter>
                  <filter id="neon-glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#34d399" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* 1. Track from ONE SOURCE (Left) to AI Core (Center) */}
                <path d="M 330 230 L 450 230" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2.5" />
                <path
                  d="M 330 230 L 450 230"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                  filter="url(#neon-glow)"
                />
                {/* Flowing Ingest Photon */}
                <circle r="4.5" fill="#38bdf8" className="filter drop-shadow-[0_0_10px_#38bdf8]">
                  <animateMotion
                    path="M 330 230 L 450 230"
                    dur="1.1s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 2. Branching Tracks from AI Core (Center) to 4 Deliverables (Right) */}
                {/* Branch 0: to Shorts */}
                <path d="M 550 230 C 610 230, 630 60, 680 60" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 550 230 C 610 230, 630 60, 680 60"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                  filter="url(#neon-glow)"
                />
                <circle r="4" fill="#38bdf8" className="filter drop-shadow-[0_0_8px_#38bdf8]">
                  <animateMotion
                    path="M 550 230 C 610 230, 630 60, 680 60"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 1: to Blog */}
                <path d="M 550 230 C 610 230, 630 170, 680 170" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 550 230 C 610 230, 630 170, 680 170"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                  filter="url(#neon-glow-indigo)"
                />
                <circle r="4" fill="#818cf8" className="filter drop-shadow-[0_0_8px_#818cf8]">
                  <animateMotion
                    path="M 550 230 C 610 230, 630 170, 680 170"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 2: to Newsletter */}
                <path d="M 550 230 C 610 230, 630 290, 680 290" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 550 230 C 610 230, 630 290, 680 290"
                  stroke="#c084fc"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                  filter="url(#neon-glow-purple)"
                />
                <circle r="4" fill="#c084fc" className="filter drop-shadow-[0_0_8px_#c084fc]">
                  <animateMotion
                    path="M 550 230 C 610 230, 630 290, 680 290"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Branch 3: to Social */}
                <path d="M 550 230 C 610 230, 630 400, 680 400" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="2" />
                <path
                  d="M 550 230 C 610 230, 630 400, 680 400"
                  stroke="#34d399"
                  strokeWidth="2.5"
                  strokeDasharray="6 8"
                  className="animate-flow-dash"
                  filter="url(#neon-glow-emerald)"
                />
                <circle r="4" fill="#34d399" className="filter drop-shadow-[0_0_8px_#34d399]">
                  <animateMotion
                    path="M 550 230 C 610 230, 630 400, 680 400"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* STAGE 1: ONE SOURCE [단 하나의 원천 비주얼 아티팩트] (4 cols) */}
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

                  {/* Monumental Visual Source Artifact */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                      sources[selectedSource].border
                    } bg-gradient-to-br from-[#0c1322] via-[#070b14] to-slate-950 shadow-2xl ${
                      isProcessing ? "scale-[1.02] ring-2 ring-sky-400/50" : ""
                    }`}
                  >
                    {/* Subtle Scanline Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />

                    {/* Media Type Specific Visual Preview */}
                    <div className="rounded-xl border border-white/10 bg-black/60 p-4 mb-4 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-white font-bold">
                          <CurrentSourceIcon className="w-4 h-4 text-sky-400" />
                          {sources[selectedSource].label}
                        </span>
                        <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          LIVE
                        </span>
                      </div>

                      {/* Dynamic Visual Waveform / Equalizer Display */}
                      <div className="h-14 rounded-lg bg-slate-950/80 border border-white/5 flex items-end justify-between px-3 py-2 gap-1 relative overflow-hidden">
                        {[40, 75, 25, 90, 60, 85, 30, 95, 50, 70, 80, 45, 65, 88, 35, 78, 92, 55, 68, 84].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-sky-500 to-emerald-400 rounded-full transition-all duration-300"
                            style={{
                              height: `${isProcessing ? (height * 1.2) % 100 : ((height + streamTick * 7 + i * 5) % 80) + 20}%`,
                              opacity: 0.85,
                            }}
                          />
                        ))}
                        <div className="absolute top-1.5 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                          <Play className="w-2.5 h-2.5 fill-current text-sky-400" />
                          <span>{sources[selectedSource].meta}</span>
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>DATA INGEST</span>
                        <span className="text-sky-300 font-semibold">1 SOURCE PACKET</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {sources[selectedSource].title}
                      </span>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {sources[selectedSource].detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">PACKET OUT</span>
                      <span className="text-sky-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        AI CORE CONNECTED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* STAGE 2: THE AI TRANSFORMATION ENGINE [중앙 광학 프리즘 AI 코어] (4 cols - Center Nexus) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6 lg:py-0">
                
                {/* The Core Nexus Monolith: Living Heartbeat */}
                <div
                  className="relative group cursor-pointer"
                  onClick={() => triggerLivePulse(selectedSource)}
                  title="클릭하여 자율 확장 파동 재트리거"
                >
                  {/* Dynamic Radiance Multi-color Prism Aura */}
                  <div className={`absolute -inset-8 bg-gradient-to-r from-sky-500/30 via-purple-500/30 to-emerald-500/30 rounded-full blur-2xl transition-all duration-700 ${
                    isProcessing ? "opacity-100 scale-125" : "opacity-70"
                  } animate-pulse`} />

                  <div className={`relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#050813] border-2 border-white/20 p-3 shadow-2xl transition-transform duration-500 flex flex-col items-center justify-center text-center space-y-1.5 ${
                    isProcessing ? "scale-105 border-sky-400" : "hover:scale-102"
                  }`}>
                    {/* High-Tech Orbital Rings */}
                    <div className="absolute inset-1.5 rounded-full border border-sky-400/40 border-t-white animate-spin" style={{ animationDuration: "5s" }} />
                    <div className="absolute inset-3.5 rounded-full border border-dashed border-purple-400/30 border-b-emerald-400 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
                    
                    <div className="p-3 rounded-full bg-white/5 text-sky-300 relative">
                      <Cpu className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform ${isProcessing ? "rotate-90 scale-110 text-sky-400" : "animate-pulse"}`} />
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-sky-400 font-bold block">
                        AI PRISM ENGINE
                      </span>
                      <span className="text-xs font-bold text-white block mt-0.5">
                        1 원천 ➔ 4 채널 확장
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      FAN-OUT 1 : 4
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[11px] font-mono text-slate-300 shadow-sm">
                    <Sparkles className="w-3 h-3 text-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
                    단일 신호 ➔ 4갈래 포맷 동시 굴절 런타임
                  </span>
                </div>
              </div>

              {/* STAGE 3: 02 CONTENT [4개의 서로 다른 시각적 포맷 아티팩트] (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-2.5">
                <div className="text-[11px] font-mono font-bold text-slate-300 tracking-wider flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">02</span>
                    <span className="tracking-widest">CONTENT</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">4 CHANNELS ACTIVE</span>
                </div>

                {/* 4 Distinct Visual Media Cards */}
                <div className="space-y-2.5">
                  {currentOutputs.map((out, idx) => {
                    const isSelected = activeOutput === idx;
                    const OutIcon = out.icon;
                    return (
                      <div
                        key={out.id}
                        onClick={() => setActiveOutput(idx as 0 | 1 | 2 | 3)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden backdrop-blur-md ${
                          isSelected
                            ? `${out.border} ${out.bg} shadow-lg ${out.glow} ring-1 ring-sky-500/40`
                            : "border-slate-800/80 bg-slate-900/60 hover:bg-slate-900 text-slate-400"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-start gap-2.5">
                            <div className="p-2 rounded-lg bg-white/5 text-sky-400 shrink-0 mt-0.5 border border-white/5">
                              <OutIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white leading-tight">
                                  {out.title}
                                </span>
                                <span className="text-[10px] font-mono text-sky-300 bg-sky-500/10 px-1.5 py-0.2 rounded">
                                  {out.format}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300 mt-1 font-sans leading-tight">
                                {out.subtitle}
                              </p>
                              <span className="text-[10px] font-mono text-slate-500 block mt-1">
                                {out.platform}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-emerald-400 font-semibold block">
                              {out.metric}
                            </span>
                            <span className="text-[9px] font-mono text-slate-500 block mt-1">
                              {out.badge}
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
