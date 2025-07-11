import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { submitSignup } from "../api/user";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userEmail: "",
    userName: "",
    password: "",
    userType: "Admin",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{9,}$/;

    if (!form.userEmail || !emailRegex.test(form.userEmail)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    if (!form.userName) {
      toast.error("Username is required.");
      return false;
    }
    if (!form.password) {
      toast.error("Password is required.");
      return false;
    }
    if (!passwordRegex.test(form.password)) {
      toast.error("Password must be at least 9 characters, include a letter, number, and special character.");
      return false;
    }
    if (form.phoneNumber && !phoneRegex.test(form.phoneNumber)) {
      toast.error("Phone number must be 11 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await submitSignup(form);
      if (res.ok) {
        toast.success("Account created successfully!");

        const userProfile = {
          userEmail: form.userEmail,
          userName: form.userName,
          phoneNumber: form.phoneNumber,
          address: form.address
        };
        localStorage.setItem("herbalUser", JSON.stringify(userProfile));

        setTimeout(() => {
          navigate("/my-profile");
        }, 1500);
      } else {
        toast.error("Signup failed. Try again.");
      }
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4 bg-[url('/herbal-bg.jpg')] bg-cover">
      <div className="bg-white/90 p-6 rounded shadow-md w-full max-w-xl border border-green-300">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Create Herbal Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium text-green-800">Email:</label>
            <input type="email" name="userEmail" value={form.userEmail} onChange={handleChange} className="w-full border px-3 py-2 rounded" required disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Username:</label>
            <input type="text" name="userName" value={form.userName} onChange={handleChange} className="w-full border px-3 py-2 rounded" required disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Password:</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border px-3 py-2 rounded" required disabled={loading} />
            <small className="text-gray-500">At least 9 characters, including a letter, number, and special character.</small>
          </div>

          <div>
            <label className="block font-medium text-green-800">User Type:</label>
            <select name="userType" value={form.userType} onChange={handleChange} className="w-full border px-3 py-2 rounded" disabled={loading}>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Guest">Guest</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-green-800">First Name:</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="w-full border px-3 py-2 rounded" disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Last Name:</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="w-full border px-3 py-2 rounded" disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Gender:</label>
            <div className="flex space-x-4">
              <label><input type="radio" name="gender" value="male" onChange={handleChange} checked={form.gender === 'male'} disabled={loading} /> Male</label>
              <label><input type="radio" name="gender" value="female" onChange={handleChange} checked={form.gender === 'female'} disabled={loading} /> Female</label>
            </div>
          </div>

          <div>
            <label className="block font-medium text-green-800">Phone Number:</label>
            <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className="w-full border px-3 py-2 rounded" disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Date of Birth:</label>
            <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className="w-full border px-3 py-2 rounded" disabled={loading} />
          </div>

          <div>
            <label className="block font-medium text-green-800">Address:</label>
            <textarea name="address" value={form.address} onChange={handleChange} rows="3" className="w-full border px-3 py-2 rounded" disabled={loading} />
          </div>

          <button
            type="submit"
            className={`w-full bg-green-700 text-white py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'}`}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button onClick={() => navigate("/login")} className="text-green-600 hover:underline" disabled={loading}>
            Back to Login
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
