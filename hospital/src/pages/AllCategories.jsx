import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import img1 from '../assets/category/product1.jpeg';
import img2 from '../assets/category/product2.jpeg';
import img3 from '../assets/category/product3.jpeg';
import img4 from '../assets/category/product4.jpeg';
import img5 from '../assets/category/product5.webp';
import img6 from '../assets/category/product6.jpeg';
import img7 from '../assets/category/product7.jpg';
import img8 from '../assets/category/product8.jpg';
import img9 from '../assets/category/product9.jpg';
import img10 from '../assets/category/product10.avif';
import img11 from '../assets/category/product11.webp';
import img12 from '../assets/category/product12.avif';
import img13 from '../assets/category/product13.webp';
import img14 from '../assets/category/product14.avif';
import img15 from '../assets/category/product15.avif';
import img16 from '../assets/category/product16.jpg';
import img17 from '../assets/category/product17.jpg';
import img18 from '../assets/category/product18.jpg';
import img19 from '../assets/category/product19.jpg';
import img20 from '../assets/category/product20.jpg';
import img21 from '../assets/category/product21.jpg';
import img22 from '../assets/category/product22.jpg';
import img23 from '../assets/category/product23.jpg';
import img24 from '../assets/category/product24.jpg';
import img25 from '../assets/category/product25.jpg';
import img26 from '../assets/category/product26.jpg';
import img27 from '../assets/category/product27.jpg';
// Reuse images cyclically for 27 products
const images = [img1, img2, img3, img4, img5, img6];

