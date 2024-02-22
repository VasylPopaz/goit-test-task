import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/operations';
import { UsersList } from 'components/UsersList/UsersList';

const Tweets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <section>
      <UsersList />
    </section>
  );
};

export default Tweets;
