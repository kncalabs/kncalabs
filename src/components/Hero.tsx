"use client";

import React, { useState, useEffect } from "react";
import {
  Video,
  FileText,
  Mic,
  Share2,
  Mail,
  Play,
  Heart,
  Repeat2,
} from "lucide-react";

export default function Hero() {
  const [selectedSource, setSelectedSource] = useState<0 | 1 | 2>(0);
  const [pulseTick, setPulseTick] = useState(0);

  // Smooth live wave pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const sources = [
    {
      id: "video",
      name: "영상",
      title: "YouTube 4K",
      spec: "45:12",
      icon: Video,
      color: "text-sky-400",
      border: "border-sky-500/40",
      glow: "shadow-sky-500/20",
    },
    {
      id: "article",
      name: "칼럼",
      title: "Tech Article",
      spec: "3,420 words",
      icon: FileText,
      color: "text-indigo-400",
      border: "border-indigo-500/40",
      glow: "shadow-indigo-500/20",
    },
    {
      id: "audio",
      name: "음성",
      title: "Podcast WAV",
      spec: "32:04",
      icon: Mic,
      color: "text-teal-400",
      border: "border-teal-500/40",
      glow: "shadow-teal-500/20",
    },
  ];

  const currentSource = sources[selectedSource];
  const SourceIcon = currentSource.icon;

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden bg-radial-glow px-6 sm:px-8 lg:px-12 flex flex-col items-center"
    >
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-25" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />
        </svg>
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[450px] bg-sky-500/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* 1. MONUMENTAL HEADLINE & POSITIONING */}
      <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10 mb-14 sm:mb-20">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-widest uppercase text-[11px]">AI PUBLISHING INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Monumental Display Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight text-white leading-[0.96] break-words">
          One Source. <br />
          <span className="text-gradient">Many Possibilities.</span>
        </h1>

        {/* Global Single Punchy Slogan */}
        <p className="text-lg sm:text-2xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
          Turn one source into a complete content workflow — powered by AI.
        </p>

        {/* Source Selector Pills: Integrated Directly on the Stage */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex p-1 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl">
            {sources.map((src, idx) => (
              <button
                key={src.id}
                type="button"
                onClick={() => setSelectedSource(idx as 0 | 1 | 2)}
                className={`px-5 sm:px-6 py-2 rounded-full text-xs font-medium font-mono transition-all ${
                  selectedSource === idx
                    ? "bg-white text-black font-bold shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {src.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 2. THE UNIFIED LIVE SYSTEM CENTERPIECE: One Source ➔ AI ➔ Many Possibilities */}
      <div
        id="the-workflow"
        className="w-full max-w-6xl mx-auto relative z-10"
      >
        <div className="rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-[#070b14]/90 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT: THE ONE SOURCE (Single Ingestion Unit) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span className="tracking-wider uppercase text-[11px] font-semibold text-slate-300">01 · ONE SOURCE</span>
                <span className="text-emerald-400 font-mono text-[10px]">INGEST READY</span>
              </div>
              <div className={`rounded-2xl border ${currentSource.border} bg-gradient-to-br from-[#0c1426] to-[#050812] p-6 shadow-2xl relative overflow-hidden group`}>
                
                {/* 16:9 Media Viewport Mockup */}
                <div className="aspect-video w-full rounded-xl bg-black/60 border border-white/10 relative overflow-hidden flex flex-col justify-between p-4">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <SourceIcon className={`w-4 h-4 ${currentSource.color}`} />
                      {currentSource.title}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {currentSource.spec}
                    </span>
                  </div>

                  {/* Dynamic Sound/Playback Waveform */}
                  <div className="h-12 w-full flex items-end justify-between gap-1 px-1">
                    {[35, 70, 40, 85, 60, 95, 30, 80, 50, 90, 65, 85, 45, 75, 90, 55, 70].map((val, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-sky-500 to-indigo-400 rounded-full transition-all duration-300"
                        style={{
                          height: `${((val + pulseTick * 8 + i * 5) % 85) + 15}%`,
                          opacity: 0.9,
                        }}
                      />
                    ))}
                  </div>

                  {/* Playhead Scrubber */}
                  <div className="space-y-1.5">
                    <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-sky-400 rounded-full transition-all duration-500"
                        style={{ width: `${(pulseTick * 2) % 100}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Play className="w-2.5 h-2.5 fill-current text-sky-400" />
                        01 원천 입력
                      </span>
                      <span>단일 원본</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* CENTER: THE AI PRISM CONDUIT */}
            <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
              <div className="hidden lg:flex flex-col items-center justify-center w-full relative">
                <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 relative">
                  <div className="absolute inset-0 bg-white/40 blur-[2px]" />
                </div>
                <div className="absolute w-9 h-9 rounded-full bg-[#050813] border border-sky-400/40 flex items-center justify-center shadow-xl shadow-sky-500/20 group">
                  <span className="text-[10px] font-mono font-bold text-sky-300 tracking-wider">AI</span>
                </div>
              </div>

              <div className="lg:hidden flex items-center gap-1.5 py-1">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono font-bold text-sky-400">
                  AI
                </span>
                <span className="text-slate-600 text-sm font-light">↓</span>
              </div>
            </div>

            {/* RIGHT: MANY POSSIBILITIES (4 Deliverables Showcase) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span className="tracking-wider uppercase text-[11px] font-semibold text-slate-300">02 · MANY POSSIBILITIES</span>
                <span className="text-sky-400 font-mono text-[10px]">4 CHANNELS ACTIVE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 1. SHORTS */}
              <div className="rounded-2xl border border-sky-500/30 bg-[#090e1c] p-4 space-y-3 shadow-lg relative overflow-hidden group hover:border-sky-500/60 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-sky-300 font-bold">
                    <Video className="w-3.5 h-3.5" />
                    Shorts
                  </span>
                  <span className="text-[10px] text-slate-500">9:16 세로형</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span className="text-sky-400 font-bold">00:42</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-center px-1">
                    <span className="text-xs font-bold text-white bg-black/80 px-2 py-1 rounded border border-white/10 inline-block leading-snug">
                      “콘텐츠 제작의 90%가 끝납니다”
                    </span>
                  </div>
                  <div className="h-1 w-full bg-sky-500/30 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 w-3/4 rounded-full" />
                  </div>
                </div>
              </div>

              {/* 2. BLOG */}
              <div className="rounded-2xl border border-indigo-500/30 bg-[#0a0d1d] p-4 space-y-3 shadow-lg relative overflow-hidden group hover:border-indigo-500/60 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-indigo-300 font-bold">
                    <FileText className="w-3.5 h-3.5" />
                    Blog
                  </span>
                  <span className="text-[10px] text-slate-500">3,800자 SEO</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col justify-between">
                  <div className="space-y-1">
                    <p className="text-[11px] font-bold text-white leading-tight line-clamp-1">
                      원천 하나로 완성하는 자동화 파이프라인
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">
                      단일 원본 인제스트와 플랫폼별 자율 재구성 기술 아키텍처 분석.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400 border-t border-white/5 pt-1.5">
                    <span>H1 · H2 · SEO 구조화</span>
                    <span className="text-emerald-400 font-semibold">완료</span>
                  </div>
                </div>
              </div>

              {/* 3. NEWSLETTER */}
              <div className="rounded-2xl border border-purple-500/30 bg-[#0d0a1d] p-4 space-y-3 shadow-lg relative overflow-hidden group hover:border-purple-500/60 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-purple-300 font-bold">
                    <Mail className="w-3.5 h-3.5" />
                    Newsletter
                  </span>
                  <span className="text-[10px] text-slate-500">주간 레터</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-slate-400 border-b border-white/5 pb-1">
                    <span>Subject: 이번 주 핵심 인사이트 3선</span>
                  </div>
                  <div className="space-y-1 pl-1 text-[10px] text-slate-300">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-purple-400 font-bold">01</span>
                      <span className="truncate">45분 영상 핵심 훅 추출</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-purple-400 font-bold">02</span>
                      <span className="truncate">3,800자 SEO 테크 칼럼</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-purple-400 font-bold">03</span>
                      <span className="truncate">바이럴 7편 연속 스레드</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-purple-400 border-t border-white/5 pt-1">
                    <span>발송 템플릿 완성</span>
                    <span className="text-emerald-400 font-semibold">큐레이션</span>
                  </div>
                </div>
              </div>

              {/* 4. SOCIAL */}
              <div className="rounded-2xl border border-emerald-500/30 bg-[#071311] p-4 space-y-3 shadow-lg relative overflow-hidden group hover:border-emerald-500/60 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                    <Share2 className="w-3.5 h-3.5" />
                    Social
                  </span>
                  <span className="text-[10px] text-slate-500">X · LinkedIn · Threads</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/10 p-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-[9px] text-emerald-300 font-bold">
                        K
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 font-medium">@kncalabs</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">1/7 🧵</span>
                  </div>

                  <div className="pl-6 border-l border-emerald-500/30 ml-2 py-0.5 space-y-0.5">
                    <p className="text-[11px] text-white font-medium leading-tight line-clamp-1">
                      “원천 하나로 전 채널을 완성하는 법”
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight line-clamp-1">
                      단 1회 입력으로 4개 플랫폼 규격 동시 변환.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-white/5">
                    <span className="flex items-center gap-2.5 text-[10px]">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Heart className="w-2.5 h-2.5 text-rose-400 fill-current" />
                        1.2k
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Repeat2 className="w-2.5 h-2.5 text-emerald-400" />
                        480
                      </span>
                    </span>
                    <span className="text-emerald-400 font-semibold">스레드 7연작</span>
                  </div>
                </div>
              </div>

              </div>
            </div>

          </div>

        </div>

        {/* 3. CONTINUOUS SYSTEM TRUNK (Physical Bus Line Down to The Idea) */}
        <div className="pt-14 sm:pt-20 flex flex-col items-center">
          <a
            href="#capabilities"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll down system pipeline to Capabilities"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">CAPABILITIES</span>
            <span className="text-xl font-light animate-bounce text-slate-400 group-hover:text-white leading-none">↓</span>
          </a>
          <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-sky-500/40 via-indigo-500/20 to-transparent mt-4" />
        </div>

      </div>

    </section>
  );
}
