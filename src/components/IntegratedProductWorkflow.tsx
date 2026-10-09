"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export default function IntegratedProductWorkflow() {
  // 1. Pipeline Active Step
  const [activeStep, setActiveStep] = useState(0);

  // 2. Interactive Console State
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=agent-architecture-deepdive");
  const [selectedSourceType, setSelectedSourceType] = useState<"video" | "article" | "podcast">("video");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProcessPhase, setCurrentProcessPhase] = useState<"idle" | "analyzing" | "extracting" | "reasoning" | "generating">("idle");
  const [activeOutputTab, setActiveOutputTab] = useState<"shorts" | "article" | "social">("shorts");
  const [copied, setCopied] = useState(false);
  const [queueDispatched, setQueueDispatched] = useState(false);

  // Pipeline Steps (01 Capture -> 02 Understand -> 03 Transform -> 04 Distribute)
  const pipelineSteps = [
    {
      number: "01",
      badge: "INGESTION",
      title: "CAPTURE",
      desc: "Bring your source into the workflow.",
      detail: "YouTube 영상 링크, 리서치 문서, 팟캐스트 녹취본 등 어떤 원천 데이터든 단일 진입점으로 주입합니다.",
      icon: FileInput,
    },
    {
      number: "02",
      badge: "ANALYSIS",
      title: "UNDERSTAND",
      desc: "AI analyzes context, structure and intent.",
      detail: "Claude 지능 코어가 원본의 핵심 서사 맥락, 도메인 지식, 타깃 오디언스 의도를 누락 없이 정밀 추론합니다.",
      icon: Brain,
    },
    {
      number: "03",
      badge: "SYNTHESIS",
      title: "TRANSFORM",
      desc: "Generate content adapted to each format.",
      detail: "심층 칼럼, 숏폼 스크립트, 소셜 스레드, 뉴스레터 등 각 포맷의 고유 문법에 맞게 자율 변환 및 생성합니다.",
      icon: RefreshCw,
    },
    {
      number: "04",
      badge: "DELIVERY",
      title: "DISTRIBUTE",
      desc: "Move content toward multiple channels.",
      detail: "블로그 CMS, 인스타그램, 틱톡, 뉴스레터 등 준비된 다채널 배포 레일로 즉시 전달 및 동시 발행합니다.",
      icon: SendHorizontal,
    },
  ];

  const outputsData = {
    shorts: {
      title: "Shorts Video Script (0-60s Timeline)",
      channel: "YouTube Shorts · Instagram Reels · TikTok",
      content: `[00:00 - 00:08] [Hook: 화면 분절 애니메이션]
"왜 100개의 테크 기업들이 단순 AI 글쓰기 대신 '콘텐츠 워크플로우'를 구축할까요?"

[00:09 - 00:32] [Body: KNCA 단일 소스 처리 다이어그램]
"핵심은 '다시 쓰는 것'이 아니라 '맥락의 무손실 추출'입니다. 
영상 1편을 업로드하면 Claude AI가 훅, 본문 요약, 채널별 문법을 스스로 분해합니다."

[00:33 - 00:60] [CTA: Build Once. Automate More.]
"더 이상 수작업 복제 노동에 갇히지 마세요.
지금 KNCA Closed Beta에서 자율 파이프라인을 경험해 보세요."`,
    },
    article: {
      title: "Technical Deep Dive Article",
      channel: "자사 테크 블로그 · Medium · Velog",
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
      content: `🧵 콘텐츠 파편화 시대, 크리에이터와 기업이 생존하는 단 하나의 아키텍처:

1/ 콘텐츠 생산의 70%는 '새로운 글 쓰기'가 아니라 '기존 글 쪼개기'에 낭비되고 있습니다.

2/ 하나의 롱폼 영상을 만들고 인스타, 블로그, 뉴스레터를 따로 쓰는 수작업을 멈추세요.

3/ 단 1회 투입(Build Once)으로 5개 채널 자율 배포(Automate More).
#AIContentAutomation #KNCA #Productivity`,
    },
  };

  const simulatePipeline = () => {
    setIsProcessing(true);
    setCurrentProcessPhase("analyzing");

    setTimeout(() => setCurrentProcessPhase("extracting"), 800);
    setTimeout(() => setCurrentProcessPhase("reasoning"), 1600);
    setTimeout(() => setCurrentProcessPhase("generating"), 2400);
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
      {/* Background Pipeline Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
        
        {/* 1. SECTION HEADLINE */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold tracking-wider shadow-lg shadow-sky-950/40">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>CORE PIPELINE &amp; INTERACTIVE CONSOLE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]">
            The Connected <span className="text-gradient">Workflow Engine</span>
          </h2>

          <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            원천 데이터 주입부터 다채널 자율 배포까지 — <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">하나의 연결된 파이프라인</strong>으로 실시간 동작합니다.
          </p>
        </div>

        {/* 2. 4 CONNECTED PIPELINE STAGES (Horizontal Rail) */}
        <div className="relative">
          {/* Continuous Laser Conduit Beam (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[6%] right-[6%] h-[3px] bg-slate-800/90 -z-0 pointer-events-none rounded-full">
            <div
              className="h-full bg-gradient-to-r from-transparent via-sky-400 to-indigo-400 shadow-lg shadow-sky-400/50 transition-all duration-700 ease-out rounded-full"
              style={{
                width: "25%",
                marginLeft: `${activeStep * 25}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === pipelineSteps.length - 1;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative group flex flex-col cursor-pointer"
                >
                  <div
                    className={`h-full rounded-2xl border p-6 transition-all duration-500 backdrop-blur-md flex flex-col justify-between ${
                      isActive
                        ? "bg-slate-900/95 border-sky-400/80 shadow-2xl shadow-sky-500/20 ring-1 ring-sky-400/40 scale-[1.02]"
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
                              ? "bg-sky-500/20 border-sky-400 text-sky-300 shadow-lg shadow-sky-500/30"
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
                        <span className="text-[10px] font-mono font-bold tracking-wider text-sky-400/80 block">
                          STAGE {step.number}
                        </span>
                        <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center justify-between">
                          <span>{step.title}</span>
                          {isActive && (
                            <span className="text-[9px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-semibold">
                              LIVE
                            </span>
                          )}
                        </h3>
                        <p className="text-xs font-semibold text-sky-200">
                          {step.desc}
                        </p>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {step.detail}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className={isActive ? "text-sky-300 font-semibold" : "text-slate-500"}>
                        {isActive ? "Active Node" : isPast ? "Passed" : "Standby"}
                      </span>
                      {!isLast ? (
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-sky-400 translate-x-1 transition-transform" : "text-slate-600"}`} />
                      ) : (
                        <span className="text-emerald-400 font-semibold text-[11px]">Multi-Out</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. INTERACTIVE PRODUCT SIMULATION CONSOLE */}
        <div className="rounded-3xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md max-w-6xl mx-auto">
          {/* Top Window Chrome */}
          <div className="bg-slate-900/95 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                knca-pipeline-runtime.terminal // interactive-system-preview
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Claude API Connected
              </span>
              <span className="border-l border-slate-800 pl-3 hidden sm:inline">
                Build Once. Automate More.
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* 3.1 Input Row */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  01. SOURCE INGESTION (SINGLE SOURCE INPUT)
                </span>
                
                {/* Source format switcher */}
                <div className="flex items-center gap-1.5">
                  {(["video", "article", "podcast"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setSelectedSourceType(type);
                        if (type === "video") setSourceUrl("https://youtube.com/watch?v=agent-architecture-deepdive");
                        if (type === "article") setSourceUrl("https://arxiv.org/html/autonomous-content-orchestration");
                        if (type === "podcast") setSourceUrl("https://podcasts.apple.com/tech-talks/ep-84-knca");
                      }}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono uppercase transition-colors ${
                        selectedSourceType === type
                          ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-mono text-xs sm:text-sm focus:outline-hidden focus:border-sky-500 transition-colors"
                />

                <button
                  type="button"
                  onClick={simulatePipeline}
                  disabled={isProcessing}
                  className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.98] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>연산 진행 중...</span>
                    </>
                  ) : (
                    <>
                      <span>Run Pipeline</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 3.2 Live Processing Status */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-300 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  02. REAL-TIME AI PROCESSING
                </span>
                <span className="text-slate-400 text-[11px]">Claude 3.5 Sonnet Engine</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                {[
                  { phase: "analyzing", label: "Analyzing Source" },
                  { phase: "extracting", label: "Extracting Graph" },
                  { phase: "reasoning", label: "Reasoning Intent" },
                  { phase: "generating", label: "Synthesizing All" },
                ].map((item, idx) => {
                  const isCurrent = currentProcessPhase === item.phase || (isProcessing && idx === 0);
                  return (
                    <div
                      key={item.phase}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        isCurrent
                          ? "bg-sky-500/20 border-sky-400 text-sky-200 ring-1 ring-sky-500/30 font-bold"
                          : "bg-slate-950/70 border-slate-800 text-slate-400"
                      }`}
                    >
                      <span className="block text-[9px] text-slate-500">STAGE 0{idx + 1}</span>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3.3 Output & Multi-Channel Queue */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  03. SYNTHESIZED OUTPUTS &amp; MULTI-CHANNEL QUEUE
                </span>

                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                  {(["shorts", "article", "social"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveOutputTab(tab)}
                      className={`px-3 py-1.5 rounded-lg transition-colors capitalize ${
                        activeOutputTab === tab ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Preview Box */}
              <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {outputsData[activeOutputTab].title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Target Rails: {outputsData[activeOutputTab].channel}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "복사됨" : "복사"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
                  {outputsData[activeOutputTab].content}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Publishing Queue: 다채널 발송 대기 중</span>
                  </div>

                  <button
                    onClick={handleDispatchQueue}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700"
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
