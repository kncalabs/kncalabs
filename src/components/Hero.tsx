"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  CheckCircle2,
  Layers,
  Cpu,
  Share2,
  FileText,
  Workflow,
  Terminal,
  Activity,
  Check,
  Copy,
} from "lucide-react";

export default function Hero() {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"visual" | "pipeline">("visual");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopy = () => {
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      aria-label="KNCA Labs Introduction & AI Automation Architecture"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-radial-glow min-h-[92vh] flex items-center justify-center"
    >
      {/* Precision Ambient Grid & Constellation Effect */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-35"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.16" />
              <stop offset="45%" stopColor="#818cf8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
            </linearGradient>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="rgba(255, 255, 255, 0.035)"
                strokeWidth="1"
              />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />

          {/* Subtly Animated Vector Flow Paths */}
          <g className="animate-pulse duration-1000">
            <path
              d="M -100 160 Q 420 40 1280 260"
              fill="none"
              stroke="url(#hero-grid-grad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <path
              d="M -60 380 Q 520 180 1380 460"
              fill="none"
              stroke="url(#hero-grid-grad)"
              strokeWidth="1.5"
              strokeDasharray="8 10"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Top Status & Integrity Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 -ml-3.5" />
              <span>Next-Gen Content Automation Platform</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Early Stage Product in Active Development</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-white leading-[1.08]">
            Build Once. <br className="hidden sm:inline" />
            <span className="text-gradient">Automate More.</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            KNCA is an AI-powered content automation platform engineered to transform a single source
            into structured, multi-channel assets with precision context reasoning and end-to-end workflow control.
          </p>

          {/* Positioning Statement Bar */}
          <div className="pt-0.5">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs sm:text-sm text-slate-300 font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
              <span>Built for creators, publishers, and teams who want to automate repetitive content workflows.</span>
            </div>
          </div>

          {/* Technical Foundation Points */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Single Source Transformation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Claude API Powered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Multi-Channel Output Engine
            </span>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-base shadow-xl shadow-sky-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <span>Explore KNCA</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all"
            >
              <span>How It Works</span>
            </Link>
          </div>
        </div>

        {/* High-End AI Workflow Architecture Visualization */}
        <div className="mt-14 sm:mt-16 relative max-w-5xl mx-auto rounded-2xl glass-panel p-2 sm:p-3 md:p-4 shadow-2xl border border-slate-800/90">
          <div className="bg-[#080c14] rounded-xl overflow-hidden border border-slate-800/90 flex flex-col">
            
            {/* Top Command Bar & Interactive View Switcher */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  knca-content-automation.internal (개발 중 아키텍처 프리뷰)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-lg bg-slate-950 p-0.5 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveWorkflowTab("visual")}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 ${
                      activeWorkflowTab === "visual"
                        ? "bg-slate-800 text-sky-300 font-semibold shadow-xs"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Workflow className="w-3 h-3" />
                    <span>Workflow Nodes</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveWorkflowTab("pipeline")}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 ${
                      activeWorkflowTab === "pipeline"
                        ? "bg-slate-800 text-sky-300 font-semibold shadow-xs"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Pipeline Specs</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono pl-2 border-l border-slate-800">
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Engine: Claude API</span>
                </div>
              </div>
            </div>

            {/* TAB 1: VISUAL MULTI-STAGE AUTOMATION PIPELINE */}
            {activeWorkflowTab === "visual" && (
              <div className="p-5 sm:p-6 md:p-8 space-y-6">
                
                {/* 4-Stage Horizontal Grid Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  
                  {/* Step 1: Ingestion */}
                  <div className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-sky-500/40 p-4 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                        Stage 01
                      </span>
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Single Source Ingestion</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        아티클, 리포트, 인터뷰 등 단일 원천 데이터를 수집 및 세만틱 인덱싱
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Status</span>
                      <span className="text-emerald-400">Ready</span>
                    </div>
                  </div>

                  {/* Step 2: Reasoning Engine */}
                  <div className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 p-4 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                        Stage 02
                      </span>
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Claude Context Reasoning</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        핵심 의미와 내러티브를 분석하고 컨텍스트를 정밀 유지
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Engine</span>
                      <span className="text-indigo-300 font-semibold">Claude API</span>
                    </div>
                  </div>

                  {/* Step 3: Synthesis & Verification */}
                  <div className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 p-4 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                        Stage 03
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Format Adaptation</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        블로그, 뉴스레터, 요약본 등 매체별 규격에 맞게 콘텐츠 재구성
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Verification</span>
                      <span className="text-amber-300 font-semibold">Quality Guardrail</span>
                    </div>
                  </div>

                  {/* Step 4: Multi-Channel Distribution */}
                  <div className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 p-4 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        Stage 04
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Multi-Channel Output</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        최종 검토 후 블로그, 소셜, 뉴스레터 등 다채널 동시 배포 파이프라인
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Channels</span>
                      <span className="text-emerald-300 font-semibold">Configurable</span>
                    </div>
                  </div>

                </div>

                {/* Real Development Pipeline Status Footer inside mockup */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Activity className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-mono text-slate-400">Pipeline State:</span>
                    <span className="font-medium text-slate-200">
                      Core alpha testing in progress · Closed Beta architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Zero Hallucination Guardrail
                    </span>
                    <span className="flex items-center gap-1 hidden md:inline-flex">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      Human Approval Gate
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: CODE & ARCHITECTURE SPECIFICATION */}
            {activeWorkflowTab === "pipeline" && (
              <div className="p-5 sm:p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-800/80">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    pipeline-architecture.ts
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Spec</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <code>{`// KNCA Core Automation Workflow Interface
import { AnthropicEngine } from "@knca/ai-orchestrator";

export async function processContentAutomation(sourceData: SourceInput) {
  // 01. Ingest raw content & preserve domain ontology
  const normalized = await kncaPipeline.ingest(sourceData);

  // 02. Context-aware reasoning via Claude API
  const structuredInsights = await AnthropicEngine.extractInsights({
    context: normalized.content,
    temperature: 0.2, // Precision reasoning
    extractDomainTerms: true,
  });

  // 03. Format Adaptation & Quality Guardrails
  const multiChannelOutputs = await kncaPipeline.synthesize({
    insights: structuredInsights,
    channels: ["article", "newsletter", "briefing", "social_thread"],
    guardrails: { verifyAccuracy: true, humanApprovalRequired: true }
  });

  return multiChannelOutputs;
}`}</code>
                </pre>

                <p className="text-xs text-slate-400 font-mono">
                  * 본 코드는 KNCA Labs의 콘텐츠 자동화 파이프라인 설계를 설명하는 정적 아키텍처 명세입니다.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
