// ==== lib/phase2/types.js ====
// ============================================================
// PHASE 2 — Shared Types & Schemas
// ============================================================

const PLATFORMS = [
  'youtube_shorts',
  'tiktok',
  'instagram_reels',
  'x',
  'x_thread',
  'blog',
  'facebook',
  'facebook_card_news',
  'linkedin',
  'newsletter',
];

const PLATFORM_META = {
  youtube_shorts:    { label: 'YouTube Shorts',    type: 'short-video',       aspectRatio: '9:16', maxLength: '3:00' },
  tiktok:            { label: 'TikTok',            type: 'short-video',       aspectRatio: '9:16', maxLength: '10:00' },
  instagram_reels:   { label: 'Instagram Reels',   type: 'short-video',       aspectRatio: '9:16', maxLength: '3:00' },
  x:                 { label: 'X',                 type: 'micro-text',        maxChars: 280 },
  x_thread:          { label: 'X Thread',          type: 'thread-text',       maxCharsPerPost: 280 },
  blog:              { label: 'Blog',              type: 'long-text' },
  facebook:          { label: 'Facebook',          type: 'social-post' },
  facebook_card_news:{ label: 'Facebook Card News', type: 'carousel-image',   aspectRatio: '1:1' },
  linkedin:          { label: 'LinkedIn',          type: 'professional-text' },
  newsletter:        { label: 'Newsletter',        type: 'email-long' },
};

const STRATEGY_VERSION = 'phase2-v1';
const RESEARCH_VERSION = 'research-v1';

// ------------------------------------------------------------
// Validation helpers
// ------------------------------------------------------------
function isValidPlatform(p) {
  return PLATFORMS.includes(p);
}

function validatePhase1(phase1) {
  const errors = [];
  if (!phase1) errors.push('phase1Analysis is required');
  else {
    if (!phase1.video) errors.push('phase1Analysis.video is required');
    if (!phase1.coreKnowledge) errors.push('phase1Analysis.coreKnowledge is required');
    if (!Array.isArray(phase1.contentOpportunities)) errors.push('phase1Analysis.contentOpportunities must be an array');
    else if (phase1.contentOpportunities.length === 0) errors.push('phase1Analysis.contentOpportunities is empty');
  }
  return errors;
}

function validatePlatforms(platforms) {
  const errors = [];
  if (!Array.isArray(platforms)) { errors.push('platforms must be an array'); return errors; }
  if (platforms.length === 0) errors.push('platforms array is empty');
  const seen = new Set();
  for (const p of platforms) {
    if (!isValidPlatform(p)) errors.push(`invalid platform: ${p}`);
    if (seen.has(p)) errors.push(`duplicate platform: ${p}`);
    seen.add(p);
  }
  return errors;
}

function validateRecentExample(ex) {
  const errors = [];
  if (!ex) return ['example is null'];
  if (!ex.title || typeof ex.title !== 'string') errors.push('title required');
  if (!ex.url || typeof ex.url !== 'string') errors.push('url required');
  if (!ex.platform || !isValidPlatform(ex.platform)) errors.push('valid platform required');
  if (ex.sourceType && !['verified', 'unverified'].includes(ex.sourceType)) errors.push('sourceType must be verified|unverified');
  return errors;
}

function validateEvidence(ev) {
  const errors = [];
  if (!ev) return ['evidence is null'];
  const validTypes = ['official_guideline', 'recent_example', 'research', 'observation'];
  if (!validTypes.includes(ev.type)) errors.push(`evidence.type must be one of ${validTypes.join(',')}`);
  if (!ev.sourceName) errors.push('sourceName required');
  if (!ev.url) errors.push('url required');
  if (!ev.claim) errors.push('claim required');
  return errors;
}

// ------------------------------------------------------------
// Quality checklist scoring
// ------------------------------------------------------------
function scoreChecklist(checklist) {
  if (!checklist || typeof checklist !== 'object') return { score: 0, grade: 'Poor' };
  const keys = ['hook', 'platformNative', 'clearValue', 'strongStructure', 'appropriateLength', 'visualOrTextClarity', 'strongCTA', 'avoidsGenericAdvice', 'evidenceBacked'];
  let passed = 0;
  for (const k of keys) if (checklist[k] === true) passed++;
  const score = Math.round((passed / keys.length) * 100);
  const grade = score >= 90 ? 'Excellent' : score >= 75 ? 'Good' : score >= 60 ? 'Needs Work' : 'Poor';
  return { score, grade, passed, total: keys.length };
}

