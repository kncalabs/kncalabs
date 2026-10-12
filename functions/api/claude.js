// Claude API proxy for AI analysis - keeps API key server-side
export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'POST required' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const claudeKey = context.env.CLAUDE_API_KEY;
  if (!claudeKey) {
    return new Response(JSON.stringify({ 
      error: 'Claude API not configured',
      message: 'AI 분석 기능이 설정되지 않았습니다.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await context.request.json();
    const { prompt, maxTokens = 4000 } = body;
    
    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': claudeKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ 
      error: 'Claude API failed',
      message: '콘텐츠 생성 중 오류가 발생했습니다. 다시 시도해주세요.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
