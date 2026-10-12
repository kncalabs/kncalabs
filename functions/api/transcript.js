// Transcript Provider Architecture
// Primary: GetYouTubeTranscript (https://getyoutubetranscript.com/api/v1)
// 
// Standard internal format:
// {
//   "text": "...",
//   "segments": [{ "text": "...", "start": 0, "duration": 3.2 }],
//   "language": "ko",
//   "source": "getyoutubetranscript"
// }

const PRIMARY_PROVIDER = 'getyoutubetranscript';

async function fetchFromGetYouTubeTranscript(videoId, apiKey, language) {
  const params = new URLSearchParams({
    v: videoId,
    timestamps: 'true'
  });
  if (language) params.set('language', language);

  const url = `https://getyoutubetranscript.com/api/v1/transcript?${params}`;
  
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json'
    }
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Provider error ${res.status}: ${body.slice(0, 200)}`);
  }

  const json = await res.json();
  if (!json.success || !json.data) {
    throw new Error('Provider returned unsuccessful response');
  }

  const data = json.data;
  const segments = (data.segments || []).map(s => ({
    text: String(s.text || '').trim(),
    start: Number(s.start) || 0,
    duration: Number(s.duration) || 0
  })).filter(s => s.text.length > 0);

  return {
    text: String(data.transcript || ''),
    segments,
    language: data.language_code || language || 'en',
    requestedLanguage: data.requested_language || null,
    captionType: data.caption_type || null,
    source: 'getyoutubetranscript',
    videoId: data.video_id || videoId,
    cached: data.cached === true
  };
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const videoId = url.searchParams.get('id');
  const language = url.searchParams.get('lang') || url.searchParams.get('language') || '';

  if (!videoId) {
    return new Response(JSON.stringify({ error: 'Video ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const providerKey = context.env.GETYOUTUBETRANSCRIPT_API_KEY;
  const provider = (context.env.PRIMARY_TRANSCRIPT_PROVIDER || PRIMARY_PROVIDER).toLowerCase();

  if (provider !== 'getyoutubetranscript') {
    return new Response(JSON.stringify({
      error: 'Provider not supported',
      message: `지원하지 않는 transcript provider: ${provider}`
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!providerKey) {
    return new Response(JSON.stringify({
      error: 'Transcript provider not configured',
      message: 'Transcript API 키가 설정되지 않았습니다.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const result = await fetchFromGetYouTubeTranscript(videoId, providerKey, language);

    if (!result.segments.length) {
      return new Response(JSON.stringify({
        error: 'Transcript not available',
        message: '이 영상의 자막을 가져올 수 없습니다.',
        provider: result.source,
        videoId
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      error: 'Transcript fetch failed',
      message: '자막을 가져오는 중 오류가 발생했습니다.',
      provider: 'getyoutubetranscript',
      videoId,
      detail: String(e.message || e).slice(0, 300)
    }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
