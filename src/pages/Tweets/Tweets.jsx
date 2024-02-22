import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
//
import { UsersList, LoadMoreBtn, GoBackLink, Filter } from 'components';
import { getUsers, increasePage } from 'appRedux';
import { useUsers } from 'hooks';
//
import s from './Tweets.module.css';

const Tweets = () => {
  const { users, page } = useUsers();

  const dispatch = useDispatch();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const prevPageRef = useRef(page);

  const showLoadMore = page < 5 && users.length;

  useEffect(() => {
    if (users.length < 3) dispatch(getUsers({ params: { page: 1, limit: 3 } }));
  }, [dispatch, users.length]);

  useEffect(() => {
    if (prevPageRef.current !== page) {
      const config = {
        params: {
          page,
          limit: 3,
        },
      };
      dispatch(getUsers(config));
      prevPageRef.current = page;
    }
  }, [dispatch, page]);

  const handleLoadMoreClick = () => {
    dispatch(increasePage());
  };

  return (
    <section className={s.tweets}>
      <div className={s.wrapper}>
        <GoBackLink to={backLinkHref.current} />
        <Filter />
      </div>
      <UsersList />
      {showLoadMore ? <LoadMoreBtn onClick={handleLoadMoreClick} /> : null}
    </section>
  );
};

export default Tweets;
