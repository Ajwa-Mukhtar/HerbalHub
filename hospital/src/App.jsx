import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/ScrolltoTop";

import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllCategories from "./pages/AllCategories";
import Consultation from "./components/Consultation/Consultation";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import TopProducts from "./components/TopProducts/TopProducts";
import Products from "./components/Products/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CertificationPage from "./pages/CertificationPage";
import ReturnExchangePolicy from './pages/ReturnExchangePolicy';
import CheckoutPage from "./pages/CheckoutPage"; // agar tumhara file yehi path par hai

import { CartProvider } from "./context/CartContext"; // ✅ CartProvider imported


import MyProfile from "./pages/MyProfile";
function App() {
  return (
    <CartProvider> {/* ✅ Wrap the entire app in CartProvider */}
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AllCategories" element={<AllCategories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/TopProducts" element={<TopProducts />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/return-policy" element={<ReturnExchangePolicy />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Consultation" element={<Consultation />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </Router>
    </CartProvider>
  );
}

export default App;
