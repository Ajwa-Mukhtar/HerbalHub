// src/api/login.js

import API_BASE_URL from './baseURL';

export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE_URL}/api/User/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail: email, password }),
  });

  const data = await response.json();

  if (!response.ok || data.responseCode !== 200) {
    throw new Error(data.errorMessage || "Login failed");
  }

  return data; // e.g., data.data.token etc.
}
