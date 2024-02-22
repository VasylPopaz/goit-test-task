import { UsersListItem } from 'components';
import { useUsers } from 'hooks';
//
import s from './UsersList.module.css';

export const UsersList = () => {
  const { filteredUsers } = useUsers();

  return (
    <ul className={s.list}>
      {filteredUsers.map(user => (
        <UsersListItem key={user.id} {...user} />
      ))}
    </ul>
  );
};
