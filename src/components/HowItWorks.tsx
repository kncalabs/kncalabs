"use client";

import React from "react";
import { FileInput, Brain, RefreshCw, CheckSquare, SendHorizontal, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Collect",
      desc: "원천 콘텐츠를 수집한다.",
      icon: FileInput,
      badge: "Input"
    },
    {
      number: "02",
      title: "Understand",
      desc: "AI가 콘텐츠를 분석한다.",
      icon: Brain,
      badge: "Analysis"
    },
    {
      number: "03",
      title: "Transform",
      desc: "목적에 맞는 다양한 콘텐츠 형태로 변환한다.",
      icon: RefreshCw,
      badge: "Transformation"
    },
    {
      number: "04",
      title: "Review",
      desc: "품질을 검수하고 필요한 경우 사람이 승인한다.",
      icon: CheckSquare,
      badge: "Guardrail"
    },
    {
      number: "05",
      title: "Publish",
      desc: "각 채널에 맞게 준비된 콘텐츠를 배포한다.",
      icon: SendHorizontal,
      badge: "Distribution"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            5단계 콘텐츠 자율 파이프라인
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Turn One Source Into Everything — KNCA의 데이터 처리 메커니즘
          </p>
        </div>

        {/* 5-Step Visual Flow Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative group">
                <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover border border-slate-800 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-0.5 rounded-full bg-slate-950">
                        {step.badge}
                      </span>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-mono text-sky-400 font-semibold tracking-wider block">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-extrabold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {step.desc}
                    </p>

                  </div>

                  {!isLast && (
                    <div className="pt-2 hidden lg:flex items-center text-slate-600 justify-end">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>

                {!isLast && (
                  <div className="flex lg:hidden justify-center my-2 text-slate-600">
                    <ArrowDown className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
