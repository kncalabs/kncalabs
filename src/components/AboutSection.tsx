"use client";

import React from "react";
import { Building2, Calendar, MapPin, Activity } from "lucide-react";

export default function CompanySection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Statement Card */}
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 space-y-6 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-semibold">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>COMPANY OVERVIEW</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About <span className="text-gradient">KNCA Labs</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white font-bold leading-snug">
              &quot;KNCA Labs is building the AI infrastructure that turns content into workflows.&quot;
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              KNCA Labs는 단순히 문장을 대신 써주는 AI 도구가 아닌, 원천 데이터의 수집부터 다채널 자율 배포까지 전 과정을 연결하는 차세대 AI 워크플로우 인프라를 구축합니다.
            </p>
          </div>

          {/* Clean Company Profile Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-7 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                  Corporate Profile
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                  KNCA Labs
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Closed Beta in Active Development</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div className="space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Established
                </span>
                <p className="text-white font-medium text-sm">
                  Founded in 2023 · South Korea
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  Operations & Entity
                </span>
                <p className="text-white font-medium text-sm">
                  Operated by Stay C Jeju (스테이씨 제주)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Domain & Focus
                </span>
                <p className="text-slate-200 font-medium">
                  AI Content Automation Platform
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
