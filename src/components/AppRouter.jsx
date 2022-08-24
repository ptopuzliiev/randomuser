import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { useSelector } from 'react-redux';
import MainLayout from '../layouts/Main';

const Auth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}

        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={
              <Auth>
                <route.component />
              </Auth>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
