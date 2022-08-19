import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

const AppRouter = () => {
  const menuLinks = [
    { title: 'Users', path: '/users' },
    { title: 'User Info', path: '/user-info' },
    { title: 'Log out', path: '/logout' },
  ];
  const isAuth = useSelector((state) => state.rootReducer.auth.isAuth);
  const location = useLocation();
  const isLocation =
    location.pathname !== '/login' && location.pathname !== '/logout';

  return isAuth ? (
    <>
      {(() => {
        if (isAuth) {
          if (isLocation || location.pathname === '/login') {
            return <Header links={menuLinks} />;
          }
        }
      })()}
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
