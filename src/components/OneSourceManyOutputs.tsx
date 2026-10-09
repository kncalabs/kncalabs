"use client";

import React, { useState } from "react";
import {
  Video,
  FileText,
  Mic,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function OneSourceManyOutputs() {
  const [selectedSource, setSelectedSource] = useState<"video" | "article" | "podcast">("video");
  const [activeOutputFilter, setActiveOutputFilter] = useState<"all" | "active" | "planned">("all");

  const sources = [
    {
      id: "video",
      icon: Video,
      title: "YouTube Video",
      badge: "SOURCE INPUT",
      desc: "영상 URL 또는 원시 음성/영상 파일 주입",
      status: "Active Alpha",
      isLive: true
    },
    {
      id: "article",
      icon: FileText,
      title: "Article",
      badge: "SOURCE INPUT",
      desc: "긴 롱폼 칼럼, 기술 문서, 블로그 글 원문",
      status: "Active Alpha",
      isLive: true
    },
    {
      id: "podcast",
      icon: Mic,
      title: "Podcast",
      badge: "SOURCE INPUT",
      desc: "인터뷰 및 대담 팟캐스트 녹취 오디오 텍스트",
      status: "Active Alpha",
      isLive: true
    }
  ];

  const aiPhases = [
    { title: "Understand", desc: "문맥·의도 파악", detail: "Claude 3.5 Sonnet 추론 엔진이 핵심 논점을 분석" },
    { title: "Extract", desc: "지식 그래프 추출", detail: "핵심 주장, 훅, 근거 데이터를 정밀 분해" },
    { title: "Generate", desc: "다포맷 자율 생성", detail: "포맷별 최적화된 프롬프트 체인으로 동시 집필" },
    { title: "Adapt", desc: "톤앤매너 재설계", detail: "채널별 독자 소비 문법에 맞춰 문체 최적화" }
  ];

  const outputs = [
    {
      id: "out-1",
      title: "Short-form Video",
      type: "Shorts / Reels / TikTok Script",
      desc: "0-60초 분초 단위 씬 구성 및 훅(Hook) 대본",
      status: "Active Build",
      isLive: true,
      tag: "Video"
    },
    {
      id: "out-2",
      title: "Article",
      type: "Deep Dive Long-form Column",
      desc: "미디엄 / 벨로그 / 자사 블로그용 기술 심층 기고문",
      status: "Active Build",
      isLive: true,
      tag: "Editorial"
    },
    {
      id: "out-3",
      title: "Social",
      type: "Viral Micro Thread (X/LinkedIn)",
      desc: "핵심 요약 3줄 불릿 및 인사이트 스레드",
      status: "Active Build",
      isLive: true,
      tag: "Social"
    },
    {
      id: "out-4",
      title: "Newsletter",
      type: "Executive Weekly Curation",
      desc: "구독자 발송용 이메일 뉴스레터 포맷",
      status: "Active Build",
      isLive: true,
      tag: "Email"
    },
    {
      id: "out-5",
      title: "SEO Content",
      type: "Search-Engine Optimized Structure",
      desc: "검색엔진 상위 랭킹용 메타 태그 및 시맨틱 웹 문서",
      status: "Planned Roadmap",
      isLive: false,
      tag: "Search SEO"
    }
  ];

  const filteredOutputs = outputs.filter((out) => {
    if (activeOutputFilter === "active") return out.isLive;
    if (activeOutputFilter === "planned") return !out.isLive;
    return true;
  });

  return (
    <section id="one-source-many-outputs" className="py-24 sm:py-36 bg-[#070b13] relative border-t border-slate-800/80 overflow-hidden">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium tracking-wide">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>CORE ARCHITECTURE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            One Source <span className="text-slate-500 font-light">→</span> <span className="text-gradient">Many Outputs</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            단 하나의 원천(Source)이 AI 지능을 통과하여 5가지 다채널 결과물로 폭발하는 시각적 매트릭스
          </p>
        </div>

        {/* Status Disclaimer Banner: Transparent Distinction (Current Build vs Future Planned) */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800/90 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              <strong className="text-white font-mono block sm:inline mr-2">투명한 기능 구분:</strong>
              <span>현재 활성 구현된 기능(<strong className="text-emerald-400 font-mono">Active Build</strong>)과 향후 확장 예정인 기능(<strong className="text-indigo-400 font-mono">Planned Roadmap</strong>)을 솔직하게 구분합니다.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Active Alpha
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-mono text-indigo-300">
              <Clock className="w-3 h-3 text-indigo-400" />
              Planned
            </span>
          </div>
        </div>

        {/* 3-Column Visual Flow Matrix: Left (Source) -> Center (AI) -> Right (Outputs) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
          
          {/* LEFT COLUMN: ONE SOURCE (3 Cols) */}
          <div className="lg:col-span-3 rounded-3xl bg-slate-950/70 border border-slate-800 p-6 flex flex-col justify-between backdrop-blur-md space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  01. ONE SOURCE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  INPUT
                </span>
              </div>

              <div className="space-y-3">
                {sources.map((src) => {
                  const Icon = src.icon;
                  const isSelected = selectedSource === src.id;

                  return (
                    <div
                      key={src.id}
                      onClick={() => setSelectedSource(src.id as "video" | "article" | "podcast")}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-sky-500/15 border-sky-400/80 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/30"
                          : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? "bg-sky-500/20 text-sky-300" : "bg-slate-800 text-slate-400"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-bold tracking-tight ${isSelected ? "text-white" : "text-slate-300"}`}>
                            {src.title}
                          </span>
                        </div>

                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          {src.status}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                        {src.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Selected Input Node</span>
              <span className="text-sky-400 font-semibold uppercase">{selectedSource}</span>
            </div>
          </div>

          {/* CENTER COLUMN: AI INTELLIGENCE CORE (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-indigo-950/30 via-slate-900/90 to-slate-950/80 border border-indigo-500/40 p-6 flex flex-col justify-between backdrop-blur-md space-y-4 shadow-xl shadow-indigo-950/20">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                    02. AI INTELLIGENCE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  CLAUDE CORE
                </span>
              </div>

              <div className="space-y-3">
                {aiPhases.map((phase, idx) => (
                  <div
                    key={phase.title}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm font-bold font-mono text-white">
                          {phase.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-sky-400">
                        {phase.desc}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      {phase.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-indigo-300 flex items-center justify-between">
              <span>Engine Status</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Alpha Pipeline
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: MANY OUTPUTS (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-950/70 border border-slate-800 p-6 flex flex-col justify-between backdrop-blur-md space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  03. MANY OUTPUTS
                </span>
                
                {/* Filter Controls */}
                <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveOutputFilter("all")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeOutputFilter === "all" ? "bg-slate-800 text-white font-bold" : "text-slate-400"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveOutputFilter("active")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeOutputFilter === "active" ? "bg-slate-800 text-emerald-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setActiveOutputFilter("planned")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeOutputFilter === "planned" ? "bg-slate-800 text-indigo-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    Planned
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                {filteredOutputs.map((out) => {
                  return (
                    <div
                      key={out.id}
                      className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white tracking-tight">
                            {out.title}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500">
                            ({out.tag})
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans leading-tight">
                          {out.desc}
                        </p>
                      </div>

                      <div className="shrink-0 pt-0.5">
                        {out.isLive ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-semibold">
                            <Clock className="w-3 h-3 text-indigo-400" />
                            Planned
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Deliverables Ready</span>
              <span className="text-emerald-400 font-bold">4 Active · 1 Planned</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
