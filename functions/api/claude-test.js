// Minimal Claude API connection test - STEP 2 only
export async function onRequest(context) {
  const key = context.env.CLAUDE_API_KEY;
  
  if (!key) {
    return new Response(JSON.stringify({
      apiKey: 'MISSING',
      overall: 'FAILED'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5-5',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Reply with OK' }]
      })
    });

    const httpStatus = res.status;
    
    if (!res.ok) {
      let errorType = 'unknown';
      let safeMsg = '';
      try {
        const errBody = await res.json();
        errorType = errBody?.error?.type || 'unknown';
        safeMsg = errBody?.error?.message || '';
      } catch {
        safeMsg = 'Could not parse error body';
      }
      return new Response(JSON.stringify({
        apiKey: 'PRESENT',
        http: httpStatus,
        errorType,
        error: safeMsg,
        overall: 'FAILED'
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify({
      apiKey: 'PRESENT',
      http: httpStatus,
      model: data.model || 'claude-sonnet-5-5',
      response: data.id ? 'PASS' : 'FAIL',
      authentication: 'PASS',
      endpoint: 'PASS',
      overall: 'READY FOR PHASE 1 E2E'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      apiKey: 'PRESENT',
      http: 'CONNECTION_ERROR',
      error: String(e.message || e).slice(0, 200),
      overall: 'FAILED'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
