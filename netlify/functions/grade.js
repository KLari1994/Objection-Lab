export default async (req) => {
  if (req.method !== "POST") {
    const hasKey = !!(process.env.ANTHROPIC_API_KEY);
    return new Response(
      JSON.stringify({ 
        status: "function running", 
        has_key_process: hasKey,
        env_keys: Object.keys(process.env).filter(k => k.includes("ANTHRO"))
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  try {
    const body = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: body.model || "claude-sonnet-4-20250514",
        max_tokens: body.max_tokens || 1000,
        messages: body.messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ api_status: response.status, api_error: data }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Proxy error", detail: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = {
  path: "/api/grade",
};
