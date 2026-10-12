// Diagnostic only — minimal Claude API connectivity test
// Does NOT modify Phase 1/2 logic
export async function onRequest(context) {
  const key = context.env.CLAUDE_API_KEY;

  const result = {
    keyExists: !!key,
    keyLength: key ? key.length : 0,
    keyPrefix: key ? key.slice(0, 7) + '...' : null,
  };

  if (!key) {
    result.test = 'SKIPPED_NO_KEY';
    return new Response(JSON.stringify(result), {
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
        model: 'claude-sonnet-4-20250514',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Say OK' }]
      })
    });

    result.httpStatus = res.status;
    const bodyText = await res.text();

    // Safe error extraction — never include key
    try {
      const bodyJson = JSON.parse(bodyText);
      result.safeError = bodyJson?.error?.message || bodyJson?.error?.type || 'Unknown error shape';
      result.errorType = bodyJson?.error?.type || null;
    } catch {
      result.safeError = bodyText.slice(0, 200);
    }

    result.test = res.ok ? 'PASS' : 'FAIL';
  } catch (e) {
    result.test = 'FAIL';
    result.safeError = String(e.message || e).slice(0, 200);
  }

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' }
  });
}
