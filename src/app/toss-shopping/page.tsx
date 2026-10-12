import React from "react";
import Link from "next/link";
import { ArrowDown, CheckCircle2, MessageCircle, ShoppingBag, FileText, Layers, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Toss Shopping Link Automation",
  description:
    "KNCA Labs의 토스쇼핑 Open API 연동 기반 상품 콘텐츠 및 오픈채팅 공유 자동화 서비스 소개",
  alternates: {
    canonical: "https://kncalabs.com/toss-shopping",
  },
};

const steps = [
  {
    no: "01",
    title: "상품 큐레이션",
    desc: "운영자가 상품 정보를 확인하고 공유할 상품을 선정합니다.",
  },
  {
    no: "02",
    title: "토스쇼핑 쉐어링크",
    desc: "토스쇼핑 Open API 연동을 통해 상품 링크를 공유 가능한 쉐어링크 형태로 생성합니다.",
  },
  {
    no: "03",
    title: "콘텐츠 구성",
    desc: "상품명, 가격 정보, 간단한 소개 및 필요한 안내 문구를 포함한 공유 콘텐츠를 구성합니다.",
  },
  {
    no: "04",
    title: "오픈채팅 공유",
    desc: "운영자가 관리하는 오픈채팅방에 상품 추천 및 특가 정보를 공유합니다.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 mb-4">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
      {children}
    </h2>
  );
}

