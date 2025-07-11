import React from "react";
import Image1 from "../../assets/hero/women.webp";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Chatbot from "../Chatbot/Chat";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Discover the Power of Herbal Remedies",
    description:
      "Learn how natural herbs can enhance your health and well-being. Explore the benefits of Ayurveda and traditional medicine.",
  },
  {
    id: 2,
    img: Image2,
    title: "Explore Our Herbal Products",
    description:
      "From herbal teas to skincare, find the best natural products tailored for your health and beauty needs.",
  },
  {
    id: 3,
    img: Image3,
    title: "Welcome to a Herbal Lifestyle",
    description:
      "Embrace a nature-friendly approach to life with organic and sustainable herbal solutions for a healthier you.",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-primary text-green-800 hover:text-white p-2 rounded-full shadow-md"
  >
    <FaArrowRight size={18} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/80 hover:bg-primary text-green-800 hover:text-white p-2 rounded-full shadow-md"
  >
    <FaArrowLeft size={18} />
  </div>
);

const Hero = ({ handleOrderPopup }) => {
  const navigate = useNavigate(); // ✅ Hook initialized

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-green-800 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/30 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Hero Section */}
      <div className="container relative sm:px-8 pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div className="px-4" key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content */}
                <div className="flex flex-col justify-center text-center sm:text-left order-2 sm:order-1 relative z-10 py-8 sm:py-12">
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl text-white sm:text-5xl lg:text-6xl  leading-tight"
                  >
                    {data.title}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="mt-4 text-sm sm:text-base text-gray-100 dark:text-gray-300 max-w-xl mx-auto sm:mx-0"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="mt-6"
                  >
                    <button
                      onClick={() => navigate("/AllCategories")} // ✅ Fixed here
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white font-bold py-2 px-6 rounded-full text-sm sm:text-base"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={data.img}
                      alt="Herbal Slide"
                      className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Chatbot />
    </div>
  );
};

export default Hero;
