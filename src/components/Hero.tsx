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
  Sparkles,
} from "lucide-react";

const sampleScenarios = [
  {
    id: "tech-deepdive",
    label: "Video Input",
    sourceTitle: "autonomous-agents-deepdive.mp4",
    duration: "18:42",
    sourceType: "YouTube Raw Video",
    outputs: [
      { title: "Viral Short Script", type: "0-60s Timeline", channel: "YouTube Shorts · Reels · TikTok" },
      { title: "Technical Essay", type: "2,400-Word Deep Dive", channel: "Medium · Tech Blog" },
      { title: "Key Takeaways Thread", type: "7-Post Insight Breakdown", channel: "X (Twitter) · LinkedIn" },
      { title: "Weekly Newsletter", type: "Curated Executive Digest", channel: "Substack · Email List" }
    ]
  },
  {
    id: "interview",
    label: "Audio Input",
    sourceTitle: "founder-interview-ep42.wav",
    duration: "45:10",
    sourceType: "Podcast Audio",
    outputs: [
      { title: "Punchy Dialogue Script", type: "Highlight Scene", channel: "Shorts · Reels" },
      { title: "Q&A Narrative Column", type: "Editorial Article", channel: "Corporate Blog" },
      { title: "Quote Highlights Carousel", type: "5 Key Quotes", channel: "LinkedIn Carousel" },
      { title: "Subscriber Audio Digest", type: "Timestamped Memo", channel: "Member Briefing" }
    ]
  },
  {
    id: "whitepaper",
    label: "Doc Input",
    sourceTitle: "q3-enterprise-ai-report.pdf",
    duration: "32 pages",
    sourceType: "Research Report",
    outputs: [
      { title: "30s Stat Explainer", type: "Data Voiceover", channel: "Shorts · TikTok" },
      { title: "Executive Whitepaper Memo", type: "Summary Report", channel: "Corporate Hub" },
      { title: "Infographic Breakdown", type: "Key Charts Thread", channel: "LinkedIn Post" },
      { title: "B2B Briefing Packet", type: "PDF Briefing", channel: "Client Distribution" }
    ]
  }
];

