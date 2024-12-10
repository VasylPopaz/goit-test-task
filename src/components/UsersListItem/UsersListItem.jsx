import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { updateUser } from '../../redux';
import { getSeparatedNumber } from 'helpers';

import s from './UsersListItem.module.css';

export const UsersListItem = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  const handleFollowClick = user => {
    setCurrentUser(user);
    if (user.isFollowing) {
      user.isFollowing = false;
      user.followers -= 1;
    } else {
      user.isFollowing = true;
      user.followers += 1;
    }

    dispatch(updateUser(user))
      .unwrap()
      .then(() => {})
      .catch(() =>
        toast.error('Sorry, something went wrong. Please try again.')
      )
      .finally(() => setCurrentUser(null));
  };

  return (
    <li className={s.listItem}>
      <div className={s.avatarWrapper}>
        <img
          className={s.userAvatar}
          src={avatar}
          alt={user}
          width={65}
          height={65}
        />
      </div>
      <div className={s.descriptionWrapper}>
        <p className={s.descriptionText}>{getSeparatedNumber(tweets)} TWEETS</p>
        <p className={s.descriptionText}>
          {getSeparatedNumber(followers)} FOLLOWERS
        </p>
      </div>

      <button
        className={
          isFollowing ? `${s.followingBtn} ${s.followBtn}` : s.followBtn
        }
        type="button"
        disabled={currentUser?.id === id}
        onClick={() =>
          handleFollowClick({
            id,
            user,
            avatar,
            tweets,
            followers,
            isFollowing,
          })
        }
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        {currentUser?.id === id ? (
          <Hourglass
            visible={true}
            height="20"
            width="20"
            ariaLabel="hourglass-loading"
            wrapperClass={s.userLoader}
            colors={['rgb(87, 30, 201)', 'rgb(65, 15, 165)']}
          />
        ) : null}
      </button>
    </li>
  );
};