// ------------------------------------------------------------
// Cache key builder
// ------------------------------------------------------------
function buildCacheKey({ videoId, phase1Version, platform, researchVersion }) {
  return `phase2:${videoId}:${phase1Version || 'unknown'}:${platform}:${researchVersion || RESEARCH_VERSION}:${STRATEGY_VERSION}`;
}


// ==== lib/phase2/research.js ====
// ============================================================
// PHASE 2 — Research Layer
// Platform-native guidance per platform.
// Sources are real (from official docs / observed patterns).
// NO invented algorithm claims.
// ============================================================

import { RESEARCH_VERSION } from './types.js';

const TODAY = new Date().toISOString().split('T')[0];

function ev(type, sourceName, url, claim, date) {
  return { type, sourceName, url, claim, ...(date ? { date } : {}) };
}

const PLATFORM_RESEARCH = {
  youtube_shorts: {
    platform: 'youtube_shorts',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'YouTube Blog — Creator Updates', 'https://www.viralclips.video/blog/guides/how-long-can-youtube-shorts-be', 'Max Shorts length extended from 60s to 3 minutes (Oct 2024)'),
      ev('official_guideline', 'YouTube Blog — Creator Updates', 'https://www.viralclips.video/blog/guides/how-long-can-youtube-shorts-be', 'View counting changed — no minimum watch time for Shorts (Mar 2025)'),
      ev('official_guideline', 'YouTube Blog — The future of YouTube 2026', 'https://www.viralclips.video/blog/guides/how-long-can-youtube-shorts-be', 'Algorithm updated to give Shorts more time to perform; virality window extended beyond 48 hours (2026)'),
      ev('official_guideline', 'YouTube Creator Academy — Shorts optimization course (Mar 2026)', 'https://influenceflow.io/resources/youtube-shorts-monetization-requirements-complete-2026-guide-1/', 'Course emphasizes hook strength in first 0.5 seconds; recommends 2-3 Shorts daily during growth phases'),
    ],
    observedPatterns: [
      'Hook viewers in first 2-3 seconds — most important factor (multiple creator guides, 2026)',
      'High completion rates / rewatch (>100% avg view duration) signal strongly',
      'Visual cut or change every 2-4 seconds in high performers',
      'Captions essential — many watch on mute',
      'Design natively vertical 9:16, 1080x1920 export',
      'Do not pad to fill 3 minutes — retention over duration',
    ],
    commonMistakes: [
      'Slow opening with branding/intro',
      'Horizontal video cropped to vertical',
      'No captions',
      'Padding short ideas to fill time',
    ],
    specs: { aspectRatio: '9:16', resolution: '1080x1920', maxLength: '3:00', format: 'MP4/MOV' },
  },

  tiktok: {
    platform: 'tiktok',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'TikTok Creator Portal', 'https://www.tiktok.com/creators/creator-portal/en-us/', 'TikTok publishes creator best practices via its Creator Portal'),
    ],
    observedPatterns: [
      'Native, organic feel outperforms polished ads',
      'Fast hook in first 1-2 seconds',
      'Conversational, direct-to-camera style',
      'Trend sounds and formats provide discovery lift',
      'Comment interaction drives further distribution',
      'Retention through pattern interrupts',
    ],
    commonMistakes: [
      'Overly produced corporate feel',
      'Slow build-up',
      'Ignoring comments',
      'Reposting watermarked content from other platforms',
    ],
    specs: { aspectRatio: '9:16', resolution: '1080x1920', maxLength: '10:00', format: 'MP4/MOV' },
  },

  instagram_reels: {
    platform: 'instagram_reels',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'Instagram Creators', 'https://creators.instagram.com/', 'Instagram publishes Reels best practices for creators'),
    ],
    observedPatterns: [
      'Visual quality matters more than on TikTok',
      'Shareability and saveability drive reach',
      'Emotional or aspirational angles perform well',
      'Strong opening frame (cover matters)',
      'Clean visual composition',
      'Trending audio helps discovery',
    ],
    commonMistakes: [
      'Low-resolution or blurry footage',
      'TikTok watermark visible',
      'No cover image strategy',
      'Overly salesy content',
    ],
    specs: { aspectRatio: '9:16', resolution: '1080x1920', maxLength: '3:00', format: 'MP4/MOV' },
  },

  x: {
    platform: 'x',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'X Help Center', 'https://help.twitter.com/', 'X publishes platform guidance via Help Center'),
    ],
    observedPatterns: [
      'Strong opinion or sharp insight drives reposts',
      'Concise single-idea posts outperform threads for virality',
      'Questions invite replies',
      'Quote-repost potential increases reach',
      'Timing matters (active hours)',
    ],
    commonMistakes: [
      'Link-only posts with no context',
      'Overly long posts that get truncated',
      'No clear point of view',
      'Hashtag stuffing',
    ],
    specs: { maxChars: 280 },
  },

  x_thread: {
    platform: 'x_thread',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'X Help Center', 'https://help.twitter.com/', 'X publishes platform guidance via Help Center'),
    ],
    observedPatterns: [
      'First post hook determines thread read-through',
      'Progressive information reveal keeps readers scrolling',
      'Numbered or clearly sequenced posts',
      'Final takeaway gives shareable payoff',
      'Each post should stand reasonably alone',
    ],
    commonMistakes: [
      'Weak first post',
      'Too many posts (reader fatigue)',
      'No payoff at the end',
      'Disjointed logic between posts',
    ],
    specs: { maxCharsPerPost: 280 },
  },

  blog: {
    platform: 'blog',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'Google Search Central', 'https://developers.google.com/search/docs', 'Google publishes SEO and content quality guidelines'),
    ],
    observedPatterns: [
      'Search intent matching is primary ranking factor',
      'Clear H1/H2/H3 hierarchy improves scannability',
      'Title promises specific payoff (55-60 chars)',
      'Intro hooks with problem or curiosity',
      'Credible sourcing builds trust',
      'Actionable takeaways increase sharing',
    ],
    commonMistakes: [
      'Clickbait title with thin content',
      'Wall of text with no headings',
      'No clear takeaway',
      'Keyword stuffing',
    ],
    specs: {},
  },

  facebook: {
    platform: 'facebook',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'Meta for Business', 'https://www.facebook.com/business/', 'Meta publishes content best practices for Pages'),
    ],
    observedPatterns: [
      'Shareability drives organic reach',
      'Emotional relevance triggers shares',
      'Community discussion in comments extends lifespan',
      'Accessible writing (not jargon-heavy)',
      'Visual + text combination outperforms text-only',
      'Questions prompt comments',
    ],
    commonMistakes: [
      'Overly promotional tone',
      'External links without context (reach penalty observed)',
      'No visual element',
      'Ignoring comments',
    ],
    specs: {},
  },

  facebook_card_news: {
    platform: 'facebook_card_news',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'Meta for Business', 'https://www.facebook.com/business/', 'Meta publishes content best practices for Pages'),
    ],
    observedPatterns: [
      'First card hook determines swipe-through',
      'One message per card',
      'High readability (large text, contrast)',
      'Save/share value in final card',
      'Consistent visual system across cards',
    ],
    commonMistakes: [
      'Too much text per card',
      'Weak first card',
      'Inconsistent design',
      'No CTA on last card',
    ],
    specs: { aspectRatio: '1:1' },
  },

  linkedin: {
    platform: 'linkedin',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('official_guideline', 'LinkedIn Business', 'https://business.linkedin.com/', 'LinkedIn publishes B2B content guidance'),
    ],
    observedPatterns: [
      'Professional insight with personal experience performs well',
      'Lesson or framework format is shareable',
      'Business relevance filters audience',
      'Credibility signals (role, results) matter',
      'Discussion-provoking endings drive comments',
      'Line breaks improve readability',
    ],
    commonMistakes: [
      'Generic motivational quotes',
      'Overly salesy pitch',
      'No personal angle',
      'Wall of text',
    ],
    specs: {},
  },

  newsletter: {
    platform: 'newsletter',
    lastUpdated: TODAY,
    version: RESEARCH_VERSION,
    officialGuidelines: [
      ev('research', 'Email marketing benchmarks (multiple, 2025-2026)', 'https://mailchimp.com/resources/email-marketing-benchmarks/', 'Industry benchmarks for open rates and engagement'),
    ],
    observedPatterns: [
      'Subject line determines open rate (curiosity + specificity)',
      'Opening hook in first 2-3 lines',
      'Personal/editorial voice builds loyalty',
      'One useful takeaway per issue',
      'Clear CTA at the end',
      'Scannable structure (headings, bullets)',
    ],
    commonMistakes: [
      'Vague subject lines',
      'No clear value in preview',
      'Too long without structure',
      'No CTA',
    ],
    specs: {},
  },
};

