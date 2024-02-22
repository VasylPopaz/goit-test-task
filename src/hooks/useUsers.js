import { useSelector } from 'react-redux';
//
import {
  selectError,
  selectFilter,
  selectFilteredUsers,
  selectIsLoading,
  selectPage,
  selectUsers,
} from '../appRedux';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const filteredUsers = useSelector(selectFilteredUsers);
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return { users, filteredUsers, filter, page, isLoading, error };
};
