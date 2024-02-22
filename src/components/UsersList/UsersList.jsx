import { UsersListItem } from 'components';
import { useUsers } from 'hooks/useUsers';
import s from './UsersList.module.css';
export const UsersList = () => {
  const { users } = useUsers();
  return (
    <ul className={s.list}>
      {users.map(user => (
        <UsersListItem key={user.id} {...user} />
      ))}
    </ul>
  );
};
