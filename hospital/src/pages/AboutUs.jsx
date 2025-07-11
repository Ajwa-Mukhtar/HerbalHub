import React from "react";
import HImage from "../assets/hero/Aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="bg-green-50">
      {/* Hero Section Before About Us */}
      <div className="relative w-full md:h-70">
        <div className="relative">
          <img
            src={HImage}
            alt="Herbal Support"
            className="w-full h-[300px] object-cover object-top rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold text-white">Who We Are?</h2>
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="container px-6 mx-auto lg:px-12">
        <h1 className="mb-6 mt-6 text-4xl font-bold text-center text-green-900">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-center text-black">
          At Herbal Hub, our mission is to bring the healing power of nature to your doorstep.
          We are dedicated to offering premium-quality herbal products that are natural, safe,
          and effective. With a strong belief in holistic wellness, we aim to make herbal remedies
          easily accessible to everyone. Whether you're looking for skincare solutions, wellness boosters,
          or everyday herbal essentials, our carefully curated selection ensures you get the best 
          — with convenience, transparency, and trust. Experience nature’s goodness, simplified.
        </p>

        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOj-sTJrBePv6Tvuo6g1J22yFWOX-K2xeNGA&s"
            alt="About Us"
            className="object-cover w-full rounded-lg shadow-lg h-80"
          />
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-green-800">
              Our Story
            </h2>
            <p className="mb-4 text-lg text-black">
              Founded with a passion for nature and wellness, our journey began
              with a simple goal: to harness the power of herbs and make them
              accessible to everyone. We believe in the healing power of plants
              and strive to create products that nurture both the body and the
              mind.
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-green-800">
              Why Choose Us?
            </h2>
            <ul className="text-gray-600 text-lg list-disc list-inside">
              <li>100% Natural & Organic Ingredients</li>
              <li>Sustainably Sourced & Eco-Friendly</li>
              <li>Scientifically Formulated for Effectiveness</li>
              <li>Trusted by Thousands of Happy Customers</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-green-800">
            Join Our Herbal Community
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-gray-600">
            Stay connected with us for the latest herbal insights...
          </p>
          <a
            href="https://chat.whatsapp.com/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 mb-10 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
