// Phase 1: Long-form Content Analysis Engine
// Pipeline: URL → Metadata → Transcript → AI Analysis → Core Knowledge → TOP 5 Opportunities

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const videoId = url.searchParams.get('id');
  
  if (!videoId) {
    return new Response(JSON.stringify({ 
      error: 'Video ID required',
      message: '유효한 YouTube URL을 입력해주세요.'
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const ytKey = context.env.YOUTUBE_API_KEY;
  const claudeKey = context.env.CLAUDE_API_KEY;
  const ANALYSIS_VERSION = 'phase1-v1';
  const MODEL = 'claude-sonnet-5-5';
  
  // Cache check using Cloudflare Cache API
  const cacheKey = `phase1:${videoId}:${ANALYSIS_VERSION}:${MODEL}`;
  const cache = caches.default;
  const cacheUrl = new URL(`/cache/${cacheKey}`, url.origin);
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
  
  if (!ytKey) {
    return new Response(JSON.stringify({ 
      error: 'YouTube API not configured',
      message: '현재 YouTube API가 설정되지 않았습니다.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!claudeKey) {
    return new Response(JSON.stringify({ 
      error: 'Claude API not configured',
      message: 'AI 분석 기능이 설정되지 않았습니다. Claude API 키를 설정해주세요.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    console.log('[analyze-phase1] STEP 1 START');
    // STEP 1: Fetch video metadata
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${ytKey}`;
    const videoRes = await fetch(videoUrl);
    const videoData = await videoRes.json();
    
    if (!videoData.items || !videoData.items.length) {
      return new Response(JSON.stringify({ 
        error: 'Video not found',
        message: '접근할 수 없는 영상입니다.'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const video = videoData.items[0];
    console.log('[analyze-phase1] STEP 1 DONE');
    
    console.log('[analyze-phase1] STEP 2 START');
    // STEP 2: Fetch transcript via internal function
    const transcriptUrl = new URL('/api/transcript', url.origin);
    transcriptUrl.searchParams.set('id', videoId);
    console.log('[analyze-phase1] STEP 2 self-fetch URL:', transcriptUrl.pathname + '?id=' + videoId);
    console.log('[analyze-phase1] STEP 2 fetch begin');
    const transcriptRes = await fetch(transcriptUrl.toString());
    console.log('[analyze-phase1] STEP 2 fetch HTTP status:', transcriptRes.status);
    const transcriptData = await transcriptRes.json();
    console.log('[analyze-phase1] STEP 2 DONE');
    
    if (transcriptData.error) {
      return new Response(JSON.stringify({ 
        error: 'Transcript unavailable',
        message: '이 영상은 현재 분석에 필요한 Transcript를 확보할 수 없습니다.'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log('[analyze-phase1] STEP 3 START');
    // STEP 3: Clean transcript (remove repetitions, keep timestamps)
    const cleanedTranscript = cleanTranscript(transcriptData.segments);
    
    console.log('[analyze-phase1] STEP 3 DONE, cleaned segments:', cleanedTranscript.length);
    console.log('[analyze-phase1] STEP 4 START');
    // STEP 4: AI Analysis via Claude (with chunking for long transcripts)
    const chunks = chunkTranscript(cleanedTranscript);
    console.log('[analyze-phase1] STEP 4 chunks:', chunks.length);
    let analysisText = '';
    let retryPrompt = '';
    
    if (chunks.length === 1) {
      // Short enough for direct analysis
      const analysisPrompt = buildAnalysisPrompt(video, cleanedTranscript);
      retryPrompt = analysisPrompt;
      console.log('[analyze-phase1] CLAUDE CALL model:', MODEL, 'prompt_len:', analysisPrompt.length, 'max_tokens:', 8000);
      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': claudeKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 8000,
          messages: [{ role: 'user', content: analysisPrompt }]
        })
      });
      console.log('[analyze-phase1] CLAUDE HTTP status:', claudeRes.status);
      const claudeData = await claudeRes.json();
      console.log('[analyze-phase1] CLAUDE stop_reason:', claudeData.stop_reason, 'content_len:', (claudeData.content?.[0]?.text || '').length);
      analysisText = claudeData.content?.[0]?.text || '';
    } else {
      // Long transcript: chunk-level extraction + global synthesis
      const chunkResults = [];
      for (let i = 0; i < chunks.length; i++) {
        const chunkPrompt = buildChunkPrompt(video, chunks[i], i + 1, chunks.length);
        const chunkRes = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': claudeKey,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: MODEL,
            max_tokens: 4000,
            messages: [{ role: 'user', content: chunkPrompt }]
          })
        });
        const chunkData = await chunkRes.json();
        chunkResults.push(chunkData.content?.[0]?.text || '');
      }
      // Global synthesis
      const synthesisPrompt = buildSynthesisPrompt(video, chunkResults);
      retryPrompt = synthesisPrompt;
      const synthRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': claudeKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 8000,
          messages: [{ role: 'user', content: synthesisPrompt }]
        })
      });
      const synthData = await synthRes.json();
      analysisText = synthData.content?.[0]?.text || '';
    }
    
    // Parse structured output with retry
    let analysis = null;
    let parseAttempts = 0;
    const maxParseAttempts = 3;
    let currentPrompt = retryPrompt;
    let currentText = analysisText;
    
    console.log('[analyze-phase1] JSON EXTRACTION START');
    while (parseAttempts < maxParseAttempts && !analysis) {
      try {
        console.log('[analyze-phase1] JSON PARSE START attempt:', parseAttempts + 1);
        const jsonMatch = currentText.match(/\{[\s\S]*\}/);
        let jsonStr = jsonMatch ? jsonMatch[0] : currentText;
        // Remove markdown fences if present
        jsonStr = jsonStr.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
        analysis = JSON.parse(jsonStr);
        console.log('[analyze-phase1] JSON PARSE SUCCESS');
      } catch (e) {
        console.error('[analyze-phase1] JSON PARSE ERROR', { message: e?.message });
        parseAttempts++;
        if (parseAttempts >= maxParseAttempts) break;
        // Retry with stricter prompt
        const retryRes = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': claudeKey,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-sonnet-5-5',
            max_tokens: 8000,
            messages: [{ 
              role: 'user', 
              content: '이전 응답을 JSON으로 파싱할 수 없었습니다. 지정된 JSON schema만 반환하십시오. Markdown fence, 설명문, 추가 텍스트를 포함하지 마십시오.\n\n' + currentPrompt 
            }]
          })
        });
        const retryData = await retryRes.json();
        currentText = retryData.content?.[0]?.text || '';
      }
    }
    
    if (!analysis) {
      return new Response(JSON.stringify({ 
        error: 'AI parse failed',
        message: '콘텐츠 생성 중 오류가 발생했습니다. 다시 시도해주세요.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // STEP 5: Build result and cache it
    const result = {
      analysisVersion: ANALYSIS_VERSION,
      model: MODEL,
      createdAt: new Date().toISOString(),
      video: {
        videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        channelId: video.snippet.channelId,
        channelTitle: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        duration: video.contentDetails.duration,
        viewCount: video.statistics.viewCount,
        likeCount: video.statistics.likeCount,
        commentCount: video.statistics.commentCount
      },
      coreKnowledge: analysis.coreKnowledge,
      contentOpportunities: analysis.contentOpportunities
    };
    
    // Store in cache
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
    console.error('[analyze-phase1] UNHANDLED_ERROR', {
      name: e?.name,
      message: e?.message,
      stack: (e?.stack || '').slice(0, 500)
    });
    return new Response(JSON.stringify({
      error: 'Analysis failed',
      message: '분석 중 오류가 발생했습니다. 다시 시도해주세요.',
      debug: { name: e?.name, message: e?.message }
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function cleanTranscript(segments) {
  const cleaned = [];
  let lastText = '';
  for (const seg of segments) {
    const text = seg.text.trim().replace(/\s+/g, ' ');
    if (text && text !== lastText && text.length > 2) {
      cleaned.push({
        start: seg.start,
        end: seg.start + seg.duration,
        startStr: formatTimestamp(seg.start),
        endStr: formatTimestamp(seg.start + seg.duration),
        text
      });
      lastText = text;
    }
  }
  return cleaned;
}

function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

function chunkTranscript(segments, maxChunkTokens = 6000, overlapSegments = 5) {
  const chunks = [];
  let currentChunk = [];
  let currentTokens = 0;
  
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const segTokens = estimateTokens(seg.text);
    
    if (currentTokens + segTokens > maxChunkTokens && currentChunk.length > 0) {
      chunks.push([...currentChunk]);
      // Overlap: keep last N segments for context
      currentChunk = currentChunk.slice(-overlapSegments);
      currentTokens = currentChunk.reduce((sum, s) => sum + estimateTokens(s.text), 0);
    }
    
    currentChunk.push(seg);
    currentTokens += segTokens;
  }
  
  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }
  
  return chunks;
}

function formatTimestamp(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function buildChunkPrompt(video, chunkSegments, chunkNum, totalChunks) {
  const text = chunkSegments.map(t => `[${t.startStr}-${t.endStr}] ${t.text}`).join('\n');
  return `Analyze this segment (part ${chunkNum}/${totalChunks}) of a YouTube video. Extract key topics, claims, and notable moments with timestamps.

VIDEO: ${video.snippet.title}

SEGMENT TRANSCRIPT:
${text}

Return JSON: {"topics": [], "keyMoments": [{"timestamp": "", "summary": "", "score": 0}], "claims": []}`;
}

function buildSynthesisPrompt(video, chunkResults) {
  return `Synthesize these chunk analyses into final Core Knowledge and TOP 5 Content Opportunities for the video "${video.snippet.title}".

CHUNK ANALYSES:
${chunkResults.join('\n\n---\n\n')}

Return ONLY valid JSON in this exact structure:
{
  "coreKnowledge": {
    "mainTopic": "", "coreMessage": "", "targetAudience": [],
    "keyClaims": [], "supportingEvidence": [], "importantNumbers": [],
    "examples": [], "storyElements": [], "emotionalTriggers": [],
    "audienceProblems": [], "solutions": [], "keyTakeaways": []
  },
  "contentOpportunities": [
    {
      "rank": 1, "topic": "", "summary": "",
      "timestampStart": "MM:SS", "timestampEnd": "MM:SS",
      "viralScore": 0, "hookStrength": 0, "curiosity": 0,
      "emotionalIntensity": 0, "surprise": 0, "informationValue": 0,
      "novelty": 0, "standaloneQuality": 0, "shareability": 0,
      "commentPotential": 0, "shortFormConversionPotential": 0,
      "whyItMatters": "", "recommendedAngle": ""
    }
  ]
}

Select TOP 5 across all chunks, re-ranked globally.`;
}

function buildAnalysisPrompt(video, transcript) {
  const transcriptText = transcript.map(t => `[${t.start}-${t.end}] ${t.text}`).join('\n');
  
  return `You are a content strategy analyst. Analyze this YouTube video and extract actionable content opportunities.

VIDEO INFO:
Title: ${video.snippet.title}
Channel: ${video.snippet.channelTitle}
Duration: ${video.contentDetails.duration}
Views: ${video.statistics.viewCount}

TRANSCRIPT:
${transcriptText}

Analyze and return ONLY valid JSON in this exact structure:
{
  "coreKnowledge": {
    "mainTopic": "",
    "coreMessage": "",
    "targetAudience": [],
    "keyClaims": [],
    "supportingEvidence": [],
    "importantNumbers": [],
    "examples": [],
    "storyElements": [],
    "emotionalTriggers": [],
    "audienceProblems": [],
    "solutions": [],
    "keyTakeaways": []
  },
  "contentOpportunities": [
    {
      "rank": 1,
      "topic": "",
      "summary": "",
      "timestampStart": "MM:SS",
      "timestampEnd": "MM:SS",
      "viralScore": 0,
      "hookStrength": 0,
      "curiosity": 0,
      "emotionalIntensity": 0,
      "surprise": 0,
      "informationValue": 0,
      "novelty": 0,
      "standaloneQuality": 0,
      "shareability": 0,
      "commentPotential": 0,
      "shortFormConversionPotential": 0,
      "whyItMatters": "",
      "recommendedAngle": ""
    }
  ]
}

Select TOP 5 content opportunities. Each must be standalone (understandable without full video context). Score 0-100. Base everything on actual video content - do not invent.`;
}
