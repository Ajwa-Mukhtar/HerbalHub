import React from "react";
import Img1 from "../../assets/women/disease0.jpeg";
import Img2 from "../../assets/women/hair0.jpg";
import Img3 from "../../assets/women/skin0.jpeg";
import Img4 from "../../assets/women/tea0.jpeg";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Herbal Remedies for Diseases",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Herbal Hair Care",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Natural Skin Care",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Herbal Teas & Benefits",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="mt-14 pt-10 pb-10 mb-12 bg-green-800">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="mb-6 text-4xl text-center text-primary">Herbal Hub Categories</p>
          <p data-aos="fade-up" className="text-lg text-white">
            Discover the natural power of herbs. Pure, organic, and crafted for
          </p>
          <p data-aos="fade-up" className="text-lg text-white">your well-being.</p>
        </div>

        {/* Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5">
            {ProductsData.map((data) => (
              <Link key={data.id} to={`/AllCategories/${data.id}`}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="text-center text-white"
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[220px] w-[200px] object-cover rounded-xl mx-auto shadow-lg"
                  />
                  <h3 className="mt-3 font-semibold">{data.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
