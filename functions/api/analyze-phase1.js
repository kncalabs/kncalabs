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
    
    // STEP 2: Fetch transcript via internal function
    const transcriptUrl = new URL('/api/transcript', url.origin);
    transcriptUrl.searchParams.set('id', videoId);
    const transcriptRes = await fetch(transcriptUrl.toString());
    const transcriptData = await transcriptRes.json();
    
    if (transcriptData.error) {
      return new Response(JSON.stringify({ 
        error: 'Transcript unavailable',
        message: '이 영상은 현재 분석에 필요한 Transcript를 확보할 수 없습니다.'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // STEP 3: Clean transcript (remove repetitions, keep timestamps)
    const cleanedTranscript = cleanTranscript(transcriptData.segments);
    
    // STEP 4: AI Analysis via Claude
    const analysisPrompt = buildAnalysisPrompt(video, cleanedTranscript);
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': claudeKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8000,
        messages: [{ role: 'user', content: analysisPrompt }]
      })
    });
    
    const claudeData = await claudeRes.json();
    const analysisText = claudeData.content?.[0]?.text || '';
    
    // Parse structured output
    let analysis;
    try {
      // Extract JSON from response
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      analysis = JSON.parse(jsonMatch ? jsonMatch[0] : analysisText);
    } catch (e) {
      return new Response(JSON.stringify({ 
        error: 'AI parse failed',
        message: '콘텐츠 생성 중 오류가 발생했습니다. 다시 시도해주세요.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // STEP 5: Return structured result
    return new Response(JSON.stringify({
      analysisVersion: 'v1',
      model: 'claude-sonnet-4-20250514',
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
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (e) {
    return new Response(JSON.stringify({ 
      error: 'Analysis failed',
      message: '분석 중 오류가 발생했습니다. 다시 시도해주세요.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function cleanTranscript(segments) {
  // Remove excessive whitespace, keep timestamps, deduplicate
  const cleaned = [];
  let lastText = '';
  for (const seg of segments) {
    const text = seg.text.trim().replace(/\s+/g, ' ');
    if (text && text !== lastText && text.length > 2) {
      cleaned.push({
        start: formatTimestamp(seg.start),
        end: formatTimestamp(seg.start + seg.duration),
        text
      });
      lastText = text;
    }
  }
  return cleaned;
}

function formatTimestamp(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
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
