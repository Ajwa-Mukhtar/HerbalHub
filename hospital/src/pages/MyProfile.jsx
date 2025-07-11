import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState({
    userEmail: "",
    userName: "",
    phoneNumber: "",
    address: "",
  });

  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    // ✅ Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("herbalUser"));
    const storedImage = localStorage.getItem("profileImage");

    if (storedUser) {
      setProfile({
        userEmail: storedUser.userEmail || "",
        userName: storedUser.userName || "",
        phoneNumber: storedUser.phoneNumber || "",
        address: storedUser.address || "",
      });
    }

    if (storedImage) {
      setImageURL(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileImage", reader.result);
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    localStorage.removeItem("profileImage");
    setImageURL(null);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 bg-[url('/herbal-bg.jpg')] bg-cover">
      <ToastContainer />
      <div className="max-w-3xl mx-auto bg-white/90 rounded-lg p-8 shadow-md border border-green-300">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          My Herbal Profile
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            {/* Profile Image Section */}
            <div className="text-center">
              <img
                src={imageURL || "/default-user.png"}
                alt="Profile"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300"
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              <div className="mt-4 space-x-4">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Upload Image
                </button>
                {imageURL && (
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete Image
                  </button>
                )}
              </div>
            </div>

            {/* User Info Display */}
            <div>
              <label className="block font-medium text-green-800">Email:</label>
              <input
                type="email"
                value={profile.userEmail}
                className="w-full border px-3 py-2 rounded"
                disabled
              />
            </div>

            <div>
              <label className="block font-medium text-green-800">Username:</label>
              <input
                type="text"
                value={profile.userName}
                className="w-full border px-3 py-2 rounded"
                disabled
              />
            </div>

            <div>
              <label className="block font-medium text-green-800">Phone:</label>
              <input
                type="tel"
                value={profile.phoneNumber}
                className="w-full border px-3 py-2 rounded"
                disabled
              />
            </div>

            <div>
              <label className="block font-medium text-green-800">Address:</label>
              <textarea
                value={profile.address}
                rows={3}
                className="w-full border px-3 py-2 rounded"
                disabled
              ></textarea>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4 justify-center">
              <button
                type="button"
                onClick={() => navigate("/AllCategories")}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Go to Shopping
              </button>
              <button
                type="button"
                onClick={() => navigate("/Consultation")}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}