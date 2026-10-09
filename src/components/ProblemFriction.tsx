"use client";

import React from "react";
import { AlertTriangle, Clock, RefreshCcw, Layers, Zap, CheckCircle2 } from "lucide-react";

export default function ProblemFriction() {
  const painPoints = [
    {
      id: "pain-1",
      icon: Clock,
      badge: "시간 소모",
      title: "매번 반복되는 포맷 재작업",
      description: "하나의 원고나 영상을 만든 후, 블로그 글, 소셜 스레드, 뉴스레터, 숏폼 스크립트로 분해하느라 본질적인 기획 시간보다 포맷 변환에 4배 이상의 시간을 낭비합니다.",
      stat: "주당 12+ 시간",
      statLabel: "단순 복제 및 재편집에 소비"
    },
    {
      id: "pain-2",
      icon: Layers,
      badge: "도구 파편화",
      title: "연결되지 않는 6개 이상의 툴",
      description: "에디터, 요약 봇, 번역기, SNS 예약 도구, CMS 관리자 페이지 사이를 끊임없이 오가며 복사·붙여넣기를 반복하는 수작업 마찰이 생산성을 갉아먹습니다.",
      stat: "6+ 분절된 툴",
      statLabel: "컨텍스트 단절과 실수 유발"
    },
    {
      id: "pain-3",
      icon: RefreshCcw,
      badge: "채널 확장 한계",
      title: "콘텐츠 확장의 물리적 벽",
      description: "아이디어는 넘치지만 각 채널의 규격과 톤앤매너에 맞게 재생산할 인력과 여력이 부족하여, 훌륭한 원천 콘텐츠가 1회성 발행에 그치고 휘발됩니다.",
      stat: "85% 이상",
      statLabel: "원천 콘텐츠가 단일 채널에서 사장"
    }
  ];

  return (
    <section id="problem-friction" className="py-20 sm:py-28 bg-[#060911] relative border-t border-slate-800/80">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-rose-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Problem First */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono font-medium tracking-wide">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>THE REPETITIVE FRICTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            좋은 콘텐츠가 있어도, <br />
            <span className="text-slate-400">반복 배포 노동에 갇혀 계십니까?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            크리에이터와 비즈니스가 겪는 진짜 병목은 아이디어의 부재가 아닙니다. <br className="hidden sm:inline" />
            단 하나의 원천을 여러 채널에 맞게 다시 쓰고 다듬는 <strong className="text-white font-semibold">비효율적인 반복 노동</strong>입니다.
          </p>
        </div>

        {/* 3 Core Pain Points Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/90 p-7 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-center text-rose-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-rose-300/90 border border-rose-500/20 bg-rose-500/5 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/70 space-y-1">
                  <div className="text-lg font-mono font-bold text-rose-400 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {item.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Before vs After Contrast Architecture */}
        <div className="mt-12 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* The Old Way: Manual & Segmented */}
            <div className="space-y-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider">
                  기존 방식 (Conventional Way)
                </span>
                <span className="text-[11px] font-mono text-slate-400">수작업 4~6시간 소요</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>원천 1개 작성 후 채널마다 처음부터 다시 줄글 재가공</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>ChatGPT 복사·붙여넣기, 노션 정리, 블로그 CMS 수동 업로드</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>SNS용 요약, 썸네일 카피, 뉴스레터 분해로 하루 작업 마비</span>
                </div>
              </div>
            </div>

            {/* The KNCA Way: Autonomous Pipeline */}
            <div className="space-y-4 p-5 rounded-xl bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-indigo-950/30 border border-sky-500/40 shadow-lg shadow-sky-950/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  KNCA Labs 파이프라인
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">1회 투입 · 수초 내 자동화</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Build Once</strong>: 원천 텍스트나 리서치 자료 단 1개만 입력</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Context Intelligence</strong>: 맥락 보존 및 채널별 타깃 규격 자동 구조화</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Automate More</strong>: 아티클·숏폼 스크립트·소셜·뉴스레터 동시 산출</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
