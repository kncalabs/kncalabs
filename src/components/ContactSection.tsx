"use client";

import React from "react";
import { Mail, Building2, ExternalLink, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let’s build better <br />
                <span className="text-gradient">content workflows.</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              기술 제휴, 솔루션 연동 문의, Closed Beta 사전 신청 문의 등 모든 문의를 신속히 안내해 드립니다.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl glass-panel border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400">Official Email</h4>
                  <a
                    href="mailto:founder@kncalabs.com"
                    className="text-base font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5 font-mono"
                  >
                    <span>founder@kncalabs.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass-panel border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400">Studio Name</h4>
                  <p className="text-base font-bold text-white">KNCA Labs Inc.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Mail Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">직접 이메일 문의 작성</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">성함 / 담당자명</label>
                  <input
                    type="text"
                    placeholder="담당자명"
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">문의 이메일</label>
                  <input
                    type="email"
                    placeholder="contact@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">문의 내용</label>
                  <textarea
                    rows={4}
                    placeholder="기술 협력, 솔루션 연동, Closed Beta 사전 신청 등 문의 내용을 자유롭게 작성해 주세요."
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <a
                  href="mailto:founder@kncalabs.com?subject=[KNCA%20Labs%20Inquiry]"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Contact KNCA Labs</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
