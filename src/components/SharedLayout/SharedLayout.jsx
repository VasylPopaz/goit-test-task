import { NavLink, Outlet } from 'react-router-dom';
//
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets">Tweets</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={s.container}>
        <Outlet />
      </main>{' '}
    </>
  );
};
