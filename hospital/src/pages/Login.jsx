import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { loginUser } from "../api/login"; // ✅ your API file
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Email and password are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await loginUser(form.email, form.password);

      toast.success(res.responseMessage || "Login successful!");

      // ✅ Save token in localStorage
      localStorage.setItem("herbalToken", res.data.token);

      // ✅ Also save email & password (only for demo; in real app, never save password in localStorage!)
      localStorage.setItem("herbalUser", JSON.stringify({
        userEmail: form.email,
        password: form.password
      }));

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error(error.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4 bg-[url('/herbal-bg.jpg')] bg-cover">
      <ToastContainer />
      <div className="bg-white/90 p-6 rounded shadow-md w-full max-w-md border border-green-300">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
          Login to Herbal Hub
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium text-green-800">User Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block font-medium text-green-800">Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 disabled:bg-green-400"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6 text-green-700">
          <span>Don't have an account? </span>
          <button
            onClick={() => navigate("/signup")}
            className="text-green-800 font-medium hover:underline"
            disabled={isLoading}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}