import express from "express";
import fetch from "node-fetch";

const app = express();

// 🔑 LinkedIn App Credentials (replace with .env in production)
const CLIENT_ID = "77j8hcwjhanllh";
const CLIENT_SECRET = "WPL_AP1.pzQ5mrz4wZinkf10.jIHeKg==";
const REDIRECT_URI = "http://localhost:5001/auth/linkedin/callback";

// Store LinkedIn Access Token (⚠️ for demo only — use DB/Redis in production)
let ACCESS_TOKEN = null;

/**
 * STEP 1: Redirect user to LinkedIn login
 */
app.get("/auth/linkedin", (req, res) => {
  const authUrl =
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
    `&client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&scope=r_liteprofile%20r_organization_social%20rw_organization_admin`;

  res.redirect(authUrl);
});

/**
 * STEP 2: Handle callback → Exchange authorization code for access token
 */
app.get("/auth/linkedin/callback", async (req, res) => {
  const code = req.query.code;

  try {
    const response = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      }
    );

    const data = await response.json();
    ACCESS_TOKEN = data.access_token;

    console.log("✅ LinkedIn Access Token:", ACCESS_TOKEN);
    res.send(
      "✅ LinkedIn connected! You can now fetch posts at /api/linkedin-posts"
    );
  } catch (err) {
    console.error("❌ Failed to exchange token:", err);
    res.status(500).send("Error during LinkedIn authentication.");
  }
});

/**
 * STEP 3: Fetch LinkedIn organization posts
 */
app.get("/api/linkedin-posts", async (req, res) => {
  if (!ACCESS_TOKEN) {
    return res
      .status(401)
      .json({
        error:
          "❌ Not authenticated with LinkedIn. Visit /auth/linkedin first.",
      });
  }

  try {
    // Replace with your actual LinkedIn Organization URN
    const ORG_ID = "urn:li:organization:38114204";

    const response = await fetch(
      `https://api.linkedin.com/v2/shares?q=owners&owners=${ORG_ID}`,
      {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }
    );

    const data = await response.json();

    if (!data.elements) {
      return res.json([]);
    }

    // Normalize posts
    const posts = data.elements.map((post) => ({
      category: "LinkedIn",
      date: post.created?.time
        ? new Date(post.created.time).toLocaleDateString()
        : "Unknown date",
      url: `https://www.linkedin.com/feed/update/${post.activity}`,
      title: post.text?.text || "LinkedIn Post",
    }));

    res.json(posts);
  } catch (err) {
    console.error("❌ Failed to fetch LinkedIn posts:", err);
    res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
  }
});

// 🚀 Start server
app.listen(5001, () => {
  console.log("🚀 Server running on http://localhost:5001");
  console.log(
    "👉 Visit http://localhost:5001/auth/linkedin to connect LinkedIn"
  );
});
