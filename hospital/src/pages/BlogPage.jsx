import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/hero/blog1.jpg";
import img2 from "../assets/hero/blog2.jpg";
import img3 from "../assets/hero/blog3.jpg";
import img4 from "../assets/hero/blog4.jpg";

// Dummy Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Healing Power of Herbal Medicine",
    date: "08 Mar",
    author: "Dr. Emily Green",
    excerpt: "Explore how nature’s best herbs can transform your health and well-being naturally[......]",
    img: img1,
    link: "/blog/herbal-medicine",
  },
  {
    id: 2,
    title: "Herbal Teas That Boost Immunity",
    date: "20 May",
    author: "Sophia Brown",
    excerpt: "A cup of herbal tea a day keeps the doctor away! Discover the best teas for immunity[......]",
    img: img2,
    link: "/blog/herbal-teas",
  },
  {
    id: 3,
    title: "5 Natural Skincare Remedies",
    date: "18 June",
    author: "Liam Carter",
    excerpt: "Say goodbye to chemicals! Try these natural skincare solutions for glowing skin[......]",
    img: img3,
    link: "/blog/organic-skincare",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100">

      {/* Header Section */}
      <div className="relative min-h-[280px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${img4})` }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-[700px]">
          <h1 className="mb-4 text-4xl font-bold">Latest Articles</h1>
          <p className="text-lg">Herbal Wellness Insights,</p>
          <p className="text-lg">Stay informed with expert tips and knowledge on herbal healing.</p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="py-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
              {/* Image with Badge */}
              <div className="relative overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-[200px] object-cover transform group-hover:scale-110 transition duration-500" />
                <div className="absolute top-3 left-3 bg-green-600 text-white text-center px-3 py-1 rounded-md font-bold text-sm">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between min-h-[200px]">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                {/* Read More Button */}
             <Link
  to={`/BlogDetailPage/${post.id}`}
  className="text-green-600 hover:text-green-800 font-semibold mt-4"
>
  Read More
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
