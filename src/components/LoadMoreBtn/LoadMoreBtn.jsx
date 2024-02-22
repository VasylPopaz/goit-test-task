import s from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
