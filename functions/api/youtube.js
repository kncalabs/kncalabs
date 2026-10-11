export async function onRequest(context) {
  const url = new URL(context.request.url);
  const videoId = url.searchParams.get('id');
  
  if (!videoId) {
    return new Response(JSON.stringify({ error: 'Video ID required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiKey = context.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const ytUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`;
  
  try {
    const response = await fetch(ytUrl);
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to fetch video data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
