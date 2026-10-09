export const siteConfig = {
  name: "KNCA Labs",
  businessName: "Stay C Jeju (스테이씨 제주)",
  legalName: "Stay C Jeju (스테이씨 제주)",
  brandName: "KNCA Labs",
  brandRelation: "KNCA Labs is operated by Stay C Jeju.",
  established: "Company established in 2023 · South Korea",
  tagline: "AI-powered content automation company",
  title: "KNCA Labs — AI-powered content automation company",
  description: "Turn one source into a complete content workflow — powered by AI.",
  url: "https://kncalabs.com",
  ogImage: "https://kncalabs.com/og-image.svg",
  contact: {
    email: "founder@kncalabs.com",
    location: "South Korea",
  },
  stage: {
    badge: "Development — Active",
    title: "Building in Public",
    description: "KNCA is currently under active development. We are building the core automation infrastructure first, with a focus on reliability, modular workflows, and scalable content operations.",
    statusList: [
      { step: "Phase 01", title: "Core Infrastructure & Architecture", status: "Completed" },
      { step: "Phase 02", title: "Claude API Integration", status: "Development — Active" },
      { step: "Phase 03", title: "Closed Beta & Enterprise Preview", status: "Next up" },
      { step: "Phase 04", title: "Multi-Channel Automation Expansion", status: "Planned workflow" },
    ]
  },
  claudeStartup: {
    title: "Claude API 기반 기술 아키텍처 및 연동 구조",
    subtitle: "Anthropic의 Claude API 역량을 활용한 엔터프라이즈 콘텐츠 자동화 플랫폼 기술 아키텍처",
    highlights: [
      {
        title: "Claude API 연동",
        description: "복잡한 비즈니스 로직 분석과 맥락 추론을 위해 Anthropic의 Claude API를 핵심 인공지능 엔진으로 채택하여 개발 중입니다."
      },
      {
        title: "하이브리드 RAG & Tool Calling",
        description: "Claude의 정밀한 Function Calling과 문맥 파악 기능을 활용해 사내 문서 검색 및 시스템 연동을 구현하고 있습니다."
      },
      {
        title: "투명성과 개발 진정성",
        description: "허위 수치나 과장 없이 현재 개발 중인 실제 제품 기능과 아키텍처를 진실되게 설명합니다."
      }
    ]
  },
  problems: [
    {
      id: "card-1",
      title: "One idea, endless formats",
      desc: "하나의 콘텐츠를 플랫폼마다 반복해서 다시 만드는 비효율."
    },
    {
      id: "card-2",
      title: "Disconnected workflows",
      desc: "수집·작성·편집·검수·배포가 서로 다른 도구에 분산되는 문제."
    },
    {
      id: "card-3",
      title: "Automation without control",
      desc: "자동화가 너무 강하면 품질과 브랜드 일관성을 관리하기 어려운 문제."
    }
  ],
  solutions: [
    {
      id: "solution-1",
      title: "Single Source Orchestration",
      desc: "단 1회의 원천 입력으로 멀티 포맷을 자율 생성하도록 설계."
    },
    {
      id: "solution-2",
      title: "Unified Agent Pipeline",
      desc: "수집부터 배포 보조까지 하나의 통합 에이전트 파이프라인으로 연결."
    },
    {
      id: "solution-3",
      title: "Human-in-the-Loop Control",
      desc: "실무자의 최종 검수와 톤앤매너 가드레일을 보장하는 인간-AI 협업 구조."
    }
  ]
};
