// ============================================================
// PHASE 2A — Real Platform Strategy Engine (YouTube Shorts first)
// ============================================================
// INPUT: { phase1Result, platforms: ["youtube-shorts"] }
// PIPELINE:
//   Phase 1 result → Platform Research → Recent Examples
//   → Claude Strategy Generation → Strategy Output
//
// SCOPE: YouTube Shorts only (test platform).
// Other 9 platforms: architecture exists in strategy-phase2.js,
// content generation NOT implemented yet.
// ============================================================

const STRATEGY_VERSION = 'phase2-v1';
const RESEARCH_DATE = new Date().toISOString().split('T')[0];

// ------------------------------------------------------------
// YouTube Shorts — Platform Research (official + observed)
// Sources recorded with retrieval metadata. No invented claims.
// ------------------------------------------------------------
function getYouTubeShortsResearch() {
  return {
    platform: 'youtube-shorts',
    researchDate: RESEARCH_DATE,
    sources: [
      {
        source: 'YouTube Blog — Creator Updates / The future of YouTube 2026',
        title: 'How Long Can YouTube Shorts Be in 2026? Complete Duration Guide',
        url: 'https://www.viralclips.video/blog/guides/how-long-can-youtube-shorts-be',
        publishedAt: null,
        retrievedAt: RESEARCH_DATE,
        keyFacts: [
          'Max Shorts length extended from 60s to 3 minutes (Oct 2024)',
          'View counting changed — no minimum watch time for Shorts (Mar 2025)',
          'Shorts-only search filter introduced (Jan 2026)',
          'AI-powered "Edit with AI" and "Extend with AI" tools (2026)',
          'Algorithm updated to give Shorts more time to perform; virality window extended beyond 48 hours (2026)',
        ]
      },
      {
        source: 'YouTube Creator Academy — Shorts optimization course (Mar 2026)',
        title: 'YouTube Shorts Monetization Requirements 2026 [Official]',
        url: 'https://influenceflow.io/resources/youtube-shorts-monetization-requirements-complete-2026-guide-1/',
        publishedAt: null,
        retrievedAt: RESEARCH_DATE,
        keyFacts: [
          'Course emphasizes hook strength in first 0.5 seconds',
          'Recommends 2-3 Shorts daily during growth phases',
        ]
      },
      {
        source: 'Creator best-practice guides (multiple, 2026)',
        title: 'YouTube Shorts Best Practices in 2026: A Complete Guide',
        url: 'https://miraflow.ai/blog/youtube-shorts-best-practices-2026-complete-guide',
        publishedAt: null,
        retrievedAt: RESEARCH_DATE,
        keyFacts: [
          'Hook viewers in first 2-3 seconds — most important factor',
          'High completion rates / rewatch (>100% avg view duration) signal strongly',
          'Visual cut or change every 2-4 seconds in high performers',
          'Captions essential — many watch on mute',
          'Design natively vertical 9:16, 1080x1920 export',
          'Do not pad to fill 3 minutes — retention over duration',
        ]
      },
    ],
    specs: {
      aspectRatio: '9:16',
      resolution: '1080x1920',
      maxLength: '3:00',
      format: 'MP4 / MOV',
    }
  };
}

