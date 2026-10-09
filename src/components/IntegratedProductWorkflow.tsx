"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  ArrowRight,
  FileInput,
  Brain,
  RefreshCw,
  SendHorizontal,
  Layers,
  Cpu,
  CheckCircle2,
  Terminal,
  Loader2,
  Copy,
  Check,
  Send,
  Video,
  FileText,
  Mic,
} from "lucide-react";

export default function IntegratedProductWorkflow() {
  // 1. Pipeline Active Step
  const [activeStep, setActiveStep] = useState(0);

  // 2. Interactive Console State
  const [selectedSourceType, setSelectedSourceType] = useState<"video" | "article" | "podcast">("video");
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=agent-architecture-deepdive");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProcessPhase, setCurrentProcessPhase] = useState<"idle" | "analyzing" | "extracting" | "reasoning" | "generating">("idle");
  const [activeOutputTab, setActiveOutputTab] = useState<"shorts" | "article" | "social">("shorts");
  const [copied, setCopied] = useState(false);
  const [queueDispatched, setQueueDispatched] = useState(false);

  // Auto-pulse demonstration if idle
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(() => {
      if (!isProcessing) {
        setActiveStep((prev) => (prev + 1) % 4);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isProcessing]);

  // Pipeline Steps (01 Capture -> 02 Understand -> 03 Transform -> 04 Distribute)
  const pipelineSteps = [
    {
      number: "01",
      badge: "INPUT",
      title: "ONE SOURCE",
      desc: "Video, Article, Podcast",
      visualText: "단일 원천 주입",
      icon: FileInput,
      gradient: "from-sky-500/20 to-blue-500/10",
      accent: "text-sky-400",
      border: "border-sky-500/40",
    },
    {
      number: "02",
      badge: "ENGINE",
      title: "CLAUDE REASONING",
      desc: "Context & Intent Anchoring",
      visualText: "서사·지식 그래프 추출",
      icon: Brain,
      gradient: "from-indigo-500/25 to-purple-500/10",
      accent: "text-indigo-400",
      border: "border-indigo-500/40",
    },
    {
      number: "03",
      badge: "SYNTHESIS",
      title: "MANY CONTENTS",
      desc: "Shorts, Article, Social Thread",
      visualText: "포맷별 자율 합성",
      icon: RefreshCw,
      gradient: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      border: "border-amber-500/40",
    },
    {
      number: "04",
      badge: "RAILS",
      title: "MANY CHANNELS",
      desc: "YouTube, Blog, X, Newsletter",
      visualText: "다채널 동시 배포",
      icon: SendHorizontal,
      gradient: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/40",
    },
  ];

  const sourcePresets = {
    video: {
      url: "https://youtube.com/watch?v=agent-architecture-deepdive",
      title: "AI 에이전트 아키텍처 특강 (48분 원본 영상)",
      format: "4K Video Stream",
      icon: Video,
    },
    article: {
      url: "https://arxiv.org/html/autonomous-content-orchestration",
      title: "대규모 언어 모델 기반 지식 오케스트레이션 논문",
      format: "Technical Paper (Markdown)",
      icon: FileText,
    },
    podcast: {
      url: "https://podcasts.apple.com/tech-talks/ep-84-knca",
      title: "실리콘밸리 파운더 인터뷰 (오디오 녹취 32분)",
      format: "Lossless Audio Transcript",
      icon: Mic,
    },
  };

  const outputsData = {
    shorts: {
      title: "Shorts Video Script (0-60s Timeline)",
      channel: "YouTube Shorts · Instagram Reels · TikTok",
      formatBadge: "0-60초 분초 단위 훅 대본",
      content: `[00:00 - 00:08] [Hook: 화면 분절 그래픽 + 텍스트 팝업]
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
      formatBadge: "마크다운 심층 기술 칼럼",
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
      formatBadge: "소셜 바이럴 스레드 (3줄 불릿)",
      content: `🧵 콘텐츠 파편화 시대, 크리에이터와 기업이 생존하는 단 하나의 아키텍처:

1/ 콘텐츠 생산의 70%는 '새로운 글 쓰기'가 아니라 '기존 글 쪼개기'에 낭비되고 있습니다.

2/ 하나의 롱폼 영상을 만들고 인스타, 블로그, 뉴스레터를 따로 쓰는 수작업을 멈추세요.

3/ 단 1회 투입(Build Once)으로 5개 채널 자율 배포(Automate More).
#AIContentAutomation #KNCA #Productivity`,
    },
  };

  const simulatePipeline = () => {
    setIsProcessing(true);
    setActiveStep(0);
    setCurrentProcessPhase("analyzing");

    setTimeout(() => {
      setActiveStep(1);
      setCurrentProcessPhase("extracting");
    }, 800);

    setTimeout(() => {
      setActiveStep(2);
      setCurrentProcessPhase("reasoning");
    }, 1600);

    setTimeout(() => {
      setActiveStep(3);
      setCurrentProcessPhase("generating");
    }, 2400);

    setTimeout(() => {
      setIsProcessing(false);
      setCurrentProcessPhase("idle");
    }, 3200);
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
    <section id="system-workflow" className="py-24 sm:py-36 bg-[#080d1a] relative border-t border-sky-950/60 overflow-hidden">
      {/* Background High-Tech Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-sky-500/15 blur-[170px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* 1. SECTION VISION HEADER: 개념을 설명하지 않고 '시각적 경험'으로 초대 */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold tracking-wider shadow-lg shadow-sky-950/40">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>INTERACTIVE RUNTIME EXPERIENCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]">
            One Source. <br />
            <span className="text-gradient">Infinite Manifestations.</span>
          </h2>

          {/* Visual Brand Equation Spine */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 rounded-2xl bg-slate-950/90 border border-sky-500/30 text-xs sm:text-sm font-mono shadow-2xl">
              <span className="text-sky-300 font-bold">ONE SOURCE</span>
              <span className="text-slate-600">→</span>
              <span className="text-indigo-300 font-bold">AI REASONING</span>
              <span className="text-slate-600">→</span>
              <span className="text-amber-300 font-bold">MANY CONTENTS</span>
              <span className="text-slate-600">→</span>
              <span className="text-emerald-300 font-bold">MANY CHANNELS</span>
            </div>
          </div>
        </div>

        {/* 2. LIVE HIGH-IMPACT PIPELINE VISUALIZATION (4 Stages with Dynamic Laser Conduit) */}
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous Laser Conduit Beam (Desktop) */}
          <div className="hidden lg:block absolute top-[74px] left-[8%] right-[8%] h-[3px] bg-slate-800/90 -z-0 pointer-events-none rounded-full">
            <div
              className="h-full bg-gradient-to-r from-transparent via-sky-400 to-indigo-400 shadow-lg shadow-sky-400/50 transition-all duration-700 ease-out rounded-full"
              style={{
                width: "25%",
                marginLeft: `${activeStep * 25}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === pipelineSteps.length - 1;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative group flex flex-col cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`h-full rounded-2xl border p-6 transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                      isActive
                        ? `bg-slate-900/95 ${step.border} shadow-2xl shadow-sky-500/20 ring-2 ring-sky-400/30 scale-[1.03]`
                        : isPast
                        ? "bg-slate-900/70 border-slate-700/80"
                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                            isActive
                              ? `bg-slate-900 ${step.border} ${step.accent} shadow-lg scale-105`
                              : isPast
                              ? "bg-slate-800 border-slate-700 text-sky-400"
                              : "bg-slate-900 border-slate-800 text-slate-500"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full font-bold tracking-wider ${
                            isActive
                              ? "bg-sky-500/20 text-sky-300 border-sky-400/50"
                              : "bg-slate-950 text-slate-400 border-slate-800"
                          }`}
                        >
                          {step.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 block">
                          STAGE 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-black text-white tracking-tight flex items-center justify-between">
                          <span>{step.title}</span>
                          {isActive && (
                            <span className="text-[9px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-semibold animate-pulse">
                              ACTIVE
                            </span>
                          )}
                        </h3>
                        <p className={`text-xs font-semibold ${step.accent}`}>
                          {step.desc}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/60 text-[11px] font-mono text-slate-300">
                        {step.visualText}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? `${step.accent} font-semibold` : "text-slate-500"}>
                        {isActive ? "Conduit Flowing" : isPast ? "Passed" : "Standby"}
                      </span>
                      {!isLast ? (
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-sky-400 translate-x-1 transition-transform" : "text-slate-600"}`} />
                      ) : (
                        <span className="text-emerald-400 font-semibold text-[11px]">Multi-Rail</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. THE LIVE SYSTEM CONSOLE: 방문자가 직접 버튼을 누르고 경험하는 터미널 */}
        <div className="rounded-3xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md max-w-6xl mx-auto">
          {/* Top Window Chrome Bar */}
          <div className="bg-slate-900/95 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                knca-live-orchestrator.engine // visual-automation-simulation
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Claude API Active
              </span>
              <span className="border-l border-slate-800 pl-3 hidden sm:inline">
                Build Once. Automate More.
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 3.1 Step 1: Input Source Selector */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  01. INGESTION CHAMBER (원천 데이터 투입)
                </span>
                
                {/* 3 Source Type Quick Presets */}
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
                        className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 capitalize ${
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

              {/* Source Input URL Bar & Trigger Button */}
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
                  onClick={simulatePipeline}
                  disabled={isProcessing}
                  className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.98] disabled:opacity-50"
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
                <span className="text-slate-500">선택된 소스:</span>
                <span className="text-white font-semibold">{sourcePresets[selectedSourceType].title}</span>
              </div>
            </div>

            {/* 3.2 Step 2: Live Processing Telemetry Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-300 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  02. CLAUDE ORCHESTRATION PIPELINE
                </span>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  0.00% Context Loss
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 font-mono text-xs">
                {[
                  { phase: "analyzing", step: "01", label: "Ingest & Parse", detail: "음성/텍스트 트랙 분해" },
                  { phase: "extracting", step: "02", label: "Knowledge Graph", detail: "핵심 주장·팩트 앵커링" },
                  { phase: "reasoning", step: "03", label: "Audience Intent", detail: "채널별 독자 페르소나" },
                  { phase: "generating", step: "04", label: "Multi-Synthesis", detail: "다포맷 동시 집필 완료" },
                ].map((item, idx) => {
                  const isCurrent = currentProcessPhase === item.phase || (isProcessing && activeStep === idx);
                  return (
                    <div
                      key={item.phase}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isCurrent
                          ? "bg-sky-500/20 border-sky-400 text-sky-200 ring-2 ring-sky-500/30 font-bold scale-[1.02]"
                          : "bg-slate-950/70 border-slate-800 text-slate-400"
                      }`}
                    >
                      <span className="block text-[9px] text-slate-500 font-mono">STAGE {item.step}</span>
                      <span className="block font-bold text-white mt-0.5">{item.label}</span>
                      <span className="block text-[10px] text-slate-400 mt-1 font-sans">{item.detail}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3.3 Step 3: Many Outputs & Release Rails */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  03. SYNTHESIZED ARTIFACTS &amp; DISTRIBUTION RAILS
                </span>

                {/* Output Tab Switcher */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                  {(["shorts", "article", "social"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveOutputTab(tab)}
                      className={`px-3.5 py-1.5 rounded-lg transition-colors capitalize ${
                        activeOutputTab === tab ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Preview Display */}
              <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
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

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line max-h-52 overflow-y-auto">
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
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700 active:scale-[0.99]"
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
