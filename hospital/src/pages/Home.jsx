import React from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import Popup from "../components/Popup/Popup";
import Consultation from "../components/Consultation/Consultation";
import Chatbot from "../components/Chatbot/Chat";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative">
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Consultation />
      <Testimonials />
      {/* ✅ Chatbot is inside component tree but visually "on top" due to fixed position */}
      <Chatbot />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Home;