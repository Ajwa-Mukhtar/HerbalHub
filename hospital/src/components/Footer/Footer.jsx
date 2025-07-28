import React, { useState } from "react";
import footerLogo from "../../assets/Logo.jpg";
import Banner from "../../assets/website/footer.jpg";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About Us", link: "/AboutUs" },
  { title: "Contact Us", link: "/ContactUs" },
  { title: "Our Products", link: "/AllCategories" },
];

const CustomerCareLinks = [
  { title: "Contact Us", link: "/ContactUs" },
  { title: "Return and Exchange Policy", link: "/return-policy" },
];

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-4 px-4 border-b border-gray-600 md:border-none">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <span className="text-xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="text-white px-5 pt-5 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Banner})`,
      }}
    >
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="py-8 px-4 md:hidden">
          <h1 className="text-xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
            <img src={footerLogo} alt="logo" className="max-w-[50px]" />
            Herbal Hub
          </h1>
          <p>
            Discover the power of nature with our herbal products! Explore our range of natural remedies, skincare, and wellness solutions crafted from pure, organic ingredients.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.instagram.com/sardargeedawakhanaglobal?igsh=bG45MTE2b2podHVj" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl text-white" />
            </a>
            <a href="https://www.facebook.com/share/Y64FdaSDu1drUiiB/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl text-white" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-white" />
            </a>
            <a href="https://www.tiktok.com/@sardargeedawakhanaglobel?_t=ZS-8xFuePq7qDg&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-xl text-white" />
            </a>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <AccordionSection title="Information">
            <ul className="flex flex-col gap-2">
              {FooterLinks.map(link => (
                <li key={link.title}>
                  <a href={link.link} className="hover:text-gray-300">{link.title}</a>
                </li>
              ))}
            </ul>
          </AccordionSection>
          <AccordionSection title="Customer Care">
            <ul className="flex flex-col gap-2">
              {CustomerCareLinks.map(link => (
                <li key={link.title}>
                  <a href={link.link} className="hover:text-gray-300">{link.title}</a>
                </li>
              ))}
            </ul>
          </AccordionSection>
          <AccordionSection title="Contact Us">
            <div className="flex items-start gap-3 mb-2">
              <FaMobileAlt className="mt-1 text-white text-[1.1rem]" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 123456789</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-2">
              <FaMapMarkerAlt className="mt-1 text-white text-[1.1rem]" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Sardar, Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-white text-[1.1rem]" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:hansrajsingh.asad2020@gmail.com">hansrajsingh.asad2020@gmail.com</a>
              </div>
            </div>
          </AccordionSection>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 pb-5 pt-5 text-sm">
          {/* Herbal Hub Info */}
          <div className="py-6 px-4">
            <h1 className="text-xl font-bold mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="logo" className="max-w-[50px]" />
              Herbal Hub
            </h1>
            <p className="mb-4 leading-relaxed">
              Discover the power of nature with our herbal products! Explore our range of natural remedies, skincare, and wellness solutions crafted from pure, organic ingredients.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/sardargeedawakhanaglobal?igsh=bG45MTE2b2podHVj" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[1.1rem] text-white" />
              </a>
              <a href="https://www.facebook.com/share/Y64FdaSDu1drUiiB/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[1.1rem] text-white" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[1.1rem] text-white" />
              </a>
              <a href="https://www.tiktok.com/@sardargeedawakhanaglobel?_t=ZS-8xFuePq7qDg&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-[1.1rem] text-white" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div className="py-6 px-4">
            <h1 className="text-lg font-bold mb-3">Information</h1>
            <ul className="flex flex-col gap-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="hover:text-gray-300">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="py-6 px-4">
            <h1 className="text-lg font-bold mb-3">Customer Care</h1>
            <ul className="flex flex-col gap-2">
              {CustomerCareLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="hover:text-gray-300">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="py-6 px-4">
            <h1 className="text-lg font-bold mb-3">Contact Us</h1>
            <div className="flex items-start gap-3 mb-3">
              <FaMobileAlt className="text-[1.1rem] text-white mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 123456789</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <FaMapMarkerAlt className="text-[1.1rem] text-white mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Sardar, Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[1.1rem] text-white mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:hansrajsingh.asad2020@gmail.com">hansrajsingh.asad2020@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 py-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="font-semibold">Herbal Hub</p>
          <p>Herbal Hub © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
