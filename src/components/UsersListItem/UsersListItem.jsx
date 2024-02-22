import { getSeparatedNumber } from 'helpers';

import s from './UsersListItem.module.css';
import logoImg from '../../assets/images/logo.png';
import bgImg from '../../assets/images/qan-image.png';

export const UsersListItem = ({
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  return (
    <li className={s.listItem}>
      <img
        className={s.logoImg}
        src={logoImg}
        alt="Logo"
        width={76}
        height={22}
      />
      <div className={s.bgImgWrapper}>
        <img
          className={s.bgImg}
          src={bgImg}
          alt="GOIT"
          width={308}
          height={168}
        />
      </div>
      <div className={s.lineWrapper}></div>
      <div className={s.avatarWrapper}>
        <img
          className={s.userAvatar}
          src={avatar}
          alt=""
          width={70}
          height={70}
        />
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
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};