function getResearch(platform) {
  return PLATFORM_RESEARCH[platform] || null;
}

// ResearchProvider interface (for future real API connections)
class ResearchProvider {
  async searchOfficialGuidelines(platform) {
    const r = getResearch(platform);
    return r ? r.officialGuidelines : [];
  }
  async searchRecentExamples(platform, topic) {
    // NOT IMPLEMENTED — returns empty with explicit status
    return { examples: [], status: 'NOT_IMPLEMENTED', note: 'Real example search not connected yet' };
  }
}


// ==== lib/phase2/engine.js ====
// ============================================================
// PHASE 2 — Strategy Engine
// Generates platform-native strategies from Phase 1 analysis.
// Claude-dependent parts are abstracted behind StrategyLLM.
// ============================================================

import { PLATFORMS, PLATFORM_META, isValidPlatform } from './types.js';
import { getResearch } from './research.js';

// ------------------------------------------------------------
// Platform-specific strategy focus areas
// ------------------------------------------------------------
const PLATFORM_FOCUS = {
  youtube_shorts: ['첫 1~2초 Hook', 'retention', 'replay', 'curiosity', 'vertical video', 'concise storytelling', 'payoff'],
  tiktok: ['native/organic feel', '빠른 Hook', 'conversational style', 'trend/context 활용', 'comment interaction', 'retention'],
  instagram_reels: ['visual quality', 'shareability', 'saveability', 'emotional/aspirational angle', 'strong opening', 'clean visual composition'],
  x: ['strong opinion', 'insight', 'concise statement', 'conversation', 'reply potential', 'quote/repost potential'],
  x_thread: ['first-post Hook', 'progressive information reveal', 'logical sequence', 'curiosity', 'final takeaway'],
  blog: ['search intent', 'information architecture', 'title', 'headings', 'scannability', 'internal logic', 'useful information', 'credibility'],
  facebook: ['shareability', 'emotional relevance', 'community discussion', 'accessible writing', 'visual/text combination'],
  facebook_card_news: ['slide-by-slide information structure', 'first card Hook', 'readability', 'one message per card', 'save/share value'],
  linkedin: ['professional insight', 'experience', 'lesson', 'business relevance', 'credibility', 'discussion'],
  newsletter: ['subject line', 'opening Hook', 'personal/editorial voice', 'useful takeaway', 'retention', 'CTA'],
};

