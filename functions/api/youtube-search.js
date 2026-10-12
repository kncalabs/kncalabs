export async function onRequest(context) {
  const url = new URL(context.request.url);
  const query = url.searchParams.get('q');
  
  if (!query) {
    return new Response(JSON.stringify({ error: 'Query required' }), {
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

  // Search for videos published in the last 7 days
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const publishedAfter = weekAgo.toISOString();
  
  const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount&publishedAfter=${publishedAfter}&maxResults=3&q=${encodeURIComponent(query)}&key=${apiKey}`;
  
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
    return new Response(JSON.stringify({ error: 'Failed to search videos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
