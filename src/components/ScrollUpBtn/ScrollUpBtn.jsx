import { IoArrowUpSharp } from 'react-icons/io5';
//
import s from './ScrollUpBtn.module.css';

export const ScrollUpBtn = ({ isVisible }) => {
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