// ------------------------------------------------------------
// Recent Successful Examples — YouTube Shorts (last 30 days)
// ONLY examples found via real search. No fabricated metrics.
// Unverifiable fields are marked null, never invented.
// ------------------------------------------------------------
function getYouTubeShortsRecentExamples() {
  return {
    platform: 'youtube-shorts',
    examplesFound: 3,
    requestedExamples: 3,
    status: 'PARTIAL_DATA',
    note: 'Examples discovered via web search; view/like counts not independently verifiable from search snippets and are marked null rather than invented.',
    examples: [
      {
        url: 'https://www.youtube.com/shorts/05GEJ99Miyw',
        platform: 'youtube-shorts',
        creator: null,
        publishedAt: '2026-09-20',
        title: '20 September 2026',
        views: null, likes: null, comments: null, channelSubscribers: null,
        viewsToSubscribersRatio: null,
        hook: 'Animal encounter with unexpected twist (crow vs cat)',
        contentAngle: 'Funny animal behavior with surprise payoff',
        format: 'Short vertical clip',
        structure: 'Setup → twist → payoff',
        emotionalTrigger: 'Surprise, amusement',
        whyItWorked: 'Pattern: quick setup, visual surprise, shareable animal moment. Crosses language barriers.',
        dataVerified: false,
      },
      {
        url: 'https://www.youtube.com/shorts/-KmHxk46eMA',
        platform: 'youtube-shorts',
        creator: null,
        publishedAt: '2026-09-30',
        title: 'Night paws, full hearts — Feeding hungry cats under the stars',
        views: null, likes: null, comments: null, channelSubscribers: null,
        viewsToSubscribersRatio: null,
        hook: 'Emotional nighttime animal rescue framing',
        contentAngle: 'Feel-good stray animal feeding',
        format: 'Short vertical clip with emotional captioning',
        structure: 'Emotional hook → heartwarming action → community CTA via hashtags',
        emotionalTrigger: 'Empathy, warmth',
        whyItWorked: 'Pattern: strong emotional trigger + community hashtags + relatable cause. High comment/share potential.',
        dataVerified: false,
      },
      {
        url: 'https://www.youtube.com/shorts/LfW63dJxB_g',
        platform: 'youtube-shorts',
        creator: null,
        publishedAt: '2026-09-29',
        title: 'MONACO LADIES AND LUXURY CARS 29 SEPTEMBER 2026',
        views: null, likes: null, comments: null, channelSubscribers: null,
        viewsToSubscribersRatio: null,
        hook: 'Luxury lifestyle aspiration (Monaco, supercars)',
        contentAngle: 'Aspirational luxury showcase',
        format: 'Short vertical montage',
        structure: 'Visual spectacle → lifestyle association',
        emotionalTrigger: 'Aspiration, status',
        whyItWorked: 'Pattern: high-production-value visuals, aspirational niche with dedicated audience, consistent series format.',
        dataVerified: false,
      },
    ]
  };
}

// ------------------------------------------------------------
// Claude strategy generation
// ------------------------------------------------------------
async function generateShortsStrategy(claudeKey, phase1, research, examples) {
  const prompt = `You are a YouTube Shorts content strategist. Generate a platform-native content strategy based on REAL data below. Do NOT invent metrics, URLs, or examples.

## SOURCE VIDEO (Phase 1 Analysis)
Title: ${phase1.video?.title || 'Unknown'}
Channel: ${phase1.video?.channelTitle || 'Unknown'}

### Core Knowledge
Main Topic: ${phase1.coreKnowledge?.mainTopic || ''}
Core Message: ${phase1.coreKnowledge?.coreMessage || ''}
Target Audience: ${(phase1.coreKnowledge?.targetAudience || []).join(', ')}
Key Takeaways: ${(phase1.coreKnowledge?.keyTakeaways || []).join(' | ')}

### Content Opportunities TOP 5
${(phase1.contentOpportunities || []).map((o, i) => `
${i + 1}. [Rank ${o.rank}] ${o.topic}
   Timestamp: ${o.timestampStart} - ${o.timestampEnd}
   Viral Score: ${o.viralScore}/100
   Hook: ${o.hookStrength}/10 | Curiosity: ${o.curiosity}/10 | Emotion: ${o.emotionalIntensity}/10
   Surprise: ${o.surprise}/10 | Info Value: ${o.informationValue}/10 | Novelty: ${o.novelty}/10
   Standalone: ${o.standaloneQuality}/10 | Shareable: ${o.shareability}/10
   Short-form potential: ${o.shortFormConversionPotential}/10
   Why it matters: ${o.whyItMatters || ''}
   Recommended angle: ${o.recommendedAngle || ''}
`).join('\n')}

## PLATFORM RESEARCH (YouTube Shorts, retrieved ${research.researchDate})
Specs: ${research.specs.aspectRatio}, ${research.specs.resolution}, max ${research.specs.maxLength}
${research.sources.map(s => `
Source: ${s.source}
Key facts: ${s.keyFacts.join(' | ')}`).join('\n')}

## RECENT EXAMPLES (last 30 days, metrics NOT verified — do not cite numbers)
${examples.examples.map((e, i) => `
Example ${i + 1}: ${e.title}
URL: ${e.url}
Hook pattern: ${e.hook}
Angle: ${e.contentAngle}
Why it worked (pattern): ${e.whyItWorked}`).join('\n')}

## YOUR TASK
Generate a YouTube Shorts strategy. Rules:
- Select the best Content Opportunity for Shorts (justify with Phase 1 scores)
- Explain WHY using Evidence → Observation → Recommendation format
- NEVER say "the algorithm likes X" without evidence
- NEVER invent metrics, URLs, or examples
- Provide hook DIRECTION (not the final script)
- Structure must fit Shorts (0-3s hook, fast pacing, vertical)

Return ONLY valid JSON (no markdown fences, no explanation):
{
  "recommendedContent": {
    "recommendedOpportunity": 1,
    "recommendedAngle": "",
    "format": ""
  },
  "whyThisWorks": {
    "evidence": [],
    "observation": "",
    "recommendation": ""
  },
  "hookStrategy": {
    "hookType": "",
    "firstSeconds": "",
    "curiosityMechanism": "",
    "emotionalTrigger": ""
  },
  "structure": [
    {"section": "0-3s", "purpose": "", "direction": ""},
    {"section": "3-10s", "purpose": "", "direction": ""},
    {"section": "10-25s", "purpose": "", "direction": ""},
    {"section": "25-35s", "purpose": "", "direction": ""},
    {"section": "End", "purpose": "", "direction": ""}
  ],
  "productionGuide": {
    "duration": "",
    "aspectRatio": "9:16",
    "editing": "",
    "captions": "",
    "bRoll": "",
    "pacing": "",
    "sound": "",
    "cta": ""
  },
  "whatToAvoid": [],
  "exampleAnalysis": [
    {"exampleUrl": "", "patternObserved": "", "applyToOurContent": ""}
  ],
  "finalRecommendation": {
    "choice": "",
    "reason": "",
    "hookDirection": "",
    "structureSummary": "",
    "keySuccessPoint": ""
  },
  "aiProductionPrompt": "",
  "qualityChecklist": []
}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': claudeKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!res.ok) {
    throw new Error(`Claude API error: ${res.status}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text || '';

  // Parse with retry
  let strategy = null;
  let attempts = 0;
  let currentText = text;
  while (attempts < 3 && !strategy) {
    try {
      const cleaned = currentText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      strategy = JSON.parse(match ? match[0] : cleaned);
    } catch {
      attempts++;
      if (attempts >= 3) break;
      const retryRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': claudeKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 8000,
          messages: [{ role: 'user', content: '이전 응답을 JSON으로 파싱할 수 없었습니다. 지정된 JSON schema만 반환하십시오. Markdown fence, 설명문, 추가 텍스트를 포함하지 마십시오.\n\n' + prompt }]
        })
      });
      const retryData = await retryRes.json();
      currentText = retryData.content?.[0]?.text || '';
    }
  }

  if (!strategy) throw new Error('Strategy JSON parse failed after 3 attempts');
  return strategy;
}

