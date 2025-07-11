import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsultImg from "../../assets/hero/sardarimg.jpg";
import { submitConsultation } from "../../api/consultationApi";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData); // Debug: Log form data
    setIsSubmitting(true);

    try {
      const response = await submitConsultation(formData);
      console.log("API Response:", response); // Debug: Log success response

      setSubmitStatus({
        success: true,
        message: "Consultation request submitted successfully!",
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission Error:", error); // Debug: Log full error
      
      // Extract backend error message if available
      const errorMessage = error.response?.data?.message 
        || error.message 
        || "Failed to submit. Please try again.";

      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-green-800 py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-[400px] md:h-[500px]" data-aos="fade-right">
            <img
              src={ConsultImg}
              alt="Consultation"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl filter brightness-130"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 rounded-2xl" />
          </div>

          {/* Form Section */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 space-y-6"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let’s discuss how we can help you. Our Herbalist is ready to provide tailored advice.
            </p>

            {/* Submission Status Message */}
            {submitStatus.message && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-300 text-black"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-300 text-black"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Tell us about your needs..."
                rows="4"
                className="w-full p-3 rounded-md border border-gray-300 text-black"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
              <button
                type="submit"
                className={`w-full bg-green-900 text-white py-3 rounded-md hover:bg-green-800 transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </button>
            </form>

            {/* View Certification Button */}
            <div className="text-center mt-6">
              <Link
                to="/certification"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
              >
                View My Certification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;