"use client";

import React, { useState } from "react";
import { Sparkles, FileText, Video, MessageSquare, Mail, Copy, Check } from "lucide-react";

export default function TangibleOutcomes() {
  const [activeTab, setActiveTab] = useState<"article" | "script" | "social" | "newsletter">("article");
  const [copied, setCopied] = useState(false);

  const outputs = {
    article: {
      type: "Deep Dive Long-form Article",
      channel: "공식 블로그 / 테크 미디엄",
      timeSaved: "3.5시간 절감",
      title: "차세대 AI 에이전트가 소프트웨어 아키텍처를 재편하는 방식",
      snippet: `### 요약 및 핵심 논점
1. 기존의 단발성 프롬프트 인터랙션에서 다단계 자율 실행(Autonomous Execution) 루프로의 패러다임 전환
2. 컨텍스트 윈도우 한계를 극복하는 하이브리드 RAG와 지능형 메모리 캐싱 계층의 중요성
3. 엔터프라이즈 환경에서 검증된 결정론적 가드레일(Deterministic Guardrails) 구축 전략

최근 LLM 인프라의 발전은 단순한 질의응답을 넘어, 하나의 코어 지식을 바탕으로 자율적으로 파이프라인을 구동하는 지능형 워크플로우로 나아가고 있습니다...`
    },
    script: {
      type: "Short-form & Video Production Script",
      channel: "유튜브 쇼츠 / 릴스 / 틱톡",
      timeSaved: "2시간 절감",
      title: "[0-60s] 1분 만에 이해하는 AI 에이전트 작동 원리",
      snippet: `[00:00 - 00:05] [화면: 분절된 6개의 창이 빠르게 깜빡이는 인서트]
"매번 글 하나 쓰고 인스타, 블로그, 뉴스레터 따로 만드느라 밤새셨나요?"

[00:06 - 00:18] [화면: KNCA 단일 소스 입력창에 텍스트 1개가 주입되는 모션]
"핵심은 '다시 쓰는 것'이 아니라 '단일 원천에서 맥락을 추출하는 것'입니다."

[00:19 - 00:45] [화면: 3가지 채널 규격으로 즉시 동시 분기되는 결과 화면]
"Claude 기반 지능 엔진이 원고의 핵심 논점만 추출해 숏폼 스크립트와 소셜 카피로 수초 만에 변환합니다."

[00:46 - 00:60] [CTA 자막: Build Once. Automate More.]
"더 이상 복사-붙여넣기에 시간을 쓰지 마세요."`
    },
    social: {
      type: "Viral Social Thread & Micro Copy",
      channel: "X (트위터) / Threads / 링크드인",
      timeSaved: "1.5시간 절감",
      title: "핵심 인사이트 3줄 요약 스레드",
      snippet: `🧵 콘텐츠 파편화 시대에 크리에이터가 생존하는 유일한 공식:

1/ 콘텐츠 생산의 병목은 '아이디어'가 아니라 '포맷 변환'입니다.
하나의 롱폼을 소셜에 맞게 다시 줄이는 데 하루의 70%를 쓰고 계시지 않나요?

2/ 해결책은 OSMU(One Source Multi Use) 파이프라인 자동화.
원천 텍스트의 논리적 뼈대를 AI가 구조화하면, 4개 채널 동시 확장이 단 몇 초 만에 끝납니다.

3/ 효율적인 생산자가 결국 오디언스를 독점합니다.
#AI자동화 #생산성 #KNCA`
    },
    newsletter: {
      type: "Executive Weekly Newsletter",
      channel: "스티비 / 서브스택 / 사내 브리핑",
      timeSaved: "2.5시간 절감",
      title: "[KNCA Brief] 금주의 엔지니어링 & 자동화 인사이트",
      snippet: `안녕하세요, 구독자 여러분. 

이번 주 엔지니어링 브리프에서는 '콘텐츠를 정적인 문서가 아닌 동적 워크플로우로 전환하는 아키텍처'를 다룹니다.

💡 이번 주 핵심 하이라이트:
- 단일 원천 데이터(Source Data)의 지능형 벡터화
- 채널별 독자 페르소나에 맞춘 자율 톤앤매너 재구성
- 반복 배포 오퍼레이션 자동화로 달성한 생산성 지표

자세한 분석 전문과 실습 파이프라인은 본문 링크에서 확인하실 수 있습니다.`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputs[activeTab].snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tangible-outcomes" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-sky-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Tangible Outcomes */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>TANGIBLE DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            1개의 원천이 만드는 <br />
            <span className="text-gradient">실제 결과물을 확인하세요</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            추상적인 약속이 아닙니다. KNCA Labs 파이프라인을 통과했을 때 <br className="hidden sm:inline" />
            각 채널 규격에 맞춰 즉시 발행 가능한 실제 산출물입니다.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="mt-14 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("article")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "article"
                ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>심층 아티클</span>
          </button>

          <button
            onClick={() => setActiveTab("script")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "script"
                ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>숏폼 영상 스크립트</span>
          </button>

          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "social"
                ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>소셜 스레드</span>
          </button>

          <button
            onClick={() => setActiveTab("newsletter")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "newsletter"
                ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>뉴스레터 브리프</span>
          </button>
        </div>

        {/* Live Output Preview Console */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Header Bar */}
          <div className="p-4 sm:px-6 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold text-white">
                  {outputs[activeTab].type}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  타깃 채널: {outputs[activeTab].channel}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                {outputs[activeTab].timeSaved}
              </span>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>내용 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {outputs[activeTab].title}
            </h4>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {outputs[activeTab].snippet}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                자동 포맷 검증 완료 (Format Validated)
              </span>
              <span>Claude 3.5 Sonnet Engine</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
