"use client";

import React, { useState, useEffect } from "react";
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
  const [activeCinematicStage, setActiveCinematicStage] = useState(1);

  // Auto-progress cinematic workflow cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCinematicStage((prev) => (prev % 4) + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      aria-label="KNCA Labs Introduction & AI Automation Architecture"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-radial-glow min-h-[92vh] flex items-center justify-center"
    >
      {/* Precision Ambient Grid & Constellation Vector Paths */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-7">
          
          {/* Top Status & Integrity Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-[11px] sm:text-xs font-mono font-medium shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping hidden sm:inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span>AI CONTENT AUTOMATION</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[11px] sm:text-xs font-medium backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Early Stage Product in Active Development</span>
            </div>
          </div>

          {/* Main Headline - Massive, commanding hierarchy */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-extrabold tracking-tight text-white leading-[1.02] break-words">
            Build Once. <br className="hidden sm:inline" />
            <span className="text-gradient">Automate More.</span>
          </h1>

          {/* Value Proposition Description - Short, Punchy, High-Contrast */}
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Turn one source into a complete content workflow — powered by AI.
          </p>

          {/* Positioning Statement Bar */}
          <div className="pt-0.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs sm:text-sm text-slate-300 font-medium backdrop-blur-sm text-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 shrink-0" />
              <span>AI-powered content automation for creators and businesses.</span>
            </div>
          </div>

          {/* Technical Foundation Points */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[11px] sm:text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              Single Source Transformation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              Claude API Powered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              Multi-Channel Output Engine
            </span>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-sky-950/20 active:scale-[0.99] transition-all"
            >
              <span>Explore Workflow</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </Link>
            <Link
              href="#capabilities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm sm:text-base transition-all"
            >
              <span>What We Build</span>
            </Link>
          </div>
        </div>

        {/* High-End AI Workflow Architecture Visualization: Cinematic 4-Stage Motion Graphics */}
        <div className="mt-14 sm:mt-16 relative max-w-5xl mx-auto rounded-2xl glass-panel p-2 sm:p-3 md:p-4 shadow-2xl border border-slate-800/90">
          <div className="bg-[#080c14] rounded-xl overflow-hidden border border-slate-800/90 flex flex-col">
            
            {/* Top Command Bar & Interactive View Switcher */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  knca-content-automation.internal (Engineered Architecture Preview)
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

            {/* TAB 1: VISUAL CINEMATIC 4-STAGE PIPELINE WITH ACTIVE FLOW */}
            {activeWorkflowTab === "visual" && (
              <div className="p-5 sm:p-6 md:p-8 space-y-6">
                
                {/* Real Cinematic Visual Motion Canvas: ONE SOURCE -> AI -> MANY CONTENTS -> MULTI-CHANNEL */}
                <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 p-6 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-20 bg-radial-glow" />
                  
                  {/* Motion Diagram Flow (Desktop / Tablet) */}
                  <div className="relative z-10 hidden sm:flex items-center justify-between gap-2 max-w-4xl mx-auto py-4">
                    
                    {/* Node 1: ONE SOURCE (Converging Inputs) */}
                    <div className="flex flex-col items-center space-y-2 text-center w-28">
                      <div className={`w-14 h-14 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                        activeCinematicStage === 1
                          ? "bg-sky-500/20 border-sky-400 text-sky-300 ring-4 ring-sky-500/20 scale-105"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        <FileText className="w-5 h-5 mb-0.5" />
                        <span className="text-[9px] font-mono tracking-tighter">SINGLE</span>
                      </div>
                      <span className="text-[11px] font-bold text-white font-mono">ONE SOURCE</span>
                      <span className="text-[10px] text-slate-400">Article, Video, URL</span>
                    </div>

                    {/* Animated Beam 1 -> 2 */}
                    <div className="flex-1 flex items-center justify-center relative px-2">
                      <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 animate-flow-dash" style={{ width: "100%" }} />
                      </div>
                      <ArrowRight className={`w-4 h-4 ml-1 transition-colors ${activeCinematicStage >= 2 ? "text-indigo-400" : "text-slate-600"}`} />
                    </div>

                    {/* Node 2: AI UNDERSTANDING (Pulsing Claude Core) */}
                    <div className="flex flex-col items-center space-y-2 text-center w-36">
                      <div className={`w-16 h-16 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 relative ${
                        activeCinematicStage === 2
                          ? "bg-indigo-500/25 border-indigo-400 text-indigo-300 ring-4 ring-indigo-500/30 scale-110 shadow-xl shadow-indigo-500/20 animate-core-pulse"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        <Cpu className="w-6 h-6 mb-0.5 text-indigo-400" />
                        <span className="text-[9px] font-mono font-bold text-indigo-300">CLAUDE AI</span>
                      </div>
                      <span className="text-[11px] font-bold text-white font-mono">UNDERSTANDING</span>
                      <span className="text-[10px] text-slate-400">Context Reasoning</span>
                    </div>

                    {/* Animated Beam 2 -> 3 */}
                    <div className="flex-1 flex items-center justify-center relative px-2">
                      <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-amber-400 animate-flow-dash" style={{ width: "100%" }} />
                      </div>
                      <ArrowRight className={`w-4 h-4 ml-1 transition-colors ${activeCinematicStage >= 3 ? "text-amber-400" : "text-slate-600"}`} />
                    </div>

                    {/* Node 3: MANY CONTENTS (Branching Formats) */}
                    <div className="flex flex-col items-center space-y-2 text-center w-32">
                      <div className={`w-14 h-14 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                        activeCinematicStage === 3
                          ? "bg-amber-500/20 border-amber-400 text-amber-300 ring-4 ring-amber-500/20 scale-105"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        <Layers className="w-5 h-5 mb-0.5 text-amber-400" />
                        <span className="text-[9px] font-mono tracking-tighter">MULTI-ASSET</span>
                      </div>
                      <span className="text-[11px] font-bold text-white font-mono">MANY CONTENTS</span>
                      <span className="text-[10px] text-slate-400">Script, Blog, Post</span>
                    </div>

                    {/* Animated Beam 3 -> 4 */}
                    <div className="flex-1 flex items-center justify-center relative px-2">
                      <div className="w-full h-[2px] bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 animate-flow-dash" style={{ width: "100%" }} />
                      </div>
                      <ArrowRight className={`w-4 h-4 ml-1 transition-colors ${activeCinematicStage >= 4 ? "text-emerald-400" : "text-slate-600"}`} />
                    </div>

                    {/* Node 4: MULTI-CHANNEL (Distribution Endpoints) */}
                    <div className="flex flex-col items-center space-y-2 text-center w-32">
                      <div className={`w-14 h-14 rounded-2xl border flex flex-col items-center justify-center transition-all duration-500 ${
                        activeCinematicStage === 4
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 ring-4 ring-emerald-500/20 scale-105"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        <Share2 className="w-5 h-5 mb-0.5 text-emerald-400" />
                        <span className="text-[9px] font-mono tracking-tighter">CHANNELS</span>
                      </div>
                      <span className="text-[11px] font-bold text-white font-mono">MULTI-CHANNEL</span>
                      <span className="text-[10px] text-slate-400">Web, Social, Mail</span>
                    </div>

                  </div>

                  {/* Flow Sub-description Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-900 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                      <span>Live Engine Animation:</span>
                      <strong className="text-white">
                        {activeCinematicStage === 1 && "1. Single Source Ingestion (Converging Input)"}
                        {activeCinematicStage === 2 && "2. Claude AI Core Reasoning & Context Breakdown"}
                        {activeCinematicStage === 3 && "3. Autonomous Multi-Format Transformation"}
                        {activeCinematicStage === 4 && "4. Automated Publishing across Multi-Channels"}
                      </strong>
                    </span>
                    <span className="text-slate-500 hidden md:inline">Continuous Pipeline</span>
                  </div>
                </div>

                {/* 4-Stage Horizontal Grid Flow with Live Stage Indicator */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  
                  {/* Step 1: Ingestion - ONE SOURCE */}
                  <div
                    onClick={() => setActiveCinematicStage(1)}
                    className={`group relative rounded-xl border p-4 transition-all duration-300 space-y-3 cursor-pointer ${
                      activeCinematicStage === 1
                        ? "bg-slate-900/90 border-sky-500/70 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/30"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                        STAGE 01 — ONE SOURCE
                      </span>
                      <span className={`w-2 h-2 rounded-full ${activeCinematicStage === 1 ? "bg-sky-400 animate-pulse" : "bg-slate-700"}`} />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Capture & Ingest</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Article, Video, Audio, URL 원천을 단일 입력으로 수렴
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Source State</span>
                      <span className="text-emerald-400 font-medium">Ingested</span>
                    </div>
                  </div>

                  {/* Step 2: Reasoning Engine - AI UNDERSTANDING */}
                  <div
                    onClick={() => setActiveCinematicStage(2)}
                    className={`group relative rounded-xl border p-4 transition-all duration-300 space-y-3 cursor-pointer ${
                      activeCinematicStage === 2
                        ? "bg-slate-900/90 border-indigo-500/70 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                        STAGE 02 — AI UNDERSTANDING
                      </span>
                      <span className={`w-2 h-2 rounded-full ${activeCinematicStage === 2 ? "bg-indigo-400 animate-pulse" : "bg-slate-700"}`} />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Context & Reasoning</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Claude API가 원본 문맥을 분석하고 핵심 지식과 서사를 분해
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Core Engine</span>
                      <span className="text-indigo-300 font-semibold font-mono">Claude API</span>
                    </div>
                  </div>

                  {/* Step 3: Synthesis & Verification - MANY CONTENTS */}
                  <div
                    onClick={() => setActiveCinematicStage(3)}
                    className={`group relative rounded-xl border p-4 transition-all duration-300 space-y-3 cursor-pointer ${
                      activeCinematicStage === 3
                        ? "bg-slate-900/90 border-amber-500/70 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                        STAGE 03 — MANY CONTENTS
                      </span>
                      <span className={`w-2 h-2 rounded-full ${activeCinematicStage === 3 ? "bg-amber-400 animate-pulse" : "bg-slate-700"}`} />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Format Adaptation</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        블로그, 숏폼 스크립트, 소셜 스레드 등 타깃 포맷으로 재구성
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Quality Layer</span>
                      <span className="text-amber-300 font-semibold font-mono">Guardrails</span>
                    </div>
                  </div>

                  {/* Step 4: Multi-Channel Distribution - MULTI-CHANNEL */}
                  <div
                    onClick={() => setActiveCinematicStage(4)}
                    className={`group relative rounded-xl border p-4 transition-all duration-300 space-y-3 cursor-pointer ${
                      activeCinematicStage === 4
                        ? "bg-slate-900/90 border-emerald-500/70 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30"
                        : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        STAGE 04 — MULTI-CHANNEL
                      </span>
                      <span className={`w-2 h-2 rounded-full ${activeCinematicStage === 4 ? "bg-emerald-400 animate-pulse" : "bg-slate-700"}`} />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Automated Publishing</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        웹사이트, 소셜 미디어, 뉴스레터 동시 퍼블리싱 지원
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Channels</span>
                      <span className="text-emerald-300 font-semibold font-mono">Multi-Node</span>
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
