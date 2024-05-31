import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import { IoArrowUpSharp } from 'react-icons/io5';

import s from './ScrollUpBtn.module.css';

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={isVisible ? `${s.scrollUpBtn} ${s.show}` : `${s.scrollUpBtn}`}
      type="button"
      onClick={handleClickBtn}
    >
      <IoArrowUpSharp className={s.scrollUpIcon} />
    </button>
  );
};
