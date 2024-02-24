import { Puff } from 'react-loader-spinner';
//
import s from './Loader.module.css';

export const Loader = ({ size = 80 }) => {
  return (
    <div className={s.backdrop}>
      <Puff
        visible={true}
        height={size}
        width={size}
        color="rgb(92, 54, 189)"
        ariaLabel="puff-loading"
      />
    </div>
  );
};
