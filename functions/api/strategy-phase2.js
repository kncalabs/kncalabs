// ============================================================
// PHASE 2 — Platform Strategy Engine (Architecture)
// ============================================================
// INPUT: Phase 1 result (video, coreKnowledge, contentOpportunities)
// OUTPUT: Platform-specific strategies (10 platforms)
//
// SCOPE (this step):
//   - Data structures + engine skeleton + provider interfaces
//   - Strategy output schema per platform
//   - Recent Examples schema (collection NOT implemented yet)
//   - Production Guide schema
//   - AI Production Prompt schema
//   - Quality Checklist schema
//
// NOT in scope:
//   - Real platform search API connections
//   - Real recent-example collection
//   - Final content auto-generation
//   - UI changes
// ============================================================

const STRATEGY_VERSION = 'phase2-v1';

// ------------------------------------------------------------
// Platform registry — each platform has its own strategy provider
// ------------------------------------------------------------
const PLATFORMS = [
  { id: 'youtube-shorts',   name: 'YouTube Shorts',     type: 'short-video' },
  { id: 'tiktok',           name: 'TikTok',             type: 'short-video' },
  { id: 'instagram-reels',  name: 'Instagram Reels',    type: 'short-video' },
  { id: 'x',                name: 'X',                  type: 'micro-text' },
  { id: 'x-thread',         name: 'X Thread',           type: 'thread-text' },
  { id: 'blog',             name: 'Blog',               type: 'long-text' },
  { id: 'facebook',         name: 'Facebook',          type: 'social-post' },
  { id: 'facebook-card',    name: 'Facebook Card News', type: 'carousel-image' },
  { id: 'linkedin',         name: 'LinkedIn',           type: 'professional-text' },
  { id: 'newsletter',       name: 'Newsletter',         type: 'email-long' },
];

// ------------------------------------------------------------
// Platform-native knowledge base (structure only —
// values are filled from official guides + real examples at runtime)
// ------------------------------------------------------------
function platformKnowledgeBase() {
  return {
    'youtube-shorts': {
      aspectRatio: '9:16', maxLength: '3:00',
      notes: 'Vertical short-form. Filled from YouTube Shorts official guidance.'
    },
    'tiktok': {
      aspectRatio: '9:16', maxLength: '10:00',
      notes: 'Vertical short-form. Filled from TikTok official guidance.'
    },
    'instagram-reels': {
      aspectRatio: '9:16', maxLength: '3:00',
      notes: 'Vertical short-form. Filled from Instagram official guidance.'
    },
    'x': {
      maxChars: 280, notes: 'Single post. Filled from X official guidance.'
    },
    'x-thread': {
      maxCharsPerPost: 280, notes: 'Thread sequence. Filled from X official guidance.'
    },
    'blog': {
      notes: 'Long-form written. SEO + readability structure.'
    },
    'facebook': {
      notes: 'Feed post. Filled from Meta official guidance.'
    },
    'facebook-card': {
      aspectRatio: '1:1', notes: 'Carousel card news. Image-first sequence.'
    },
    'linkedin': {
      notes: 'Professional audience. Filled from LinkedIn official guidance.'
    },
    'newsletter': {
      notes: 'Email long-form. Subject + preview + body structure.'
    }
  };
}

// ------------------------------------------------------------
// Opportunity scoring adapter — maps Phase 1 opportunity fields
// to platform fit signals (no hardcoded "algorithm likes X" claims)
// ------------------------------------------------------------
function scoreOpportunityForPlatform(opp, platformId) {
  const signals = {
    hookStrength: opp.hookStrength || 0,
    curiosity: opp.curiosity || 0,
    emotionalIntensity: opp.emotionalIntensity || 0,
    surprise: opp.surprise || 0,
    informationValue: opp.informationValue || 0,
    novelty: opp.novelty || 0,
    standaloneQuality: opp.standaloneQuality || 0,
    shareability: opp.shareability || 0,
    commentPotential: opp.commentPotential || 0,
    shortFormConversionPotential: opp.shortFormConversionPotential || 0,
    viralScore: opp.viralScore || 0,
  };

  // Platform-type weighting (documented rationale, not algorithm claims)
  const weights = {
    'short-video':    { hookStrength: 2, curiosity: 2, emotionalIntensity: 1.5, standaloneQuality: 2, shortFormConversionPotential: 2 },
    'micro-text':     { curiosity: 2, surprise: 2, shareability: 2, informationValue: 1.5 },
    'thread-text':    { informationValue: 2, curiosity: 1.5, novelty: 1.5, commentPotential: 1.5 },
    'long-text':      { informationValue: 2, novelty: 2, standaloneQuality: 1.5 },
    'social-post':    { emotionalIntensity: 2, shareability: 2, commentPotential: 1.5 },
    'carousel-image': { informationValue: 2, standaloneQuality: 1.5, shareability: 1.5 },
    'professional-text': { informationValue: 2, novelty: 2, standaloneQuality: 1.5 },
    'email-long':     { informationValue: 2, curiosity: 1.5, standaloneQuality: 1.5 },
  };

  const platform = PLATFORMS.find(p => p.id === platformId);
  const w = weights[platform?.type] || {};
  let score = 0, weightSum = 0;
  for (const [k, wt] of Object.entries(w)) {
    score += (signals[k] || 0) * wt;
    weightSum += wt;
  }
  return {
    platformFitScore: weightSum ? Math.round((score / weightSum) * 10) / 10 : 0,
    signals,
  };
}