const ProductsData = [
   {
    id: 1,
    title: "Organic Green Tea",
    oldPrice: "250.00",
    price: "180.00",
    rating: 4.8,
    reviews: 12,
    quantity: 1,
    img: img1,
    description: `hello`
  },
  {
    id: 2,
    title: "Herbal Hair Oil",
    oldPrice: "350.00",
    price: "300.00",
    rating: 4.6,
    reviews: 8,
    quantity: 1,
    img: img2,
    description: "Strengthens hair roots, prevents hair fall, and promotes natural hair growth."
  },
  {
    id: 3,
    title: "Natural Skin Cream",
    oldPrice: "300.00",
    price: "250.00",
    rating: 4.7,
    reviews: 10,
    quantity: 1,
    img: img3,
    description: "Hydrates dry skin and helps in healing rashes and blemishes with herbal extracts."
  },
  {
    id: 4,
    title: "Aromatherapy Essential Oil",
    oldPrice: "400.00",
    price: "280.00",
    rating: 4.9,
    reviews: 15,
    quantity: 1,
    img: img4,
    description: "Relieves stress and anxiety with natural aromatic essential oils."
  },
  {
    id: 5,
    title: "Detox Herbal Tea",
    oldPrice: "400.00",
    price: "300.00",
    rating: 4.5,
    reviews: 9,
    quantity: 1,
    img: img5,
    description: "Cleanses the digestive system and supports liver detoxification."
  },
  {
    id: 6,
    title: "Organic Superfood Pack",
    oldPrice: "1200.00",
    price: "1000.00",
    rating: 4.8,
    reviews: 11,
    quantity: 1,
    img: img6,
    description: "Packed with vitamins, minerals, and antioxidants for a daily health boost."
  },
  {
    id: 7,
    title: "Herbal Face Mask",
    oldPrice: "700.00",
    price: "540.00.00",
    rating: 4.7,
    reviews: 13,
    quantity: 1,
    img: img7,
    description: "Cleans pores, reduces acne, and rejuvenates skin naturally."
  },
  {
    id: 8,
    title: "Natural Lip Balm",
    oldPrice: "190.00",
    price: "120.00",
    rating: 4.6,
    reviews: 7,
    quantity: 1,
    img: img8,
    description: "Keeps lips moisturized and protected with herbal beeswax formula."
  },
  {
    id: 9,
    title: "Herbal Shampoo",
    oldPrice: "500.00",
    price: "350.00",
    rating: 4.5,
    reviews: 10,
    quantity: 1,
    img: img9,
    description: "Gently cleanses scalp while reducing dandruff and hair fall."
  },
  {
    id: 10,
    title: "Organic Conditioner",
    oldPrice: "500.00",
    price: "420.00",
    rating: 4.7,
    reviews: 12,
    img: img10,
    description: "Leaves hair soft, shiny, and easy to manage with natural extracts."
  },
  {
    id: 11,
    title: "Herbal Body Lotion",
    oldPrice: "450.00",
    price: "300.00",
    rating: 4.8,
    reviews: 14,
    quantity: 1,
    img: img11,
    description: "Provides long-lasting moisture and smooth skin using natural oils."
  },
  {
    id: 12,
    title: "Natural Face Serum",
    oldPrice: "1500.00",
    price: "1200.00",
    rating: 4.9,
    reviews: 16,
    quantity: 1,
    img: img12,
    description: "Brightens complexion and reduces fine lines with powerful herbal ingredients."
  },
  {
    id: 13,
    title: "Herbal Toothpaste",
    oldPrice: "450.00",
    price: "250.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img13,
    description: "Prevents cavities, strengthens gums, and freshens breath naturally."
  },
  {
    id: 14,
    title: "Organic Mouthwash",
    oldPrice: "300.00",
    price: "280.50",
    rating: 4.5,
    reviews: 8,
    quantity: 1,
    img: img14,
    description: "Fights bad breath and bacteria without alcohol or harsh chemicals."
  },
  {
    id: 15,
    title: "Herbal Hand Sanitizer",
    oldPrice: "380.00",
    price: "220.00",
    rating: 4.7,
    reviews: 10,
    quantity: 1,
    img: img15,
    description: "Kills 99.9% of germs with natural ingredients and keeps hands soft."
  },
  {
    id: 16,
    title: "Natural Deodorant",
    oldPrice: "250.00",
    price: "150.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img16,
    description: "Neutralizes odor and keeps you fresh all day with plant-based formula."
  },
  {
    id: 17,
    title: "Herbal Foot Cream",
    oldPrice: "300.00",
    price: "250.00",
    rating: 4.8,
    reviews: 11,
    quantity: 1,
    img: img17,
    description: "Heals cracked heels and softens rough feet using herbal oils and extracts."
  },
  {
    id: 18,
    title: "Organic Hand Cream",
    oldPrice: "400.00",
    price: "300.00",
    rating: 4.7,
    reviews: 12,
    quantity: 1,
    img: img18,
    description: "Deeply nourishes and protects dry hands from environmental damage."
  },
  {
    id: 19,
    title: "Herbal Eye Gel",
    oldPrice: "900.00",
    price: "750.00",
    rating: 4.9,
    reviews: 14,
    quantity: 1,
    img: img19,
    description: "Reduces puffiness and dark circles while refreshing tired eyes."
  },
  {
    id: 20,
    title: "Natural Cotton Pad",
    oldPrice: "500.00",
    price: "450.00",
    rating: 4.6,
    reviews: 10,
    quantity: 70,
    img: img20,
    description: "Cleanses gently and removes impurities while balancing skin oils."
  },
  {
    id: 21,
    title: "Herbal Body Scrub",
    oldPrice: "250.00",
    price: "230.99",
    rating: 4.8,
    reviews: 13,
    quantity: 1,
    img: img21,
    description: "Exfoliates dead skin cells and leaves your skin glowing and smooth."
  },
  {
    id: 22,
    title: "Herbal Reduce Fat",
    oldPrice: "1700.00",
    price: "1200.00",
    rating: 4.7,
    reviews: 11,
    quantity: 1,
    img: img22,
    description: "Supports weight loss naturally by boosting metabolism and digestion."
  },
  {
    id: 23,
    title: "Herbal Massage Oil",
    oldPrice: "220.00",
    price: "200.50",
    rating: 4.9,
    reviews: 15,
    quantity: 1,
    img: img23,
    description: "Relieves muscle pain and improves circulation with soothing herbal oils."
  },
  {
    id: 24,
    title: "Remedies Kit",
    oldPrice: "1,100.00",
    price: "700.00",
    rating: 4.8,
    reviews: 14,
    quantity: 1,
    img: img24,
    description: "A complete herbal remedy kit for minor ailments and daily wellness."
  },
  {
    id: 25,
    title: "Remove Face Acne (Oily Skin)",
    oldPrice: "500.00",
    price: "300.00",
    rating: 4.6,
    reviews: 9,
    quantity: 1,
    img: img25,
    description: "Controls excess oil, unclogs pores, and reduces acne naturally."
  },
  {
    id: 26,
    title: "Organic Face Toner",
    oldPrice: "700.00",
    price: "450.00",
    rating: 4.7,
    reviews: 11,
    quantity: 1,
    img: img26,
    description: "Balances skin pH, tightens pores, and hydrates with pure botanical extracts."
  },
  {
    id: 27,
    title: "Herbal Night Cream",
    oldPrice: "550.00",
    price: "300.00",
    rating: 4.9,
    reviews: 16,
    quantity: 1,
    img: img27,
    description: "Rejuvenates and repairs skin overnight with powerful natural ingredients."
  },
];

