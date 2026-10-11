"use client";

import { useState } from "react";
import "./team-page.css";

const stages = [
  {
    kicker: "01 · AI UNDERSTANDING",
    title: "원천의 핵심 맥락을 먼저 이해합니다.",
    body: "영상·문서·음성의 서사와 논리를 분석해, 여러 포맷으로 확장 가능한 지식 자산으로 정제합니다.",
    tags: ["KNOWLEDGE GRAPH", "CORE LOGIC", "SOURCE CONTEXT"],
  },
  {
    kicker: "02 · AI CONTENT GENERATION",
    title: "하나의 원천에서 여러 포맷을 생성합니다.",
    body: "정제된 맥락을 바탕으로 숏폼 스크립트, 아티클, 뉴스레터, 소셜 스레드를 병렬로 구조화합니다.",
    tags: ["MULTI-FORMAT", "PARALLEL GENERATION", "CONTENT LOGIC"],
  },
  {
    kicker: "03 · CONTENT ADAPTATION",
    title: "채널의 문법에 맞게 다시 설계합니다.",
    body: "플랫폼별 톤, 훅, 길이와 표현 규칙을 적용해 같은 메시지를 각 채널에 자연스럽게 맞춥니다.",
    tags: ["PLATFORM PERSONA", "HOOK OPTIMIZATION", "FORMAT LOCK"],
  },
  {
    kicker: "04 · AUTOMATED PUBLISHING",
    title: "검수에서 다채널 배포까지 연결합니다.",
    body: "사람의 최종 검수를 거친 콘텐츠를 CMS, 소셜 큐, 뉴스레터 레일로 이어 하나의 운영 흐름을 완성합니다.",
    tags: ["HEADLESS CMS", "SOCIAL API QUEUE", "NEWSLETTER RAILS"],
  },
];

