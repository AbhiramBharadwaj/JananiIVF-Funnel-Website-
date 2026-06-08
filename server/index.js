import { Redis } from '@upstash/redis';
import express from "express";
import cors from "cors";

// Initialize the Redis client.
// Redis.fromEnv() automatically finds the database credentials
// that Vercel has set for you.
const redis = Redis.fromEnv();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/n8n-lead", async (req, res) => {
  const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.VITE_N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    res.status(500).json({ error: "Missing N8N webhook URL." });
    return;
  }

  try {
    const upstreamResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body ?? {}),
    });

    const responseText = await upstreamResponse.text();
    res.status(upstreamResponse.status).send(responseText || "ok");
  } catch (error) {
    console.error("ERROR FORWARDING TO N8N:", error);
    res.status(502).json({ error: "Failed to reach N8N webhook." });
  }
});

// The API endpoint for tracking visits
app.get("/api/visit", async (req, res) => {
  const { email } = req.query;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const timestamp = new Date().toISOString();

  if (email) {
    try {
      const logEntry = { email, timestamp, ip };

      // Use the redis client to push to the log. The command is the same.
      await redis.lpush("Florida_Logs", JSON.stringify(logEntry));

    } catch (error) {
      // Log the full error to the Vercel console for debugging
      console.error("ERROR LOGGING TO UPSTASH REDIS:", error);
    }
  }

  // Always redirect to the main site
  res.redirect("https://www.primeadagency.com/");
});

// Export the app for Vercel to use
export default app;
