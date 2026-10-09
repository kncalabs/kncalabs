"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Loader2,
  Copy,
  Check,
  Video,
  FileText,
  Mic,
  Share2,
  Sparkles,
} from "lucide-react";

export default function MonumentalEngine() {
  const [selectedSourceType, setSelectedSourceType] = useState<"video" | "article" | "podcast">("video");
  const [sourceUrl, setSourceUrl] = useState("https://youtube.com/watch?v=ai-content-workflow");
  const [isSynthesized, setIsSynthesized] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeOutputTab, setActiveOutputTab] = useState<"shorts" | "article" | "social">("shorts");
  const [copied, setCopied] = useState(false);

  const sourcePresets = {
    video: {
      url: "https://youtube.com/watch?v=ai-content-workflow",
      title: "제품 소개 영상 (45분 유튜브 영상)",
      format: "영상 링크",
      icon: Video,
    },
    article: {
      url: "https://blog.kncalabs.com/autonomous-content",
      title: "기술 심층 칼럼 (블로그 글)",
      format: "글 원문",
      icon: FileText,
    },
    podcast: {
      url: "https://podcasts.apple.com/interview",
      title: "인터뷰 대담 (30분 음성 녹취)",
      format: "음성 녹취",
      icon: Mic,
    },
  };

  const outputsData = {
    shorts: {
      title: "숏폼 대본 (0~60초)",
      channel: "유튜브 쇼츠 · 인스타그램 릴스 · 틱톡",
      formatBadge: "0-60초 대본",
      content: `[00:00] "채널마다 글을 새로 쓰느라 지치셨나요?"

[00:10] 영상 1개만 넣으세요.
AI가 쇼츠 대본, 블로그 글, SNS 요약본까지 단번에 완성합니다.

[00:40] 더 이상 복사하지 마세요.
한 번 만들고, 나머지는 시스템에 맡기세요.`,
    },
    article: {
      title: "블로그 심층 칼럼",
      channel: "네이버 블로그 · 벨로그 · 테크 블로그",
      formatBadge: "장문 칼럼",
      content: `# 더 많이 쓰는 시대는 끝났습니다: 하나의 원천으로 시작하기

콘텐츠 제작에서 가장 지치는 일은 글쓰기가 아닙니다.
완성된 글 하나를 채널마다 줄여 쓰는 '반복 노동'입니다.

1. 한 번만 만드세요.
2. 채널별 변환은 시스템에 맡기세요.
3. 쇼츠, 블로그, SNS가 동시에 완성됩니다.`,
    },
    social: {
      title: "SNS 요약 스레드",
      channel: "X(트위터) · 링크드인 · 인스타그램",
      formatBadge: "3줄 핵심 요약",
      content: `콘텐츠 생산의 70%는 채널별 복사에 낭비됩니다.

1. 영상 1개로 충분합니다.
2. 모든 채널 맞춤 글이 즉시 생성됩니다.
3. 반복 노동을 멈추세요.`,
    },
  };

  const handleExecute = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSynthesized(true);
    }, 1600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputsData[activeOutputTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="core-engine"
      className="relative pt-44 pb-36 md:pt-56 md:pb-48 overflow-hidden bg-radial-glow min-h-screen flex flex-col items-center justify-center border-b border-sky-950/60"
    >
      {/* Precision Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-precision-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.035)" strokeWidth="1" />
              <circle cx="48" cy="48" r="1" fill="rgba(56, 189, 248, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-precision-grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full space-y-16 sm:space-y-24 relative z-10">
        
        {/* 1. MONUMENTAL HEADLINE (7rem) */}
        <div className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <div className="inline-flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold shadow-lg shadow-sky-950/50 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="tracking-widest uppercase">AUTONOMOUS CONTENT PIPELINE</span>
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

        {/* 2. THE SINGULAR FOCUSED ACTION ARTIFACT: 쉬운 말로 직관적 동작 */}
        <div className="max-w-3xl mx-auto">
          {!isSynthesized ? (
            /* STATE A: 입력 단계 */
            <div className="rounded-3xl bg-slate-950/90 border border-sky-500/40 p-6 sm:p-8 space-y-5 shadow-2xl shadow-sky-950/40 backdrop-blur-xl">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  01. 원천 콘텐츠 선택
                </span>

                {/* 3 Source Options */}
                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs">
                  {(["video", "article", "podcast"] as const).map((type) => {
                    const preset = sourcePresets[type];
                    const Icon = preset.icon;
                    const isSelected = selectedSourceType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSelectedSourceType(type);
                          setSourceUrl(preset.url);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 capitalize font-medium ${
                          isSelected
                            ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{preset.format}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* URL Input & Execution */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="콘텐츠 링크를 입력하세요..."
                  className="flex-1 px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-hidden focus:border-sky-500 transition-colors font-mono"
                />

                <button
                  type="button"
                  onClick={handleExecute}
                  disabled={isProcessing}
                  className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-[0.98] disabled:opacity-50 shrink-0"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>변환 중...</span>
                    </>
                  ) : (
                    <>
                      <span>한 번에 만들기</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>예시: {sourcePresets[selectedSourceType].title}</span>
                <span className="text-emerald-400 font-medium">준비 완료</span>
              </div>
            </div>
          ) : (
            /* STATE B: 생성 결과 확인 */
            <div className="rounded-3xl bg-slate-950/95 border border-emerald-500/40 p-6 sm:p-8 space-y-5 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl animate-fade-in-up">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    02. 완성된 다채널 결과물
                  </span>
                </div>

                <div className="inline-flex rounded-xl bg-slate-900 p-1 border border-slate-800 text-xs">
                  {(["shorts", "article", "social"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveOutputTab(tab)}
                      className={`px-3.5 py-1.5 rounded-lg transition-colors capitalize ${
                        activeOutputTab === tab ? "bg-slate-800 text-sky-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab === "shorts" ? "숏폼 대본" : tab === "article" ? "블로그 칼럼" : "SNS 요약본"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-white font-semibold">{outputsData[activeOutputTab].title} ({outputsData[activeOutputTab].channel})</span>
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? "복사됨" : "복사"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed whitespace-pre-line max-h-56 overflow-y-auto">
                  {outputsData[activeOutputTab].content}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                <button
                  type="button"
                  onClick={() => setIsSynthesized(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ← 다른 콘텐츠로 다시 시도
                </button>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" />
                  3개 채널 배포 준비 완료
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
