"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  Terminal,
  Loader2,
  Copy,
  Check,
  Send,
  Video,
  FileText,
  Mic,
  Cpu,
  Share2,
} from "lucide-react";

export default function MonumentalEngine() {
  const [selectedSourceType, setSelectedSourceType] = useState<"video" | "article" | "podcast">("video");
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=agent-architecture-deepdive");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStage, setActiveStage] = useState(1);
  const [activeOutputTab, setActiveOutputTab] = useState<"shorts" | "article" | "social">("shorts");
  const [copied, setCopied] = useState(false);
  const [queueDispatched, setQueueDispatched] = useState(false);

  const sourcePresets = {
    video: {
      url: "https://youtube.com/watch?v=agent-architecture-deepdive",
      title: "AI 에이전트 시스템 심층 분석 (48분 원본 영상)",
      format: "YouTube 4K Stream",
      icon: Video,
    },
    article: {
      url: "https://arxiv.org/html/autonomous-content-orchestration",
      title: "지능형 콘텐츠 오케스트레이션 아키텍처 논문",
      format: "Long-form Research (Markdown)",
      icon: FileText,
    },
    podcast: {
      url: "https://podcasts.apple.com/tech-talks/ep-84-knca",
      title: "실리콘밸리 엔지니어링 인터뷰 (오디오 녹취 32분)",
      format: "Lossless Audio Transcript",
      icon: Mic,
    },
  };

  const outputsData = {
    shorts: {
      title: "Shorts Video Script (0-60s Timeline)",
      channel: "YouTube Shorts · Instagram Reels · TikTok",
      formatBadge: "0-60초 분초 단위 씬/훅 대본",
      content: `[00:00 - 00:08] [Hook: 화면 분절 그래픽 + 타이포 팝업]
"왜 100개의 테크 기업들이 단순 AI 글쓰기 대신 '콘텐츠 워크플로우'를 구축할까요?"

[00:09 - 00:32] [Body: KNCA 단일 소스 처리 다이어그램 오버레이]
"핵심은 '다시 쓰는 것'이 아니라 '맥락의 무손실 추출'입니다. 
영상 1편을 업로드하면 Claude AI가 훅, 본문 요약, 채널별 문법을 스스로 분해합니다."

[00:33 - 00:60] [CTA: Build Once. Automate More.]
"더 이상 수작업 복제 노동에 갇히지 마세요.
지금 KNCA Closed Beta에서 자율 파이프라인을 경험해 보세요."`,
    },
    article: {
      title: "Technical Deep Dive Article",
      channel: "자사 테크 블로그 · Medium · Velog",
      formatBadge: "마크다운 심층 기술 기고문",
      content: `# 엔터프라이즈 AI 콘텐츠 인프라의 핵심: 단일 원천에서 자율 다채널 배포까지

콘텐츠 생산에서 발생하는 가장 심각한 병목은 '아이디어의 부재'가 아닙니다.
완성된 1개의 원천을 수많은 채널 규격에 맞춰 다시 쓰고 줄이는 '수작업 포맷 재편집'의 마찰입니다.

### 1. 지능형 컨텍스트 앵커링 (Context Anchoring)
Claude 3.5 Sonnet 기반 오케스트레이션 엔진은 원본 영상/문서의 서사 뼈대를 지식 그래프로 추출합니다.

### 2. 결정론적 품질 가드레일 (Quality Guardrails)
단순 요약이 아닌, 채널별 독자 페르소나와 플랫폼 소비 호흡에 맞춘 자율 톤앤매너 재구성을 보장합니다.`,
    },
    social: {
      title: "Viral Insight Micro Thread",
      channel: "X (트위터) · Threads · LinkedIn",
      formatBadge: "소셜 바이럴 인사이트 스레드",
      content: `🧵 콘텐츠 파편화 시대, 크리에이터와 기업이 생존하는 단 하나의 아키텍처:

1/ 콘텐츠 생산의 70%는 '새로운 글 쓰기'가 아니라 '기존 글 쪼개기'에 낭비되고 있습니다.

2/ 하나의 롱폼 영상을 만들고 인스타, 블로그, 뉴스레터를 따로 쓰는 수작업을 멈추세요.

3/ 단 1회 투입(Build Once)으로 5개 채널 자율 배포(Automate More).
#AIContentAutomation #KNCA #Productivity`,
    },
  };

  const executePipeline = () => {
    setIsProcessing(true);
    setActiveStage(1);

    setTimeout(() => setActiveStage(2), 700);
    setTimeout(() => setActiveStage(3), 1500);
    setTimeout(() => setActiveStage(4), 2300);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3100);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputsData[activeOutputTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDispatchQueue = () => {
    setQueueDispatched(true);
    setTimeout(() => setQueueDispatched(false), 3000);
  };

  return (
    <section
      id="core-engine"
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-radial-glow min-h-screen flex flex-col items-center justify-center border-b border-sky-950/60"
    >
      {/* Precision Ambient Grid & Vector Flow Paths */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.16" />
              <stop offset="45%" stopColor="#818cf8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
            </linearGradient>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.035)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-16 relative z-10">
        
        {/* 1. MONUMENTAL HEADLINE (7rem) & BRAND MANIFESTO */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold shadow-lg shadow-sky-950/50 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="tracking-widest uppercase">AI CONTENT ORCHESTRATION</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-normal">Active Alpha</span>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tight text-white leading-[0.98] break-words">
            Build Once. <br />
            <span className="text-gradient">Automate More.</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            단 하나의 원천(Source)이 AI 지능을 통과하여 수십 개의 콘텐츠로 자율 분기합니다.
          </p>
        </div>

        {/* 2. THE SINGLE UNIFIED MASTER ARTIFACT (NO REPETITIVE 4-CARD GRIDS) */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-slate-950/95 border border-sky-500/40 shadow-2xl shadow-sky-950/50 backdrop-blur-xl overflow-hidden">
          
          {/* Top Engine Chrome Header */}
          <div className="bg-slate-900/95 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                knca-core-runtime.engine // one-source-infinite-manifestations
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Claude API Active
              </span>
              <span className="border-l border-slate-800 pl-3 text-slate-500 hidden sm:inline font-mono">
                Zero-Loss Pipeline
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* 2.1 CONTINUOUS STREAM CONDUIT (단일 연속 스트림 도관 - 카드 그리드 완전 폐기) */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                
                {/* Stage 1 */}
                <div
                  onClick={() => setActiveStage(1)}
                  className={`flex-1 w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    activeStage === 1
                      ? "bg-sky-500/20 text-sky-200 border border-sky-400/50 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeStage === 1 ? "bg-sky-500/30 text-sky-300" : "bg-slate-800 text-slate-500"}`}>
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-500">01. INGEST</span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">ONE SOURCE</span>
                  </div>
                </div>

                <div className="hidden md:flex text-slate-600 font-mono text-xs">➔</div>

                {/* Stage 2 */}
                <div
                  onClick={() => setActiveStage(2)}
                  className={`flex-1 w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    activeStage === 2
                      ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/50 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeStage === 2 ? "bg-indigo-500/30 text-indigo-300" : "bg-slate-800 text-slate-500"}`}>
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-500">02. REASON</span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">CLAUDE AI</span>
                  </div>
                </div>

                <div className="hidden md:flex text-slate-600 font-mono text-xs">➔</div>

                {/* Stage 3 */}
                <div
                  onClick={() => setActiveStage(3)}
                  className={`flex-1 w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    activeStage === 3
                      ? "bg-amber-500/20 text-amber-200 border border-amber-400/50 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeStage === 3 ? "bg-amber-500/30 text-amber-300" : "bg-slate-800 text-slate-500"}`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-500">03. SYNTHESIZE</span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">MANY CONTENTS</span>
                  </div>
                </div>

                <div className="hidden md:flex text-slate-600 font-mono text-xs">➔</div>

                {/* Stage 4 */}
                <div
                  onClick={() => setActiveStage(4)}
                  className={`flex-1 w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                    activeStage === 4
                      ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/50 shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeStage === 4 ? "bg-emerald-500/30 text-emerald-300" : "bg-slate-800 text-slate-500"}`}>
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-500">04. DISPATCH</span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block">MANY CHANNELS</span>
                  </div>
                </div>

              </div>

              {/* Dynamic Laser Progress Line Under Conduit */}
              <div className="mt-3 w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-500 ease-out shadow-sm"
                  style={{ width: `${(activeStage / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* 2.2 THE INGESTION & TRIGGER BAR */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  SINGLE SOURCE INGESTION (단일 원천 주입)
                </span>

                {/* Source Selection Buttons */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                  {(["video", "article", "podcast"] as const).map((type) => {
                    const preset = sourcePresets[type];
                    const Icon = preset.icon;
                    const isSelected = selectedSourceType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSelectedSourceType(type);
                          setSourceUrl(preset.url);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 capitalize ${
                          isSelected
                            ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{type}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* URL Input & Execute Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-mono text-xs sm:text-sm focus:outline-hidden focus:border-sky-500 transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 hidden md:inline">
                    {sourcePresets[selectedSourceType].format}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={executePipeline}
                  disabled={isProcessing}
                  className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-[0.98] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>자율 변환 연산 중...</span>
                    </>
                  ) : (
                    <>
                      <span>Execute Automation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <span className="text-slate-500">선택된 입력 원천:</span>
                <span className="text-white font-semibold">{sourcePresets[selectedSourceType].title}</span>
              </div>
            </div>

            {/* 2.3 REAL-TIME TELEMETRY & MULTI-MANIFESTATION DISPLAY */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800/80 pt-6">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  SYNTHESIZED MULTI-CHANNEL OUTPUTS
                </span>

                {/* Output Tabs */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                  {(["shorts", "article", "social"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveOutputTab(tab)}
                      className={`px-4 py-1.5 rounded-lg transition-colors capitalize ${
                        activeOutputTab === tab ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Preview Box */}
              <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {outputsData[activeOutputTab].title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Destination Rails: {outputsData[activeOutputTab].channel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-sky-300">
                      {outputsData[activeOutputTab].formatBadge}
                    </span>

                    <button
                      onClick={handleCopy}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors flex items-center gap-1.5"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "복사됨" : "복사"}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line max-h-56 overflow-y-auto">
                  {outputsData[activeOutputTab].content}
                </div>

                {/* Queue Publishing Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Multi-Channel Publishing Queue: 3개 배포 채널 대기열 준비 완료</span>
                  </div>

                  <button
                    onClick={handleDispatchQueue}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700 active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span>{queueDispatched ? "다채널 릴리즈 전송 완료!" : "Publishing Queue 일괄 발송"}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