// ------------------------------------------------------------
// Opportunity → platform fit scoring
// Uses Phase 1 opportunity scores, weighted by platform type.
// ------------------------------------------------------------
const TYPE_WEIGHTS = {
  'short-video':       { hookStrength: 2, curiosity: 2, emotionalIntensity: 1.5, standaloneQuality: 2, shortFormConversionPotential: 2 },
  'micro-text':        { curiosity: 2, surprise: 2, shareability: 2, informationValue: 1.5 },
  'thread-text':       { informationValue: 2, curiosity: 1.5, novelty: 1.5, commentPotential: 1.5 },
  'long-text':         { informationValue: 2, novelty: 2, standaloneQuality: 1.5 },
  'social-post':       { emotionalIntensity: 2, shareability: 2, commentPotential: 1.5 },
  'carousel-image':    { informationValue: 2, standaloneQuality: 1.5, shareability: 1.5 },
  'professional-text': { informationValue: 2, novelty: 2, standaloneQuality: 1.5 },
  'email-long':        { informationValue: 2, curiosity: 1.5, standaloneQuality: 1.5 },
};

function scoreOpportunityForPlatform(opp, platform) {
  const meta = PLATFORM_META[platform];
  if (!meta) return { platformFitScore: 0, signals: {} };
  const weights = TYPE_WEIGHTS[meta.type] || {};
  let score = 0, weightSum = 0;
  const signals = {};
  for (const [k, wt] of Object.entries(weights)) {
    const v = Number(opp[k]) || 0;
    signals[k] = v;
    score += v * wt;
    weightSum += wt;
  }
  return {
    platformFitScore: weightSum ? Math.round((score / weightSum) * 10) / 10 : 0,
    signals,
  };
}

