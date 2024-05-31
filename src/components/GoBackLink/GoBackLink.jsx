import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

import s from './GoBackLink.module.css';

export const GoBackLink = ({ to }) => {
  return (
    <div className={s.linkWrapper}>
      <Link className={s.link} to={to}>
        Go Back
      </Link>
      <div className={s.icon}>
        <FiArrowLeftCircle height={40} width={40} />
      </div>
    </div>
  );
};
