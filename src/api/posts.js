const BASE = "http://localhost:5000";

export async function getPosts() {
  const res = await fetch(`${BASE}/posts?_sort=createdAt&_order=desc`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}

export async function createPost(payload) {
  const res = await fetch(`${BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function updatePost(id, payload) {
  const res = await fetch(`${BASE}/posts/${id}`, {
    method: "PUT", // atau PATCH
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${BASE}/posts/${id}`, { method: "DELETE" });
  return res.ok;
}
