import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { UsersList, LoadMoreBtn, GoBackLink, Filter, Loader } from 'components';

import { getUsers, increasePage, resetUsers } from '../../redux';
import { useUsers } from 'hooks';

import s from './Tweets.module.css';

const Tweets = () => {
  const { isLoading, filteredUsers, page, filter, error } = useUsers();
  const [isResetDone, setIsResetDone] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const showLoadMore = page < 5 && filteredUsers?.length;

  const fetchUsers = useCallback(() => {
    const config = {
      params: {
        page,
        limit: 3,
      },
    };
    dispatch(getUsers(config))
      .unwrap()
      .then()
      .catch(() =>
        toast.error('Sorry, something went wrong. Please try again.')
      );
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(resetUsers());
    setIsResetDone(true);
  }, [dispatch]);

  useEffect(() => {
    if (isResetDone) {
      fetchUsers();
    }
  }, [dispatch, fetchUsers, isResetDone]);

  const handleLoadMoreClick = () => {
    dispatch(increasePage());
  };

  return (
    <section className={s.tweets}>
      {isLoading && <Loader />}
      <div className={`container`}>
        {error ? (
          <h2 className={s.errorTitle}>
            Sorry, something went wrong. Please try again.
          </h2>
        ) : (
          <>
            <div className={s.wrapper}>
              <GoBackLink to={backLinkHref.current} />
              <Filter />
            </div>
            {!filteredUsers?.length && !isLoading ? (
              <h2 className={s.title}>
                No users with status "{filter}". Try&nbsp;choosing another
                filter value.
              </h2>
            ) : null}
            <UsersList />
            {showLoadMore ? (
              <LoadMoreBtn onClick={handleLoadMoreClick} />
            ) : null}
          </>
        )}
      </div>
    </section>
  );
};

export default Tweets;
