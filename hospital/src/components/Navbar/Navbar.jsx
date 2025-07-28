import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.jpg";
import profile_pic from "../../assets/profile_pic.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { ProductsData } from "../../pages/ProductDetail";

const Navbar = ({ handleOrderPopup, scrollToTopSelling }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("herbalUser");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    updateUser();
    window.addEventListener("storage", updateUser);
    const intervalId = setInterval(updateUser, 1000);

    return () => {
      window.removeEventListener("storage", updateUser);
      clearInterval(intervalId);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("herbalUser");
    setUser(null);
    navigate("/");
  };

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Our Products", link: "/AllCategories" },
    { id: 3, name: "About Us", link: "/AboutUs" },
    { id: 4, name: "Blog", link: "/BlogPage" },
    { id: 5, name: "Contact Us", link: "/ContactUs" },
  ];

  const handleSearch = () => {
    const found = ProductsData.find(
      (product) =>
        product.title.toLowerCase().trim() === searchTerm.toLowerCase().trim()
    );
    if (found) {
      navigate(`/product/${found.id}`);
      setSearchTerm("");
      setMobileSearchOpen(false);
    } else {
      alert("Product not found!");
    }
  };

  const handleDropdownClick = (itemName) => {
    if (itemName === "Best Selling") {
      navigate("/TopProducts");
      scrollToTopSelling();
    } else if (itemName === "Top Rated") {
      navigate("/Products");
    }
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50 w-full bg-white shadow-md dark:bg-gray-900 dark:text-white sticky top-0">
      {/* Top Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 mx-auto max-w-screen-xl">
          {/* Logo */}
          <div className="hidden sm:flex flex-1 items-center cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-center gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10" />
              <span className="hidden sm:inline">Herbal Hub</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="relative group w-[260px]">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 group-hover:text-primary cursor-pointer"
                onClick={handleSearch}
              />
            </div>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden sm:flex flex-1 justify-end items-center gap-4">
            <NavLink
              to="/cart"
              className="flex items-center gap-3 px-4 py-1 text-white rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              <span className="hidden group-hover:block">Cart</span>
              <FaShoppingCart className="text-xl drop-shadow-sm" />
            </NavLink>
            <DarkMode />
            {user ? (
              <div className="relative flex items-center gap-2 cursor-pointer group">
                <img className="w-8 rounded-full" src={profile_pic} alt="Profile" />
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                <div className="absolute right-0 hidden pt-3 top-full group-hover:block">
                  <div className="flex flex-col gap-4 p-4 bg-stone-100 rounded shadow-lg min-w-48 text-black">
                    <NavLink to="/my-profile">My Profile</NavLink>
                    <p onClick={handleLogout} className="cursor-pointer hover:text-black">Logout</p>
                  </div>
                </div>
              </div>
            ) : (
              <button onClick={() => navigate("/Signup")} className="px-6 py-2 bg-green-700 text-white rounded-full">
                Create Account
              </button>
            )}
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden flex items-center justify-between w-full">
            <div onClick={() => navigate("/")} className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
              <img src={Logo} alt="Logo" className="w-10" />
            </div>
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <IoMdSearch className="text-white text-3xl" />
            </button>
            <div className="flex items-center gap-2">
              <NavLink to="/cart" className="bg-orange-400 p-2 rounded-full text-white">
                <FaShoppingCart />
              </NavLink>
              {!user && (
                <button
                  onClick={() => navigate("/Signup")}
                  className="bg-green-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  Account
                </button>
              )}
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Search Input */}
          {mobileSearchOpen && (
            <div className="sm:hidden w-full px-4 mt-2 mb-2">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full transition-all duration-300 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
            </div>
          )}
        </div>
      </div>

      {/* Lower Navigation Menu */}
      <div className={`transition-all duration-300 ${menuOpen ? "block px-6 pb-4" : "hidden sm:block"}`}>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-700 dark:text-white pt-3 pb-4 justify-center sm:pt-2 sm:pb-2">
          {Menu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `inline-block px-2 py-1.5 ${
                    isActive
                      ? "border-b-2 border-green-600 text-green-600"
                      : "hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-1 py-1.5 cursor-pointer">
              <span className="hover:text-primary">Trending Products</span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 text-sm" />
            </div>
            <div className="absolute z-50 hidden group-hover:block bg-white p-2 rounded-md shadow-md text-sm text-black">
              <ul>
                {[{ id: 1, name: "Best Selling" }, { id: 2, name: "Top Rated" }].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className="w-full text-left p-2 rounded hover:bg-primary/20"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
