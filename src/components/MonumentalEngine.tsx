"use client";

import React, { useState } from "react";
import {
  Video,
  FileText,
  Mic,
  Cpu,
  Share2,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function MonumentalEngine() {
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
      contentSnippet: `[00:00] "채널마다 글을 새로 쓰느라 지치셨나요?"
[00:12] 영상 1개만 넣으면 AI가 쇼츠, 블로그, SNS로 자동 분해합니다.
[00:45] 더 이상 복사하지 마세요. 나머지는 시스템에 맡기세요.`,
    },
    {
      id: "blog",
      title: "블로그 칼럼",
      platform: "네이버 · 벨로그 · 미디엄",
      badge: "장문 칼럼",
      highlight: "구조화 완료",
      color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-300",
      contentSnippet: `# 더 많이 쓰는 시대의 종말: 하나의 원천으로 시작하기

1. 한 번만 제작하세요.
2. 각 플랫폼 맞춤 재작성은 시스템이 수행합니다.
3. 쇼츠 대본과 장문 칼럼이 동시에 완성됩니다.`,
    },
    {
      id: "social",
      title: "SNS 스레드",
      platform: "X · 링크드인 · 인스타",
      badge: "3줄 요약",
      highlight: "배포 준비 완료",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
      contentSnippet: `콘텐츠 생산의 70%는 채널별 복사에 낭비됩니다.

• 원천 1개로 전 채널 동시 발행
• 반복 노동 완전 제거
• Build Once. Automate More.`,
    },
  ];

  const CurrentSourceIcon = sources[selectedSource].icon;

  return (
    <section
      id="core-engine"
      className="relative pt-44 pb-36 md:pt-56 md:pb-52 overflow-hidden bg-radial-glow min-h-screen flex flex-col items-center justify-center border-b border-sky-950/60"
    >
      {/* Precision Ambient Background Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="workflow-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-grid)" />
        </svg>
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-sky-500/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full space-y-16 sm:space-y-24 relative z-10">
        
        {/* 1. MONUMENTAL DISPLAY TYPOGRAPHY */}
        <div className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <div className="inline-flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold shadow-lg shadow-sky-950/50 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="tracking-widest uppercase">THE WORKFLOW</span>
            </div>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-tight text-white leading-[0.94] break-words">
            Build Once. <br />
            <span className="text-gradient">Automate More.</span>
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl text-slate-200 max-w-3xl mx-auto font-medium leading-tight tracking-tight">
            원천 하나로 모든 채널을 완성합니다.
          </p>
        </div>

        {/* 2. THE SINGULAR MONUMENTAL AI WORKFLOW VISUALIZATION */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] border border-sky-500/30 bg-slate-950/80 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl shadow-sky-950/40">
          
          {/* Header pill within canvas */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-mono text-slate-300 font-semibold tracking-wider">
                THE WORKFLOW
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">INPUT SOURCE:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
                {sources.map((src, idx) => {
                  const Icon = src.icon;
                  return (
                    <button
                      key={src.id}
                      type="button"
                      onClick={() => setSelectedSource(idx as 0 | 1 | 2)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                        selectedSource === idx
                          ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
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
            
            {/* STAGE 1: ONE INPUT SOURCE (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="space-y-3">
                <div className="text-[11px] font-mono font-bold text-sky-400 tracking-wider flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">STEP 01</span>
                  <span>단 하나의 원천</span>
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

          {/* Expanded Preview Drawer at Canvas Bottom */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 rounded-2xl bg-slate-900/40 p-5 sm:p-6 border border-slate-800/60">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">PREVIEW OUTPUT:</span>
                <span className="text-xs font-bold text-sky-300 font-mono">
                  {outputs[activeOutput].title} ({outputs[activeOutput].platform})
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                즉시 발행 가능
              </span>
            </div>

            <div className="mt-3 text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-line leading-relaxed max-h-40 overflow-y-auto">
              {outputs[activeOutput].contentSnippet}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
