"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Layers,
  Share2,
  FileText,
  Play,
  Pause,
  Terminal,
  Activity,
} from "lucide-react";

const sampleScenarios = [
  {
    id: "tech-deepdive",
    label: "Tech Architecture Video",
    sourceTitle: "how-autonomous-ai-agents-work.mp4",
    duration: "18:42",
    sourceType: "YouTube Raw Video",
    tokens: "24,800 tokens",
    outputs: [
      { title: "0-60s Shorts Script", type: "Viral Hook Script", channel: "Shorts · Reels · TikTok" },
      { title: "Technical Deep-Dive", type: "2,400-Word Essay", channel: "Medium · Tech Blog" },
      { title: "Key Takeaways Thread", type: "7-Post Insight Carousels", channel: "X (Twitter) · LinkedIn" },
      { title: "Executive Digest", type: "Weekly Briefing Issue", channel: "Substack · Email Newsletter" }
    ]
  },
  {
    id: "interview",
    label: "Founder Interview Audio",
    sourceTitle: "silicon-valley-ai-frontier-ep42.wav",
    duration: "45:10",
    sourceType: "Podcast Recording",
    tokens: "58,200 tokens",
    outputs: [
      { title: "High-Energy Snippet Script", type: "Punchy Dialogue Script", channel: "YouTube Shorts · Reels" },
      { title: "Q&A Narrative Column", type: "Long-form Feature", channel: "Naver Premium · Blog" },
      { title: "Quote Highlights Carousel", type: "Key Quotes & Soundbites", channel: "LinkedIn Carousel · Threads" },
      { title: "Subscriber Audio Digest", type: "Summary Memo + Timestamps", channel: "Member Newsletter" }
    ]
  },
  {
    id: "whitepaper",
    label: "30-Page Research Report",
    sourceTitle: "q3-enterprise-agentic-trends.pdf",
    duration: "32 pages",
    sourceType: "Whitepaper / PDF",
    tokens: "41,100 tokens",
    outputs: [
      { title: "30s Stat Explainer Reel", type: "Data Visualization Voiceover", channel: "Shorts · TikTok" },
      { title: "Industry Analysis Report", type: "Executive Whitepaper Memo", channel: "Corporate Hub · Medium" },
      { title: "Data Infographic Deck", type: "Infographic Breakdown", channel: "LinkedIn Post · X Thread" },
      { title: "B2B Client Briefing", type: "PDF Briefing Attachment", channel: "Direct Enterprise Queue" }
    ]
  }
];

