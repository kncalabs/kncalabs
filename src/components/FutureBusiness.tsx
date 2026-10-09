"use client";

import React from "react";
import { Server, UserCheck, Briefcase, Network, Code2, AlertCircle } from "lucide-react";

export default function FutureBusiness() {
  const futureItems = [
    {
      id: "future-1",
      icon: Server,
      title: "AI Content Infrastructure",
      status: "Planned",
      statusType: "planned",
      description: "고성능 대규모 콘텐츠 변환 및 자동화 파이프라인을 지탱하는 기반 인프라 체계.",
      stageDetail: "로드맵 계획 단계 — 핵심 엔진 안정화 후 확장 예정"
    },
    {
      id: "future-2",
      icon: UserCheck,
      title: "Creator Automation",
      status: "Planned",
      statusType: "planned",
      description: "개인 창작자를 위한 1인 미디어 다채널 자율 배포 및 멀티 포맷 스케일업 솔루션.",
      stageDetail: "클로즈드 베타 피드백 수렴 후 서비스 구체화 예정"
    },
    {
      id: "future-3",
      icon: Briefcase,
      title: "Business Content Automation",
      status: "Exploring",
      statusType: "exploring",
      description: "기업 브랜드, 미디어사 및 조직의 반복 콘텐츠 오퍼레이션을 자율화하는 엔터프라이즈 솔루션.",
      stageDetail: "시장 수요 조사 및 파트너십 유즈케이스 탐색 단계"
    },
    {
      id: "future-4",
      icon: Network,
      title: "AI Workflow Platform",
      status: "Exploring",
      statusType: "exploring",
      description: "외부 협업 도구 및 에이전트 간 오케스트레이션을 지원하는 차세대 통합 워크플로우 플랫폼.",
      stageDetail: "개념 검증(PoC) 및 아키텍처 연구 단계"
    },
    {
      id: "future-5",
      icon: Code2,
      title: "API / Automation Infrastructure",
      status: "Exploring",
      statusType: "exploring",
      description: "개발자와 타 시스템이 직접 연동하여 콘텐츠 변환 파이프라인을 호출할 수 있는 오픈 API.",
      stageDetail: "API 프로토콜 및 인터페이스 규격 리서치 단계"
    }
  ];

  return (
    <section id="future-business" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      {/* Background Subtle Tech Ambient Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-indigo-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>ROADMAP & FUTURE INITIATIVES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Future Business
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            현재 개발 중인 핵심 엔진 이후, 단계적으로 확장해 나갈 미래 비즈니스 및 인프라 방향성입니다.
          </p>
        </div>

        {/* Clear Disclaimer Banner: Transparent Distinction */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl bg-slate-900/80 border border-slate-800 p-4 flex items-start gap-3 backdrop-blur-sm">
          <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed space-y-1">
            <span className="font-semibold text-white font-mono block">
              STATUS CLARIFICATION
            </span>
            <p>
              아래 항목들은 향후 계획(Planned) 및 연구 탐색(Exploring) 단계의 미래 사업 영역입니다. 
              KNCA Labs는 아직 상용 출시되지 않은 기능을 현재 제공 중인 것처럼 과장하지 않으며, 
              투명한 로드맵에 따라 차근차근 검증해 나가고 있습니다.
            </p>
          </div>
        </div>

        {/* 5 Distinct Future Business Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {futureItems.map((item) => {
            const Icon = item.icon;
            const isPlanned = item.statusType === "planned";

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-slate-900/35 hover:bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 p-6 sm:p-7 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/70 border border-slate-700/80 group-hover:border-indigo-400/40 flex items-center justify-center text-indigo-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[11px] font-mono px-3 py-1 rounded-full font-semibold border ${
                        isPlanned
                          ? "bg-sky-500/10 text-sky-300 border-sky-500/30"
                          : "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Bottom Stage Detail */}
                <div className="pt-5 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.stageDetail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
