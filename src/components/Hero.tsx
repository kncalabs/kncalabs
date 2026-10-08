"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Code, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow min-h-[90vh] flex items-center justify-center">
      
      {/* Restrained AI / Data Flow Background Animation */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
            </linearGradient>
            <pattern id="data-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.25)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#data-grid)" />
          
          <g className="animate-pulse duration-1000">
            <path d="M -100 150 Q 400 50 1200 250" fill="none" stroke="url(#grid-grad)" strokeWidth="1.5" strokeDasharray="6 6" />
            <path d="M -50 350 Q 500 200 1300 450" fill="none" stroke="url(#grid-grad)" strokeWidth="1.5" strokeDasharray="8 8" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Transparent Program & Development Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Early Stage Product in Active Development</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
            Turn One Source <br className="hidden sm:inline" />
            <span className="text-gradient">Into Everything.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            KNCA is an AI-powered content automation platform designed to transform a single source into optimized content for multiple channels.
          </p>

          {/* POSITIONING STATEMENT BAR (Hero 아래 소문장 배치) */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
              <span>Built for creators, publishers, and teams who want to automate repetitive content workflows.</span>
            </div>
          </div>

          {/* Key Honest Technical Points */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Single Source Transformation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Claude API Powered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Multi-Channel Output Engine
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-base shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
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

        {/* Development Interface Preview Mockup */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl glass-panel p-2 md:p-4 shadow-2xl border border-slate-800/80">
          <div className="bg-[#080c14] rounded-xl overflow-hidden border border-slate-800">
            
            {/* Mock Window Controls */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">knca-content-automation.internal (개발 중 프로토타입 예시)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Code className="w-3.5 h-3.5 text-sky-400" />
                <span>Engine: Claude API</span>
              </div>
            </div>

            {/* Architecture Preview Flow */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-sky-400">01. Single Source Ingestion</span>
                <h3 className="text-base font-bold text-white">원천 데이터 통합 수집</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  단일 원본 문서, 텍스트, 아티클을 인공지능 엔드포인트로 인덱싱.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-purple-400">02. Claude AI Processing</span>
                <h3 className="text-base font-bold text-white">채널별 지능형 변환</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Claude API를 이용해 포맷, 톤앤매너, 구조를 채널 특성에 맞게 자율 재구성.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-amber-400">03. Multi-Channel Output</span>
                <h3 className="text-base font-bold text-white">멀티 채널 최적화 출력</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  블로그, 소셜 리포트, 요약문, 이메일 뉴스레터 등 다각도 맞춤형 생성.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
