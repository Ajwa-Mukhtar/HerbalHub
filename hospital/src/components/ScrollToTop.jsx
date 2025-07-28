import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = pathname === '/';

  // Adjusted spacing to stay above Chatbot
  const bottomValue = isHomePage
    ? isMobile
      ? '120px'  // mobile home screen
      : '100px'  // desktop home screen
    : isMobile
    ? '60px'     // other pages on mobile
    : '40px';    // other pages on desktop

  const rightValue = isMobile ? '16px' : '40px';

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: bottomValue,
            right: rightValue,
            backgroundColor: isHomePage ? '#fff' : '#008000',
            color: isHomePage ? '#008000' : '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: isMobile ? '8px 14px' : '10px 20px',
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