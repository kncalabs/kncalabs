"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Terminal,
  Loader2,
  Copy,
  Check,
  Send,
  Video,
  FileText,
  Mic,
  Cpu,
} from "lucide-react";

export default function MonumentalEngine() {
  const [selectedSourceType, setSelectedSourceType] = useState<"video" | "article" | "podcast">("video");
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=agent-architecture-deepdive");
  const [isProcessing, setIsProcessing] = useState(false);
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
    setTimeout(() => {
      setIsProcessing(false);
    }, 2800);
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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow min-h-screen flex flex-col items-center justify-center border-b border-sky-950/60"
    >
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.035)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 sm:space-y-12 relative z-10">
        
        {/* MONUMENTAL HEADLINE (7rem) */}
        <div className="text-center max-w-5xl mx-auto space-y-5">
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

          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            단 하나의 원천(Source)이 AI 지능을 통과하여 수십 개의 콘텐츠로 자율 분기합니다.
          </p>
        </div>

        {/* THE INTEGRATED RUNTIME TERMINAL: 단일 워크플로우 콘솔 (설명문/카드 나열 제로) */}
        <div className="rounded-3xl bg-slate-950/95 border border-sky-500/40 shadow-2xl shadow-sky-950/50 backdrop-blur-xl overflow-hidden">
          
          {/* Top Engine Chrome Header */}
          <div className="bg-slate-900/95 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                knca-orchestrator.runtime // live-system
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Claude API Connected
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Input Row: Source Selector & URL */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  01. SOURCE INGESTION
                </span>

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
                  className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-[0.98] disabled:opacity-50 shrink-0"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>파이프라인 연산 중...</span>
                    </>
                  ) : (
                    <>
                      <span>Run Workflow</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 mr-2">Input:</span>
                  <span className="text-white font-medium">{sourcePresets[selectedSourceType].title}</span>
                </div>
                {isProcessing && (
                  <span className="text-sky-400 font-semibold flex items-center gap-1.5 animate-pulse">
                    <Cpu className="w-3.5 h-3.5" />
                    Claude 3.5 Sonnet Synthesizing...
                  </span>
                )}
              </div>
            </div>

            {/* Synthesized Output Screen (No repetitive micro-cards) */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  02. AUTONOMOUS OUTPUTS
                </span>

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

              <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {outputsData[activeOutputTab].title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Destination: {outputsData[activeOutputTab].channel}
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

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-slate-400">
                    Publishing Queue: 3개 배포 채널 준비 완료
                  </span>

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
