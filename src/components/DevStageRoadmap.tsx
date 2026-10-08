"use client";

import React from "react";
import { Clock } from "lucide-react";

export default function DevStageRoadmap() {
  const statusItems = [
    {
      phase: "Phase 01",
      title: "Core Infrastructure & Architecture",
      status: "Completed",
      desc: "단일 원천 데이터 수집 및 멀티 모듈 기반 시스템 구조 설계 완료."
    },
    {
      phase: "Phase 02",
      title: "Claude 3.5 Sonnet API Integration",
      status: "Development — Active",
      desc: "Anthropic Claude API 오케스트레이션 및 Prompt Caching 연동 알파 테스트 진행 중."
    },
    {
      phase: "Phase 03",
      title: "Claude for Startups Application & Closed Beta",
      status: "Next up",
      desc: "스타트업 지원 프로그램 검토 및 Closed Beta 사전 신청 접수 진행."
    },
    {
      phase: "Phase 04",
      title: "Multi-Channel Automation Expansion",
      status: "Planned workflow",
      desc: "7대 다채널 콘텐츠 포맷 자율 가공 파이프라인 단계적 확장."
    }
  ];

  return (
    <section id="stage" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Development Status</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Building in <span className="text-gradient">Public</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            KNCA is currently under active development. We are building the core automation infrastructure first, with a focus on reliability, modular workflows, and scalable content operations.
          </p>
        </div>

        {/* Current Active Badge Banner */}
        <div className="mt-10 max-w-xl mx-auto rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-sky-950/30 border border-emerald-500/30 p-5 text-center shadow-lg">
          <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-1">
            CURRENT OVERALL STATUS
          </span>
          <div className="text-xl font-extrabold text-white flex items-center justify-center gap-2 font-mono">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <span>Development — Active</span>
          </div>
        </div>

        {/* Status Phase Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statusItems.map((item) => {
            const isCompleted = item.status === "Completed";
            const isActive = item.status === "Development — Active";

            return (
              <div
                key={item.phase}
                className={`glass-panel p-6 rounded-2xl space-y-3 border transition-all ${
                  isActive
                    ? "border-emerald-500/40 bg-emerald-950/10 ring-1 ring-emerald-500/30 shadow-lg"
                    : isCompleted
                    ? "border-slate-800 opacity-90"
                    : "border-slate-800/60 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    {item.phase}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold border ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : isCompleted
                        ? "bg-slate-800 text-slate-300 border-slate-700"
                        : "bg-slate-950 text-slate-500 border-slate-900"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
