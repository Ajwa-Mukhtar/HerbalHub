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
    const handleScroll = () => setShowButton(window.scrollY > 300);

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

  const bottomValue = isHomePage
    ? isMobile
      ? '130px' // home + mobile
      : '110px' // home + desktop
    : isMobile
    ? '90px'    // inner + mobile
    : '80px';   // inner + desktop

  const rightValue = isMobile ? '16px' : '24px';

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: bottomValue,
            right: rightValue,
            backgroundColor: isHomePage ? '#ffffff' : '#008000',
            color: isHomePage ? '#008000' : '#ffffff',
            border: 'none',
            borderRadius: '50%',
            padding: isMobile ? '10px 14px' : '12px 18px',
            fontSize: isMobile ? '20px' : '24px',
            cursor: 'pointer',
            zIndex: 40,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
