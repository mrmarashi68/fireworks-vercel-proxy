
export default async function handler(req, res) {
  const url = "https://api.fireworks.ai" + req.url;

  const response = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.FIREWORKS_API_KEY}`,
    },
    body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.text();
  res.status(response.status).send(data);
}
