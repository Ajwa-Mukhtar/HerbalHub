export const submitCheckout = async (data) => {
  try {
    const response = await fetch("https://localhost:7236/api/User/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API Error:", errorBody);
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Checkout API error:", error.message || error);
    return { errorMessage: "Network Error", responseCode: 500 };
  }
};