// ------------------------------------------------------------
// Strategy builder per platform (structure — content filled by Claude)
// ------------------------------------------------------------
function buildPlatformStrategyShell(platformId, opportunity, phase1) {
  const { platformFitScore, signals } = scoreOpportunityForPlatform(opportunity, platformId);
  return {
    platform: platformId,
    selectedOpportunity: {
      rank: opportunity.rank,
      topic: opportunity.topic,
      timestampStart: opportunity.timestampStart,
      timestampEnd: opportunity.timestampEnd,
      viralScore: opportunity.viralScore,
    },
    platformFitScore,
    fitSignals: signals,
    // --- Filled by Claude analysis (schemas below) ---
    recommendedContent: null,   // Schema: RecommendedContent
    whyThisWorks: null,         // Schema: WhyThisWorks
    hookStrategy: null,         // Schema: HookStrategy
    contentStructure: null,     // Schema: ContentStructure
    productionGuide: null,      // Schema: ProductionGuide
    recentExamples: [],         // Schema: RecentExample[] (NOT collected in this step)
    finalRecommendation: null,  // Schema: FinalRecommendation
    aiProductionPrompt: null,   // Schema: AIProductionPrompt
    qualityChecklist: null,     // Schema: QualityChecklist
  };
}

// ------------------------------------------------------------
// Output schemas (documented as JSON Schema-like objects)
// ------------------------------------------------------------
const SCHEMAS = {
  RecommendedContent: {
    type: 'object',
    required: ['angle', 'topic', 'format', 'contentOpportunityRef'],
    properties: {
      angle: { type: 'string', description: 'Recommended angle for this platform' },
      topic: { type: 'string' },
      format: { type: 'string', description: 'e.g. talking-head, text-overlay, carousel' },
      contentOpportunityRef: { type: 'integer', description: 'Phase 1 opportunity rank' },
    }
  },
  WhyThisWorks: {
    type: 'object',
    required: ['reasoning', 'evidenceBasis'],
    properties: {
      reasoning: { type: 'string', description: 'Why this material fits this platform' },
      evidenceBasis: {
        type: 'array', items: { type: 'string' },
        description: 'Official guide references and/or observed patterns — no invented algorithm claims'
      },
    }
  },
  HookStrategy: {
    type: 'object',
    required: ['hookType', 'openingDirection', 'curiosityGap', 'emotionalTrigger', 'scrollStopElement'],
    properties: {
      hookType: { type: 'string' },
      openingDirection: { type: 'string', description: 'Direction for first sentence/scene, not the sentence itself' },
      curiosityGap: { type: 'string' },
      emotionalTrigger: { type: 'string' },
      scrollStopElement: { type: 'string' },
    }
  },
  ContentStructure: {
    type: 'object',
    required: ['beats'],
    properties: {
      beats: {
        type: 'array',
        items: {
          type: 'object',
          required: ['section', 'purpose'],
          properties: {
            section: { type: 'string', description: 'e.g. "0-3s", "Hook", "Slide 1"' },
            purpose: { type: 'string' },
            direction: { type: 'string' },
          }
        }
      }
    }
  },
  ProductionGuide: {
    type: 'object',
    properties: {
      recommendedLength: { type: 'string' },
      aspectRatio: { type: 'string' },
      screenComposition: { type: 'string' },
      cutDirection: { type: 'string' },
      captionDirection: { type: 'string' },
      brollUsage: { type: 'string' },
      graphicsUsage: { type: 'string' },
      musicSoundDirection: { type: 'string' },
      pacing: { type: 'string' },
      cta: { type: 'string' },
      thumbnailTitleDirection: { type: 'string' },
    }
  },
  RecentExample: {
    type: 'object',
    description: 'Schema only — collection NOT implemented in this step',
    required: ['url', 'creator', 'publishedDate'],
    properties: {
      url: { type: 'string' },
      creator: { type: 'string' },
      publishedDate: { type: 'string' },
      views: { type: 'integer' },
      likes: { type: 'integer' },
      comments: { type: 'integer' },
      channelSubscribers: { type: 'integer' },
      viewsToSubscribersRatio: { type: 'number' },
      title: { type: 'string' },
      hook: { type: 'string', description: 'Observed hook pattern, not copied text' },
      contentAngle: { type: 'string' },
      structure: { type: 'string' },
      emotionalTrigger: { type: 'string' },
      whyItPerformed: { type: 'string', description: 'Pattern-level analysis, not copying' },
      similarityToSource: { type: 'string' },
      applicableElements: { type: 'array', items: { type: 'string' } },
    }
  },
  FinalRecommendation: {
    type: 'object',
    required: ['choice', 'reason', 'hookDirection', 'structureSummary', 'keySuccessPoint'],
    properties: {
      choice: { type: 'string', description: '"If I were making this" — which opportunity and why' },
      reason: { type: 'string' },
      hookDirection: { type: 'string' },
      structureSummary: { type: 'string' },
      keySuccessPoint: { type: 'string' },
    }
  },
  AIProductionPrompt: {
    type: 'object',
    required: ['prompt'],
    properties: {
      prompt: { type: 'string', description: 'Copy-paste prompt for Gemini/Claude/ChatGPT' },
      includes: {
        type: 'array',
        items: { type: 'string' },
        description: 'Checklist of required prompt components',
        default: ['sourceVideo', 'selectedOpportunity', 'platform', 'targetAudience', 'hookStrategy', 'structure', 'tone', 'duration', 'editingDirection', 'cta', 'prohibitions', 'originalityRequirement']
      }
    }
  },
  QualityChecklist: {
    type: 'object',
    required: ['items'],
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          required: ['check', 'description'],
          properties: {
            check: { type: 'string' },
            description: { type: 'string' },
            passed: { type: 'boolean', description: 'Filled by user at review time' },
          }
        }
      }
    }
  },
};