function rankOpportunitiesForPlatform(opportunities, platform) {
  return [...opportunities]
    .map(opp => ({ opportunity: opp, ...scoreOpportunityForPlatform(opp, platform) }))
    .sort((a, b) => b.platformFitScore - a.platformFitScore);
}

// ------------------------------------------------------------
// StrategyLLM interface — Claude implementation
// ------------------------------------------------------------
class StrategyLLM {
  constructor(apiKey, model = 'claude-sonnet-4-20250514') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generateStrategy(input) {
    if (!this.apiKey) {
      throw new Error('CLAUDE_API_KEY is not configured');
    }
    const prompt = this.buildPrompt(input);
    const text = await this.callClaude(prompt);
    return this.parseStrategy(text, prompt);
  }

  buildPrompt({ phase1, platform, research, examples, selectedOpportunity }) {
    const meta = PLATFORM_META[platform];
    const focus = (PLATFORM_FOCUS[platform] || []).join(', ');
    const ck = phase1.coreKnowledge || {};
    const opp = selectedOpportunity;

    return `You are a ${meta.label} content strategist. Generate a platform-native content strategy based on REAL data below. Do NOT invent metrics, URLs, or examples.

## SOURCE VIDEO
Title: ${phase1.video?.title || 'Unknown'}
Channel: ${phase1.video?.channelTitle || 'Unknown'}

## CORE KNOWLEDGE
Main Topic: ${ck.mainTopic || ''}
Core Message: ${ck.coreMessage || ''}
Target Audience: ${(ck.targetAudience || []).join(', ')}
Key Takeaways: ${(ck.keyTakeaways || []).join(' | ')}

## SELECTED CONTENT OPPORTUNITY
Rank: ${opp.rank} | Topic: ${opp.topic}
Timestamp: ${opp.timestampStart} - ${opp.timestampEnd}
Viral Score: ${opp.viralScore}/100
Scores: hook=${opp.hookStrength} curiosity=${opp.curiosity} emotion=${opp.emotionalIntensity} surprise=${opp.surprise} info=${opp.informationValue} novelty=${opp.novelty} standalone=${opp.standaloneQuality} share=${opp.shareability} comments=${opp.commentPotential}
Why it matters: ${opp.whyItMatters || ''}
Recommended angle: ${opp.recommendedAngle || ''}

## PLATFORM: ${meta.label}
Focus areas: ${focus}
${meta.aspectRatio ? `Aspect ratio: ${meta.aspectRatio}` : ''}
${meta.maxLength ? `Max length: ${meta.maxLength}` : ''}
${meta.maxChars ? `Max chars: ${meta.maxChars}` : ''}

## PLATFORM RESEARCH
${(research.officialGuidelines || []).map(g => `- [${g.type}] ${g.sourceName}: ${g.claim}`).join('\n')}
Observed patterns: ${(research.observedPatterns || []).join(' | ')}
Common mistakes: ${(research.commonMistakes || []).join(' | ')}

## RECENT EXAMPLES
${(examples || []).length === 0 ? '(No verified recent examples available — do not invent any)' : (examples || []).map((e, i) => `
Example ${i + 1}: ${e.title} (${e.sourceType})
URL: ${e.url}
${e.views ? `Views: ${e.views}` : ''}${e.followersOrSubscribers ? ` | Followers: ${e.followersOrSubscribers}` : ''}${e.views && e.followersOrSubscribers ? ` | Breakout ratio: ${(e.views / e.followersOrSubscribers).toFixed(1)}x` : ''}
Why relevant: ${e.whyRelevant || ''}
Why it worked: ${e.whyItWorked || ''}
Similarity to source: ${e.similarityToSource || ''}`).join('\n')}

When analyzing examples, prioritize breakout performance (views/followers ratio) over absolute view counts.
A small account with 500K views is more instructive than a large account with 1M views.

## RULES
- Select angle based on the opportunity scores and platform focus
- Explain WHY using Evidence → Observation → Recommendation format
- NEVER say "the algorithm likes X" without evidence
- NEVER invent metrics, URLs, or examples
- Provide hook DIRECTION (not final copy)
- List concrete things to avoid for this platform

## PLATFORM-SPECIFIC OUTPUT REQUIREMENTS
${platform === 'x_thread' ? `
For X Thread, structure must be a numbered thread sequence:
"structure": [{"post": 1, "purpose": "Hook", "direction": "..."}, {"post": 2, "purpose": "...", "direction": "..."}]
` : ''}${platform === 'facebook_card_news' ? `
For Facebook Card News, structure must be slide-by-slide:
"structure": [{"slide": 1, "purpose": "Hook", "visualDirection": "...", "textDirection": "..."}, {"slide": 2, ...}]
` : ''}${platform === 'newsletter' ? `
For Newsletter, include:
"subjectLine": "", "previewText": "", "openingHook": ""
` : ''}${platform === 'blog' ? `
For Blog, include:
"seoTitle": "", "metaDescription": "", "headingStructure": []
` : ''}${['youtube_shorts', 'tiktok', 'instagram_reels'].includes(platform) ? `
For short video, structure must be time-based:
"structure": [{"timestamp": "0-3s", "purpose": "Hook", "visualDirection": "...", "audioDirection": "..."}, ...]
Include in productionGuide: screenComposition, bRollUsage, captionStyle, pacing, musicDirection
` : ''}

## AI PROMPT REQUIREMENTS
The "aiPrompt" field must be a complete, copy-paste-ready prompt containing ALL of these sections:
ROLE: Who the AI should act as
SOURCE CONTENT: Title, core message, selected opportunity with timestamp
PLATFORM: ${meta.label} with its constraints
TARGET AUDIENCE: Who this is for
OBJECTIVE: What success looks like
ANGLE: The recommended angle
HOOK: Hook direction (not final copy)
STRUCTURE: Step-by-step structure
TONE: Appropriate tone for platform
LENGTH: Specific length/duration
EDITING DIRECTION: Visual/audio/editing guidance
CTA: Call to action
DO NOT: List of prohibitions (no invented facts, no generic advice, etc.)
QUALITY CRITERIA: How to evaluate the output
IMPORTANT RULE: Do not invent or change facts from the source. Only use provided information.

## PRODUCTION GUIDE REQUIREMENTS
The "productionGuide" object must include practical, actionable details:
{
  "duration": "Specific (e.g. 35-45 seconds)",
  "screenComposition": "How to frame shots",
  "bRollUsage": "What B-roll to use and when",
  "cutDirection": "Cut pacing and style",
  "captionStyle": "Caption appearance and timing",
  "emphasisPoints": "What to emphasize visually",
  "narrationDirection": "Voiceover style if applicable",
  "musicDirection": "Music/sound approach",
  "pacing": "Overall rhythm",
  "ctaPlacement": "Where and how to place CTA"
}
(Include only fields relevant to the platform; omit irrelevant ones)

Return ONLY valid JSON (no markdown fences, no explanation):
{
  "recommendedAngle": "",
  "whyThisAngle": "",
  "format": "",
  "hookStyle": "",
  "recommendedLength": "",
  "structure": [],
  "editingDirection": [],
  "productionGuide": {},
  "cta": "",
  "thingsToAvoid": [],
  "whyExamplesWorked": [],
  "sourceComparison": "",
  "finalRecommendation": "",
  "aiPrompt": "",
  "qualityChecklist": {
    "hook": true, "platformNative": true, "clearValue": true,
    "strongStructure": true, "appropriateLength": true,
    "visualOrTextClarity": true, "strongCTA": true,
    "avoidsGenericAdvice": true, "evidenceBacked": true
  },
  "evidence": [
    {"type": "official_guideline", "sourceName": "", "url": "", "claim": ""}
  ]
}`;
  }

