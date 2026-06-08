export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const n8nUrl =
      process.env.N8N_WEBHOOK_URL || "https://n8n.autonetlabs.com/webhook/39253306-1600-4b8e-8ee1-8ead5f7e5924";
    if (!n8nUrl) {
      res.status(500).send("Missing N8N_WEBHOOK_URL");
      return;
    }

    const r = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await r.text();
    res.status(r.status).send(text);
  } catch (err) {
    res.status(500).send(`Server error: ${err?.message || err}`);
  }
}
