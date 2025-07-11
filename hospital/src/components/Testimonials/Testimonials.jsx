import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Naila Anwar",
    text: "Herbal Hub’s products have transformed my wellness routine! The organic ingredients make me feel healthier.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Reeha Rana",
    text: "I’ve been using Herbal Hub’s herbal teas, and they’ve worked wonders for my digestion. Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ajwa Mukhtar",
    text: "The herbal skincare range is a game-changer! My skin feels nourished and glowing naturally.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Attia Khan",
    text: "I love how pure and effective Herbal Hub’s supplements are. No artificial additives—just nature’s best!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-green-800 dark:bg-gray-900 mt-10 mb-10">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-white dark:text-yellow-400 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-white dark:text-gray-300">
            What our customers are saying?
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3">
                <div className="relative flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 h-full">
                  <span className="text-yellow-300 text-7xl absolute top-2 right-4 select-none">“</span>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-20 h-20 rounded-full mb-4 border-4 border-green-600"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {data.text}
                    </p>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-white">
                      {data.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