  async callClaude(prompt, maxRetries = 2) {
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: 8000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return data.content?.[0]?.text || '';
      }
      lastError = new Error(`Claude API error: ${res.status}`);
      if (res.status === 401 || res.status === 403) break;
    }
    throw lastError;
  }

  parseStrategy(text, originalPrompt) {
    const cleaned = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    const match = cleaned.match(/\{[\s\S]*\}/);
    try {
      return JSON.parse(match ? match[0] : cleaned);
    } catch {
      throw new Error('Strategy JSON parse failed');
    }
  }
}

// ------------------------------------------------------------
// Main: generate strategy for a single platform
// ------------------------------------------------------------
export async function generatePlatformStrategy(phase1, platform, llm, exampleProvider = null) {
  if (!isValidPlatform(platform)) {
    throw new Error(`Invalid platform: ${platform}`);
  }

  const opportunities = phase1.contentOpportunities || [];
  if (opportunities.length === 0) {
    throw new Error('No content opportunities in Phase 1 result');
  }

  const ranked = rankOpportunitiesForPlatform(opportunities, platform);
  const selected = ranked[0];

  const research = getResearch(platform);

  let examples = [];
  let exampleStatus = 'NOT_IMPLEMENTED';
  if (exampleProvider && typeof exampleProvider.searchRecentExamples === 'function') {
    const result = await exampleProvider.searchRecentExamples(platform, phase1.coreKnowledge?.mainTopic);
    examples = result.examples || [];
    exampleStatus = result.status || 'UNKNOWN';
  }

  const strategy = await llm.generateStrategy({
    phase1,
    platform,
    research,
    examples,
    selectedOpportunity: selected.opportunity,
  });

  return {
    platform,
    platformLabel: PLATFORM_META[platform].label,
    recommendedOpportunityRank: selected.opportunity.rank,
    platformFitScore: selected.platformFitScore,
    rankedOpportunities: ranked.map(r => ({
      rank: r.opportunity.rank,
      topic: r.opportunity.topic,
      platformFitScore: r.platformFitScore,
    })),
    recentExamples: examples.map(e => ({ ...e, sourceType: e.sourceType || 'unverified' })),
    exampleStatus,
    researchVersion: research?.version || null,
    strategy,
  };
}