export default function Hero() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [activeStage, setActiveStage] = useState(2);
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
        if (next === 1) {
          setActiveScenarioIdx((s) => (s + 1) % sampleScenarios.length);
        }
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      aria-label="KNCA Labs AI Content Engine"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[96vh] flex items-center justify-center bg-[#070b13]"
    >
      {/* Cinematic Ambient Glow & Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-sky-500/25 via-indigo-500/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-sky-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />

        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-neural-mesh" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-neural-mesh)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        {/* COMMAND CENTER HEADLINE */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-mono backdrop-blur-md shadow-lg shadow-sky-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            <span className="text-sky-300 font-semibold tracking-wider">AI CONTENT ORCHESTRATION</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">KNCA Core</span>
          </div>

          {/* Monumental Hero Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[1.0] break-words">
            Build Once. <br />
            <span className="text-gradient">Automate More.</span>
          </h1>

          {/* Crisp, Bold Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            단 하나의 원천에서 수십 개의 채널별 콘텐츠를 자율 생성합니다.
          </p>

          {/* High-Impact CTA Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-base shadow-2xl shadow-sky-400/20 active:scale-[0.99] transition-all group"
            >
              <span>Closed Beta 참여 신청</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#the-shift"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all"
            >
              <span>시스템 패러다임 보기</span>
              <span className="text-sky-400 font-mono text-sm">↓</span>
            </Link>
          </div>

          {/* Monospace Architectural Equation */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs font-mono text-slate-400">
              <span className="text-sky-300 font-bold">ONE SOURCE</span>
              <span className="text-slate-600">→</span>
              <span className="text-indigo-300 font-bold">AI</span>
              <span className="text-slate-600">→</span>
              <span className="text-amber-300 font-bold">MANY CONTENTS</span>
              <span className="text-slate-600">→</span>
              <span className="text-emerald-300 font-bold">MANY CHANNELS</span>
            </div>
          </div>
        </div>

        {/* VISUAL PUNCH: LIVE AI ENGINE CONSOLE (IMMEDIATE ABOVE/AT FOLD) */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-sky-500/30 bg-[#060912]/95 backdrop-blur-xl shadow-2xl shadow-sky-950/60 overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>knca.ai.orchestrator</span>
                  <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                </span>
              </div>

              {/* Input Scenario Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                  {sampleScenarios.map((sc, idx) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setActiveScenarioIdx(idx)}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                        activeScenarioIdx === idx
                          ? "bg-slate-800 text-sky-300 font-bold"
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
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-sky-400" />}
                </button>
              </div>
            </div>

            {/* 4 Pipeline Stages */}
            <div className="p-5 sm:p-7 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                
                {/* 1. SOURCE */}
                <div
                  onClick={() => { setActiveStage(1); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer ${
                    activeStage === 1
                      ? "bg-slate-900/90 border-sky-400 ring-2 ring-sky-500/30 shadow-lg shadow-sky-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-sky-400 font-bold">01 SOURCE</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 1 ? "bg-sky-400 animate-ping" : "bg-slate-700"}`} />
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">ONE SOURCE</h4>
                      <p className="text-[10px] text-sky-300 font-mono truncate max-w-[120px]">{activeScenario.sourceType}</p>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300 truncate">
                    📄 {activeScenario.sourceTitle}
                  </div>
                </div>

                {/* 2. AI CORE */}
                <div
                  onClick={() => { setActiveStage(2); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer ${
                    activeStage === 2
                      ? "bg-slate-900/90 border-indigo-400 ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/20"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-indigo-400 font-bold">02 AI</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 2 ? "bg-indigo-400 animate-ping" : "bg-slate-700"}`} />
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Cpu className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">CLAUDE AI</h4>
                      <p className="text-[10px] text-indigo-300 font-mono">Context Window</p>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-indigo-200">
                    🧠 Knowledge Decomposition
                  </div>
                </div>

                {/* 3. CONTENTS */}
                <div
                  onClick={() => { setActiveStage(3); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer ${
                    activeStage === 3
                      ? "bg-slate-900/90 border-amber-400 ring-2 ring-amber-500/30 shadow-lg shadow-amber-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-amber-400 font-bold">03 CONTENTS</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 3 ? "bg-amber-400 animate-ping" : "bg-slate-700"}`} />
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">MANY CONTENTS</h4>
                      <p className="text-[10px] text-amber-300 font-mono">Parallel Synthesis</p>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300">
                    ⚡ 4 Derived Assets
                  </div>
                </div>

                {/* 4. CHANNELS */}
                <div
                  onClick={() => { setActiveStage(4); setIsPlaying(false); }}
                  className={`rounded-xl p-4 border transition-all cursor-pointer ${
                    activeStage === 4
                      ? "bg-slate-900/90 border-emerald-400 ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-emerald-400 font-bold">04 CHANNELS</span>
                    <span className={`w-2 h-2 rounded-full ${activeStage === 4 ? "bg-emerald-400 animate-ping" : "bg-slate-700"}`} />
                  </div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">MANY CHANNELS</h4>
                      <p className="text-[10px] text-emerald-300 font-mono">Automated Rails</p>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300 truncate">
                    🚀 Video, Web, Social, Email
                  </div>
                </div>

              </div>

              {/* Parallel Generated Outputs Showcase */}
              <div className="rounded-xl bg-slate-950/90 border border-slate-800/90 p-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Real-Time Multi-Channel Synthesizer</span>
                  </span>
                  <span className="text-emerald-400 text-[11px]">Ready for Release</span>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeScenario.outputs.map((out, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/90 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400 uppercase">{out.type}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <h5 className="text-xs font-bold text-white truncate">{out.title}</h5>
                      <div className="text-[10px] font-mono text-emerald-300 truncate pt-1 border-t border-slate-800/60">
                        {out.channel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-400">System State: Active Engine</span>
                </span>
                <span>Latency: 420ms · Loss: 0.00%</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
