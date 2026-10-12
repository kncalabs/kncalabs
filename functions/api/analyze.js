// Main analysis orchestrator - coordinates full pipeline
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
  const claudeKey = context.env.CLAUDE_API_KEY;
  
  if (!apiKey) {
    return new Response(JSON.stringify({ 
      error: 'YouTube API not configured',
      message: '현재 YouTube API가 설정되지 않았습니다.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // STEP 1: Fetch video metadata
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`;
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
    const channelId = video.snippet.channelId;
    
    // STEP 2: Fetch channel data
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    const channelRes = await fetch(channelUrl);
    const channelData = await channelRes.json();
    const channel = channelData.items?.[0] || null;
    
    // Return combined data - AI analysis happens in separate calls
    return new Response(JSON.stringify({
      video: {
        id: videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        publishedAt: video.snippet.publishedAt,
        channelId: video.snippet.channelId,
        channelTitle: video.snippet.channelTitle,
        categoryId: video.snippet.categoryId,
        duration: video.contentDetails.duration,
        viewCount: video.statistics.viewCount,
        likeCount: video.statistics.likeCount,
        commentCount: video.statistics.commentCount,
        tags: video.snippet.tags || [],
        thumbnails: video.snippet.thumbnails
      },
      channel: channel ? {
        id: channelId,
        title: channel.snippet.title,
        description: channel.snippet.description,
        subscriberCount: channel.statistics.subscriberCount,
        videoCount: channel.statistics.videoCount,
        viewCount: channel.statistics.viewCount,
        thumbnails: channel.snippet.thumbnails
      } : null,
      claudeAvailable: !!claudeKey
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
