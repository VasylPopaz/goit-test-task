import { Puff } from 'react-loader-spinner';

export const Loader = ({ size = 80 }) => {
  return (
    <Puff
      visible={true}
      height={size}
      width={size}
      color="rgb(92, 54, 189)"
      ariaLabel="puff-loading"
      wrapperStyle={{ marginBlock: '10px', justifyContent: 'center' }}
    />
  );
};
