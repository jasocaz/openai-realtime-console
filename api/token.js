export default async function handler(req, res) {
  if (req.method && req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sessionConfig = {
    session: {
      type: "realtime",
      model: "gpt-realtime",
      audio: {
        output: {
          voice: "marin",
        },
      },
    },
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/realtime/client_secrets",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sessionConfig),
      },
    );

    const data = await response.json();
    return res
      .status(response.ok ? 200 : response.status)
      .json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to generate token" });
  }
}


