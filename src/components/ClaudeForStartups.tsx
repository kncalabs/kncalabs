"use client";

import React from "react";
import { Sparkles, Cpu, Layers, ShieldCheck, CheckCircle, Flame, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ClaudeForStartups() {
  return (
    <section id="claude-startup" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Anthropic Claude API Technical Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {siteConfig.claudeStartup.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {siteConfig.claudeStartup.subtitle}
          </p>
        </div>

        {/* 6 Essential Review Pillars for Claude for Startups */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Item 1: What we build */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400">Pillar 01 — 회사 및 제품 정의</span>
              <h3 className="text-xl font-bold text-white">회사가 무엇을 만드는가</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              KNCA는 Anthropic Claude API의 고급 추론 성능을 기반으로 사내 문서 및 워크플로우를 보조하는 <strong>AI Content Automation Platform</strong>을 연구·개발 중입니다.
            </p>
          </div>

          {/* Item 2: Problem Solved */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Flame className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-rose-400">Pillar 02 — 해결하고자 하는 문제</span>
              <h3 className="text-xl font-bold text-white">어떤 문제를 해결하는가</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              단일 원천의 파편화된 비효율, 기존 단순 챗봇의 환각 한계 및 다채널 분산 워크플로우 문제를 기술적으로 개선하고자 합니다.
            </p>
          </div>

          {/* Item 3: Core Product */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-sky-400">Pillar 03 — 개발 중인 제품</span>
              <h3 className="text-xl font-bold text-white">제품 아키텍처</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Content Intelligence, AI Transformation, Quality Control, Multi-Channel Workflow 모듈을 하나로 연결하여 개발하고 있습니다.
            </p>
          </div>

          {/* Item 4: AI & Claude Integration */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover border-amber-500/30">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400">Pillar 04 — Claude API 활용</span>
              <h3 className="text-xl font-bold text-white">AI / Claude API 활용 방식</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Claude API의 대용량 컨텍스트와 Prompt Caching, Function Calling을 핵심 기반으로 삼아 분석 및 생성을 최적화하고 있습니다.
            </p>
          </div>

          {/* Item 5: Current Stage */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400">Pillar 05 — 현재 개발 단계</span>
              <h3 className="text-xl font-bold text-white">개발 진척 상황</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              현재 코어 엔진 알파 테스트를 진행 중이며, 기술 검증과 함께 Closed Beta를 준비하고 있습니다.
            </p>
          </div>

          {/* Item 6: Contact Channel */}
          <div className="glass-panel p-6 rounded-2xl space-y-4 glass-panel-hover">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400">Pillar 06 — 공식 채널</span>
              <h3 className="text-xl font-bold text-white">소통 및 파트너십 채널</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              엔터프라이즈 파트너 및 기술 제휴 문의에 신속하게 소통할 수 있도록 공식 채널(founder@kncalabs.com)을 운영합니다.
            </p>
          </div>

        </div>

        {/* Program Application Notice Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-sky-950/30 border border-amber-500/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Anthropic Claude API Integration Statement</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Anthropic Claude API 기반 엔터프라이즈 인텔리전스 구현
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              KNCA는 Anthropic의 최신 Claude API 모델 역량을 중심으로 설계되었으며, 안정적이고 정밀한 콘텐츠 자동화 파이프라인을 구축해 나가고 있습니다.
            </p>
          </div>
          <a
            href="mailto:founder@kncalabs.com?subject=[Claude%20API%20Inquiry]%20KNCA%20Contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
          >
            <span>담당자 문의하기</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
