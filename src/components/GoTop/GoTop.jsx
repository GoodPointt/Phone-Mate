import { useState, useEffect } from 'react';
import { ReactComponent as GoTopSvg } from '../../img/svg/go-top.svg';

export const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`Btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <GoTopSvg />
      <p class="text">Back to Top</p>
    </button>
  );
};
