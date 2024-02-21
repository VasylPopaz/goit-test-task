import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </header>
      <main>
        <Outlet />
      </main>{' '}
    </>
  );
};