const stageTabs = ["UNDERSTANDING", "SYNTHESIS", "ADAPTATION", "DISTRIBUTION"];

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <>
      <nav className="nav" aria-label="페이지 탐색">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top" aria-label="KNCA Labs 처음으로">
            <strong>KNCA</strong>
            <span>LABS</span>
          </a>
          <div className="nav-links">
            <a href="#architecture">PUBLISHING</a>
            <a href="#principle">PRINCIPLE</a>
            <a href="#audience">FOR WHOM</a>
            <a href="#status">COMPANY</a>
            <a className="nav-pill" href="#status">
              REQUEST ACCESS
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-copy">
              <span className="badge">
                <i className="status-dot" aria-hidden="true"></i> AI PUBLISHING INFRASTRUCTURE
              </span>
              <h1 id="hero-title">
                One Source.
                <br />
                <span className="gradient-text">Many Possibilities.</span>
              </h1>
              <p className="lede">
                하나의 원천을 이해하고, 생성하고, 채널에 맞게 조정해 배포까지 연결하는 AI-native 콘텐츠
                인프라를 만듭니다.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#architecture">
                  EXPLORE SYSTEM <span aria-hidden="true">↓</span>
                </a>
                <a className="button secondary" href="#status">
                  CORE ALPHA STATUS
                </a>
              </div>
            </div>

            <figure
              className="system-visual"
              aria-label="하나의 원천에서 여러 채널로 확장되는 AI 퍼블리싱 인프라 모션 그래픽"
            >
              <div className="visual-topbar">
                <span>KNCA / PUBLISHING ENGINE</span>
                <span>PIPELINE ACTIVITY · LIVE SIMULATION</span>
              </div>
              <div className="pipeline-scene">
                <span className="beam b1" aria-hidden="true"></span>
                <span className="beam b2" aria-hidden="true"></span>
                <span className="beam b3" aria-hidden="true"></span>
                <span className="beam b4" aria-hidden="true"></span>
                <span className="beam b5" aria-hidden="true"></span>
                <span className="beam b6" aria-hidden="true"></span>
                <div className="core-orbit" aria-hidden="true">
                  <span className="wave-ring"></span>
                  <span className="wave-ring r2"></span>
                  <span className="wave-ring r3"></span>
                  <div className="core-label">
                    <small>ONE SOURCE</small>
                    <strong>UNDERSTAND</strong>
                    <span>AI-native core</span>
                  </div>
                </div>
                <span className="source-token" aria-hidden="true"></span>
                <span className="node n1">SHORTS SCRIPT</span>
                <span className="node n2">SEO ARTICLE</span>
                <span className="node n3">MULTI-PLATFORM THREAD</span>
                <span className="node n4">NEWSLETTER</span>
                <span className="node n5">SOCIAL CONTENT</span>
                <span className="node n6">STRUCTURED BLOG</span>
                <figcaption className="visual-caption">
                  <span>INPUT · VIDEO / COLUMN / AUDIO</span>
                  <span>UNDERSTANDING → SYNTHESIS → ADAPTATION → DISTRIBUTION</span>
                  <span>OUTPUT · MULTI FORMAT</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        <section className="architecture" id="architecture" aria-labelledby="architecture-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">01 / CAPABILITIES</p>
              <div>
                <h2 id="architecture-title">
                  Publishing<span className="gradient-text">.</span>
                </h2>
                <p className="section-intro">
                  원천 이해부터 다채널 배포까지, 하나의 시스템으로 연결된 네 단계의 퍼블리싱
                  아키텍처입니다.
                </p>
              </div>
            </div>
            <div className="stage-tabs" role="tablist" aria-label="퍼블리싱 아키텍처 단계">
              {stageTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`stage-tab${i === activeStage ? " active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={i === activeStage}
                  onClick={() => setActiveStage(i)}
                >
                  <span>STAGE 0{i + 1}</span>
                  {tab}
                </button>
              ))}
            </div>
            <article className="stage-panel" aria-live="polite">
              <div className="stage-copy">
                <span className="mono">{stage.kicker}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <div className="stage-meta">
                  {stage.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="stage-machine" aria-hidden="true">
                <span className="machine-grid"></span>
                <span className="machine-ring"></span>
                <div className="machine-code">
                  <span className="code-line"></span>
                  <span className="code-line"></span>
                  <span className="code-line"></span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="principle" id="principle" aria-labelledby="principle-title">
          <div className="wrap">
            <p className="kicker">02 / CREATOR AUTOMATION</p>
            <h2 className="statement" id="principle-title">
              더 많이 쓰는 대신,
              <br />
              <span>하나의 원천에 집중합니다.</span>
            </h2>
            <div className="comparison">
              <article className="compare-card">
                <span className="compare-label">BEFORE · MANUAL</span>
                <h3>채널마다 다시 쓰는 반복 노동</h3>
                <p>
                  플랫폼별 요약과 재작성에 시간이 흩어지고, 핵심 메시지와 브랜드 기준도 조금씩
                  흔들립니다.
                </p>
                <div className="compare-metric">
                  <span>WORKFLOW</span>
                  <strong>FRAGMENTED</strong>
                </div>
              </article>
              <div className="compare-arrow" aria-hidden="true">
                →
              </div>
              <article className="compare-card after">
                <span className="compare-label">AFTER · AI-NATIVE</span>
                <h3>원천 하나로 전 채널 자율 확장</h3>
                <p>
                  콘텐츠의 본질은 사람이 만들고, 채널별 구조화와 조정은 퍼블리싱 인프라가
                  이어받습니다.
                </p>
                <div className="compare-metric">
                  <span>OPERATING MODEL</span>
                  <strong>BUILD ONCE</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="audience" id="audience" aria-labelledby="audience-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker">03 / FOR WHOM</p>
              <div>
                <h2 id="audience-title">
                  AI를 따라가는 단계에서,
                  <br />
                  운영하는 단계로.
                </h2>
                <p className="section-intro">
                  도구를 더 배우는 것보다, 지금 가진 자료와 목적을 실제 업무 흐름으로 연결해야 하는
                  사람과 팀을 위한 시스템입니다.
                </p>
              </div>
            </div>
            <div className="audience-grid">
              <article className="audience-card featured">
                <span className="audience-no">PRIMARY / 01</span>
                <h3>AI의 속도는 체감하지만 내 일의 시작점은 보이지 않는 사람</h3>
                <p>
                  빠른 변화에 휩쓸리지 않고, 자신의 업무·창작·사업에 적용되는 구체적인 시스템이
                  필요한 사람.
                </p>
              </article>
              <article className="audience-card">
                <span className="audience-no">02 / CONTENT TEAM</span>
                <h3>반복 제작을 줄여야 하는 콘텐츠 팀</h3>
                <p>한 메시지를 여러 채널에 맞춰 매번 다시 만드는 운영 구조를 바꾸려는 팀.</p>
              </article>
              <article className="audience-card">
                <span className="audience-no">03 / BRAND</span>
                <h3>일관성과 속도를 함께 지켜야 하는 브랜드</h3>
                <p>콘텐츠 규모가 커져도 맥락과 표현 기준을 유지해야 하는 운영자.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="status" id="status" aria-labelledby="status-title">
          <div className="wrap">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>SYSTEM TERMINAL / KNCA LABS</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-copy">
                  <span className="mono">● CORE ALPHA TESTING IN PROGRESS</span>
                  <h2 id="status-title">Building the publishing layer.</h2>
                  <p>
                    KNCA Labs는 2023년 대한민국에서 시작한 AI 퍼블리싱 인프라 프로젝트팀입니다.
                    현재 코어 알파를 검증하며 네 단계 아키텍처를 제품으로 연결하고 있습니다.
                  </p>
                </div>
                <div className="progress-list" aria-label="개발 현황">
                  <div className="progress-item">
                    <b>Core infrastructure</b>
                    <span>READY</span>
                    <div className="progress-track">
                      <i style={{ ["--progress" as string]: "100%" }}></i>
                    </div>
                  </div>
                  <div className="progress-item">
                    <b>Publishing pipeline</b>
                    <span>BUILDING</span>
                    <div className="progress-track">
                      <i style={{ ["--progress" as string]: "72%" }}></i>
                    </div>
                  </div>
                  <div className="progress-item">
                    <b>Closed beta</b>
                    <span>NEXT</span>
                    <div className="progress-track">
                      <i style={{ ["--progress" as string]: "34%" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-main">
            <p className="footer-mark">
              KNCA Labs<span>.</span>
            </p>
            <div className="footer-facts">
              Founded 2023 · South Korea
              <br />
              Creator Automation · Operated by Stay C<br />
              <a href="https://kncalabs.com/" target="_blank" rel="noreferrer">
                kncalabs.com ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              BUSINESS REG. 782-26-015552 · 대표 김하늘 · 제주특별자치도 제주시 애월읍 예원로 144 ·
              010-3298-3775
            </span>
            <span>ONE SOURCE / PUBLISHING INFRASTRUCTURE / MANY POSSIBILITIES · © 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}
