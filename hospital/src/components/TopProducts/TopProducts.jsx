import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Img1 from "../../assets/shirt/cream1.jpeg";
import Img2 from "../../assets/shirt/lotion1.jpeg";
import Img3 from "../../assets/shirt/paingo1.jpeg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 28,
    title: "Nimrat Cream",
    oldPrice: "350.00",
    price: "320.00",
    rating: 4.7,
    reviews: 14,
    quantity: 1,
    img: Img1,
    description:
      "Herbal Nimrat Cream deeply nourishes and revitalizes your skin with natural herbal extracts, leaving it soft, smooth, and radiant.",
  },
  {
    id: 29,
    title: "Snevia Lotion",
    oldPrice: "300.00",
    price: "270.00",
    rating: 4.6,
    reviews: 11,
    quantity: 1,
    img: Img2,
    description:
      "Herbal Snevia Body Lotion deeply hydrates and nourishes your skin with natural botanical extracts, leaving it soft, smooth, and radiant.",
  },
  {
    id: 30,
    title: "Pain Go",
    oldPrice: "280.00",
    price: "250.00",
    rating: 4.8,
    reviews: 15,
    quantity: 1,
    img: Img3,
    description:
      "Pain Go Herbal Pain Oil provides instant relief from muscle and joint pain with powerful herbal extracts. Its deep-penetrating formula soothes soreness, reduces inflammation, and promotes relaxation.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="bg-green-800 pt-10 mb-20">
      <div className="container bg-primary pb-20">
        {/* Header */}
        <div className="text-left mb-24">
          <h1 className="mb-6 pt-10 text-4xl font-bold text-center text-green-900">
            Best Products
          </h1>
          <p className="text-center text-lg text-white">
            Discover the best herbal products crafted from nature’s finest
            ingredients to enhance
          </p>
          <p className="text-center text-lg text-white">
            your health, hair, skin, and overall well-being.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* View Detail Button */}
                <Link
                  to={`/product/${data.id}`}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 inline-block group-hover:bg-white group-hover:text-primary"
                >
                  View More Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
