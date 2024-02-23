import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
//
import { Loader } from 'components';
//
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={`${s.container} ${s.header}`}>
        <nav>
          <ul className={s.list}>
            <li>
              <NavLink className={s.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={s.navLink} to="/tweets">
                Tweets
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={s.container}>
        <Suspense fallback={<Loader />}>
          {' '}
          <Outlet />
        </Suspense>
      </main>{' '}
    </>
  );
};
