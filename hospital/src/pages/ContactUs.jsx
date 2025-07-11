import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaComments } from "react-icons/fa";
import HerbalImage from "../assets/hero/contact.jpg";
import { submitContactForm } from "../api/contactApi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      await submitContactForm(formData);
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!"
      });
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Top Section with Image */}
      <div className="relative">
        <img
          src={HerbalImage}
          alt="Herbal Support"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container px-6 py-12 mx-auto">
        <p className="text-lg text-center font-bold text-gray-600">
          Need help with our herbal products? Reach out to us! 
        </p>
        <p className="mb-10 text-lg text-center text-gray-600">
          We would love to hear from you.
        </p>

        {/* Status Message */}
        {submitStatus.message && (
          <div className={`max-w-2xl mx-auto mb-6 p-4 rounded-md ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-black">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2 mt-4 text-lg font-semibold text-white transition bg-green-600 rounded-md hover:bg-green-700 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Talk to Sales */}
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <FaPhoneAlt className="mx-auto text-4xl text-green-600" />
            <h3 className="mt-4 text-2xl font-semibold">Talk to Team</h3>
            <p className="mt-2 text-gray-600">
              Want instant response? Call our team now.
            </p>
            <a
              href="tel:+9230914214798"
              className="block mt-3 text-lg font-bold text-green-700"
            >
              +92 309 14214798
            </a>
          </div>

          {/* Customer Support */}
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <FaComments className="mx-auto text-4xl text-green-600" />
            <h3 className="mt-4 text-2xl font-semibold">Customer Support</h3>
            <p className="mt-2 text-gray-600">
              Need assistance? You can get in touch with us on Whatsapp.
            </p>
            <a
              href="https://wa.me/+923091421478"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 mt-4 text-lg font-semibold text-white transition bg-green-600 rounded-md hover:bg-green-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;