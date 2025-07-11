// src/components/ScrollToTop.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Adjust position based on whether we are on the home page
  const isHomePage = pathname === '/';

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: isHomePage ? '100px' : '40px', // Shift up on home page
            right: '40px',
            backgroundColor: isHomePage ? '#fff' : '#008000', // White on home page, Green on others
            color: isHomePage ? '#008000' : '#fff', // Green text on home page, White text on others
            border: 'none',
            borderRadius: '50%',
            padding: '10px 20px',
            fontSize: '25px',
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: add a shadow for better visibility
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}