const AllCategories = () => {
  const [products, setProducts] = useState(ProductsData);
  const [minPrice, setMinPrice] = useState("0");     // Use string for controlled input
  const [maxPrice, setMaxPrice] = useState("2500");  // Use string here too
  const [sortOrder, setSortOrder] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);


  useEffect(() => {
    // Convert string to number safely with fallback to 0 or 2500
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || 2500;

    let filtered = ProductsData.filter((p) => {
      const price = parseFloat(p.price);
      return price >= min && price <= max;
    });

    if (sortOrder === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "za") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "price-low") {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === "price-high") {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setProducts(filtered);
  }, [minPrice, maxPrice, sortOrder]);

  // Reset function
  const resetFilters = () => {
    setMinPrice("0");
    setMaxPrice("2500");
    setSortOrder("");
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container px-6 mx-auto">
      {/* Toggle button: visible only on small screens */}
<div className="flex justify-end mb-2 sm:hidden">
  <button
    onClick={() => setShowMobileFilters(!showMobileFilters)}
    className="bg-green-600 text-white px-3 py-1 rounded"
  >
    {showMobileFilters ? "Hide Filters" : "Show Filters"}
  </button>
</div>

{/* Filters section */}
<div
  className={`mb-6 bg-white p-4 rounded shadow 
    ${showMobileFilters ? "block" : "hidden"} 
    sm:flex sm:flex-col md:flex-row md:items-center gap-4 justify-between`}
>
  <div className="flex gap-2 items-center">
    <label className="font-medium">Min Price:</label>
    <input
      type="number"
      value={minPrice}
      onChange={(e) => {
        let val = e.target.value;
        if (val.length > 1 && val.startsWith("0")) {
          val = val.replace(/^0+/, "") || "0";
        }
        setMinPrice(val);
      }}
      className="border rounded px-2 py-1 w-24"
      min="0"
      max="2500"
    />
    <label className="font-medium">Max Price:</label>
    <input
      type="number"
      value={maxPrice}
      onChange={(e) => {
        let val = e.target.value;
        if (val.length > 1 && val.startsWith("0")) {
          val = val.replace(/^0+/, "") || "0";
        }
        setMaxPrice(val);
      }}
      className="border rounded px-2 py-1 w-24"
      min="0"
      max="2500"
    />
  </div>
  <div className="flex items-center gap-2">
    <label className="font-medium">Sort By:</label>
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="">Default</option>
      <option value="az">A to Z</option>
      <option value="za">Z to A</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
    <button
      onClick={resetFilters}
      className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
    >
      Reset Filters
    </button>
  </div>
</div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 transition transform bg-white rounded-lg shadow-lg hover:scale-105 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[220px] w-full object-cover rounded-md"
                />
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                  Sale
                </div>
              </div>
              <div className="p-4 text-center flex-grow">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <div className="flex items-center justify-center gap-1 mt-2 text-yellow-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span className="text-gray-700 ml-2">{product.reviews} reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-gray-500 line-through mr-2">{product.oldPrice}</span>
                  <span className="text-lg font-bold text-green-700">{product.price}</span>
                </div>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="mt-auto inline-block bg-green-700 text-white px-4 py-2 text-center rounded hover:bg-green-800"
              >
                View More Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default AllCategories;
