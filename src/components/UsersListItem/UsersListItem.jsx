import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import { toast } from 'react-toastify';
//
import { updateUser } from '../../storeRedux';
import { getSeparatedNumber } from 'helpers';
//
import s from './UsersListItem.module.css';
//
import logoImg1x from '../../assets/images/logo.png';
import logoImg2x from '../../assets/images/logo@2x.png';
import logoImg1xWebp from '../../assets/images/logo.webp';
import logoImg2xWebp from '../../assets/images/logo@2x.webp';

import bgImg1x from '../../assets/images/qan-image.png';
import bgImg2x from '../../assets/images/qan-image@2x.png';
import bgImg1xWebp from '../../assets/images/qan-image.webp';
import bgImg2xWebp from '../../assets/images/qan-image@2x.webp';

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
      <picture>
        <source
          srcSet={`${logoImg1xWebp} 1x, ${logoImg2xWebp} 2x`}
          type="image/webp"
        />
        <source srcSet={`${logoImg1x} 1x, ${logoImg2x} 2x`} type="image/png" />
        <img
          className={s.logoImg}
          src={logoImg1x}
          alt="Logo"
          width={76}
          height={22}
        />
      </picture>
      <picture>
        <source
          srcSet={`${bgImg1xWebp} 1x, ${bgImg2xWebp} 2x`}
          type="image/webp"
        />
        <source srcSet={`${bgImg1x} 1x, ${bgImg2x} 2x`} type="image/png" />
        <img
          className={s.bgImg}
          src={bgImg1x}
          alt="GOIT"
          width={308}
          height={168}
        />
      </picture>
      <div className={s.lineWrapper}>
        {' '}
        <div className={s.avatarWrapper}>
          <img
            className={s.userAvatar}
            src={avatar}
            alt="User avatar"
            width={65}
            height={65}
          />
        </div>
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