// ------------------------------------------------------------
// Main handler
// ------------------------------------------------------------
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Allow CORS preflight
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

  const phase1 = body.phase1;
  if (!phase1 || !phase1.video || !phase1.coreKnowledge || !phase1.contentOpportunities) {
    return new Response(JSON.stringify({
      error: 'Phase 1 result required',
      message: 'phase1.video, phase1.coreKnowledge, phase1.contentOpportunities가 필요합니다.'
    }), {
      status: 400, headers: { 'Content-Type': 'application/json' }
    });
  }

  const requestedPlatforms = Array.isArray(body.platforms) && body.platforms.length
    ? body.platforms.filter(id => PLATFORMS.some(p => p.id === id))
    : PLATFORMS.map(p => p.id);

  // Build strategy shells — one per platform, ranked by opportunity fit
  const strategies = [];
  for (const platformId of requestedPlatforms) {
    // Rank opportunities by platform fit
    const ranked = [...phase1.contentOpportunities]
      .map(opp => ({ opp, ...scoreOpportunityForPlatform(opp, platformId) }))
      .sort((a, b) => b.platformFitScore - a.platformFitScore);

    const top = ranked[0];
    if (!top) continue;

    const shell = buildPlatformStrategyShell(platformId, top.opp, phase1);
    shell.rankedOpportunities = ranked.map(r => ({
      rank: r.opp.rank,
      topic: r.opp.topic,
      platformFitScore: r.platformFitScore,
    }));
    strategies.push(shell);
  }

  return new Response(JSON.stringify({
    strategyVersion: STRATEGY_VERSION,
    phase1Ref: {
      videoId: phase1.video?.id || null,
      analysisVersion: phase1.analysisVersion || null,
    },
    platforms: PLATFORMS.filter(p => requestedPlatforms.includes(p.id)),
    strategies,
    schemas: SCHEMAS,
    platformKnowledge: platformKnowledgeBase(),
    notes: [
      'Architecture step only: strategy content fields are null shells.',
      'Recent examples collection is NOT implemented (schema defined only).',
      'Content generation is NOT performed — strategies guide human creators.',
      'Phase 1 pipeline is untouched.',
    ],
    createdAt: new Date().toISOString(),
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}
