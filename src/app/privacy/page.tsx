import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShieldCheck, Mail, Trash2, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | KNCA Labs",
  description: "Privacy Policy for KNCA Labs official pre-launch website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 relative">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Pre-Launch Privacy Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy (개인정보 처리방침)
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: October 2026 (Pre-launch Stage)
          </p>
        </div>

        {/* 6 Specific Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Section 1: Information Processed During Visit */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">01.</span>
              <span>사이트 방문 시 처리되는 정보 (Information Processed During Visit)</span>
            </h2>
            <p>
              주식회사 케이앤씨에이(KNCA Inc., 이하 &quot;회사&quot;)가 운영하는 KNCA Labs 웹사이트(<a href="https://kncalabs.com" className="text-sky-400 underline">kncalabs.com</a>)는 별도의 회원가입이나 로그인 절차 없이 자유롭게 열람할 수 있는 정적 웹사이트입니다. 방문자가 사이트를 단순히 조회할 때 개인 식별 정보를 자동으로 수집하거나 저장하지 않습니다.
            </p>
          </section>

          {/* Section 2: Contact Email Handling */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">02.</span>
              <span>문의 이메일 처리 (Handling of Contact Emails)</span>
            </h2>
            <p>
              방문자가 공식 이메일(<a href="mailto:founder@kncalabs.com" className="text-sky-400 underline font-mono">founder@kncalabs.com</a>) 또는 mailto 버튼을 통해 직접 전달해주신 이메일 주소 및 문의 내용은 오직 **문의 사항 응답 및 Closed Beta 안내 목적**으로만 수신 및 처리됩니다.
            </p>
          </section>

          {/* Section 3: Cookies & Analytics */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">03.</span>
              <span>쿠키 및 분석 도구 사용 여부 (Cookies & Analytics Tools Usage)</span>
            </h2>
            <p>
              본 웹사이트는 방문자의 행동 추적을 위한 제3자 추적 쿠키(Tracking Cookies)나 타깃 광고성 데이터 분석 도구를 사용하지 않습니다. 최상의 페이지 로딩 속도와 방문자 개인정보 보호를 최우선으로 구동됩니다.
            </p>
          </section>

          {/* Section 4: Personal Information Retention */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-sky-400 font-mono text-sm">04.</span>
              <span>개인정보 보관 (Personal Information Retention)</span>
            </h2>
            <p>
              수신된 이메일 문의 내역은 문의 답변 완료 및 안내 목적이 달성된 후 안전하게 관리되며, 마케팅 용도로 매매되거나 외부에 제공되지 않습니다.
            </p>
          </section>

          {/* Section 5: Data Deletion Request */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono text-sm">
              <Trash2 className="w-5 h-5 text-sky-400" />
              <span>05. 개인정보 삭제 요청 (Data Deletion Request)</span>
            </h2>
            <p>
              전송해주신 이메일 기록이나 정보의 삭제를 원하실 경우, 공식 이메일(<a href="mailto:founder@kncalabs.com" className="text-sky-400 underline font-mono">founder@kncalabs.com</a>)로 삭제 요청 메일을 보내주시면 확인 즉시 지체 없이 파기 및 처리해 드립니다.
            </p>
          </section>

          {/* Section 6: Method of Contact */}
          <section className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono text-sm">
              <HelpCircle className="w-5 h-5 text-sky-400" />
              <span>06. 문의 방법 (Method of Contact)</span>
            </h2>
            <p>
              개인정보 처리방침 관련 질문, 권리 행사, 권리 침해 관련 상담 문의는 아래 공식 핫라인 이메일을 이용해 주시기 바랍니다:
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-sky-400">
              <Mail className="w-4 h-4" />
              <a href="mailto:founder@kncalabs.com" className="underline font-bold">founder@kncalabs.com</a>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </main>
  );
}