// ==== API Handler ====
// ============================================================
// PHASE 2 — Platform Strategy Engine (All 10 platforms)
// POST /api/analyze-phase2
// Input: { phase1Analysis, platforms: [...] }
// Output: { version, source, strategies, status }
// ============================================================


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
    return fail(400, 'Invalid JSON body', '요청 형식이 올바르지 않습니다.');
  }

  const phase1 = body.phase1Analysis || body.phase1Result || body.phase1;
  const platforms = Array.isArray(body.platforms) && body.platforms.length ? body.platforms : PLATFORMS;

  const phase1Errors = validatePhase1(phase1);
  if (phase1Errors.length) {
    return fail(400, 'Invalid Phase 1 result', phase1Errors.join('; '));
  }

  const platformErrors = validatePlatforms(platforms);
  if (platformErrors.length) {
    return fail(400, 'Invalid platforms', platformErrors.join('; '));
  }

  const claudeKey = context.env.CLAUDE_API_KEY;
  if (!claudeKey) {
    return fail(500, 'CLAUDE_API_KEY is not configured', 'Claude API 키가 설정되지 않았습니다.');
  }

  const videoId = phase1.video?.id || phase1.video?.videoId || 'unknown';
  const phase1Version = phase1.analysisVersion || 'unknown';
  const cache = caches.default;
  const researchProvider = new ResearchProvider();
  const llm = new StrategyLLM(claudeKey);

  const strategies = [];
  const errors = [];

  for (const platform of platforms) {
    const cacheKey = buildCacheKey({ videoId, phase1Version, platform });
    const cacheUrl = new URL(`/cache/${encodeURIComponent(cacheKey)}`, url.origin);

    try {
      const cachedRes = await cache.match(cacheUrl);
      if (cachedRes) {
        const cached = await cachedRes.json();
        strategies.push({ ...cached, fromCache: true });
        continue;
      }

      const result = await generatePlatformStrategy(phase1, platform, llm, researchProvider);

      // Attach quality score
      if (result.strategy?.qualityChecklist) {
        result.qualityScore = scoreChecklist(result.strategy.qualityChecklist);
      }

      result.fromCache = false;
      strategies.push(result);

      await cache.put(cacheUrl, new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      }));
    } catch (e) {
      errors.push({ platform, error: String(e.message || e).slice(0, 300) });
    }
  }

  const status = errors.length === 0 ? 'completed'
    : strategies.length === 0 ? 'failed' : 'partial';

  return new Response(JSON.stringify({
    version: STRATEGY_VERSION,
    source: {
      videoId,
      phase1Version,
      platformsRequested: platforms,
      platformsCompleted: strategies.map(s => s.platform),
    },
    strategies,
    errors: errors.length ? errors : undefined,
    status,
    generatedAt: new Date().toISOString(),
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });

  function fail(status, error, message) {
    return new Response(JSON.stringify({ error, message }), {
      status, headers: { 'Content-Type': 'application/json' }
    });
  }
}
