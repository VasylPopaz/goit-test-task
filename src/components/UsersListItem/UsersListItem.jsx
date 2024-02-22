import { useDispatch } from 'react-redux';
//
import { getSeparatedNumber } from 'helpers';
import { updateUser } from '../../appRedux';
import { useUsers } from 'hooks';
//
import s from './UsersListItem.module.css';
import logoImg from '../../assets/images/logo.png';
import bgImg from '../../assets/images/qan-image.png';

export const UsersListItem = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  const { isLoading } = useUsers();

  const handleFollowClick = user => {
    if (user.isFollowing) {
      user.isFollowing = false;
      user.followers = user.followers - 1;
    } else {
      user.isFollowing = true;
      user.followers = user.followers + 1;
    }
    dispatch(updateUser(user));
  };

  return (
    <li className={s.listItem}>
      <img
        className={s.logoImg}
        src={logoImg}
        alt="Logo"
        width={76}
        height={22}
      />
      <img
        className={s.bgImg}
        src={bgImg}
        alt="GOIT"
        width={308}
        height={168}
      />
      <div className={s.lineWrapper}>
        {' '}
        <div className={s.avatarWrapper}>
          <img
            className={s.userAvatar}
            src={avatar}
            alt=""
            width={65}
            height={65}
          />
        </div>
      </div>

      <div className={s.descriptionWrapper}>
        <p className={s.descriptionText}>{tweets} TWEETS</p>
        <p className={s.descriptionText}>
          {getSeparatedNumber(followers)} FOLLOWERS
        </p>
      </div>
      <button
        className={
          isFollowing ? `${s.followingBtn} ${s.followBtn}` : s.followBtn
        }
        type="button"
        disabled={isLoading}
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
      </button>
    </li>
  );
};
