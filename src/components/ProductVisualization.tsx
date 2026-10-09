"use client";

import React, { useState } from "react";
import {
  Link2,
  Cpu,
  Video,
  FileText,
  Share2,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Loader2,
  Terminal,
  Layers,
  ArrowRight
} from "lucide-react";

export default function ProductVisualization() {
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=agent-architecture-deepdive");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProcessPhase, setCurrentProcessPhase] = useState<"idle" | "analyzing" | "extracting" | "reasoning" | "generating">("idle");
  const [activeOutputTab, setActiveOutputTab] = useState<"shorts" | "article" | "social">("shorts");
  const [copied, setCopied] = useState(false);
  const [queueDispatched, setQueueDispatched] = useState(false);

  const simulatePipeline = () => {
    setIsProcessing(true);
    setCurrentProcessPhase("analyzing");
    
    setTimeout(() => {
      setCurrentProcessPhase("extracting");
    }, 900);

    setTimeout(() => {
      setCurrentProcessPhase("reasoning");
    }, 1800);

    setTimeout(() => {
      setCurrentProcessPhase("generating");
    }, 2700);

    setTimeout(() => {
      setIsProcessing(false);
      setCurrentProcessPhase("idle");
    }, 3600);
  };

  const outputs = {
    shorts: {
      title: "Shorts Video Script (0-60s Timeline)",
      channel: "YouTube Shorts · Instagram Reels · TikTok",
      format: "SCENE BY SCENE SCRIPT",
      timeEstimate: "생성 시간: 1.2초",
      content: `[00:00 - 00:08] [Hook: 화면 분절 애니메이션]
"왜 100개의 테크 기업들이 단순 AI 글쓰기 대신 '콘텐츠 워크플로우'를 구축할까요?"

[00:09 - 00:32] [Body: KNCA 단일 소스 처리 다이어그램]
"핵심은 '다시 쓰는 것'이 아니라 '맥락의 무손실 추출'입니다. 
영상 1편을 업로드하면 Claude AI가 훅, 본문 요약, 채널별 문법을 스스로 분해합니다."

[00:33 - 00:60] [CTA: Build Once. Automate More.]
"더 이상 수작업 복제 노동에 갇히지 마세요.
지금 KNCA Closed Beta에서 자율 파이프라인을 경험해 보세요."`
    },
    article: {
      title: "Technical Deep Dive Article",
      channel: "자사 테크 블로그 · Medium · Velog",
      format: "LONG-FORM MARKDOWN",
      timeEstimate: "생성 시간: 2.1초",
      content: `# 엔터프라이즈 AI 콘텐츠 인프라의 핵심: 단일 원천에서 자율 다채널 배포까지

콘텐츠 생산에서 발생하는 가장 심각한 병목은 '아이디어의 부재'가 아닙니다.
완성된 1개의 원천을 수많은 채널 규격에 맞춰 다시 쓰고 줄이는 '수작업 포맷 재편집'의 마찰입니다.

### 1. 지능형 컨텍스트 앵커링 (Context Anchoring)
Claude 3.5 Sonnet 기반 오케스트레이션 엔진은 원본 영상/문서의 서사 뼈대를 지식 그래프로 추출합니다.

### 2. 결정론적 품질 가드레일 (Quality Guardrails)
단순 요약이 아닌, 채널별 독자 페르소나와 플랫폼 소비 호흡에 맞춘 자율 톤앤매너 재구성을 보장합니다.`
    },
    social: {
      title: "Viral Insight Micro Thread",
      channel: "X (트위터) · Threads · LinkedIn",
      format: "SOCIAL THREAD",
      timeEstimate: "생성 시간: 0.9초",
      content: `🧵 콘텐츠 파편화 시대, 크리에이터와 기업이 생존하는 단 하나의 아키텍처:

1/ 콘텐츠 생산의 70%는 '새로운 글 쓰기'가 아니라 '기존 글 쪼개기'에 낭비되고 있습니다.

2/ 하나의 롱폼 영상을 만들고 인스타, 블로그, 뉴스레터를 따로 쓰는 수작업을 멈추세요.

3/ 단 1회 투입(Build Once)으로 5개 채널 자율 배포(Automate More).
#AIContentAutomation #KNCA #Productivity`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputs[activeOutputTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDispatchQueue = () => {
    setQueueDispatched(true);
    setTimeout(() => setQueueDispatched(false), 3000);
  };

  return (
    <section id="product-visualization" className="py-24 sm:py-36 bg-[#080c14] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Subtle Tech Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-sky-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>INTERACTIVE SYSTEM INTERFACE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Product Visualization
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            원천 URL 주입부터 AI 추론 및 다채널 배포 대기열까지 — 실제 작동 시스템 인터페이스
          </p>
        </div>

        {/* Clear Mandatory Honesty Badges: Concept & Prototype Clarification */}
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono backdrop-blur-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-400">STATUS SPECIFICATION:</span>
            <span className="font-semibold text-white">
              Interactive Architectural Prototype / System Concept
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold text-[11px]">
              Prototype Mode
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 font-semibold text-[11px]">
              System Concept Preview
            </span>
          </div>
        </div>

        {/* The Live Interactive System Simulation Console */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Top Window Chrome Bar */}
          <div className="bg-slate-900/95 px-5 py-3.5 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                knca-system-console.run // live-prototype-preview
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Claude API Connected
              </span>
              <span className="border-l border-slate-800 pl-3 hidden sm:inline">
                Engine: Claude 3.5 Sonnet
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 1. SOURCE: YouTube URL Input Field */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Link2 className="w-4 h-4 text-sky-400" />
                  01. SOURCE INGESTION (YouTube URL)
                </span>
                <span className="text-[11px] font-mono text-slate-400">Single Source Input</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <button
                  type="button"
                  onClick={simulatePipeline}
                  disabled={isProcessing}
                  className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.98] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>파이프라인 연산 중...</span>
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

            {/* 2. PROCESSING: Live System State Indicator Bar */}
            <div className="space-y-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  02. REAL-TIME PROCESSING ENGINE
                </span>
                <span className="text-[11px] font-mono text-slate-400">Orchestration Phase</span>
              </div>

              {/* 4 Real-time Processing Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                  currentProcessPhase === "analyzing" || isProcessing
                    ? "bg-indigo-500/20 border-indigo-400 text-indigo-200 ring-1 ring-indigo-500/30 font-bold"
                    : "bg-slate-950/70 border-slate-800 text-slate-400"
                }`}>
                  <span className="block text-[10px] text-slate-500">STAGE 1</span>
                  <span>Analyzing…</span>
                </div>

                <div className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                  currentProcessPhase === "extracting"
                    ? "bg-indigo-500/20 border-indigo-400 text-indigo-200 ring-1 ring-indigo-500/30 font-bold"
                    : "bg-slate-950/70 border-slate-800 text-slate-400"
                }`}>
                  <span className="block text-[10px] text-slate-500">STAGE 2</span>
                  <span>Extracting…</span>
                </div>

                <div className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                  currentProcessPhase === "reasoning"
                    ? "bg-indigo-500/20 border-indigo-400 text-indigo-200 ring-1 ring-indigo-500/30 font-bold"
                    : "bg-slate-950/70 border-slate-800 text-slate-400"
                }`}>
                  <span className="block text-[10px] text-slate-500">STAGE 3</span>
                  <span>Reasoning…</span>
                </div>

                <div className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                  currentProcessPhase === "generating"
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 ring-1 ring-emerald-500/30 font-bold"
                    : "bg-slate-950/70 border-slate-800 text-slate-400"
                }`}>
                  <span className="block text-[10px] text-slate-500">STAGE 4</span>
                  <span>Generating…</span>
                </div>
              </div>

              {/* Status Message */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>엔진 로그:</span>
                  <strong className="text-white">
                    {currentProcessPhase === "idle" && "대기 중 — Run Pipeline 버튼을 누르면 연산이 시작됩니다."}
                    {currentProcessPhase === "analyzing" && "YouTube 오디오 트랙 및 캡션 파싱 중..."}
                    {currentProcessPhase === "extracting" && "핵심 주장, 팩트 데이터, 서사 앵커 포인트 추출 중..."}
                    {currentProcessPhase === "reasoning" && "플랫폼별 오디언스 소비 페르소나 및 톤앤매너 추론 중..."}
                    {currentProcessPhase === "generating" && "숏폼 스크립트, 아티클, 소셜 스레드 동시 합성 완료!"}
                  </strong>
                </span>
                <span className="text-emerald-400 font-semibold hidden md:inline">0.00% Payload Loss</span>
              </div>
            </div>

            {/* 3. OUTPUT & PUBLISHING QUEUE */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  03. SYNTHESIZED OUTPUTS & PUBLISHING QUEUE
                </span>

                {/* Output Tab Switcher */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveOutputTab("shorts")}
                    className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeOutputTab === "shorts" ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Shorts</span>
                  </button>

                  <button
                    onClick={() => setActiveOutputTab("article")}
                    className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeOutputTab === "article" ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Article</span>
                  </button>

                  <button
                    onClick={() => setActiveOutputTab("social")}
                    className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeOutputTab === "social" ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Social</span>
                  </button>
                </div>
              </div>

              {/* Output Content Card */}
              <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {outputs[activeOutputTab].title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      Target Rails: {outputs[activeOutputTab].channel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {outputs[activeOutputTab].timeEstimate}
                    </span>

                    <button
                      onClick={handleCopy}
                      className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors flex items-center gap-1.5"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "복사됨" : "복사"}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">
                  {outputs[activeOutputTab].content}
                </div>

                {/* Publishing Queue Action Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Publishing Queue: 3개 배포 채널 준비 완료</span>
                  </div>

                  <button
                    onClick={handleDispatchQueue}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700"
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