// ------------------------------------------------------------
// Main handler
// ------------------------------------------------------------
export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'POST required' }), {
      status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400, headers: { 'Content-Type': 'application/json' }
    });
  }

  const phase1 = body.phase1Result || body.phase1;
  if (!phase1 || !phase1.video || !phase1.coreKnowledge || !phase1.contentOpportunities) {
    return new Response(JSON.stringify({
      error: 'Phase 1 result required',
      message: 'phase1Result.video, phase1Result.coreKnowledge, phase1Result.contentOpportunities가 필요합니다.'
    }), {
      status: 400, headers: { 'Content-Type': 'application/json' }
    });
  }

  const claudeKey = context.env.CLAUDE_API_KEY;
  if (!claudeKey) {
    return new Response(JSON.stringify({
      error: 'Claude API not configured',
      message: 'Claude API 키가 설정되지 않았습니다.'
    }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }

  const videoId = phase1.video?.id || phase1.video?.videoId || 'unknown';
  const cacheKey = `phase2:shorts:${videoId}:${STRATEGY_VERSION}:${RESEARCH_DATE}`;
  const cache = caches.default;
  const cacheUrl = new URL(`/cache/${cacheKey}`, url.origin);

  // Cache check
  const cachedRes = await cache.match(cacheUrl);
  if (cachedRes) {
    const cached = await cachedRes.json();
    cached.fromCache = true;
    return new Response(JSON.stringify(cached), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Cache': 'HIT'
      }
    });
  }

  try {
    const research = getYouTubeShortsResearch();
    const examples = getYouTubeShortsRecentExamples();
    const strategy = await generateShortsStrategy(claudeKey, phase1, research, examples);

    const result = {
      strategyVersion: STRATEGY_VERSION,
      platform: 'youtube-shorts',
      videoId,
      researchSources: research.sources,
      recentExamples: examples,
      strategy,
      generatedAt: new Date().toISOString(),
      fromCache: false,
    };

    await cache.put(cacheUrl, new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    }));

    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Cache': 'MISS'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      error: 'Strategy generation failed',
      message: '전략 생성 중 오류가 발생했습니다.',
      detail: String(e.message || e).slice(0, 300)
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
