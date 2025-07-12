// src/api/user.js
import API_BASE_URL from './baseURL';

export async function submitSignup(formData) {
  const response = await fetch(`${API_BASE_URL}/api/User/User`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await response.json().catch(() => null);

  // ✅ Check API custom code if HTTP status is still 200
  if (!response.ok || data?.responseCode === 409) {
    let errorMessage = data?.errorMessage || "Signup failed.";
    if (data?.errorMessage === "User already exists.") {
      errorMessage = "An account with this email already exists.";
    }
    throw new Error(errorMessage);
  }

  return data;
}