export default function Hero() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [activeStage, setActiveStage] = useState(2); // 1: Ingest, 2: AI Core, 3: Many Contents, 4: Many Channels
  const [isPlaying, setIsPlaying] = useState(true);

  const activeScenario = sampleScenarios[activeScenarioIdx];

  // Auto-progress stages for live animated demo
  useEffect(() => {
    if (!isPlaying) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev % 4) + 1;
        // Rotate scenario when completing full cycle
        if (next === 1) {
          setActiveScenarioIdx((s) => (s + 1) % sampleScenarios.length);
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      aria-label="KNCA Labs Autonomous AI Content Engine"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[96vh] flex items-center justify-center bg-[#070b13]"
    >
      {/* 1. Cinematic Ambient AI Backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Glow Spheres */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-sky-500/20 via-indigo-500/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-sky-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />

        {/* Precision Coordinate Mesh */}
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-neural-mesh" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <circle cx="40" cy="40" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-neural-mesh)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* TOP COMMAND HEADER: 5-Second AI Punch */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Unmistakable AI System Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-mono backdrop-blur-md shadow-lg shadow-sky-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            <span className="text-sky-300 font-semibold tracking-wider">AI CONTENT ORCHESTRATION SYSTEM</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-medium hidden sm:inline">KNCA Core v2.4</span>
          </div>

          {/* Primary High-Contrast Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.02]">
            Build Once. <br />
            <span className="text-gradient">Automate More.</span>
          </h1>

          {/* Punchy Core Value Statement */}
          <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            단 하나의 원천에서 수십 개의 채널별 콘텐츠를 자율 생성합니다.
            <br className="hidden sm:inline" />
            <span className="text-slate-400 text-base sm:text-lg">
              수작업 반복 없는 차세대 AI 콘텐츠 워크플로우 인프라.
            </span>
          </p>

          {/* Immediate Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#the-shift"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-base shadow-xl shadow-sky-500/10 active:scale-[0.99] transition-all group"
            >
              <span>자율 워크플로우 체험하기</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all"
            >
              <span>Closed Beta 참여</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </Link>
          </div>

          {/* Core Architectural Equation Monospace Bar */}
          <div className="pt-1 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="text-sky-300 font-bold">ONE SOURCE</span>
              <span className="text-slate-600">→</span>
              <span className="text-indigo-300 font-bold">AI UNDERSTANDING</span>
              <span className="text-slate-600">→</span>
              <span className="text-amber-300 font-bold">MANY CONTENTS</span>
              <span className="text-slate-600">→</span>
              <span className="text-emerald-300 font-bold">MANY CHANNELS</span>
            </div>
          </div>
        </div>

        {/* 2. THE HERO AI WORKFLOW ENGINE CONSOLE: Visible immediately above/at fold */}
        <div className="mt-12 sm:mt-16 relative max-w-6xl mx-auto">
          
          {/* Glass Terminal Container */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#060912]/95 backdrop-blur-xl shadow-2xl shadow-sky-950/60 overflow-hidden">
            
            {/* Console Window Header & Controls */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>knca.pipeline.runtime</span>
                  <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">LIVE</span>
                </span>
              </div>

              {/* Scenario Selector & Play/Pause */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                  {sampleScenarios.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setActiveScenarioIdx(idx)}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                        activeScenarioIdx === idx
                          ? "bg-slate-800 text-sky-300 font-bold shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  title={isPlaying ? "Pause Demo" : "Resume Live Demo"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-sky-400" />}
                </button>
              </div>
            </div>

            {/* LIVE 4-STAGE PIPELINE FLOW GRAPH (Desktop & Mobile) */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* Pipeline Flow Visualization Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 sm:gap-4 relative">
                
                {/* 1. SOURCE NODE */}
                <div
                  onClick={() => { setActiveStage(1); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer relative overflow-hidden ${
                    activeStage === 1
                      ? "bg-slate-900/90 border-sky-400 ring-2 ring-sky-500/30 shadow-lg shadow-sky-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="text-sky-400 font-bold">01 INGESTION</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 1 ? "bg-sky-400 animate-ping" : "bg-slate-700"}`} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">ONE SOURCE</h4>
                      <p className="text-[11px] text-sky-300 font-mono truncate max-w-[130px]">{activeScenario.sourceType}</p>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 truncate">
                    📄 {activeScenario.sourceTitle}
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Length: {activeScenario.duration}</span>
                    <span className="text-emerald-400">Ingested</span>
                  </div>
                </div>

                {/* 2. AI REASONING CORE */}
                <div
                  onClick={() => { setActiveStage(2); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer relative overflow-hidden ${
                    activeStage === 2
                      ? "bg-slate-900/90 border-indigo-400 ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/20"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="text-indigo-400 font-bold">02 AI UNDERSTANDING</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 2 ? "bg-indigo-400 animate-ping" : "bg-slate-700"}`} />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Claude 3.5 Sonnet</h4>
                      <p className="text-[11px] text-indigo-300 font-mono">Context Window Reasoning</p>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-indigo-200">
                    🧠 Knowledge Graph · Tone Lock
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Context: {activeScenario.tokens}</span>
                    <span className="text-indigo-300">0.8s Latency</span>
                  </div>
                </div>

                {/* 3. SYNTHESIS MATRIX */}
                <div
                  onClick={() => { setActiveStage(3); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer relative overflow-hidden ${
                    activeStage === 3
                      ? "bg-slate-900/90 border-amber-400 ring-2 ring-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="text-amber-400 font-bold">03 MANY CONTENTS</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 3 ? "bg-amber-400 animate-ping" : "bg-slate-700"}`} />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Multi-Format</h4>
                      <p className="text-[11px] text-amber-300 font-mono">Parallel Prompt Chains</p>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                    ⚡ 4 Derived Content Assets
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Formats: Shorts · Article · Post</span>
                    <span className="text-amber-300">Guardrails OK</span>
                  </div>
                </div>

                {/* 4. MULTI-CHANNEL DISTRIBUTION */}
                <div
                  onClick={() => { setActiveStage(4); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer relative overflow-hidden ${
                    activeStage === 4
                      ? "bg-slate-900/90 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="text-emerald-400 font-bold">04 MANY CHANNELS</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 4 ? "bg-emerald-400 animate-ping" : "bg-slate-700"}`} />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Automated Rails</h4>
                      <p className="text-[11px] text-emerald-300 font-mono">Headless CMS & Social Queue</p>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 truncate">
                    🚀 YouTube, TikTok, Blog, Email
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Dispatch: 4 Channels</span>
                    <span className="text-emerald-400 font-semibold">Active Ready</span>
                  </div>
                </div>

              </div>

              {/* LIVE DERIVED OUTPUTS PREVIEW DRAWER */}
              <div className="rounded-xl bg-slate-950/90 border border-slate-800/90 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Activity className="w-4 h-4 text-sky-400" />
                    <span className="font-bold text-white">AI Real-Time Multi-Channel Synthesizer</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-400">Source: <strong className="text-sky-300">{activeScenario.sourceTitle}</strong></span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[11px]">
                    Autonomous Parallel Dispatch
                  </span>
                </div>

                {/* 4 Output Cards Grid */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeScenario.outputs.map((out, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400 uppercase tracking-wider">{out.type}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <h5 className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                        {out.title}
                      </h5>
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="text-emerald-300 truncate max-w-[140px]">{out.channel}</span>
                        <span className="text-slate-500 text-[10px]">Ready</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monospace Runtime Telemetry Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Pipeline State:</span>
                  <span className="text-white font-medium">Zero Hallucination Guardrails Active · Closed Alpha Runtime</span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>Engine: <strong className="text-indigo-300">Claude 3.5 Sonnet</strong></span>
                  <span>Latency: <strong className="text-emerald-400">420ms</strong></span>
                  <span>Zero Loss: <strong className="text-sky-300">100%</strong></span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