export default function TossShoppingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar solid />

      {/* HERO */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>KNCA Labs · Toss Shopping Open API</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            토스쇼핑 특가 링크 자동 공유
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            상품 큐레이션 콘텐츠를 효율적으로 관리하고,
            <br className="hidden sm:block" />
            토스쇼핑 쉐어링크를 통해 운영 중인 오픈채팅방에 상품 정보를 공유하기 위한
            콘텐츠 자동화 시스템입니다.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            <span className="text-sm font-semibold text-blue-700">
              OPEN API 연동 신청 진행 중
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 1 — 서비스 소개 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>Service</Eyebrow>
          <SectionTitle>서비스 소개</SectionTitle>
          <div className="max-w-3xl space-y-5 text-slate-600 leading-relaxed">
            <p>
              KNCA Labs는 상품 큐레이션 콘텐츠를 효율적으로 제작하고 운영 채널에
              공유하기 위한 콘텐츠 자동화 시스템을 개발하고 있습니다.
            </p>
            <p>
              본 서비스에서는 운영자가 큐레이션한 상품의 정보를 바탕으로 토스쇼핑
              쉐어링크를 활용하여 상품 정보를 운영자가 관리하는 오픈채팅방에
              공유하는 것을 목표로 합니다.
            </p>
            <p>
              서비스의 핵심 목적은 상품을 별도의 쇼핑몰이나 가격비교 서비스 형태로
              판매·전시하는 것이 아니라, 운영 중인 콘텐츠 채널에서 유용한 상품
              정보를 이용자에게 전달하는 것입니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 사용 방식 */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>How it works</Eyebrow>
          <SectionTitle>사용 방식</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div key={step.no}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                  <p className="font-mono text-sm font-bold text-blue-600 mb-3">
                    {step.no}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-3 lg:hidden">
                    <ArrowDown className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 max-w-3xl">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong className="font-bold">안내:</strong> 현재 Open API 연동
              승인을 신청하는 단계이며, API 승인 전에는 실제 API 자동 호출
              기능이 활성화되지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — 주요 노출 채널 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>Channels</Eyebrow>
          <SectionTitle>주요 노출 채널</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            <div className="rounded-2xl border-2 border-blue-600 bg-blue-50/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold text-slate-900">오픈채팅방</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                상품 추천 및 특가 정보를 운영자가 관리하는 오픈채팅방에
                공유합니다.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500 max-w-3xl leading-relaxed">
            추가적으로 향후 콘텐츠 채널을 확대할 수 있으나, 현재 Open API
            연동의 주요 사용 목적은 오픈채팅방 상품 정보 공유입니다.
          </p>
        </div>
      </section>

      {/* SECTION 4 — API 사용 목적 */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>API Usage</Eyebrow>
          <SectionTitle>Toss Shopping Open API 사용 목적</SectionTitle>
          <div className="max-w-3xl space-y-5 text-slate-600 leading-relaxed">
            <p>
              토스쇼핑 Open API는 상품 콘텐츠를 오픈채팅방에 공유하기 위한
              토스쇼핑 쉐어링크 생성 및 연동 목적으로 사용할 예정입니다.
            </p>
            <p>
              API를 통해 취득한 정보를 별도의 쇼핑몰이나 가격비교 서비스 형태로
              운영하지 않습니다.
            </p>
            <p>
              또한 API로 취득한 상품 및 가격 정보를 대규모 상품 DB로 구축하여
              커머스 서비스를 운영하는 목적이 아닙니다.
            </p>
            <p>
              API의 주요 사용 목적은 운영자가 선정한 상품을 콘텐츠 형태로
              구성하고, 토스쇼핑 쉐어링크를 통해 이용자가 상품 페이지로 이동할
              수 있도록 하는 것입니다.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
            <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900 leading-relaxed">
                오픈채팅방 상품 정보 공유 목적의 쉐어링크 생성
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
              <ShoppingBag className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                쇼핑몰·가격비교 형태의 저장 및 전시에는 사용하지 않음
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — 콘텐츠 예시 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>Example</Eyebrow>
          <SectionTitle>오픈채팅 게시 예시</SectionTitle>
          <p className="text-sm font-mono text-slate-500 mb-6">
            [예시 화면 — 실제 링크 아님]
          </p>
          <div className="max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">
                🛒
              </span>
              <p className="font-bold text-slate-900">오늘의 특가</p>
            </div>
            <p className="text-slate-800 font-medium mb-4">
              스파클 생수, 무라벨, 1L, 24개
            </p>
            <div className="rounded-xl bg-white border border-slate-200 p-4 mb-4">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                상품 확인하기
              </p>
              <p className="text-sm text-slate-400 break-all select-none">
                https://toss.shopping/_m/example
              </p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              ✱ 이 포스팅은 토스쇼핑 쉐어링크 활동의 일환으로, 이에 따른 일정액의
              수수료를 제공받습니다.
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            위 URL은 예시용 placeholder이며 실제 동작하는 링크가 아닙니다.
          </p>
        </div>
      </section>

      {/* SECTION 6 — 광고/제휴 고지 */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>Disclosure</Eyebrow>
          <SectionTitle>광고/제휴 고지</SectionTitle>
          <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
              <div>
                <p className="text-slate-800 leading-relaxed mb-4">
                  “✱ 이 포스팅은 토스쇼핑 쉐어링크 활동의 일환으로, 이에 따른
                  일정액의 수수료를 제공받습니다.”
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  위 문구는 실제 오픈채팅 게시 콘텐츠에도 동일하게 표시할
                  예정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — 개발 상태 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>Status</Eyebrow>
          <SectionTitle>Development Status</SectionTitle>
          <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Layers className="w-5 h-5 text-blue-600" />
              <p className="font-mono text-sm font-bold text-slate-900">
                OPEN API Integration — Pending Approval
              </p>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                현재 KNCA Labs는 토스쇼핑 Open API 연동을 신청하는 단계입니다.
              </p>
              <p>
                API 연동 승인 후 공식 API 인증 방식과 제공 범위에 맞춰 연동
                기능을 구현할 예정입니다.
              </p>
              <p>
                현재 페이지는 서비스의 사용 목적과 예상 노출 방식을 설명하기 위한
                공개 서비스 소개 페이지입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — KNCA Labs */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Eyebrow>About</Eyebrow>
          <SectionTitle>KNCA Labs</SectionTitle>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
            AI 기반 콘텐츠 자동화 및 운영 시스템을 개발합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              Website: {siteConfig.url}
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-900 transition-colors"
            >
              <Send className="w-4 h-4" />
              Contact: {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
