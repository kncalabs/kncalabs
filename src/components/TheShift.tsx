"use client";

import React from "react";
import { Zap, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function TheShift() {
  return (
    <section id="the-shift" className="py-36 sm:py-52 bg-[#060a16] relative border-t border-sky-900/40 overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/15 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        
        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/40 text-xs font-semibold tracking-wider text-sky-300">
            <Zap className="w-4 h-4 text-sky-400" />
            <span>일하는 방식의 전환</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            더 이상 다시 쓰지 마세요.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
            복사하고 줄여 쓰던 반복 노동을 끝냅니다.
          </p>
        </div>

        {/* Clean Contrast Comparison: 직관적이고 쉬운 우리말 대조 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Old Way */}
          <div className="rounded-3xl bg-slate-950/80 border border-rose-950/60 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>기존 방식: 반복 노동</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-medium">
                  수작업 소모
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-400 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <span>1. 글·영상 원문 1개 완성</span>
                  <span className="text-slate-500">반나절</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between text-rose-300">
                  <span>2. 쇼츠용으로 다시 쓰기</span>
                  <span>1~2시간</span>
                </div>
                <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 flex items-center justify-between text-rose-300">
                  <span>3. 블로그·SNS용으로 다시 요약</span>
                  <span>반복 복사</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-rose-400 flex items-center justify-between">
              <span>결과: 시간 소모</span>
              <span className="font-bold">지속 불가능</span>
            </div>
          </div>

          {/* Right: The KNCA Autonomous Way */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-indigo-950/50 border border-sky-500/50 p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>KNCA Labs: 자동 파이프라인</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-medium">
                  자동 완성
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-sky-500/30 flex items-center justify-between">
                  <span>1. 원천 1개 입력</span>
                  <span className="text-emerald-400 font-semibold">입력 끝</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/40 flex items-center justify-between">
                  <span>2. 채널별 자동 재작성</span>
                  <span className="text-indigo-300">스스로 분해</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/50 flex items-center justify-between text-emerald-300">
                  <span>3. 모든 채널 동시 완성</span>
                  <span className="font-bold">수초 완료</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>시간 90% 절감</span>
              </span>
              <span className="text-white font-bold">Build Once</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
