// YouTube Transcript fetching via timedtext API
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const videoId = url.searchParams.get('id');
  
  if (!videoId) {
    return new Response(JSON.stringify({ error: 'Video ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Fetch video page to get caption tracks
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await response.text();
    
    // Extract caption tracks
    const captionMatch = html.match(/"captionTracks":\s*(\[.*?\])/);
    if (!captionMatch) {
      return new Response(JSON.stringify({ 
        error: 'Transcript not available',
        message: '자막을 가져올 수 없습니다.' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const captionTracks = JSON.parse(captionMatch[1]);
    if (!captionTracks.length) {
      return new Response(JSON.stringify({ 
        error: 'No captions found',
        message: '자막을 가져올 수 없습니다.' 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Prefer Korean, then English, then first available
    let track = captionTracks.find(t => t.languageCode === 'ko') ||
                captionTracks.find(t => t.languageCode === 'en') ||
                captionTracks[0];
    
    const transcriptUrl = track.baseUrl;
    const transcriptRes = await fetch(transcriptUrl);
    const transcriptXml = await transcriptRes.text();
    
    // Parse XML to segments with timestamps
    const segments = [];
    const regex = /<text start="([\d.]+)" dur="([\d.]+)">(.*?)<\/text>/g;
    let match;
    while ((match = regex.exec(transcriptXml)) !== null) {
      segments.push({
        start: parseFloat(match[1]),
        duration: parseFloat(match[2]),
        text: match[3].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
      });
    }
    
    return new Response(JSON.stringify({
      videoId,
      language: track.languageCode,
      segments,
      fullText: segments.map(s => s.text).join(' ')
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch transcript',
      message: '자막을 가져올 수 없습니다.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
