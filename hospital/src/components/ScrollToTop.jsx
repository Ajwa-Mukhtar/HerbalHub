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
      setShowButton(window.scrollY > 300);
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

  const isHomePage = pathname === '/';
  const isMobile = window.innerWidth <= 480;

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: isMobile
              ? isHomePage
                ? '80px'
                : '20px'
              : isHomePage
              ? '100px'
              : '40px',
            right: isMobile ? '16px' : '40px',
            backgroundColor: isHomePage ? '#fff' : '#008000',
            color: isHomePage ? '#008000' : '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: isMobile ? '8px 12px' : '10px 20px',
            fontSize: isMobile ? '20px' : '25px',
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}
