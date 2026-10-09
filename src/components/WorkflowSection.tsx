"use client";

import React, { useState } from "react";
import {
  Video,
  FileText,
  Mic,
  Cpu,
  Share2,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function WorkflowSection() {
  const [selectedSource, setSelectedSource] = useState<0 | 1 | 2>(0);
  const [activeOutput, setActiveOutput] = useState<0 | 1 | 2>(0);

  const sources = [
    {
      id: "video",
      title: "영상 원문",
      label: "45m Video",
      icon: Video,
      color: "from-sky-500 to-blue-600",
      accent: "text-sky-400",
      border: "border-sky-500/40",
      bg: "bg-sky-500/10",
      preview: "YouTube 4K · 45:12",
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
      preview: "Markdown · 3,420 words",
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
      preview: "WAV Audio · 32:04",
    },
  ];

  const outputs = [
    {
      id: "shorts",
      title: "숏폼 대본",
      platform: "Shorts · Reels · TikTok",
      badge: "0~60초",
      highlight: "핵심 훅 추출 완료",
      color: "border-sky-500/40 bg-sky-950/20 text-sky-300",
    },
    {
      id: "blog",
      title: "블로그 칼럼",
      platform: "네이버 · 벨로그 · 미디엄",
      badge: "장문 칼럼",
      highlight: "구조화 완료",
      color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-300",
    },
    {
      id: "social",
      title: "SNS 스레드",
      platform: "X · 링크드인 · 인스타",
      badge: "3줄 요약",
      highlight: "배포 준비 완료",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
    },
  ];

  const CurrentSourceIcon = sources[selectedSource].icon;

  return (
    <section
      id="the-workflow"
      className="relative py-36 sm:py-52 overflow-hidden bg-[#070b14] border-b border-sky-950/60"
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
            원천 1개, 전 채널 자동 동기화.
          </h2>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
            입력과 동시에 모든 플랫폼 규격으로 변환됩니다.
          </p>
        </div>

        {/* Dedicated Monumental AI Workflow Canvas */}
        <div className="relative rounded-3xl sm:rounded-[2rem] border border-white/10 bg-[#070b14]/90 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          
          {/* Header pill within canvas */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-300 font-medium tracking-wider">
                THE WORKFLOW
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">INPUT SOURCE:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-900/80 border border-white/10">
                {sources.map((src, idx) => {
                  const Icon = src.icon;
                  return (
                    <button
                      key={src.id}
                      type="button"
                      onClick={() => setSelectedSource(idx as 0 | 1 | 2)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                        selectedSource === idx
                          ? "bg-white/10 text-white border border-white/20 shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{src.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* VISUAL DIAGRAM CANVAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* STAGE 1: SOURCE (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="text-[11px] font-mono font-bold text-slate-300 tracking-wider flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-mono">01</span>
                  <span className="tracking-widest">SOURCE</span>
                </div>

                {/* The Ingest Chamber */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    sources[selectedSource].border
                  } bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 shadow-xl`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${sources[selectedSource].bg} ${sources[selectedSource].accent}`}>
                      <CurrentSourceIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {sources[selectedSource].title}
                      </span>
                      <span className="text-xs font-mono text-slate-400 block mt-0.5">
                        {sources[selectedSource].preview}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">STATUS</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      원천 준비 완료
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 2: THE AI TRANSFORMATION ENGINE (4 cols - Center Nexus) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-4 lg:py-0">
              
              {/* Desktop Connecting SVG Beams */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                  {/* Left Beam */}
                  <path
                    d="M 0 100 L 150 100"
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-flow-dash"
                  />
                  {/* Right Beam */}
                  <path
                    d="M 150 100 L 300 100"
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-flow-dash"
                  />
                </svg>
              </div>

              {/* The Core Nexus Monolith */}
              <div className="relative group">
                {/* Radiant Halo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />

                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950 border-2 border-sky-400/60 p-3 shadow-2xl shadow-sky-500/20 flex flex-col items-center justify-center text-center space-y-2">
                  {/* Rotating Ring Indicator */}
                  <div className="absolute inset-1 rounded-full border border-sky-500/20 border-t-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
                  
                  <div className="p-3 rounded-full bg-sky-500/10 text-sky-300">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse text-sky-400" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-sky-400 font-bold block">
                      AI WORKFLOW
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      자동 분해·재구성
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                  <Layers className="w-3 h-3 text-sky-400" />
                  1회 변환으로 3개 채널 완성
                </span>
              </div>
            </div>

            {/* STAGE 3: MULTI-CHANNEL ADAPTIVE OUTPUTS (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
              <div className="text-[11px] font-mono font-bold text-emerald-400 tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">STEP 02</span>
                  <span>다채널 자율 완성</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">3 CHANNELS</span>
              </div>

              {/* 3 Output Channels Fanout */}
              <div className="space-y-2.5">
                {outputs.map((out, idx) => {
                  const isSelected = activeOutput === idx;
                  return (
                    <div
                      key={out.id}
                      onClick={() => setActiveOutput(idx as 0 | 1 | 2)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? `${out.color} shadow-lg ring-1 ring-sky-500/40`
                          : "border-slate-800/80 bg-slate-900/60 hover:bg-slate-900 text-slate-400"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Share2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white block leading-tight">
                              {out.title}
                            </span>
                            <span className="text-[10px] text-slate-400 block font-mono">
                              {out.platform}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-emerald-400 font-semibold">
                          {out.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Architectural Brand Telemetry Console */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 rounded-2xl bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-indigo-950/20 p-6 sm:p-8 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold tracking-wider block">
                  AUTONOMOUS DISPATCH ACTIVE
                </span>
                <span className="text-sm font-semibold text-white block mt-0.5">
                  1개의 원천 신호가 3개 플랫폼 채널 규격으로 즉시 동기화됩니다.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs shrink-0">
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">LATENCY</span>
                <span className="text-emerald-400 font-bold text-sm">0.24s</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">SYNC RATIO</span>
                <span className="text-white font-bold text-sm">1 : 3</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">PIPELINE</span>
                <span className="text-sky-300 font-bold text-sm">100% IDLE FREE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
