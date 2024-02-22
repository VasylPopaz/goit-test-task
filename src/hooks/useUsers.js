import { useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectUsers } from '../redux/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return { users, isLoading, error };
};
