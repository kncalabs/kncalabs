"use client";

import React, { useState } from "react";
import { Brain, RefreshCw, ShieldCheck, Layers, Check, Code } from "lucide-react";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const productCards = [
    {
      id: "card-1",
      icon: Brain,
      title: "Content Intelligence",
      badge: "Analysis Engine",
      summary: "원천 콘텐츠를 분석하고 핵심 정보와 구조를 추출한다.",
      details: [
        "Claude 3.5 Sonnet API 기반 원본 텍스트 및 아티클 인덱싱",
        "핵심 주제, 키워드, 서사 맥락(Narrative Context) 자동 분해",
        "도메인 용어 및 세만틱 구조 정밀 보존"
      ],
      codeSnippet: `// 01. Content Intelligence Ingestion
const intelligence = await kncaCore.analyzeSource({
  sourceText: articleContent,
  extractKeyTakeaways: true,
  preserveDomainTerms: true
});`
    },
    {
      id: "card-2",
      icon: RefreshCw,
      title: "AI Transformation",
      badge: "Multi-Format",
      summary: "하나의 원천 콘텐츠를 다양한 형태의 콘텐츠로 변환한다.",
      details: [
        "블로그, 소셜 리포트, 이메일, 요약문 자율 변환",
        "타깃 채널별 길이, 분량, 톤앤매너 자동 가공",
        "단일 원천 멀티 포맷 파이프라인 수립"
      ],
      codeSnippet: `// 02. AI Multi-Channel Transformation
const transformed = await kncaCore.transform({
  analysis: intelligence,
  targetChannels: ["tech_blog", "newsletter", "social_summary"],
  tone: "professional_b2b"
});`
    },
    {
      id: "card-3",
      icon: ShieldCheck,
      title: "Quality Control",
      badge: "Human-in-the-Loop",
      summary: "자동 생성 콘텐츠를 검수하고 품질을 관리할 수 있도록 설계한다.",
      details: [
        "실무자 최종 검수를 위한 인간-AI 협업 인터페이스",
        "브랜드 가이드라인 준수 및 환각 방지 검증 레이어",
        "발행 전 버전 비교 및 승인 프로세스"
      ],
      codeSnippet: `// 03. Quality Control & Guardrails
const qualityCheck = await kncaGuard.reviewContent({
  draft: transformed,
  checkCompliance: true,
  requireHumanApproval: true
});`
    },
    {
      id: "card-4",
      icon: Layers,
      title: "Multi-Channel Workflow",
      badge: "Unified Pipeline",
      summary: "여러 플랫폼에 맞는 콘텐츠를 하나의 워크플로우에서 관리한다.",
      details: [
        "파편화된 채널 관리를 하나의 파이프라인으로 일원화",
        "채널별 상태 트래킹 및 발행 준비 보조",
        "워크플로우 병목 절감 및 생산성 극대화"
      ],
      codeSnippet: `// 04. Multi-Channel Workflow Management
const workflowStatus = await kncaPipeline.manageChannels({
  approvedContent: qualityCheck.approved,
  schedulePublishing: true
});`
    }
  ];

  return (
    <section id="product-features" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
            Product Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet <span className="text-gradient">KNCA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            KNCA is being built as an AI-native content automation platform that connects content processing, transformation, quality control, and multi-channel publishing into one workflow.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCards.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeTab === idx;
            return (
              <div
                key={card.id}
                onClick={() => setActiveTab(idx)}
                className={`glass-panel p-6 rounded-2xl cursor-pointer transition-all border ${
                  isActive
                    ? "bg-slate-900/90 border-sky-500/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isActive ? "bg-sky-500/20 border-sky-500/40 text-sky-400" : "bg-slate-900 border-slate-700 text-slate-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full bg-slate-950">
                      {card.badge}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-base font-bold text-white">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Feature Detail Preview */}
        <div className="mt-10 rounded-3xl glass-panel p-6 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
                  FEATURE DETAILED OVERVIEW
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {productCards[activeTab].title}
                </h3>
                <p className="text-sm text-slate-300">
                  {productCards[activeTab].summary}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {productCards[activeTab].details.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#080c14] border border-slate-800 overflow-hidden shadow-2xl">
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">knca-architecture.ts</span>
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs text-sky-300 font-mono">Claude 3.5 Sonnet Engine</span>
                  </div>
                </div>
                <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{productCards[activeTab].codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
