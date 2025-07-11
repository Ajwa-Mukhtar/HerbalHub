// src/api/login.js

// Login API
export async function loginUser(email, password) {
  const response = await fetch("https://localhost:7236/api/User/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail: email, password }),
  });

  const data = await response.json();

  if (!response.ok || data.responseCode !== 200) {
    throw new Error(data.errorMessage || "Login failed");
  }

  return data; // data.data.token etc.
}

