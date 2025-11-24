async function handleResponse(res) {
  if (!res.ok) {
    // capture body for debugging
    const text = await res.text().catch(() => "<no body>");
    throw new Error(`Fetch error ${res.status} ${res.statusText}: ${text}`);
  }
  return res.json();
}

export async function getBlogs() {
  const res = await fetch("http://localhost:3001/api/blogs");
  return handleResponse(res);
}

export async function getPortfolios() {
  const res = await fetch("http://localhost:3001/api/portfolios");
  return handleResponse(res);
}
